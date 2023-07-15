import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';
import { AuthService } from './auth.service';


@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Регистрация пользователя' })
  @ApiResponse({ status: 201 })
  @Post('/signup')
  async registration(
    @Body() userDto: CreateUserDto
  ) {
    const refreshToken = await this.authService.registration(userDto)
    return refreshToken
  }

  @ApiOperation({ summary: 'Логин' })
  @ApiResponse({ status: 200 })
  // @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async login(
    @Body() userDto: CreateUserDto
  ) {
    return await this.authService.login(userDto)
  }
}
