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
  border: none;
  border-radius: 5px;
  display: block;
  padding: 12px;
  width: 100%;
  background-color: $accent-color;
  color: $button-text-color;
  @extend %typo-label;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
</style>
