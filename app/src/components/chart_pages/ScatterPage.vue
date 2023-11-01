<template>
  <div class="content">
    <Scatter :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Scatter } from 'vue-chartjs'
import {data, options} from '@/chart_configs/chartConfigScatter'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)
</script>

<style scoped>

</style>