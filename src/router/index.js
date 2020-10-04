import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CadUsuario from '../views/CadUsuario.vue';
import CadFuncionario from '../views/CadFuncionario.vue';
import CadPaciente from '../views/CadPaciente.vue';
import CadConsulta from '../views/CadConsulta.vue';
import CadDependente from '../views/CadDependente.vue';
import CadProcedimento from '../views/CadProcedimento.vue';

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
  },
  {
    path: '/cadastro/paciente',
    name: 'CadPaciente',
    component: CadPaciente
  },
  {
    path: '/cadastro/consulta',
    name: 'CadConsulta',
    component: CadConsulta
  },
  {
    path: '/cadastro/dependente',
    name: 'CadDependente',
    component: CadDependente
  },
  {
    path: '/cadastro/procedimento',
    name: 'CadProcedimento',
    component: CadProcedimento
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
