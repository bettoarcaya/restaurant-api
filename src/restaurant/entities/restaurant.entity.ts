import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comments } from './comments.entity';
import { Photos } from './photos.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logo: string;

  @OneToMany(() => Photos, (photo) => photo.restaurant)
  photos: Photos[];

  @OneToMany(() => Comments, (comment) => comment.restaurant)
  comments: Comments[];
}
