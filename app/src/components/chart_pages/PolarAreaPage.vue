<template>
  <div class="content">
    <PolarArea :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'vue-chartjs'
import {data, options} from '@/chart_configs/chartConfigPolar'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)
</script>

<style scoped>

</style>