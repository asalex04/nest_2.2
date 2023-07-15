import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userRepository: Model<User>,
              @InjectConnection() private connection: Connection
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await new this.userRepository(dto)
    user.save()
    return user
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.find().exec()
    return users
  }
  
  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ email })
  }
}
