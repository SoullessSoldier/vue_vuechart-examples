<template>
  <div class="content">
    <Bubble :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale
} from 'chart.js'
import { Bubble } from 'vue-chartjs'
import {data, options} from '@/chart_configs/chartConfigBubble'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)
</script>

<style scoped>

</style>