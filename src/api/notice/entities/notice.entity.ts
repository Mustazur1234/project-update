import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppBaseEntity } from '../../../common/database/entities/app-base.entity';
import { Institute } from '../../users/entities/user.entity';

@Entity({
  name: 'notice',
})
export class Notice extends AppBaseEntity {
  @PrimaryGeneratedColumn()
  notice_id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => Institute, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'notice_id' })
  institute: Institute;
}