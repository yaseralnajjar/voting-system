import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage/HomePage.vue'
import Login from './components/Login/Login.vue'
import Candidates from './components/Candidates/Candidates.vue'
import Elections from './components/Elections/Elections.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/candidates',
      name: 'Candidates',
      component: Candidates
    },
    {
      path: '/elections',
      name: 'Elections',
      component: Elections
    }
    
  ]
})
