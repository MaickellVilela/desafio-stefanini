<template>
  <transition appear
              appear-active-class="animated fadeInDown"
              v-on:after-enter="pulse">
    <card :title="data.name" :subtitle="data.posology" :class="{'animated pulse' : animate}">
      <compact-data label="Próxima dose às" :value="data.nextDoseTime"></compact-data>
      <progress-bar :value="data.remainDosesPercentage" :text="`restam ` + data.remainDoses + ` doses`">
        <template slot="accessory"><ghost-tag text="Uso contínuo"></ghost-tag></template>
      </progress-bar>
    </card>
  </transition>
</template>
<script>
export default {
  name: 'medication-card',
  props: {
    data: Object
  },
  data: function () {
    return {
      animate: false
    }
  },
  methods: {
    pulse: function () {
      this.animate = true
    }
  }
}
</script>
