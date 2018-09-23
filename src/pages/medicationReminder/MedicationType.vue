<template>
<div class="container medication-type-form">
  <text-field/>
  <box-picker/>
</div>
</template>
<script>
import BoxPicker from '@/components/ui/BoxPicker'
import TextField from '@/components/ui/TextField'

export default {
  name: 'MedicationType',
  components: {TextField, BoxPicker}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

.medication-type-form {
  background-color: $dark-bg;
}
</style>
