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
  cursor: pointer;
  background-color: $accent-color;
  color: $button-text-color;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 5px;
  width: 100%;
  display: block;
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;
}
</style>
