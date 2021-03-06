import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Blogs from '../views/Blogs.vue'
import Demo from '../views/Demo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect:{name : "Blogs"}
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },{
  path: '/Login',
  name: 'Login',
  component: Login
  },{
    path: '/blog/add',
    name: 'BlogEdit',
    meta: {
      requireAuth: true
    },
    component: BlogEdit
  }, {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  },{
    path: '/blog/:blogid',
    name: 'BlogDetail',
    component: BlogDetail
  } ,{
    path: '/blog/:blogid/edit',
    name: 'BlogEdit', 
    component: BlogEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
