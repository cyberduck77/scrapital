import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findById(id: string) {
    return this.userModel.findById(id).exec();
  }

  async findByUsername(username: string) {
    return this.userModel.findOne({ username: username }).exec();
  }

  async delete(id: string) {
    return await this.userModel.deleteMany({ _id: id });
  }
}
