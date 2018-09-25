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
    box-sizing: border-box;
    height: 44px;
    width: 100%;
    padding: $space-base/2 $space-base;
    border: solid 1px rgba($text-color-on-dark, 0.6);
    border-radius: 5px;
    background-color: transparent;
    @extend %typo-input-value;
  }
  &--disabled & {
    &__label {
      opacity: 0.6;
    }
    &__input {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba($text-color-on-dark, 0.2);
      color: rgba($text-color-on-dark, 0.4);
    }
  }
}
</style>
