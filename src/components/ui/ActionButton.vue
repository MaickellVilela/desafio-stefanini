<template>
<router-link :to="to" class="cta-button">{{text}}</router-link>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: String,
    to: String
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.cta-button {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: calc-rem(12px);
  border: none;
  border-radius: $border-radius-small;
  background-color: $accent-color;
  @extend %typo-label;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
</style>
