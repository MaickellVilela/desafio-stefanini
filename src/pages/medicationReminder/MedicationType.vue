<template>
<div class="container medication-type-form">
  <text-field/>
  <box-picker/>
</div>
</template>
<script>
  import BoxPicker from './BoxPicker'
  import TextField from './TextField'

  export default {
  name: 'MedicationType',
  components: {TextField, BoxPicker}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$type-icons: (
  comprimido: 'pill',
  pastilha: 'pastille',
  spray: 'spray',
  xarope: 'syrup',
  pomada: 'ointment',
  injecao: 'injection',
  inalacao: 'anesthesia',
  gotas: 'eyedropper'
);
.medication-type-form {
  height: 100%;
  background-color: $dark-bg;
}
</style>
