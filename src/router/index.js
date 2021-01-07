import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CryptoList from '../views/Cryptolist.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Home.vue'
import Trade from '../views/Trade.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import RecoverPassword from '../views/RecoverPassword.vue'
import Test from '../views/Test.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword
  },
  {
    path: "/recover-password",
    name: "RecoverPassword",
    component: RecoverPassword
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/cryptolist",
    name: "CryptoList",
    component: CryptoList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
