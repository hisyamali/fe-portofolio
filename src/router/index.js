import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SkillSection from '@/components/SkillSection.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import HireMeSection from '@/components/HireMeSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/skills',
      name: 'skills',
      component: SkillSection
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceSection
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectSection
    },
    {
      path: '/hire-me',
      name: 'hire-me',
      component: HireMeSection
    }
  ]
})

export default router
