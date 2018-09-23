<template>
    <div class="progress-bar full-width">
        <div class="progress-bar__track">
            <span class="progress-bar__fill" :style="`width: ` + value + `%`"></span>
        </div>
        <div class="progress-bar__text">{{text}}</div>
        <div class="progress-bar__accessory"><span class="gost-tag">Uso contínuo</span></div>
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
        height: 5px;
        border-radius: 5px;
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
            margin-bottom: 4px;
        }
        &__fill {
            @extend %progress-bar;
            background-color: $accent-color;
            position: absolute;
            top: 0;
            left: 0;
        }
        &__text {
            font-family: Raleway;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
        }
        &__accessory {
            margin-left: auto;
        }
    }

    .gost-tag {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 14px;
        text-align: right;
        color: rgba(0, 0, 0, 0.4);
    }
</style>
