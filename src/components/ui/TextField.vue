<template>
    <div class="text-field" :class="{'text-field--disabled': isDisabled}">
        <label class="text-field__label" for="name">{{labelText}}</label>
        <input class="text-field__input" type="text" id="name" :disabled="isDisabled">
    </div>
</template>
<script>
export default {
  name: 'text-field',
  props: {
    labelText: String,
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.text-field {
  margin-bottom: $space-2x;
  &__label {
    @extend %form-field-label;
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
  &--disabled {
    .text-field {
      &__label {
        opacity: 0.6;
      }
      &__input {
        background-color: transparent;
        border: solid 1px rgba($text-color-on-dark, 0.1);
        color: rgba($text-color-on-dark, 0.4);
      }
    }
  }
}
</style>
