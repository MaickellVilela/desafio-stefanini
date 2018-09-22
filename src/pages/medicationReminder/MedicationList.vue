<template>
<div class="medication-list">
  <div class="card">
    <div class="card__header">
      <div class="card__title">Predinizona</div>
      <div class="card__subtitle">1 capsula a cada 12 horas</div>
    </div>
    <compact-data label="Próxima dose às" value="18h00"/>
    <div class="progress-bar full-width">
      <div class="progress-bar__track">
        <span class="progress-bar__fill" style="width: 30%"></span>
      </div>
      <div class="progress-bar__text">restam 6 doses</div>
      <div class="progress-bar__accessory"><span class="gost-tag">Uso contínuo</span></div>
    </div>
  </div>
</div>
</template>

<script>
  import CompactData from './CompactData'

  export default {
  name: 'MedicationList',
  components: {CompactData}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  padding: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: $space-base;
  &__header {
    margin-bottom: 10px;
  }
  &__title {
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }
  &__subtitle {
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
}

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
