import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import PageNotFound from '../views/404.vue'
import test from '../views/monCV.vue'
import SpecialHTMLComponent from '../../public/monCV.html'
import filePDF from '../../public/Cahier_des_charges_La_socketterie.pdf'

const routes = [
  {
    path: '/',
    name: 'Home',
    hash: 'container-quiSuisJe',
    hash: 'container_creaction',
    hash: 'container_contact',
    component: home
  },  
  {
    path: '/public/monCV.html',
    name: 'PageCV',
    component: SpecialHTMLComponent
  },
  {
    path: '/public/Cahier_des_charges_La_socketterie.pdf',
    name: 'PagePDF',
    component: filePDF
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(), //process.env.BASE_URL
  routes
})

export default router
