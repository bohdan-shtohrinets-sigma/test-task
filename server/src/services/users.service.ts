import { Injectable } from '@nestjs/common';
import * as csvUtils from '../utils/csv.utils';
import { UsersRepository } from '../repositories/users-repository.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  uploadCSV = async (file: Express.Multer.File) => {
    const test = await csvUtils.parseCsvFile(file.path);
    if (!test.length) {
      return new Error('CSV parsing error');
    }

    const parsedUser = csvUtils.convertParsedDataToObj(test);

    await this.usersRepository.createUser(parsedUser);
  };

  getAllUsers = (): Promise<UserEntity[]> => {
    return this.usersRepository.getAllUsers();
  };

  getHello = (): string => {
    return 'Hello World!';
  };
}
