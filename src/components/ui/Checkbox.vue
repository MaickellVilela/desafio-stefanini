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
$checkbox-border-radius: $border-radius-small;
$checkbox-size: calc-rem(25px);
.checkbox {
  display: flex;
  margin-bottom: $space-2x;
  &__input {
    -webkit-appearance: none;
    box-sizing: border-box;
    position: relative;
    max-width: $checkbox-size;
    height: $checkbox-size;
    flex: 1 0 $checkbox-size;
    margin: 0;
    border: 1px solid #FFFFFF;
    border-radius: $checkbox-border-radius;
    &:checked {
      ~ .checkbox__tick {
        opacity: 1;
      }
    }
  }
  &__tick {
    content: '';
    display: block;
    position: absolute;
    width: calc-rem(28px);
    height: calc-rem(19px);
    pointer-events: none;
    background-size: contain;
    background: url(~@/assets/checkbox-tick.svg) no-repeat top right;
    opacity: 0;
  }
  &__label {
    @extend %form-field-label;
    line-height: $checkbox-size;
    vertical-align: middle;
  }
  &__label-wrap {
    margin-left: $space-base;
  }
}
</style>
