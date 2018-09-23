<template>
<div class="container medication-type-form">
  <div class="text-field">
    <label for="name">Nome do medicamento</label>
    <input type="text" id="name">
  </div>
  <div class="box-picker">
    <div class="box-picker__item">
      <div class="radio-wrap">
        <input type="radio" id="comprimido" name="medication-type" class="box-picker__input">
        <label for="comprimido" class="box-picker__label">Comprimido</label>
      </div>
    </div>
    <div class="box-picker__item">
      <div class="radio-wrap">
        <input type="radio" id="pastilha" name="medication-type" class="box-picker__input">
        <label for="pastilha" class="box-picker__label">pastilha</label>
      </div>
    </div>
    <div class="box-picker__item">
      <div class="radio-wrap">
        <input type="radio" id="xarope" name="medication-type" class="box-picker__input">
        <label for="xarope" class="box-picker__label">xarope</label>
      </div>
    </div>
    <div class="box-picker__item">
      <div class="radio-wrap">
        <input type="radio" id="gotas" name="medication-type" class="box-picker__input">
        <label for="gotas" class="box-picker__label">gotas</label>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'MedicationType'
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$type-icons: (
  comprimido: 'pill',
  pastilha: 'pastille',
  spray: 'spray',
  xarope: 'syrup',
  pomada: 'ointment',
  injecao: 'injection',
  inalacao: 'anesthesia',
  gotas: 'eyedropper'
);
.box-picker {
  display: flex;
  flex-wrap: wrap;
  margin-left: -$space-base;
  &__item {
    flex-basis: calc((100% / 3) - #{$space-base});
    float: left;
    padding-left: $space-base;
    margin-bottom: $space-base;
  }
  .radio-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-top: 100%;
  }
  &__label {
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    text-transform: capitalize;
    &[for] {
      &:before {
        content: '';
        position: absolute;
        display: block;
        height: 0;
        width: 45%;
        padding-top: 45%;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(calc(-100% - #{$space-base/2}));
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
      }
    }
    @each $class, $icon in $type-icons {
    &[for=#{$class}] {
      &:before {
        background-image: url('~@/assets/#{$icon}.svg');
      }
    }
  }
  }
  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    border: 1px solid white;
    border-radius: 10px;
    box-sizing: border-box;
    -webkit-appearance: none;
    &:checked, &:focus, &:active {
      outline: none;
    }
    &:checked {
      background-color: $accent-color;
      border-color: $accent-color;
    }
  }
}
.medication-type-form {
  height: 100%;
  background-color: $dark-bg;
}
</style>
