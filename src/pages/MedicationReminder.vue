<template>
  <div>
    <title-bar title-text="Lembrete de Medicação"></title-bar>
    <div class="container">
      <transition name="slide">
        <router-view></router-view>
      </transition>
      <router-link to="/list">
        <call-to-action text="Adicionar Medicação"></call-to-action>
      </router-link>
    </div>
  </div>
</template>

<script>
import CallToAction from '../components/CallToAction'
import TitleBar from '../components/TitleBar'
export default {
  name: 'MedicationReminder',
  components: {
    CallToAction,
    TitleBar
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container {
  padding: $space-2x;
}
</style>
