import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcryptjs"
import { ERROR_MESSAGES } from 'src/constants';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtService: JwtService
  ) {}

  async registration(dto: CreateUserDto): Promise<string> {
    const candidate = await this.usersService.getUserByEmail(dto.email)
    if (candidate) {
      throw new BadRequestException(ERROR_MESSAGES.EMAIL_IS_BUSY)
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const newUser = await this.usersService.createUser({ ...dto, password: hashPassword })
    const token = this.generateToken(newUser)
    return token
  }

  async login({email, password}: CreateUserDto): Promise<User>{
    const user = await this.usersService.getUserByEmail(email)
    const passwordEquals = await bcrypt.compare(password, user.password)
    if (user && passwordEquals) {
      return user
    }
    throw new UnauthorizedException(ERROR_MESSAGES.NO_USER_EXISTS)
  }

    async validateUser(email, password) {
    const user = await this.usersService.getUserByEmail(email)
    const passwordEquals = await bcrypt.compare(password, user.password)
    if (user && passwordEquals) {
      return user
    }
    throw new UnauthorizedException(ERROR_MESSAGES.NO_USER_EXISTS)
  }

  private async generateToken(user) {
    const { email, firstName } = user
    const payload = { id: user._id, email, firstName };
    return this.jwtService.sign(payload)
  }
}
