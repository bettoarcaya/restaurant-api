import { Comments } from './entities/comments.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository, getRepository } from 'typeorm';
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
    return this.restaurantRepository.findOne(id, {
      relations: ['photos', 'comments'],
    });
  }

  async createComment(comment) {
    const restaurant = await this.restaurantRepository.findOne(
      comment.restaurantId,
      {
        relations: ['comments'],
      },
    );

    const newComment = new Comments();
    newComment.userName = comment.userName;
    newComment.userText = comment.userText;
    newComment.restaurant = restaurant;

    const commentRepository = getRepository(Comments);

    return await commentRepository.save(newComment);
  }
}
