<template>
  <div class="container medication-list">
    <medication-card v-for="med in medications" :key="med.id" :data="med"/>
    <transition
      appear
      appear-active-class="animated slideInUp"
    >
      <action-button class="button-on-list" text="Adicionar Medicação" to="/add"></action-button>
    </transition>
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
  .title-bar+.medication-list {
    padding-top: $header-height + $space-2x;
    height: calc(100% - #{$header-height} - (#{$space-2x * 2 }));
    padding-bottom: 46px + $space-2x;
    background-color: #eee;
  }

  /*
      Por ser fixo e flutuante sobre a lista, o botão não é afetado pelo paddind do container,
      por isso é preciso recalcular e forçar o tamanho do botão e posicioná-lo corretamente.
  */
  .button-on-list {
    position: fixed;
    bottom: $space-2x;
    left: $space-2x;
    width: calc(100% - (#{$space-2x * 2 })) !important;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
</style>
