<template>
  <div class="box-picker">
    <div class="box-picker__label">Tipo</div>
    <div class="box-picker__item" v-for="type in types" :key="type.id">
      <div class="radio-wrap">
        <input class="box-picker__item__input" type="radio" :id="type.id" name="medication-type" >
        <label class="box-picker__item__label" :for="type.id" >{{type.name}}</label>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'box-picker',
  data: function () {
    return {
      types: [
        {
          name: 'comprimido',
          id: 'comprimido'
        },
        {
          name: 'pastilha',
          id: 'pastilha'
        },
        {
          name: 'xarope',
          id: 'xarope'
        },
        {
          name: 'gotas',
          id: 'gotas'
        },
        {
          name: 'pomada',
          id: 'pomada'
        },
        {
          name: 'spray',
          id: 'spray'
        },
        {
          name: 'inalação',
          id: 'inalacao'
        },
        {
          name: 'injeção',
          id: 'injecao'
        }
      ]
    }
  }
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
    margin-bottom: $space-base;
    &__label {
      @extend %form-field-label;
      width: 100%;
      padding-left: $space-base;
    }
    &__item {
      flex-basis: calc((100% / 3) - #{$space-base});
      float: left;
      padding-left: $space-base;
      margin-bottom: $space-base;
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
        z-index: 1;
        cursor: pointer;
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
        cursor: pointer;
        &:checked, &:focus, &:active {
          outline: none;
        }
        &:checked {
          background-color: $accent-color;
          border-color: $accent-color;
          & ~ label {
            filter: invert(100%);
            opacity: 0.7;
          }
        }
      }
    }
    .radio-wrap {
      width: 100%;
      height: 0;
      position: relative;
      padding-top: 100%;
    }
  }
</style>
