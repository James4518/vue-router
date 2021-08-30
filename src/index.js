import VueRouter from 'vue-router'
import Vue from 'vue'

const home = () =>import("./vue/home.vue")
const about = () =>import("./vue/about.vue")
const news = () =>import("./vue/news.vue")
const mes = () =>import("./vue/mes.vue")
const user = () =>import("./vue/user.vue")
const profile = () =>import("./vue/profile.vue")

Vue.use(VueRouter)

const routes = [
    {path:"",redirect:"/home"},
    {path:"/home",meta:{title:'首页'},component:home,
    children:[{path:"",component:news},
              {path:"news",component:news},
              {path:"mes",component:mes}]},
    {path:"/about",meta:{title:'关于'},component:about},
    {path:"/user/:id",meta:{title:'用户'},component:user},
    {path:"/profile",meta:{title:'档案'},component:profile}
];

const router = new VueRouter({
    routes,
    mode: 'history',
  })

  router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
  })

export default router