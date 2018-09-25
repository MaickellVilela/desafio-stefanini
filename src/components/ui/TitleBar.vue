<template>
  <header class="title-bar">
    <span class="back-btn" @click="goBack"></span>
    <div class="title">{{titleText}}</div>
  </header>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    titleText: String
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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
    background-image: url('../../assets/back-btn.svg');
    width: 12px;
    height: 21px;
    display: block;
  }
  .title {
    position: relative;
    padding-bottom: 10px;
    margin-top: 28px;
    @extend .label;
    color: $text-color-on-dark;
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
