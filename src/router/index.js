import Vue from 'vue'
import Router from 'vue-router'
import MedicationReminder from '@/pages/MedicationReminder'
import MedicationList from '@/pages/medicationReminder/MedicationList'
import MedicationType from '@/pages/medicationReminder/MedicationType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MedicationReminder',
      component: MedicationReminder,
      children: [
        {
          path: 'list',
          component: MedicationList
        },
        {
          path: 'type',
          component: MedicationType
        }
      ]
    }
  ]
})
