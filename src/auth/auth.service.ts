import { User } from '@schema';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ValidateUserDto } from './dto/validate-user.dto';
import bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validate({ username, password }: ValidateUserDto) {
    const user = await this.userModel.findOne({ username: username }).exec();
    if (user && (await bcrypt.compare(password, user.password))) {
      const { _id, username } = user;
      return this.jwtService.signAsync({ _id, username });
    } 
    return null;
  }
}
