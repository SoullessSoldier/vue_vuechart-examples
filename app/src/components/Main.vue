<script setup lang="ts">

</script>

<template>
  <header class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/bar">Bar chart</router-link>
    <router-link to="/pie">Pie chart</router-link>
    <router-link to="/horizontal-bar">Horizontal Bar chart</router-link>
    <router-link to="/bubble">Bubble chart</router-link>
    <router-link to="/radar">Radar chart</router-link>
    <router-link to="/doughnut">Doughnut chart</router-link>
    <router-link to="/line">Line chart</router-link>
    <router-link to="/polar-area">Polar Area chart</router-link>
    <router-link to="/scatter">Scatter chart</router-link>
  </header>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style>
@import "@/assets/styles/main/main.css";
</style>
