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
    font-family: Raleway;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: rgba($text-color-on-dark, 0.6);
}
</style>
