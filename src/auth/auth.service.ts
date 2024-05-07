import { User } from '@/schema';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ValidateUserDto } from './dto/validate-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validate({ username, password }: ValidateUserDto) {
    const user = await this.userModel.findOne({ username: username }).exec();
    if (user && password === user.password) {
      const { password, ...payload } = user;
      return this.jwtService.signAsync(payload);
    } else {
      return null;
    }
  }
}
