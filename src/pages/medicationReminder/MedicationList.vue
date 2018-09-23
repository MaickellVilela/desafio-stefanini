<template>
<div class="medication-list">
    <medication-card v-for="med in medications" :key="med.id" :data="med"/>
</div>
</template>

<script>
import MedicationCard from '@/components/business/MedicationCard'

export default {
  name: 'MedicationList',
  components: {MedicationCard},
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
