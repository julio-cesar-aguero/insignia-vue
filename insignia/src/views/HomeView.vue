

<template>
  <div class="container__all">
    <div class="cover">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="container__cover">
        <div v-motion-fade-visible :delay="400" class="container__info">
          <h1> Insignia create </h1>
          <h2>what yo need</h2>
          <h3>The possibilities are unimaginable</h3>
          <p>
          <h4>We create <span>corporate gifts</span> for brands which want to convey a meaningful message.</h4> We
          materialeze personalized projects with a special and meaningful value to strengthen relationships
          either with your clients, collaborators or interest groups.</p>
          <XyzTransition xyz="fade up big">
            <div class="square" v-if="true"></div>
          </XyzTransition>

          <div class="link">
            <router-link class="router-link" to="/quiz" v-wave>Get Started</router-link>
            <a class="router-link link-learn" href="#us-section" v-smooth-scroll>Us</a>
          </div>


        </div>
        <div v-motion-fade-visible :delay="400" class="container__vector">
          <img src="../assets/image.png" alt="" v-prlx="{ fromBottom: true }">
        </div>
      </div>
    </div>
    <div id="us-section" class="us">

      <div class="container__us">

        <div v-motion-pop-visible-once>
          <h1>About Us</h1>

        </div>


        <div v-motion-pop-visible-once class="head__text">
          <span>" More than 15 years of experience in the elaboration of corporate gifts in national and
            international projects. "</span>
        </div>

        <div class="about__container">
          <div v-motion-pop-visible-once class="about__img">
            <img src="../assets/iu.png" alt="">
          </div>
          <div v-motion-pop-visible-once class="about__text">
            <ul v-motion-pop-visible-once>
              <li>Corporate gifts </li>
              <li>Gifts for corporate events</li>
              <li>Work anniversary gifts</li>
              <li> Recognition gifts</li>
              <li>Christmas gifts</li>
              <li>Incentive gifts</li>
            </ul>

          </div>

        </div>


        <div v-motion-pop-visible class="container__home-us-project">

          <div class="box">
            <img src="../assets/blog-image-1.jpg">
          </div>
          <div class="box box-2">
            <img src="../assets/blog-image-1.jpg">
          </div>
          <div class="box ">
            <img src="../assets/blog-image-1.jpg">
          </div>
          <div class="box box-2">
            <img src="../assets/blog-image-1.jpg">
          </div>

        </div>

      </div>

    </div>
    <div class="gifts">

      <div v-motion-slide-visible-once-left class="gift__left">

        <div class="gift__info">
          <h3 v-motion-pop-visible-once>gift 1</h3>
          <p v-motion-pop-visible-once>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum eum,
            aspernatur ut sequi autem dolores
            amet perspiciatis modi? Sunt iste magnam deleniti autem aliquam. Quod minus vitae ex eos!</p>
        </div>

        <div class="gift__img">
          <img src="../assets/joya.svg" alt="">
        </div>

      </div>


      <div v-motion-slide-visible-once-right :delay="200" class="gift__right">
        <div class="gift__img">
          <img src="../assets/joya.svg" alt="">
        </div>
        <div class="gift__info">
          <h3>gift 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rerum eum, aspernatur ut sequi autem dolores
            amet perspiciatis modi? Sunt iste magnam deleniti autem aliquam. Quod minus vitae ex eos!</p>
        </div>
      </div>
    </div>
    <div v-motion-slide-visible-once-left class="experience">

      <div class="container__experience">
        <h2>RECENT CLIENT EXPERIENCE:</h2>

        <div class="experience__right">
          <div class="experience__img">
            <img src="../assets/joya.svg" alt="">
          </div>
          <div v-motion-slide-visible-left :delay="1000" class="experience__info">
            <h3>"The finished jewelry was just beautiful and our staff was thrilled. They wear their jewelry every day
              and we could not be happier with the whole process. We look forward to working with your company for many
              years to come!"</h3>
            <p>-Christy Davis, ELD Engineering Inc.</p>
          </div>
        </div>
      </div>

    </div>
    <div v-motion-pop class="why">
      <div class="title__why">
        <h2>Why to work your project with us?</h2>
      </div>
      <div v-motion-fade-visible-once class="container__why">
        <div v-motion-fade-visible-once class="box box-uno">
          <div class="card">
            <div class="card__img">
              <div class="card__img">
                <img src="../assets/personal.svg" alt="">
              </div>
            </div>
            <h3>Our devolpments are totally personalized:</h3><span>We have
              our own design deparment specialized in the development of personalized jewelry
              products.</span>
          </div>
        </div>
        <div v-motion-fade-visible-once class="box box-dos">
          <div class="card">
            <div class="card__img">
              <img src="../assets/budget-icon.svg" alt="">
            </div>
            <h3>We optimize your Budget.</h3> <span>Optimize your Budget by
              obtaining high-quality and exclusive design pieces.</span>
          </div>
        </div>
        <div v-motion-fade-visible-once class="box box-tres">
          <div class="card">

            <div class="card__img">
              <img src="../assets/delivery-icon.svg" alt="">
            </div>
            <h3>D2D delivery service:</h3>
            <span>
              Efficient deliveries in a timely manner to your company. Our coverage is wide: Mexico, USA
              and LATAM
            </span>

          </div>
        </div>


      </div>
    </div>
    <div class="process" v-motion-pop-visible :delay="1">
      <div class="process__title">
        <h2>Our Easy 6 Step Process</h2>
      </div>
      <div class="process__container">
        <div class="process__item process-uno">
          <div class="process__info">
            <img src="../assets/one.svg" alt="">
            <h3> <span>Answer our questionnarie</span> to learn more about your project</h3>
          </div>
          <div class="process__img">
            <img src="../assets/quiz.svg" alt="">
          </div>
        </div>
        <div class="process__item process-uno">
          <div class="process__info">
            <img src="../assets/two.svg" alt="">
            <h3>A <span>sketch of your project</span> will be made according to the information given</h3>

          </div>
          <div class="process__img">
            <img src="../assets/think.svg" alt="">
          </div>
        </div>
        <div class="process__item process-uno">
          <div class="process__info">
            <img src="../assets/three.svg" alt="">
            <h3>Materials and price options will be reviewed</h3>

          </div>
          <div class="process__img">
            <img src="../assets/review.svg" alt="">
          </div>
        </div>
        <div class="process__item process-uno">
          <div class="process__info">
            <img src="../assets/four.svg" alt="">
            <h3>Design approval will be made within final renderings together with the final Price</h3>

          </div>
          <div class="process__img">
            <img src="../assets/muestra.svg" alt="">
          </div>
        </div>
        <div class="process__item process-uno">
          <div class="process__info">
            <img src="../assets/five.svg" alt="">
            <h3>Sample submission for approval will be send</h3>

          </div>
          <div class="process__img">
            <img src="../assets/deal.svg" alt="">
          </div>
        </div>
        <div class="process__item process-uno">
          <div class="process__info">
            <img src="../assets/six.svg" alt="">
            <h3>Once you accept the sample, full production and parts delivery will be made to
              your company’s doorstep.</h3>

          </div>
          <div class="process__img">
            <img src="../assets/delivery.svg" alt="">
          </div>
        </div>
      </div>

    </div>
    <div class="start-cuestionary">
      <div class="banner">
        <h2>Let’s speed up the process:</h2>
        <h3 class="hover_effect"> Contact tus and answer our questionnaire.</h3>
        <div class="banner__go">
          <img src="../assets/go.svg" alt="">
          <router-link class="router-link link-learn" to="/quiz">Start</router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["scroll"]),
  },
}
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 25s infinite;
}

.bounce-leave-active {
  animation: bounce-in 5s reverse;
}

.bounce-2-enter-active {
  animation: bounce-2-in 25s infinite;
}

.bounce-2-leave-active {
  animation: bounce-2-in 25s reverse;
}


@keyframes bounce-in {
  0% {
    transform: scale(0.8999);
    opacity: 0.6;
  }

  50% {

    transform: scale(0.99999);
  }

  100% {
    transform: scale(0.999999999999999999);
  }
}

@keyframes bounce-2-in {
  0% {
    transform: scale(0.8999);
    opacity: 0.6;
  }

  50% {

    transform: scale(0.99999);
  }

  100% {
    transform: scale(0.999999999999999999);
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.component-fade-enter,
.component-fade-leave-to,
.component-fade-leave-active {

  opacity: 0;
}

/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all 3s ease;
}

.slide-fade-leave-active {
  transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateX(10px);

}



.cover .area {
  position: absolute;
  background: hsl(55, 100%, 98%);
  background: -webkit-linear-gradient(to right, #ff0202, #ff5500);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;

}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #f0f5fc;
  animation: animate 25s linear infinite;
  bottom: -100px;

}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}

.cover {
  width: 100vw;
  height: 100vh;
  padding: 4rem 2rem;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 154, 134, 0.57);

  box-shadow: rgba(246, 99, 99, 0.05) 0px 1px 2px 0px;
}

.container__cover {
  width: 100vw;
  height: 100%;
  margin: auto;
  padding: 5rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  border-radius: 2px;
  background-size: cover;
  background-position: bottom;
}

.cover .container__info {
  max-width: 450px;
  margin-top: 20px;
  z-index: 2;
}

.cover h1 {
  max-width: 500px;
  font-size: 45px;
  text-transform: uppercase;
  font-weight: 900;
  color: #1a1818;
}

.cover h2 {
  text-transform: uppercase;
  font-size: 55px;
  font-weight: 900;
  color: #00295ebd;

}

.cover h3 {
  text-align: left;
  font-size: 1.4rem;
  font-weight: 900;
}

.cover p {
  text-align: justify;
  background-color: #1d69a7c1;
  padding: 3.5em;
  border-radius: 10px 20px 100px;
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.169) 0px 1px 2px, rgba(0, 0, 0, 0.082) 0px 2px 4px, rgba(0, 0, 0, 0.199) 0px 4px 8px, rgba(0, 0, 0, 0.074) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.352) 0px 32px 64px;
}

.cover p h4 {
  color: rgb(0, 0, 0);
  font-weight: 900;
}

.cover p span {
  color: hsl(25, 100%, 82%);
  font-weight: 800;
}

.cover .router-link {
  padding: 10px 40px;
  margin-top: 100px;
  font-size: 21px;
  font-weight: 800;
  border: none;
  color: antiquewhite;
  background-color: #00295ebd;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.169) 0px 1px 2px, rgba(0, 0, 0, 0.082) 0px 2px 4px, rgba(0, 0, 0, 0.199) 0px 4px 8px, rgba(0, 0, 0, 0.074) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.352) 0px 32px 64px;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 1000ms;
}

.cover .router-link:hover {
  box-shadow: 1px 1px 30px -5px #20202885;

}

.cover .link .link-learn {
  margin-left: 5px;
  background-color: rgba(59, 58, 58, 0.881);
}

.cover .container__vector {
  position: relative;

}

.cover .container__vector img {
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 400px;
  animation: move_vector 16s ease-in infinite;

}

/*container__us*/
.us {
  
  width: 100%;
  overflow: hidden;
  height: auto;
  padding-bottom: 0px;
  background-color: #e9e9e9fd;
  transition: all 15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.container__us {
  width: 100%;

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

}

.container__us h1 {
  padding-top: 100px;
  font-size: 55px;
  font-weight: 900;
  color: #21201ec1;
}

.head__text {
  width: 90%;
  margin: 15px;
  background-color: rgba(252, 252, 252, 0.236);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 0.4em 0.22em;
  transition: all 500ms;
  display: flex;


}

.head__text span {
  
  text-align: left;
  font-weight: 500;
  font-size: 1.4rem;
  color: rgba(14, 14, 14, 0.864);
  margin: 1rem 2rem;
  font-style: italic;
  padding: 0.1rem 0.2rem;
}

.head__text:hover {
  box-shadow: 1px 1px 30px -5px #20202832;
}

.container__us p {
  font-weight: 200;
  padding: 5px 30px;

}

.about__container {
  position: relative;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

}

.about__img {
  width: 50%;

  margin: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about__img img{
  width: 20%;
  filter: drop-shadow(40px 80px 45px rgba(0, 0, 0, 0.503));
}
.about__text {
  width: 50%;
}

.about__text ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3.3rem;
  border-radius: 0.5rem;
  background-color: #fcfcfc95;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

}

.about__text ul li {
  color: #19151a;
  font-weight: 700;
  font-size: 1rem;
  list-style: circle;
  list-style-position: inside;
}

.container__home-us-project {
  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: dense;
  grid-auto-rows: 18rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  padding: 3.3rem 3.5rem 1rem;
}

.container__home-us-project .box {
  width: 500px;
  background-color: #f2f2f2bf;
  max-width: 500px;
  margin: 0.3rem 0.2rem 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.container__home-us-project .box-2 {
  margin-top: 50px;
}

.about__img img {
  width: 350px;
}

/* gifts */
.gifts {

  width: 100%;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #fffefc;
}

.gift__left {
  margin-bottom: 6.5rem;
}

.gift__left,
.gift__right {
  display: flex;
  display: flex;
  justify-content: space-around;

}

.gift__info {
  width: 30%;
  height: 30%;
  padding: 1em;
  background-color: #e3e8f24c;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gift__info h3 {
  color: #3f3e3efd;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2.5rem;
}

.gift__info p {
  color: #181818d0;
  padding: 0.8rem;
  line-height: 1.2rem;
  font-size: 1rem;
  font-weight: 400;
}

.gift__img {
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gift__img img {
  width: 350px;
}

.experience {
  padding-top: 0px;
  position: relative;
  width: 100%;
  background-color: #fff7f737;
  display: flex;
  color: rgb(0, 0, 0);


}

.container__experience {
  width: 100%;
  padding: 3em 2em;
  background-color: rgba(248, 243, 251, 0.889);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 600ms cubic-bezier(0.77, 0, 0.175, 1);
}

.container__experience h2 {
  font-size: 1.8rem;
  font-weight: 800;
  padding: 1.4rem;
}

.container__experience:hover {
  color: #181717;
  background-color: rgba(18, 18, 19, 0.034);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.experience__right {
  display: flex;
  align-items: center;
  justify-content: center;

}

.experience__img,
.experience__info {
  width: 50%;

}

.experience__img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.experience__img img {
  width: 300px;
}

.experience__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
}

.experience__info h3 {
  border-radius: 0.3rem;
  padding: 1.3rem 1.5rem;
  color: #181717;
  font-weight: 300;
  text-align: justify;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.experience__info h3:hover {
  color: #181717;
  background-color: #f2f2f2;
  transition: all 300ms;
}

.experience__info p {
  color: rgba(47, 0, 255, 0.835);
  font-weight: 200;
}

.why {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title__why {
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.title__why h2 {
  font-size: 2rem;
  font-weight: 900;
  color: #111113a3;
}

.title__why h3 {
  color: #121313;
}

.container__why {
  display: grid;
  gap: 1.1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 2rem;
}

.box {
  width: 100%;
  margin: 0.1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  width: 400px;
  height: 500px;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.01) 0px 0px 0px 1px;
  transition: all 500ms;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;

}

.card span {
  font-weight: 200;
}

.box .card:hover>h3 {
  color: rgb(241, 238, 238);
}

.box-uno .card:hover {
  background-color: rgba(253, 107, 28, 0.742);
}

.box-dos .card:hover {
  background-color: rgba(28, 114, 253, 0.742);
}

.box-tres .card:hover {
  background-color: rgba(209, 34, 221, 0.742);
}

.card__img {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 2em;
}


.card__img img {
  width: 30%;
  transition: all 500ms;

}

.card__img img:hover {
  transform: scale(1.01);
}

.box-uno .card h3 {
  color: rgba(253, 107, 28, 0.905);
  font-weight: 400;
}

.box-dos .card h3 {
  color: rgba(28, 114, 253, 0.742);
  font-weight: 400;
}

.box-tres .card h3 {
  color: rgba(209, 34, 221, 0.742);
  font-weight: 400;
}

.process {
  padding-top: 100px;
  width: 100%;
  position: relative;
  background-color: #fff9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.process__container {
  width: 100vw;
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: dense;
  grid-auto-rows: 18rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  padding-left: 100px;
  overflow: hidden;
}

.process__title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

.process__title h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #005777b9;
}

.process__item {
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(5, 3, 3, 0.051) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.161) 0px 0px 0px 1px;
  border-radius: 0.5rem;
  margin-bottom: 10px;
}

.process-uno {
  background-color: #e4dfcf12;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}

.process__info {
  width: 60%;
  padding: 1rem 2rem;
}

.process__info h3 {
  font-weight: 500;
}

.process__info h3 span {
  color: rgb(0, 195, 255);
  font-weight: 800;
  font-size: 1rem;
}

.process__info img {
  width: 80px;
}

.process__img {
  width: 40%;
}

.process__img img {
  width: 80%;
}

.start-cuestionary {
  background-color: #e6e6e66f;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
}

.banner {
  position: relative;
  width: 500px;
  height: 200px;
  background-color: #e0e0e0dd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.banner a {
  text-align: center;
  font-size: 18px;
  color: rgba(235, 23, 23, 0.41);
}

.banner h2 {
  text-align: center;
  color: rgb(255, 151, 91);
  font-weight: 600;
}

.banner__go {
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;

}

.banner__go img {
  width: 13%;
}

.banner__go .router-link {
  background-color: #005877;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  color: white;
  text-decoration: none;
}

@media screen and (max-width: 950px) {
  .cover {
    padding-top: 100px;
    height: auto;
  }

  .container__cover {
    width: 100vw;
    padding: 0.3rem;
    justify-content: center;
    align-items: center;
  }

  .cover .container__vector {
    display: none;
  }
  /*us*/
  .container__us{
    background-color: #fff6f3f7;
  }
  .container__us h1{
    color: rgb(26, 26, 26);
  }
  .head__text{
    background-color: #e9e9e9f5;
    box-shadow: rgba(57, 57, 57, 0.706) 0px 22px 70px 4px;
    margin: 3rem 0.1rem ;
  }
  .head__text span{
    color: rgba(54, 45, 45, 0.87);
    font-weight: 800;

  }
  .about__container{
    flex-direction: column;
  }
  .about__img{
    background-color: #12131303;
    margin: 0 0;
  }
  .about__text{
    width: 100vw;
    background-color: rgba(255, 0, 0, 0.088);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about__text ul{
    width: 100%;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    display: flex;
    padding: 2.2rem;

  }
  .about__text ul li{
    background-color: #e6f8ffa4;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0.6rem;
    margin: 0.1rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
  .container__home-us-project {
  width: 100%;
  gap: 2em;
  grid-auto-flow: dense;
  grid-auto-rows: 20em;
  padding: 0.3rem 0.5rem 1rem;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
.container__home-us-project .box{
  width: 300px;
  background-color: #005877;
  width: auto;
}
.gifts {

width: 100vw;
padding: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
background-color: #d4edff;
}



.gift__left{
  display: flex;
display: flex;
flex-direction: column;
justify-content: space-around;
}
.gift__right {
  flex-direction: column-reverse;
}

.gift__info {
width: 100vw;
height: 30%;
padding: 1em;
background-color: #e2e9ff00;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.gift__info h3 {
color: #0e0e0efd;
font-weight: 500;
text-transform: uppercase;
font-size: 1.5rem;
}

.gift__info p {
color: #282828fd;
padding: 0.8rem;
line-height: 1.5rem;
font-size: 1.2rem;
font-weight: 200;
}

.gift__img {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}

.gift__img img {
width: 100%;
}

/* responsive process */

.process {
  background-color: #a967ff86;
}

.process__container {
  gap: 0.5rem;
  grid-auto-flow: dense;
  grid-auto-rows: 18rem;
  padding-left: 0px;
  overflow: hidden;
}

.process__title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2em;
}

.process__title h2 {
  text-align: center;
  font-size: 3.7rem;
  font-weight: 900;
  color: #000000b9;
}

.process__item {
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(5, 3, 3, 0.051) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.161) 0px 0px 0px 1px;
  border-radius: 0.5rem;
  margin-bottom: 10px;
}

.process-uno {
  background-color: #e4dfcf12;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}

.process__info {
  width: 60%;
  padding: 1rem 2rem;
}

.process__info h3 {
  font-weight: 500;
}

.process__info h3 span {
  color: rgb(0, 195, 255);
  font-weight: 800;
  font-size: 1rem;
}

.process__info img {
  width: 80px;
}

.process__img {
  width: 40%;
}

.process__img img {
  width: 80%;
}

}

@keyframes move_vector {
  0% {
    transform: translateY(-10px);
    filter: drop-shadow(80px 110px 75px rgba(0, 0, 0, 0.221));
  }

  25% {
    transform: translateY(60px);
    filter: drop-shadow(80px -10px 75px rgba(0, 0, 0, 0.255));
  }

  100% {
    transform: translateY(-10px);
    filter: drop-shadow(80px 110px 75px rgba(0, 0, 0, 0.306));
  }
}</style>
