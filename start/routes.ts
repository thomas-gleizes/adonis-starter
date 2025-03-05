import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

const HomeController = () => import('#controllers/home_controller')
const EventsController = () => import('#controllers/events_controller')

router.get('/', [HomeController, 'index'])
router.get('/events', [EventsController, 'index'])
router.post('/events', [EventsController, 'store'])
router.get('/events/:id', [EventsController, 'show'])

router.get('/docs.json', () => AutoSwagger.default.docs(router.toJSON(), swagger))
router.get('/docs', () => AutoSwagger.default.ui('/docs.json', swagger))
