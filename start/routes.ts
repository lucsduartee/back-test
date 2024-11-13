/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const OrdersController = () => import('#controllers/orders_controller')

router.group(() => {
  router.get('/', () => ({ hello: 'world' }))
  router.post('/orders', [OrdersController, 'create'])
  router.put('/orders', [OrdersController, 'update'])
}).prefix('/api')
