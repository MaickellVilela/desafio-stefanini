<template>
  <div class="page-container">
    <title-bar title-text="Lembrete de Medicação"></title-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TitleBar from '@/components/ui/TitleBar'
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
.title-bar+.container {
  padding-top: $header-height + $space-2x;
}
</style>
<style lang="scss" rel="stylesheet/scss">
[class*='router-link'], a {
  text-decoration: none;
}
.container {
  padding: $space-2x;
  overflow-y: scroll;
  height: calc(100% - #{$header-height} - 56px);
  background-color: #eee;
}
</style>
