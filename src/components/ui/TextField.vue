<template>
  <div class="text-field" :class="{'text-field--disabled': isDisabled}">
    <label class="text-field__label" for="name">{{labelText}}</label>
    <input class="text-field__input" type="text" id="name" :disabled="isDisabled" :value="value">
    <help-text v-if="helpText !== ''">{{helpText}}</help-text>
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
    },
    value: {
      type: String,
      default: ''
    },
    helpText: String
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$input-border-radius: $border-radius-small;
$input-size: calc-rem(44px);
.text-field {
  margin-bottom: $space-2x;
  &__label {
    @extend %form-field-label;
  }
  &__input {
    display: block;
    box-sizing: border-box;
    height: $input-size;
    width: 100%;
    padding: $space-base/2 $space-base;
    border: solid 1px rgba($text-color-on-dark, 0.6);
    border-radius: $input-border-radius;
    background-color: transparent;
    @extend %typo-input-value;
  }
  &--disabled & {
    &__label {
      opacity: 0.6;
    }
    &__input {
      background: rgba($light-bg, 0.05);
      border-color: rgba($text-color-on-dark, 0.2);
      color: rgba($text-color-on-dark, 0.4);
    }
  }
}
</style>
