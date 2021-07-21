import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get('/')
  getAll(): any {
    return this.restaurantService.getAll();
  }
}
