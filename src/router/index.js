import Vue from 'vue'
import Router from 'vue-router'
import MedicationReminder from '@/pages/MedicationReminder'
import MedicationList from '@/pages/medicationReminder/MedicationList'
import MedicationType from '@/pages/medicationReminder/MedicationType'
import AddMedication from '@/pages/medicationReminder/AddMedication'
import NextDose from '@/pages/medicationReminder/NextDose'
import Posology from '@/pages/medicationReminder/Posology'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MedicationReminder',
      component: MedicationReminder,
      redirect: '/list',
      children: [
        {
          path: 'list',
          component: MedicationList
        },
        {
          path: '/add',
          component: AddMedication,
          redirect: '/add/type',
          children: [
            {
              path: 'type',
              component: MedicationType
            },
            {
              path: 'nextDose',
              component: NextDose
            },
            {
              path: 'posology',
              component: Posology
            }
          ]
        }
      ]
    }
  ]
})
