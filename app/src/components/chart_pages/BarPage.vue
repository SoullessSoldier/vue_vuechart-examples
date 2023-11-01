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
import {data, options} from "@/chart_configs/chartConfig"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

</script>

<style scoped>

</style>