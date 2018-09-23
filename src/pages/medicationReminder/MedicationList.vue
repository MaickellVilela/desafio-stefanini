<template>
    <div class="medication-list">
      <medication-card v-for="med in medications" :key="med.id" :data="med"/>
      <router-link to="/add" class="button-on-list">
        <call-to-action text="Adicionar Medicação"></call-to-action>
      </router-link>
    </div>
</template>
<script>
import MedicationCard from '@/components/business/MedicationCard'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'MedicationList',
  components: {
    MedicationCard,
    CallToAction
  },
  data: function () {
    return {
      medications: [
        {
          name: 'Predinizona 500mg',
          posology: '1 capsula a cada 12 horas',
          nextDoseTime: '18h00',
          remainDoses: 6,
          remainDosesPercentage: 30
        },
        {
          name: 'Predinizona 500mg',
          posology: '1 capsula a cada 12 horas',
          nextDoseTime: '18h00',
          remainDoses: 6,
          remainDosesPercentage: 10
        }
      ]
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.medication-list {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.button-on-list {
  margin-top: auto;
}
</style>
