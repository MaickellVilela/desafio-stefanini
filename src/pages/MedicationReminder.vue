<template>
  <div class="page-container">
    <transition appear appear-active-class="animated slideInDown">
      <title-bar title-text="Lembrete de Medicação"></title-bar>
    </transition>
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
  height: calc(100% - var(--header-height) - 56px);
}
.title-bar+.container {
  background-color: $dark-bg;
  padding-top: var(--header-height);
  height: calc(100% - var(--header-height) - #{$space-2x});
}
.fixed-bottom-button {
  position: fixed;
  bottom: $space-2x;
  left: $space-2x;
  width: calc(100% - (#{$space-2x * 2 }));
}
</style>
