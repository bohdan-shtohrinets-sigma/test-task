import {
  Controller,
  Post,
  Get,
  HttpCode,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserDto } from '../models/user/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('upload-csv')
  @HttpCode(201)
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsv(@UploadedFile() file: Express.Multer.File): Promise<void> {
    await this.usersService.uploadCSV(file);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this.usersService.getAllUsers();
    return users.map((user) => {
      const userDto = new UserDto();
      return userDto.buildFromEntity(user);
    });
  }
}
