<template>
  
    
  <div class="description__idea">
    <div v-motion-pop-visible :delay="500" :hovered="{ scale: 1.00001 }" 
      :enter="{ opacity: 1, y: 0, scale: 1 }" class="description__idea-description">
      <div v-motion-slide-visible-once-left :delay="300" class="ilustration">
        <img src="../assets/iu.png" alt="">
        <img src="../assets/iu.png" alt="">
      </div>
      <div  v-motion-slide-visible-once-right :delay="300"  class="card-description__container" >
        <div class="card-description">
          <h2>{{ optionProject }}</h2>
          <span>Exquisite and Extraordinary</span>
          <p>A luxury gift for an executive should be unique, personalized and highly desirable. What will make your
            executive's face light up? Something stunning by Corporate Jeweler.</p>
        </div>
      </div>
    </div>
    <div  v-motion-slide-visible-once-left class="description__idea-gift-example">
      <div  v-motion-slide-visible-once-left v-motion-slide-left class="gift-image">
        <img src="../assets/iu.png" alt="">
      </div>
      <div  v-motion-slide-visible-once-right v-motion-slide-left class="gift-description">
        <h2>Custom Cufflinks for an Executive Gift</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis expedita officia sequi vel,
          asperiores explicabo sapiente deleniti. Ullam deserunt vero culpa consequatur, itaque ab ipsam doloribus
          voluptates architecto nostrum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis expedita officia sequi vel,
          asperiores explicabo sapiente deleniti. Ullam deserunt vero culpa consequatur, itaque ab ipsam doloribus
          voluptates architecto nostrum?</p>
      </div>
    </div>
    <div v-motion-pop-visible :delay="250" class="client-experience__container">
      <div v-motion-slide-left class="client__img-gift">
        <img src="../assets/gift.jpg" alt="">
      </div>
      <div v-motion-slide-left class="client__description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum consequuntur cum ea, similique nobis
          assumenda eveniet a quas accusantium facilis laboriosam deleniti corporis mollitia. Nihil vitae impedit corporis
          est!</p>
        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
      </div>
    </div>
    <div v-motion-pop-visible :delay="250" class="description__idea-gift-example giftDos">
      <div v-motion-slide-left class="gift-image">
        <img src="../assets/iu.png" alt="">
      </div>
      <div v-motion-slide-left class="gift-description">
        <h2>Custom Cufflinks for an Executive Gift</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis expedita officia sequi vel,
          asperiores explicabo sapiente deleniti. Ullam deserunt vero culpa consequatur, itaque ab ipsam doloribus
          voluptates architecto nostrum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis expedita officia sequi vel,
          asperiores explicabo sapiente deleniti. Ullam deserunt vero culpa consequatur, itaque ab ipsam doloribus
          voluptates architecto nostrum?</p>
      </div>
    </div>
  </div>

  
      
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
  
  props: ['seccion'],
  computed: {
    ...mapState(["optionProject"]),
  },
}

</script>

<style scoped>
.description__idea {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
}

.description__idea-description {
  background-color: rgba(0, 0, 255, 0.257);
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.ilustration {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 0;
}

.ilustration img {
  width: 30%;
  animation: move_vector 10s ease-in-out infinite;
  cursor: pointer;
  filter: drop-shadow(30px 60px 75px rgba(0, 0, 0, 0.489));
}

.ilustration img:hover {}

.card-description__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-description__container .card-description {
  width: 500px;
  height: 450px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.card-description h2 {
  font-size: 2.4rem;
  font-weight: 700;
  padding: 1rem;
  text-align: center;
}

.card-description span {
  color: plum;
  font-size: 2rem;
  font-weight: 900;
  padding: 1.5rem 0.9rem;
  text-align: center;
}

.card-description p {
  padding: 2rem;
  font-weight: 300;
  font-size: 1.2rem;
}

.description__idea-gift-example {
  background-color: rgba(255, 0, 0, 0.117);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.gift-description {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  width: 50%;
  height: 90%;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gift-description h2 {
  font-weight: 800;
  margin: 0.8rem;
}

.gift-description p {
  padding: 1em;
}

.giftDos {
  background-color: #f2f2f2;
}

.client-experience__container {
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.client-experience__container .client__img-gift {
  width: 40%;
  border-radius: 7px;
  overflow: hidden;
  margin: 0.5rem 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.client-experience__container .client__img-gift img {
  width: 100%;
  height: 100%;
  display: block;


}

.client-experience__container .client__description {

  width: 60%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.client-experience__container .client__description p {
  padding: 2.5rem 2.8rem;
  text-align: justify;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  font-weight: 300;
  font-size: 1.4rem;
}

.client-experience__container .client__description small {
  color: rgb(46, 46, 46);
  font-weight: 800;
  font-size: 1rem;
  padding: 1.5rem 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
}

@keyframes move_vector {
  0% {
    transform: scale(0.998);
  }

  25% {
    transform: scale(1);
  }

  100% {

    transform: scale(0.99999);
  }
}</style>