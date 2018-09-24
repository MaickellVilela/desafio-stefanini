<template>
  <div class="container medication-list">
    <medication-card v-for="med in medications" :key="med.id" :data="med"/>
    <action-button class="button-on-list" text="Adicionar Medicação" to="/add"></action-button>
  </div>
</template>
<script>
import MedicationCard from '@/components/business/MedicationCard'

export default {
  name: 'MedicationList',
  components: {
    MedicationCard
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
        },
        {
          name: 'Predinizona 500mg',
          posology: '1 capsula a cada 12 horas',
          nextDoseTime: '18h00',
          remainDoses: 6,
          remainDosesPercentage: 10
        },
        {
          name: 'Predinizona 500mg',
          posology: '1 capsula a cada 12 horas',
          nextDoseTime: '18h00',
          remainDoses: 6,
          remainDosesPercentage: 10
        },
        {
          name: 'Predinizona 500mg',
          posology: '1 capsula a cada 12 horas',
          nextDoseTime: '18h00',
          remainDoses: 6,
          remainDosesPercentage: 10
        },
        {
          name: 'Predinizona 500mg',
          posology: '1 capsula a cada 12 horas',
          nextDoseTime: '18h00',
          remainDoses: 6,
          remainDosesPercentage: 10
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
  height: calc(100% - #{$header-height} - (#{$space-2x * 2 }));
  padding-bottom: 46px + $space-2x;
}
.button-on-list {
  position: fixed;
  bottom: $space-2x;
  left: $space-2x;
  width: calc(100% - (#{$space-2x * 2 }));
  > * {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.25);
  }
}
</style>
