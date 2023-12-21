<script setup>
import Header from './components/Header.vue';
import {onMounted} from "vue";
import {themeChange} from "theme-change";

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <Header/>
  <router-view/>
</template>

<style scoped>

</style>
