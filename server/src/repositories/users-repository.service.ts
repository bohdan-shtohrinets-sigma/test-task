import { UserEntity } from '../models/user/user.entity';
import { UserParsedCsv } from '../models/user/user.types';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  createUser = (user: UserParsedCsv): Promise<UserEntity> => {
    const userEntity = UserEntity.create();
    userEntity.id = user.id;
    userEntity.username = user.username;
    userEntity.firstName = user.firstName;
    userEntity.lastName = user.lastName;
    userEntity.city = user.city;
    userEntity.address = user.address;
    userEntity.zip = Number(user.zip);
    userEntity.creditCardCode = Number(user.creditCardCode);
    userEntity.cvv = Number(user.cvv);
    userEntity.name = user.name;
    userEntity.date = new Date(user.date);
    return this.save(userEntity);
  };

  getAllUsers = (): Promise<UserEntity[]> => {
    return this.find();
  };
}
