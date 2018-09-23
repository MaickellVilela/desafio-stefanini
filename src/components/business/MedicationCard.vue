<template>
    <card :title="data.name" :subtitle="data.posology">
        <compact-data label="Próxima dose às" :value="data.nextDoseTime"/>
        <progress-bar :value="data.remainDosesPercentage" :text="`restam ` + data.remainDoses + ` doses`"/>
    </card>
</template>
<script>
import Card from '@/components/ui/Card'
import CompactData from '@/components/ui/CompactData'
import ProgressBar from '@/components/ui/ProgressBar'

export default {
  name: 'medication-card',
  components: {Card, CompactData, ProgressBar},
  props: {
    data: Object
  }
}
</script>
