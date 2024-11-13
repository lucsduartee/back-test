import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http';
import OrdersService from '#services/orders_service';

@inject()
export default class OrdersController {
  constructor(
    private ordersService: OrdersService
  ) {}

  create(ctx: HttpContext) {
    console.log('ctx', ctx.request.body())
    const order = this.ordersService.create(ctx);

    return order;
  }

  update() {}
}
