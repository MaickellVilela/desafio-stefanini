<template>
<div class="container medication-type-form">
  <text-field label-text="Nome do medicamento"></text-field>
  <box-picker></box-picker>
  <checkbox label-text="Uso contínuo" help-text="Marque esta opção se o médico receitou o uso deste medicamento por tempo indeterminado."></checkbox>
  <action-button text="Próximo" to="/add/posology"></action-button>
</div>
</template>
<script>
export default {
  name: 'MedicationType'
}
</script>
