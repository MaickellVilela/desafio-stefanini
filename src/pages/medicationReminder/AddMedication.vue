<template>
<router-view></router-view>
</template>

<script>
export default {
  name: 'AddMedication'
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .title-bar+.container {
     background-color: $dark-bg;
     padding-top: $header-height;
     height: calc(100% - #{$header-height} - #{$space-2x});
  }
</style>
