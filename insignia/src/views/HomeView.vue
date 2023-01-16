<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="container__all">
    <div class="cover">
      <div class="container__cover">
        <div class="container__info">
          <h1> BUILD YOUR</h1>
          <h2>BUSSINESS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero sunt, iure ducimus fugiat aliquam
            reprehenderit odit voluptates quod, culpa laudantium, blanditiis beatae praesentium ea sit facilis voluptas
            ab
            consequuntur.</p>
          <input type="button" value="Get Started">

        </div>
        <div class="container__vector">
          <img src="../assets/joya.svg" alt="">
        </div>
      </div>
    </div>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
  </div>
</template>
<style>


.cover {
  width: 100%;
  padding-bottom: 60px;
  margin-top: 100px;

}
.container__cover{
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-image: url(../assets/background-cover.svg);
  background-size: cover;
  background-position: bottom;
}
.cover .container__info{
  max-width: 400px;
  margin-top: 40px;
  z-index: 2;
}
.cover h1{
  max-width: 400px;
  font-size: 60px;
  font-weight: 900;
  color: #373737;
}
.cover h2{
  font-size: 60px;
  font-weight: 900;
  color: #FEBA0B;
  margin-top: -30px;
}
.cover p{
  margin-top: 10px;
  color: #373737;
}
.cover input[type="button"]{
  padding: 10px 40px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  color: antiquewhite;
  background-color: #FEBA0B;
  border-radius: 20px;
  box-shadow: 1px 1px 30px -5px #20202849;
  cursor: pointer;
  transition: box-shadow 1000ms;
}
.cover input[type="button"]:hover{
  box-shadow: 1px 1px 30px -5px #20202885;
}
.container__vector{
  position: relative;

}
.container__vector img{
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 400px;
  animation: move_vector 6s ease-in-out infinite;
}
@keyframes move_vector {
  0%{
    transform: translateY(10px);
  }
  25%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(10px);
  }
}
</style>
