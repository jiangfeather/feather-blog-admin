import Vue from 'vue'
import Router from 'vue-router'

import login from 'components/login/login'
import admin from 'components/admin/admin'
import write from 'components/write/write'
import article from 'components/article/article'
import banner from 'components/banner/banner'
import aboutme from 'components/aboutme/aboutme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: 'write',
          component: write
        },
        {
          path: 'article',
          component: article
        },
        {
          path: 'banner',
          component: banner
        },
        {
          path: 'aboutme',
          component: aboutme
        }
      ]
    }
  ]
})
