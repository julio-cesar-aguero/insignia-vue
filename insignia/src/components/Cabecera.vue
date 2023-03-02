<template>
    <header :style="[menuShow === true ? 'right: 180px' : 'right: 0px']" :class="[scrollPosition > 1 ? 'nav__mod' : '']">
        <div v-motion-fade-visible :delay="400" class="container__header">
            <div class="logo">
                <router-link to="/" class="">
                    <img src="../assets/insignia-3.png" alt="">
                </router-link>

            </div>
            <div class="container__nav">
                <nav :class="[menuShow === true ? 'mv__nav' : '']">
                    <ul v-motion-fade-visible>
                        <li><router-link to="/">HOME</router-link></li>
                        <li><router-link to="/quiz" class="select">QUIZ</router-link></li>
                        <li>
                            <div class="list__button" @mouseenter="hoverUno = true" @mouseleave="hoverUno = false">
                                <a href="#">SPECIAL PROJECTS</a>
                                <img src="../assets/arrow.svg" alt="">
                            </div>
                            <transition name="slide-fade">
                                <Lista v-show="hoverUno" @mouseenter="hoverUno = true" @mouseleave="hoverUno = false"
                                    :dataList="dataListP" ruta="/projects"></Lista>
                            </transition>
                        </li>
                        <li>

                            <div class="list__button" @mouseenter="hoverDos = true" @mouseleave="hoverDos = false">
                                <a href="#">GIFT IDEAS</a>
                                <img src="../assets/arrow.svg" alt="">
                            </div>
                            <transition name="slide-fade">
                                <Lista v-show="hoverDos" @mouseenter="hoverDos = true" @mouseleave="hoverDos = false"
                                    :dataList="dataList" ruta="/gift"></Lista>
                            </transition>

                        </li>
                        <li><router-link to="/blog" href="#">BLOG</router-link></li>
                        <li><router-link to="/contact">CONTACT</router-link></li>

                    </ul>
                </nav>
                <div class="btn__menu" id="btn_menu" @click="menuShow = !menuShow">
                    <font-awesome-icon icon="bars" />

                </div>
            </div>




        </div>

    </header>
</template>

<script>
import Lista from './Lista.vue';
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            scrollPosition: window.scrollY,
            menuShow: false,
            hoverUno: false,
            hoverDos: false,
            dataListP: ['project 1', 'project 2', 'project 3', 'project 4'],
            dataList: ['Corporate gifts', 'Gifts for corporate events', 'Work anniversary gifts', 'Recognition gifts', 'Christmas gifts', 'Incentive gifts']
        }
    },
    components: {
        Lista
    }
    ,
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        ...mapActions(["addScrollPositionAction"]),
        handleScroll(event) {
            this.scrollPosition = event.target.documentElement.scrollTop
            this.addScrollPositionAction(this.scrollPosition)
        }
    },


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
    transform: translateY(-10px);
    opacity: 0;
}

header {
    width: 100%;
    height: 110px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    transition: all 500ms;

}


.container__header {
    background-color: #f2f2f230;
    max-width: 1280px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 10px 20px;
}

header .logo {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
}

.logo img {
    width: 210px;
    padding: 1em;
    filter: drop-shadow(80px 110px 75px rgba(0, 0, 0, 0.221));
}

.container__nav {
    height: 100%;
}



nav {
    height: 100%;
    transition: all 300ms;
    box-shadow: #0f8af5;

}

nav ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul li {
    margin: 0px 20px;
    list-style: none;
}

nav ul li a {
    text-align: center;
    color: #002056d0;
    font-size: 14px;
    text-decoration: none;
    font-weight: 300;
}

.select {
    background-color: #1d69a7c1;
    padding: 10px 30px;
    color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 19px 38px, rgba(0, 0, 0, 0.044) 0px 15px 12px;
}

.nav__mod {
    height: 100px;
    box-shadow: 1px 1px 10px 0px #00000010;
    background-color: #f9f4f4;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.btn__menu {
    width: 50px;
    height: 50px;
    font-size: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 300ms;
    display: none;

}

.menu-desplegable {
    display: flex;
    position: relative;
    background-color: rgb(132, 255, 0);

}

.list__button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

.menu-desplegable a {
    width: 100%;
    height: 100%;
}

.menu-desplegable img {
    width: 20%;
    height: 100%;
}


.btn__menu:hover {
    background-color: #f5f5f5;
}

@media screen and (max-width: 1020px) {
    .container__nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn__menu {
        display: flex;
    }

    .mv__nav {
        right: -180px;

    }

    nav {
        min-height: 100vh;
        background: #e8e8e8f6;
        position: fixed;
        top: 0;
        right: -100%;



    }

    nav ul {
        width: 55vw;
        height: 100vh;
        flex-direction: column;
        padding: 0px 0px;
        overflow: hidden;
    }

    nav ul li {
        width: 100%;
        padding: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    header .logo {
        padding: 0.6em;
    }

    .logo img {
        width: 150px;
        padding: 0.5em;
    }
}
</style>
