<template>
  <div class="container__projects">
    <div class="background-image">
      <Project />
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Project from "../components/Project.vue";
export default {
  props: ['seccion'],
  computed: {
    ...mapState(["optionProject"]),
  },
  components:{
    Project
  }
}
</script>

<style scoped>
.container__projects{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0803628;
}
.background-image{
  position: relative;
  width: 100%;
  padding-top: 150px;
  
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background-image img{
  background-size: cover;
  opacity: 0.8;
}
.background-image .card-especial h1{
  position: absolute;
  color: #333333;
  text-transform: uppercase;
}

</style>