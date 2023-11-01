<template>
  <div class="content">
    <Doughnut :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import {data, options} from '@/chart_configs/chartConfigDoughnut.js'

ChartJS.register(ArcElement, Tooltip, Legend)
</script>

<style scoped>

</style>