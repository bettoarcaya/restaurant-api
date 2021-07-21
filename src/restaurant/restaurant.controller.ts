import { CreateCommentDto } from './dtos/create-comment.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get('/')
  getAll(): any {
    return this.restaurantService.getAll();
  }

  @Get('/:id')
  getOne(@Param() params) {
    return this.restaurantService.getOne(params.id);
  }

  @Post('/comment')
  loadComment(@Body() createCommentDto: CreateCommentDto) {
    return this.restaurantService.createComment(createCommentDto);
  }
}
