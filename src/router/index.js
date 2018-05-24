import Vue from 'vue'
import Router from 'vue-router'
import {
  BaseLayout,
  MainHeader
} from '@/components/layout/'
import {
  HomePage
} from '@/components/pages/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '*',
      component: BaseLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          components: {
            header: MainHeader,
            main: HomePage,
          },
        },
      ],
    },
  ],
})
