import { EntityRepository, Repository } from 'typeorm';
import { Institute } from '../entities/user.entity';

@EntityRepository(Institute)
export class InstituteRepository extends Repository<Institute> {}