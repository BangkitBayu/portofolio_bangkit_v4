import { createMemoryHistory, createRouter} from 'vue-router'
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home - Bangkit Bayu',
      description: 'A home page',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
    meta: {
      title: '404 | Page Not Found - Bangkit Bayu',
      description: '404 | Page not found'
    }
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to) => {
  // const meta = to.meta as RouteMeta;
  const title = to.meta.title as string
  const description = to.meta.description as string

  document.title = title || 'Page - Bangkit Bayu'

  const descriptionElement = document.querySelector('meta[name="description"]')

  descriptionElement?.setAttribute('content', description || `A page`)
})

export default router
