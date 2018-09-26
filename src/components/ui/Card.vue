<template>
    <div class="card">
        <div class="card__header">
            <div class="card__title">{{title}}</div>
            <div class="card__subtitle">{{subtitle}}</div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    title: String,
    subtitle: String
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.card {
    display: flex;
    flex-wrap: wrap;
    border-radius: $border-radius-small;
    margin-bottom: $space-base;
    padding: $space-base/2;
    background-color: $light-bg;
    box-shadow: $card-shadow;
    justify-content: space-between;
    &__header {
        margin-bottom: calc-rem(10px);
    }
    &__title {
        @extend %typo-card-title;
    }
    &__subtitle {
        @extend %typo-card-subtitle
    }
}
</style>
