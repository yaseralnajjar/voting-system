import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage/HomePage.vue'
import Login from './components/Login/Login.vue'
import Candidates from './components/Candidates/Candidates.vue'
import Elections from './components/Elections/Elections.vue'
import ConfirmData from './components/ConfirmData/ConfirmData.vue'
import VoteSubmitted from './components/VoteSubmitted/VoteSubmitted.vue'
import Results from './components/Results/Results.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/confirm-data',
      name: 'ConfirmData',
      component: ConfirmData
    },
    {
      path: '/vote-submitted',
      name: 'VoteSubmitted',
      component: VoteSubmitted
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
    
  ]
})
