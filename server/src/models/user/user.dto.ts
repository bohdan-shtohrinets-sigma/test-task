import { UserEntity } from './user.entity';

export class UserDto {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  zip: number;
  creditCardCode: number;
  cvv: number;
  name: string;
  date: Date;

  buildFromEntity = (user: UserEntity) => {
    const dto = new UserDto();
    dto.id = user.id;
    dto.username = user.username;
    dto.firstName = user.firstName;
    dto.lastName = user.lastName;
    dto.city = user.city;
    dto.address = user.address;
    dto.zip = user.zip;
    dto.creditCardCode = user.creditCardCode;
    dto.cvv = user.cvv;
    dto.name = user.name;
    dto.date = user.date;

    return dto;
  };
}
