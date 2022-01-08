import { createRouter, createWebHistory } from 'vue-router'
import Simpsons from './pages/Simpsons'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Chat from './pages/Chat'

const routes = [
  {path: "/", component: Home },
  {path: "/simpsons", component: Simpsons },
  {path: "/calendar", component: Calendar },
  {path: "/calculator", component: Calculator },
  {path: "/chat", component: Chat },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;