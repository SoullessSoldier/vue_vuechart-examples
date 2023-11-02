<template>
  <div class="content">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js"
import { Bar } from 'vue-chartjs'
import {data} from "@/chart_configs/chartConfigHorizontalBar"
import {CoreChartOptions} from "chart.js/dist/types";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const options: CoreChartOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<style scoped>

</style>