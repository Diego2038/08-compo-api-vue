import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter', 
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios', 
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue')
  },
  {
    path: '/searchpokemon',
    name: 'search pokemon', 
    component: () => import(/* webpackChunkName: "searchPokemon" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/pokemonid/:id',
    name: 'pokemon-id', 
    component: () => import(/* webpackChunkName: "pokemonId" */ '../views/Pokemon.vue')
  },
  {
    path: '/todo',
    name: 'todo', 
    component: () => import(/* webpackChunkName: "todoVuex" */ '../views/TodoVuex.vue')
  },
  {
    path: '/slots',
    name: 'slots', 
    component: () => import(/* webpackChunkName: "slots" */ '../views/CustomSlots.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
