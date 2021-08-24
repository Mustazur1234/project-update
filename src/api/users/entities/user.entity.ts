import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AppBaseEntity } from 'src/common/database/entities/app-base.entity';

@Entity({
  name: 'institute',
})
export class Institute extends AppBaseEntity {
  @PrimaryGeneratedColumn()
  institute_id: number;

  @Column({ unique: true, nullable: false, type: 'text' })
  email: string;

  @Column({ unique: true, nullable: false, type: 'text' })
  password: string;
}