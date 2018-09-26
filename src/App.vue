<template>
  <div id="app">
    <div class="device-frame">
      <router-view/>
    </div>
    <div class="device"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "~@/styles/main.scss";
</style>
