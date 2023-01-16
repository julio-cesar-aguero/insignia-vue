<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Cabecera from './components/Cabecera.vue';
</script>

<template>
  <div class="container">
    <Cabecera />
    
    <RouterView />
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.container{
  width: 100%;
  background-color: rgba(0, 0, 255, 0);
}

</style>
