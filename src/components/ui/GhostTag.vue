<template>
  <span class="ghost-tag">{{text}}</span>
</template>
<script>
export default {
  name: 'ghost-tag',
  props: {
    text: String
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.ghost-tag {
  @extend %typo-ghost-tag;
}
</style>
