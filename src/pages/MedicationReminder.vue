<template>
  <div class="page-container">
    <title-bar title-text="Lembrete de Medicação"></title-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MedicationReminder'
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.page-container {
  height: 100%;
  overflow-y: scroll;
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
.fixed-bottom-button {
  position: fixed;
  bottom: $space-2x;
  left: $space-2x;
  width: calc(100% - (#{$space-2x * 2 }));
}
</style>
