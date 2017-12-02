import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

/*import Recommend from '../view/recommend/recommend.vue'
import List from '../view/Update/List.vue'
import All from '../view/Update/allcomic.vue'
import Japan from '../view/Update/japanComic.vue';
import China from  '../view/Update/chinaComic.vue';
import Type from  '../view/type/type.vue';
import Rank from  '../view/rank/rank.vue';*/
import Moods from '../view/rank/moods.vue';
import Tease from '../view/rank/tease.vue';
import Take from '../view/rank/take.vue';
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../view/recommend/recommend.vue'], resolve)
    },
    {
      path: '/index',
      component:resolve => require(['../view/recommend/recommend.vue'], resolve)
    },
    {
      path:'/list',
      component:resolve => require(['../view/Update/List.vue'], resolve),
      children:[{
        path:'all',
        component: resolve => require(['../view/Update/allcomic.vue'], resolve),
      },
      {
        path:'japan',
        component:resolve => require(['../view/Update/JapanComic.vue'], resolve)
      },
      {
        path:'china',
        component:resolve => require(['../view/Update/ChinaComic.vue'], resolve),
      },
      {
        path:'',
        component:resolve => require(['../view/Update/allcomic.vue'], resolve)
      }
      ]
    },
    {
      path:'/type',
      component:resolve => require(['../view/type/type.vue'], resolve)
    },
    {
      path:'/rank',
      component:resolve => require(['../view/rank/rank.vue'], resolve),
      children:[{
        path:'moods',
        component:Moods,
      },
      {
        path:'tease',
        component:Tease
      },
      {
        path:'take',
        component:Take
      },
      {
        path:'',
        component:resolve => require(['../view/rank/moods.vue'], resolve)
      }
      ]
    },
    {
      path:'/special',
      component:resolve => require(['../view/special/special.vue'], resolve)
    },
    {
      path:'/search',
      component:resolve => require(['../view/search/search.vue'], resolve)
    }
  ]
})


