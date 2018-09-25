<template>
  <div class="checkbox">
    <input id="uso-continuo" type="checkbox" class="checkbox__input">
    <span class="checkbox__tick"></span>
    <span class="checkbox__label-wrap">
      <label for="uso-continuo" class="checkbox__label">{{labelText}}</label>
      <help-text>{{helpText}}</help-text>
    </span>
  </div>
</template>
<script>
export default {
  name: 'checkbox',
  props: {
    labelText: String,
    helpText: String
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.checkbox {
  display: flex;
  margin-bottom: $space-2x;
  &__input {
    -webkit-appearance: none;
    max-width: 25px;
    height: 25px;
    flex: 1 0 25px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0;
    outline: none;
    position: relative;
    &:checked {
      ~ .checkbox__tick {
        opacity: 1;
      }
    }
  }
  &__tick {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    content: '';
    display: block;
    width: 28px;
    height: 19px;
    background-image: url(~@/assets/checkbox-tick.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
  }
  &__label {
    @extend %form-field-label;
    line-height: 25px;
    vertical-align: middle;
  }
  &__label-wrap {
    margin-left: $space-base;
  }
}
</style>
