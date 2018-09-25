<template>
  <span class="help-text">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'help-text'
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.help-text {
    @extend .typo-help-text;
    letter-spacing: 0.1em;
}
</style>
