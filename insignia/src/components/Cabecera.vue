<template>
    <header :class="[scrollPosition > 3 ? 'nav__mod' : '']">
        <div class="container__header">
            <div class="logo">
                <img src="../assets/insignia.png" alt="">
            </div>
            <div class="container__nav">
                <nav>
                    <ul>
                        <li><a class="select" href="#">HOME</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">HOW IT WORK</a></li>
                        <li><a href="#">CONTACT US</a></li>

                    </ul>
                </nav>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    data() {
        return {
            scrollPosition: window.scrollY
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            this.scrollPosition = event.target.documentElement.scrollTop;
        }
    }
}
</script>

<style>
header {
    background: white;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    transition: all 400ms;

}

.container__header {
    max-width: 1280px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0 20px;
}

header .logo {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    width: 110px;
}

.container__nav {
    position: relative;
    height: 100%;
}

nav {
    height: 100%;
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
    color: #373737;
    font-size: 14px;
    text-decoration: none;
}

.select {
    background-color: #359EF9;
    padding: 10px 30px;
    color: white;
    border-radius: 20px;
}

.nav__mod {
    height: 70px;
    box-shadow: 1px 1px 10px 0px #00000010;
    background-color: white;
}
</style>
