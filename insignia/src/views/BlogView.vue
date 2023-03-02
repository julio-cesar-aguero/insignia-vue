<template>
  <div class="blog">
    <div  v-motion-slide-visible-once-right :delay="1000" class="container__img-front">
      <h1>From our blog</h1>
    </div>
    <div class="topics" v-show="details == false">
      <div class="container__topics">
        <div v-motion-slide-visible-once-top  class="topic__item" v-on:click="show_hide">
          <div class="img">
            <img src="../assets/blog-image-1.jpg" alt="">
          </div>
          <div class="topic__description">
            <span>
              Article
            </span>
            <h2>Boost your conversation rate</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officiis vero recusandae
              quisquam nemo enim eius quas temporibus nostrum dolore cumque quis totam, pariatur voluptatem, hic
              molestiae quam cupiditate.</p>
          </div>
          <div class="topic__autor-info">
            <div class="profile__picture">
              <ion-icon name="person"></ion-icon>
            </div>
            <div class="profile__info">
              <h3>Brenna Goyette</h3>
              <span>Mar 10, 2020 4 min read</span>
            </div>
          </div>
        </div>
        <div v-motion-slide-visible-once-top  class="topic__item" v-on:click="show_hide">
          <div class="img">
            <img src="../assets/blog-image-1.jpg" alt="">
          </div>
          <div class="topic__description">
            <span>
              Article
            </span>
            <h2>Boost your conversation rate</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officiis vero recusandae
              quisquam nemo enim eius quas temporibus nostrum dolore cumque quis totam, pariatur voluptatem, hic
              molestiae quam cupiditate.</p>
          </div>
          <div class="topic__autor-info">
            <div class="profile__picture">
              <ion-icon name="person"></ion-icon>
            </div>
            <div class="profile__info">
              <h3>Brenna Goyette</h3>
              <span>Mar 10, 2020 4 min read</span>
            </div>
          </div>
        </div>
        <div v-motion-slide-visible-once-top  class="topic__item" v-on:click="show_hide">
          <div class="img">
            <img src="../assets/blog-image-1.jpg" alt="">
          </div>
          <div class="topic__description">
            <span>
              Article
            </span>
            <h2>Boost your conversation rate</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officiis vero recusandae
              quisquam nemo enim eius quas temporibus nostrum dolore cumque quis totam, pariatur voluptatem, hic
              molestiae quam cupiditate.</p>
          </div>
          <div class="topic__autor-info">
            <div class="profile__picture">
              <ion-icon name="person"></ion-icon>
            </div>
            <div class="profile__info">
              <h3>Brenna Goyette</h3>
              <span>Mar 10, 2020 4 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-det" v-show="details == true">
      <div class="close" v-on:click="show_hide">
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <transition name="slide-fade" mode="out-in">
        <BlogDetail v-show="details == true" />
      </transition>

    </div>

  </div>
</template>

<script>
import BlogDetail from '../components/BlogDetail.vue';
export default {
  data() {
    return {
      details: false,

    }
  },
  methods: {
    show_hide: function () {
      this.details = !this.details;
      console.log("Aran")
    }
  }
  ,
  components: {
    BlogDetail
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .6s ease;
}

.slide-fade-leave-active {
  transition: all .9s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateX(10px);
  opacity: 0;
}

.blog {
  width: 100%;
  height: 150vh;
  padding: 7rem 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  position: relative;
}

.container__img-front {

  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

}
.container__img-front h1{
  font-weight: 100;
  font-size: 2.5rem;
}


.topics {
  width: 100%;
  height: auto;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container__topics {
  position: relative;
  display: grid;
  gap: 5.3rem;
  grid-auto-flow: dense;
  grid-auto-rows: 22rem;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  width: 100%;
  height: 280px;
}

.topic__item {
  position: relative;
  width: 340px;
  height: 580px;
  background-color: #e8eff5f1;
  margin: 0.2em 0.8em;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
.topic__item .img{
  width: 100%;
}
.topic__item .img img{
  width: 100%;
  height: 200px;
}
.topic__autor-info{
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topic__autor-info .profile__picture{
  
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 100%;
}
.topic__autor-info .profile__info{
  width: 65%;
  
}
.topic__autor-info .profile__info h3{
  font-weight: 700;
}
.topic__autor-info .profile__info span{
  font-weight: 300;
}
.topic__description{
  padding: 0.4em 1em;
}
.topic__description span{
  color: rgb(69, 141, 241);
  font-weight: 500;
  font-size: 17px;
}
.topic__description h2{
  font-weight: 200;
  font-size: 1.5rem;
}
.topic__description p{
  color: #463f3f;
}

.container-det {
  margin-top: 100px;
  position: absolute;
  display: flex;
  width: 80%;
  height: 100%;
  background-color: #d83434;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  transition: all 500ms;

}

.close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70px;
  height: 70px;
  cursor: pointer;
  font-size: 2.9em;
}
</style>