import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repo';
import { hashData } from '@utils';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await hashData(createUserDto.password);
    return await this.usersRepository.create(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findByUsername(username: string) {
    return await this.usersRepository.findByUsername(username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
