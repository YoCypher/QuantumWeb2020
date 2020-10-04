import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CadUsuario from '../views/CadUsuario.vue';
import CadFuncionario from '../views/CadFuncionario.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro/usuario',
    name: 'CadUsuario',
    component: CadUsuario
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cadastro/funcionario',
    name: 'CadFuncionario',
    component: CadFuncionario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
