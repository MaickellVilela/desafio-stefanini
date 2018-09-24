<template>
  <div class="dropdown" @click="toggleMenu()">
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
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
$drpdown-min-size: 44px;
  .dropdown {
    position: relative;
    min-width: $drpdown-min-size;
    height: $drpdown-min-size;
    display: inline-block;
    vertical-align: middle;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 7px;
    padding-right: 7px;
    cursor: pointer;
    margin-right: $space-base;
    margin-bottom: $space-base;
    a {
      text-decoration: none;
    }
  }
  .dropdown-toggle {
    color: #fff;
    box-sizing: border-box;
    line-height: 36px;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    color: #FFFFFF;
    text-align: center;
    display: block;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: $drpdown-min-size;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    background-clip: padding-box;
  }

  .dropdown-menu > li > a {
    padding: 10px 30px;
    display: block;
    clear: both;
    font-weight: normal;
    line-height: 1.6;
    color: #333333;
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

  .caret {
    display: relative;
    width: 0;
    position: relative;
    top: 10px;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    float: right;
  }

  li {
    list-style: none;
  }
</style>
