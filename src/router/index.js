import { createRouter, createWebHistory } from 'vue-router';
import DetailView from '../views/DetailView.vue';
import Home from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
