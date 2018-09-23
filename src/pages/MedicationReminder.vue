<template>
  <div class="page-container">
    <title-bar title-text="Lembrete de Medicação"></title-bar>
    <div class="container">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import TitleBar from '../components/TitleBar'
export default {
  name: 'MedicationReminder',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.page-container {
  height: 100%;
  overflow-y: scroll;
}
.container {
  padding: $space-2x;
  overflow-y: scroll;
  height: calc(100% - 143.5px - 56px);
  background-color: #eee;
}
.title-bar+.container {
  padding-top: 143.5px + $space-2x;
}
</style>
<style>
  [class*='router-link'], a {
    text-decoration: none;
  }
</style>
