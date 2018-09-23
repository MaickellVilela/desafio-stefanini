<template>
    <div class="text-field">
        <label class="text-field__label" for="name">Nome do medicamento</label>
        <input class="text-field__input" type="text" id="name">
    </div>
</template>
<script>
export default {
  name: 'text-field'
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.text-field {
  margin-bottom: $space-2x;
  &__label {
    display: block;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 7px;
  }
  &__input {
    display: block;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    height: 44px;
    width: 100%;
    border: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 18px;
    color: #FFFFFF;
    padding: $space-base/2 $space-base;
    outline: none !important;
    box-sizing: border-box;
  }
}
</style>
