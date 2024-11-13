import { inject } from '@adonisjs/core'
import CategoriesService from '#services/categories_service'

@inject()
export default class CategoriesController {
  constructor(
    private categoryService: CategoriesService
  ) {}

  index() {
    return this.categoryService.all()
  }

  products() {
    return this.categoryService.getProducts()
  }
}
