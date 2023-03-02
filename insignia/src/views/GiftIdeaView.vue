<template>
  <div class="container__projects">
    
    <GiftIdea> </GiftIdea>
   
  </div>
</template>

<script>

import GiftIdea from "../components/GiftIdea.vue"
export default {
 
  components:{
    GiftIdea
}

}
</script>

<style scoped>
.container__projects{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
}

</style>