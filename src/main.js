 import Vue from 'vue'
 import Layout from './components/layout'
 import VueRouter from 'vue-router'
 import IndexPage from './pages/index'
 import VueResource from 'vue-resource'
 import DetailPage from './pages/detail'
 import OrderListPage from './pages/orderList'
 import DetailanaPage from './pages/detail/analysis'
 import DetailcouPage from './pages/detail/count'
 import DetailforPage from './pages/detail/forecast'
 import DetailpubPage from './pages/detail/publish'

 Vue.use(VueRouter)
 Vue.use(VueResource)
 let router = new VueRouter({
   mode: 'history',
   routes: [
     {
       path: '/',
       component: IndexPage
     },
     {
       path: '/orderList',
       component: OrderListPage
     },
     {
       path: '/detail',
       component: DetailPage,
       redirect: '/detail/analysis',
       children: [
         {
           path: 'analysis',
           component: DetailanaPage
         },
         {
           path: 'count',
           component: DetailcouPage
         },
         {
           path: 'forecast',
           component: DetailforPage
         },
         {
           path: 'publish',
           component: DetailpubPage
         }
       ]
     }
   ]
 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
