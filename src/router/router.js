import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: home
    },
    {
      path: '/search',
      component: () => import('@/search/search.vue')
      // children: [
      //   {
      //     path: '/history',
      //     component: () => import('@/search/element/history.vue')
      //   }
      // ]
    },
    { path: '/classfiy', component: () => import('../classify/classify.vue') },
    { path: '/merchant', component: () => import('../merchant/merchant.vue') },
    { path: '/collect', component: () => import('../collect/collect.vue') },
    { path: '/submit', component: () => import('../submit/submit.vue') },
    { path: '/particulars', component: () => import('../erweima/erweima.vue') },
    {
      path: '/addressSearch',
      component: () => import('../addressSearch/addressSearch.vue')
    },
    { path: '/status', component: () => import('../status/status.vue') },
    {
      path: '/order',
      component: () => import('../myOrder/order.vue'),
      redirect: '/allorderlist',
      children: [
        {
          path: '/allorderlist',
          component: () => import('../myOrder/element/allorderList.vue')
        },
        {
          path: '/stayuse',
          component: () => import('../myOrder/element/stayuse.vue')
        },
        {
          path: '/staybuy',
          component: () => import('../myOrder/element/staybuy.vue')
        },
        {
          path: '/done',
          component: () => import('../myOrder/element/done.vue')
        }
      ]
    },
    { path: '/erweima', component: () => import('../erweima/erweima.vue') },
    { path: '/user', component: () => import('../user/user.vue') },
    {
      path: '/searchresult',
      component: () => import('../searchrult/searchresult.vue')
    }
  ]
})
