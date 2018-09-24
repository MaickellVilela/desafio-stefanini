<template>
  <div class="container posology">
    <div class="natural-language-form">
      <span class="natural-language-form__text">Tomar</span>
      <span class="natural-language-form__input-wrap">
        <dropdown :options="arrayOfObjects" :selected="object"></dropdown>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Posology',
  data: function () {
    return {
      arrayOfObjects: [
        {name: '1', id: 1},
        {name: '2', id: 2},
        {name: '3', id: 3}
      ],
      object: {
        name: '1'
      }
    }
  }
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
    margin-right: $space-base;
  }
  &__input-wrap {

  }
}
</style>
