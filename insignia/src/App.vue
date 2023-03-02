<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cabecera from './components/Cabecera.vue';
import PieDePagina from './components/PieDePagina.vue';
</script>

<template>
  <div class="container">
    <Cabecera />
    <RouterView />
    <PieDePagina />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.container {
  width: 100%;
  overflow: hidden;
  background: rgb(232, 19, 19);
background: radial-gradient(circle, rgba(242, 242, 242, 0.01) 0%, rgba(0, 87, 119, 0.083) 50%, rgba(252, 69, 69, 0.003) 100%); 
}

</style>
