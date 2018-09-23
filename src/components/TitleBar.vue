<template>
  <header class="title-bar">
    <span class="back-btn"></span>
    <div class="title">{{titleText}}</div>
  </header>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    titleText: String
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
//$dark-bg: #2E3192;
//$text-color-on-dark: #FFFFFF;
//$accent-color: #8DC63F;
.title-bar {
  background-color: $dark-bg;
  padding: 39px 28px 28px;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  .back-btn {
    background-image: url('../assets/back-btn.svg');
    width: 12px;
    height: 21px;
    display: block;
  }
  .title {
    color: $text-color-on-dark;
    font-weight: bold;
    font-size: 18px;
    position: relative;
    padding-bottom: 10px;
    margin-top: 28px;
    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      bottom: 0;
      background-color: $accent-color;
    }
  }
}
</style>
