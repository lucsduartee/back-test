import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http';
import OrdersService from '#services/orders_service';

@inject()
export default class OrdersController {
  constructor(
    private ordersService: OrdersService
  ) {}

  index() {
    const order = this.ordersService.all();

    return order;
  }

  create(ctx: HttpContext) {
    const order = this.ordersService.create(ctx);

    return order;
  }
}
