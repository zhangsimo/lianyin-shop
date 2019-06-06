import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: () => import('@/login/login.vue'),
      redirect: '/phonelogin',
      children: [
        {
          path: '/phonelogin',
          component: () => import('@/login/element/phonelogin.vue')
        },
        {
          path: '/passwordlogin',
          component: () => import('@/login/element/passwordlogin.vue')
        }
      ]
    },
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
    { path: '/classfiy', component: () => import('@/classify/classify.vue') },
    { path: '/merchant', component: () => import('@/merchant/merchant.vue') },
    { path: '/collect', component: () => import('@/collect/collect.vue') },
    { path: '/submit', component: () => import('@/submit/submit.vue') },
    { path: '/particulars', component: () => import('@/erweima/erweima.vue') },
    {
      path: '/addressSearch',
      component: () => import('@/addressSearch/addressSearch.vue')
    },
    { path: '/status', component: () => import('@/status/status.vue') },
    {
      path: '/order',
      component: () => import('@/myOrder/order.vue'),
      redirect: '/allorderlist',
      children: [
        {
          path: '/allorderlist',
          component: () => import('@/myOrder/element/allorderList.vue')
        },
        {
          path: '/stayuse',
          component: () => import('@/myOrder/element/stayuse.vue')
        },
        {
          path: '/staybuy',
          component: () => import('@/myOrder/element/staybuy.vue')
        },
        {
          path: '/done',
          component: () => import('@/myOrder/element/done.vue')
        }
      ]
    },
    { path: '/erweima', component: () => import('@/erweima/erweima.vue') },
    { path: '/user', component: () => import('@/user/user.vue') },
    {
      path: '/searchresult',
      component: () => import('@/searchrult/searchresult.vue')
    },
    { path: '/register1', component: () => import('@/login/register1.vue') },
    { path: '/register2', component: () => import('@/login/register2.vue') }
  ]
})

// router.beforeEach((to, from, next) => {
//   // 1. 判断是不是登录页面
//   // 是登录页面
//   console.log(to)

//   if (to.redirectedFrom === '/login') {
//     next()
//   } else {
//     // 不是登录页面
//     // 2. 判断 是否登录过
//     let token = sessionStorage.getItem('lianyin_token')
//     token ? next() : next('/login')
//   }
// })

// 导出
export default router
