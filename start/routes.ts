/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const CategoriesController = () => import('#controllers/categories_controller')
const OrdersController = () => import('#controllers/orders_controller')

router.group(() => {
  router.get('/', () => ({ hello: 'world' }))
  router.get('/categories', [CategoriesController, 'index'])
  router.get('/categories/:name/products', [CategoriesController, 'index'])
  router.get('/orders', [OrdersController, 'index'])
  router.post('/orders', [OrdersController, 'create'])
}).prefix('/api')
