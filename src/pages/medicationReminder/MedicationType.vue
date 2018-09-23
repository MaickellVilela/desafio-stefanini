<template>
<div class="container medication-type-form">
  <div class="text-field">
    <label for="name">Nome do medicamento</label>
    <input type="text" id="name">
  </div>
  <box-picker/>
</div>
</template>
<script>
import BoxPicker from './BoxPicker'

export default {
  name: 'MedicationType',
  components: {BoxPicker}
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
