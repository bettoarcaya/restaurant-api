import { Restaurant } from './restaurant.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userText: string;

  @Column()
  date: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.comments)
  restaurant: Restaurant;
}
