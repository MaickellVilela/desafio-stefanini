<template>
  <div class="checkbox">
    <input id="uso-continuo" type="checkbox" class="checkbox__input">
    <span class="checkbox__tick"></span>
    <span class="checkbox__label-wrap">
      <label for="uso-continuo" class="checkbox__label">Uso Contínuo</label>
      <span class="checkbox__help-text">
        Marque esta opção se o médico receitou o uso deste medicamento por tempo indeterminado.
      </span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'checkbox'
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.checkbox {
  display: flex;
  margin-bottom: $space-2x;
  &__input {
    -webkit-appearance: none;
    width: 25px;
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
  &__help-text {
    font-family: Raleway;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: rgba($text-color-on-dark, 0.6);
  }
}
</style>
