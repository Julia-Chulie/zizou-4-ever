<script setup>
import Header from './components/Header.vue';
import {onMounted} from "vue";
import {themeChange} from "theme-change";


let theme = localStorage.getItem('theme');
if(theme === null){
  theme = 'light';
}

document.documentElement.setAttribute('data-theme', theme);
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
