<template>
  <div class="us">
    
    <ion-icon name="heart"></ion-icon>
  </div>


</template>

<script>
import { useStore } from 'vuex';
export default {
mounted(){
  const store = useStore();
  console.log(store);
}
}
</script>

<style scoped>
.us {
  width: 100%;
  height: 100vh;
  padding: 2px 0px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(211, 19, 19, 0.036);
  background: radial-gradient(circle, rgba(242, 242, 242, 0.006) 0%, rgba(0, 87, 119, 0.006) 50%, rgba(252, 69, 69, 0.003) 100%);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.us section {
  position: relative;
  width: 100%;
  height: 80vh;
  display: grid;
  place-items: center;

}

.us section .contact__form {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px));
  gap: 20px;
  padding: 40px;
  width: 90%;
  height: 90%;
  background: #9cdbfa06;
  box-shadow: 1px 9px 20px -5px rgba(0, 0, 0, 0.5);
  border-radius: 30px;

}

.contact__form .form {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  margin-left: 30px;

}
</style>