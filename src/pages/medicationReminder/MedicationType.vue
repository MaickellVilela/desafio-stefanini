<template>
<div class="container medication-type-form">
  <text-field/>
  <box-picker/>
  <checkbox/>
  <action-button text="Próximo" to="/add/posology"></action-button>
</div>
</template>
<script>
export default {
  name: 'MedicationType'
}
</script>
