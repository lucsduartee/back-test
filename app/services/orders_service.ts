import { HttpContext } from "@adonisjs/core/http";
import Order from "#models/order";

export default class OrdersService {
  async all() {
    const orders = await Order.all();

    return orders;
  }

  async create(ctx: HttpContext) {
    const body = ctx.request.body();
    const order = await Order.create({
      value: body.value,
    });

    return order;
  }
}
