<template>
    <div class="container__quiz">
        <Quiz />
    </div>
  
</template>

<script>
import Quiz from '../components/Quiz.vue';
export default {
components:{
    Quiz
}
}
</script>

<style scoped>

.container__quiz{
  width: 100%;
  min-height: 150vh;
  background: rgb(255, 255, 255);

  padding-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
}
</style>