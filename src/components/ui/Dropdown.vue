<template>
  <div class="dropdown" v-click-outside="hide" @click="toggleMenu()">
    <span class="dropdown-toggle">
      {{ selectedOption.name !== undefined ? selectedOption.name : options[0].name }}
    </span>
    <ul class="dropdown-menu" v-if="showMenu">
      <li v-for="option in options" :key="option.id">
        <a href="javascript:void(0)" @click="updateOption(option)">
          {{ option.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  data () {
    return {
      selectedOption: {
        name: ''
      },
      showMenu: false
    }
  },
  props: {
    options: {
      type: [Array, Object]
    },
    selected: {}
  },
  mounted () {
    this.selectedOption = this.selected
    this.popupItem = this.$el
  },
  methods: {
    updateOption (option) {
      this.selectedOption = option
      this.showMenu = false
      this.$emit('updateOption', this.selectedOption)
      this.toggleMenu()
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    hide () {
      this.showMenu = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
$dropdown-min-size: 44px;
$dropdown-padding: $space-base/2;
  .dropdown {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    min-width: $dropdown-min-size;
    height: $dropdown-min-size;
    padding-left: $dropdown-padding;
    padding-right: $dropdown-padding;
    margin-right: $space-base;
    margin-bottom: $space-base;
    border: calc-rem(2px) solid rgba(white, 0.3);
    border-radius: $border-radius-small;
    cursor: pointer;
    a {
      text-decoration: none;
    }
  }
  .dropdown-toggle {
    box-sizing: border-box;
    display: block;
    @extend %typo-natural-language-form;
    text-align: center;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    min-width: $dropdown-min-size;
    padding: calc-rem(5px) 0;
    margin: calc-rem(2px) 0 0;
    list-style: none;
    background-color: $light-bg;
    border: 1px solid #ccc;
    border-radius: $border-radius-small;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }

  .dropdown-menu > li > a {
    padding: 10px 30px;
    display: block;
    @extend %typo-compact-data-value;
    color: rgba(black, 0.6);
    line-height: 1.6;
    white-space: nowrap;
    text-decoration: none;
  }
  .dropdown-menu > li > a:hover {
    background: #efefef;
    color: #409FCB;
  }

  .dropdown-menu > li {
    overflow: hidden;
    width: 100%;
    position: relative;
    margin: 0;
  }

  li {
    list-style: none;
  }
</style>
