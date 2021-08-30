import VueRouter from 'vue-router'
import Vue from 'vue'

const home = () =>import("./vue/home.vue")
const about = () =>import("./vue/about.vue")
const news = () =>import("./vue/news.vue")
const mes = () =>import("./vue/mes.vue")

Vue.use(VueRouter)

const routes = [
    {path:"",redirect:"/home"},
    {path:"/home",component:home,
    children:[{path:"",component:news},
              {path:"news",component:news},
              {path:"mes",component:mes}]},
    {path:"/about",component:about}
];

const router = new VueRouter({
    routes,
    mode: 'history',
  })


export default router