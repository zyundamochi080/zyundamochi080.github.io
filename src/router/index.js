import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import about from '@/components/about'
import application from '@/components/application'
import contact from '@/components/contact'
import community from '@/components/community'
import job from '@/components/job'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/application',
      name: 'application',
      component: application
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/job',
      name: 'job',
      component: job
    }
  ]
})
