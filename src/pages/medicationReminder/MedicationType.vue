<template>
<div class="container medication-type-form">
  <text-field/>
  <box-picker/>
  <checkbox/>
</div>
</template>
<script>
import BoxPicker from '@/components/ui/BoxPicker'
import TextField from '@/components/ui/TextField'
import Checkbox from './Checkbox'

export default {
  name: 'MedicationType',
  components: {Checkbox, TextField, BoxPicker}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.title-bar+.container {
  &.medication-type-form {
    background-color: $dark-bg;
    padding-top: $header-height !important;
    height: calc(100% - #{$header-height} - #{$space-2x});
  }
}
</style>
