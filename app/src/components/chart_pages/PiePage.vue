<template>
  <div class="content">
    <Pie :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import {data, options} from "@/chart_configs/chartConfig"
ChartJS.register(ArcElement, Tooltip, Legend)
</script>

<style scoped>

</style>