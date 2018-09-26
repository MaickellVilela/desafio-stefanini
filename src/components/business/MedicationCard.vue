<template>
    <card :title="data.name" :subtitle="data.posology">
        <compact-data label="Próxima dose às" :value="data.nextDoseTime"></compact-data>
      <progress-bar :value="data.remainDosesPercentage" :text="`restam ` + data.remainDoses + ` doses`">
        <template slot="accessory"><ghost-tag text="Uso contínuo"></ghost-tag></template>
      </progress-bar>
    </card>
</template>
<script>

export default {
  name: 'medication-card',
  props: {
    data: Object
  }
}
</script>
