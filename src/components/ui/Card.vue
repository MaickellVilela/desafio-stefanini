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
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    padding: 7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: $space-base;
    &__header {
        margin-bottom: 10px;
    }
    &__title {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.6);
    }
    &__subtitle {
        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
    }
}
</style>
