import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../repositories/users-repository.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    TypeOrmModule.forFeature([UsersRepository]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
