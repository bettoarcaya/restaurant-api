import { Comments } from './entities/comments.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}
  getAll(): any {
    return this.restaurantRepository.find();
  }

  getOne(id): any {
    return this.restaurantRepository.findOne(id);
  }

  async createComment(comment) {
    const restaurant = await this.restaurantRepository.findOne(
      comment.restaurantId,
    );
    //const date =
    const newComment = new Comments();
    newComment.userName = comment.userName;
    newComment.userText = comment.userText;
    newComment.restaurant = restaurant;
    newComment.date = new Date().toLocaleDateString('en-US');

    const commentRepository = getRepository(Comments);

    return await commentRepository.save(newComment);
  }
}
