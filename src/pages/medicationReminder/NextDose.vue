<template>
<div class="container">
  <text-field label-text="Próxima dose"  help-text="Horário da póxima dose"></text-field>
  <checkbox label-text="Lembrar-me"
            help-text="Enviaremos uma notificação no horário de cada dose até que você termine o uso desde medicamento."></checkbox>
  <divider></divider>
  <text-field label-text="Quantidade disponível"  help-text="Quantia disponível"></text-field>
  <text-field label-text="Unidade" :is-disabled="true" value="Comprimidos"></text-field>
  <checkbox label-text="Lembrar-me"
            help-text="Enviaremos uma notificação antes do seu medicamento acabar."></checkbox>
  <div class="fixed-bottom-button">
    <action-button to="/list" text="Finalizar"></action-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'NextDose'
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
