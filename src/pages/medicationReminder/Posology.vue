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
    <help-text>Toque no texto contornado para alterar</help-text>
    <div class="fixed-bottom-button">
      <action-button to="/add/nextDose" text="Próximo"></action-button>
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
        {name: '3', id: 3},
        {name: '...', id: 4}
      ],
      unit: [
        {name: 'ml', id: 1},
        {name: 'colher', id: 2},
        {name: 'frasco', id: 3}
      ],
      timeAmount: [
        {name: '1', id: 1},
        {name: '2', id: 2},
        {name: '3', id: 3},
        {name: '...', id: 4}
      ],
      timeUnit: [
        {name: 'minuto', id: 1},
        {name: 'hora', id: 2},
        {name: 'dia', id: 3},
        {name: 'semana', id: 4},
        {name: 'mês', id: 5}
      ]
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.natural-language-form {
  display: flex;
  flex-wrap: wrap;
  padding-top: $space-2x;
  &__text {
    @extend %typo-natural-language-form;
    margin-right: $space-base;
  }
}
</style>
