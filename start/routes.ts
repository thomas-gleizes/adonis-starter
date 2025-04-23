/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const AnimesController = () => import('#controllers/animes_controller')

router.get('/animes', [AnimesController, 'index'])

router
  .group(() => {
    router.get('/animes', [AnimesController, 'apiIndex'])
    router.get('/animes/:id', [AnimesController, 'show'])
    router.post('/animes', [AnimesController, 'create'])
  })
  .prefix('/api')
