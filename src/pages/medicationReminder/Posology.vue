<template>
  <div class="container posology">
    <div class="natural-language-form">
      <span class="natural-language-form__text">Tomar</span>
      <span class="natural-language-form__input-wrap">
        <dropdown :options="quantity" :selected="quantity"></dropdown>
      </span>
      <span class="natural-language-form__input-wrap">
        <dropdown :options="unit" :selected="unit"></dropdown>
      </span>
      <span class="natural-language-form__text">a cada</span>
      <span class="natural-language-form__input-wrap">
        <dropdown :options="timeAmount" :selected="timeAmount"></dropdown>
      </span>
      <span class="natural-language-form__input-wrap">
        <dropdown :options="timeUnit" :selected="timeUnit"></dropdown>
      </span>
      <span class="natural-language-form__text">durante</span>
      <span class="natural-language-form__input-wrap">
        <dropdown :options="timeAmount" :selected="timeAmount"></dropdown>
      </span>
      <span class="natural-language-form__input-wrap">
        <dropdown :options="timeUnit" :selected="timeUnit"></dropdown>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Posology',
  data: function () {
    return {
      quantity: [
        {name: '1', id: 1},
        {name: '2', id: 2},
        {name: '3', id: 3}
      ],
      unit: [
        {name: 'ml', id: 1},
        {name: 'colher', id: 2},
        {name: 'frasco', id: 3}
      ],
      timeAmount: [
        {name: '1', id: 1},
        {name: '2', id: 2},
        {name: '3', id: 3}
      ],
      timeUnit: [
        {name: 'minute', id: 1},
        {name: 'hour', id: 2},
        {name: 'day', id: 3},
        {name: 'week', id: 4},
        {name: 'month', id: 5}
      ]
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
