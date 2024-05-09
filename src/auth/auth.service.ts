import { User } from '@schema';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ValidateUserDto } from './dto/validate-user.dto';
import bcrypt from 'bcrypt';
import { UsersService } from '@users/users.service';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validate({ username, password }: ValidateUserDto) {
    const user = await this.usersService.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { _id, username } = user;
      return this.jwtService.signAsync({ _id, username });
    } 
    return null;
  }
}
