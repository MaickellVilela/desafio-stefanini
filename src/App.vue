<template>
  <div id="app">
    <div class="device-frame">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "reset-css/sass/_reset.scss";
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');
html, body {
  height: 100%;
  //background-color: lime;//#0e1a39;
  background: linear-gradient(to bottom, hsl(0, 0, 0) 0%, hsl(0, 0, 20) 100%);
}
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.device-frame {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 812px;
  width: 375px;
  background-color: #fff;
  //border: solid 5px red;
  border-radius: 36px;
  &::before {
    pointer-events: none;
    position: absolute;
    content: '';
    display: block;
    background-image: url('./assets/iPhoneFrame.png');
    width: 432px;
    left: -29px;
    top: -26px;
    height: 1266px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: contain;

  }
}
</style>
