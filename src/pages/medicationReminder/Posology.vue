<template>
  <div class="container posology">
    <div class="natural-language-form">
      <span class="natural-language-form__text">Tomar</span>
      <span class="natural-language-form__dropdown">
        <span class="dropdown">long text</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Posology'
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.natural-language-form {
  display: flex;
  flex-wrap: wrap;
  &__text {
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    line-height: 44px;
    font-size: 32px;
    color: $text-color-on-dark;
  }
  &__dropdown {
    height: 44px;
    min-width: 44px;
    display: inline-block;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    border-radius: 5px;
    margin-left: $space-base;
    padding-left: 7px;
    padding-right: 7px;
    .dropdown {
      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      line-height: 38px;
      font-size: 32px;
      color: $text-color-on-dark;
      text-align: center;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
