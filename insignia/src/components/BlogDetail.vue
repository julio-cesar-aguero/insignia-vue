<template>
  <transition name="slide-fade">
    <div class="blog__detail">
      <div class="blog__item-container">
        <div class="blog__item">
          <div class="details__autor">
            <div class="img__autor">
              <img src="" alt="">
            </div>
            <small>LeCarie Whitfield</small>
            <div class="icon"></div>
            <span>Jan 22, 2020</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {

}
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
    {
    transform: translateX(10px);
    opacity: 0;
}
.blog__detail {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: all 500ms;
  animation: infinite;
}

.blog__detail:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.blog__item-container {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  position: relative;
  border-radius: 0.1rem;
  width: 90%;
  height: auto;
  background-color: rgba(223, 255, 255, 0.103);
  padding: 1em 1em;
  transition: all 500ms;
  animation: infinite;
}

.blog__item-container:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.blog__item {
  display: flex;
  flex-direction: column;
}

.details__autor {
  display: flex;
  height: 10%;
  padding: 0.3em;
  justify-content: space-between;
}

.details__autor small {
  font-weight: 400;
}

.details__autor span {
  font-size: 0.8em;
  font-weight: 700;
}
</style>