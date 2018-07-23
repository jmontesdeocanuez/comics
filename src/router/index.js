import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Comics from '@/components/Comics'
import comicDetail from '@/components/comicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comics',
      name: 'Comics',
      component: Comics
    },
    {
      path: '/comics/:id',
      name: 'comicDetail',
      component: comicDetail
    }
  ]
})
