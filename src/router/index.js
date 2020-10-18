import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'
import Users from '../views/Users.vue'
import User from '../components/users/User.vue'
import UserCreate from '../components/users/UserCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      autenticado:true,
    }
  },
  {
    path: '/usuarios',
    name: 'Users',
    component: Users,
    meta:{
      autenticado:true,
    }
  },
  {
    path:'/usuarios/:id',
    name:'User',
    component:User,
    props:true,
    meta:{
      autenticado:true,
    }
  },
  {
    path:"/usuario",
    name:'addUser',
    component:UserCreate,
    meta:{
      autenticado:true,
    }
  },
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '*',
    name: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,fron,next)=>{
  let user = firebase.auth().currentUser;
  let private_rute = to.matched.some((record)=>record.meta.autenticado)

  if(private_rute && !user){
    next('/login')
  }else if(!private_rute && user){
    next('/Home')
  }else{
    next()
  }
})

export default router
