import { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";

export default class OrdersService {
  async create(ctx: HttpContext) {
    const user = await User.create({})
    console.log('user', user)
    return user
  }
}
