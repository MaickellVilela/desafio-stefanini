<template>
<button>{{text}}</button>
</template>

<script>
export default {
  name: 'CallToAction',
  props: {
    text: String
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
button {
  //-webkit-appearance: none;
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
}
</style>
