<template>
    <div class="compact-data">
        <div class="compact-data__label">{{label}}</div>
        <div class="compact-data__value">{{value}}</div>
    </div>
</template>
<script>
export default {
  name: 'compact-data',
  props: {
    label: String,
    value: String
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.compact-data {
    &__label {
        @extend %typo-compact-data-label;
    }
    &__value {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 16px;
        text-align: right;
        color: rgba(0, 0, 0, 0.4);
        margin-left: auto;
    }
}
</style>
