<template>
<div class="container medication-type-form">
  <text-field/>
  <box-picker/>
  <checkbox/>
  <action-button text="Próximo" to="/posology"></action-button>
</div>
</template>
<script>
export default {
  name: 'MedicationType'
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.title-bar+.container {
  &.medication-type-form {
    background-color: $dark-bg;
    padding-top: $header-height !important;
    height: calc(100% - #{$header-height} - #{$space-2x});
  }
}
</style>
