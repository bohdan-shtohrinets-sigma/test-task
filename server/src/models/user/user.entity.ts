import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  Entity,
} from 'typeorm';

@Entity({ name: 'users' })
export abstract class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  city: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  address: string;

  @Column({ type: 'integer', nullable: false })
  zip: number;

  @Column({ type: 'bigint', nullable: false })
  creditCardCode: number;

  @Column({ type: 'integer', nullable: false })
  cvv: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
