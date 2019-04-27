import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import about from '@/components/about'
import note from '@/components/note'
import application from '@/components/application'

Vue.use(Router)

export default new Router({
  node: 'history',
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
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/application',
      name: 'application',
      component: application
    }
  ]
})
