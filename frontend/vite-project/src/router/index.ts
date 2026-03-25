import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import PropertiesView from '@/views/PropertiesView.vue'
import CalendarView from '@/views/CalendarView.vue'


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: 'properties',
        name: 'properties',
        component: PropertiesView
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: CalendarView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router