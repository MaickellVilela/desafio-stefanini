<template>
    <div class="progress-bar full-width">
        <div class="progress-bar__track">
            <span class="progress-bar__fill" :style="`width: ` + value + `%`"></span>
        </div>
        <div class="progress-bar__text">{{text}}</div>
        <div class="progress-bar__accessory">
          <slot name="accessory"></slot>
        </div>
    </div>
</template>
<script>

export default {
  name: 'progress-bar',
  props: {
    text: String,
    value: Number
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

    %progress-bar {
        height: calc-rem(5px);
        border-radius: calc-rem(5px);
        display: block;
    }

    .progress-bar {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        &__track {
            @extend %progress-bar;
            width: inherit;
            background-color: rgba(0, 0, 0, 0.1);
            position: relative;
            margin-bottom: $space-min;
        }
        &__fill {
            @extend %progress-bar;
            background-color: $accent-color;
            position: absolute;
            top: 0;
            left: 0;
        }
        &__text {
            @extend %typo-progress-bar-text;
        }
        &__accessory {
            margin-left: auto;
        }
    }

</style>
