<template>
    <div class="PieDePagina__container">
        <footer id="pie">
            <div id="redes">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <div id="encabezado-pie">

                <h3>Contact us with a click

                </h3>
                <span>An advisor will give you personalized attention.</span>
                <div class="iconos">
                    <a href="mailto:marketing@rodaccesorios.com"> <i class="far fa-envelope"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=+523318954279&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20regalos%20corporativos"
                        target="_blank"> <i class="fab fa-whatsapp"></i></a>
                </div>
                <a id="link-terminos" @click="to" target="_blank">Check out our privacy policies</a>

            </div>
            <div id="info">
                <span>Insignia meaningful jewelry for brands</span>
                <h4>Contact:</h4>
                <a href="mailto:marketing@rodaccesorios.com"> <i class="far fa-envelope"></i>
                    marketing@rodaccesorios.com</a> <br>
                <a href="https://api.whatsapp.com/send?phone=+523318954279&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20regalos%20corporativos"
                    target="_blank"> <i class="fab fa-whatsapp"></i> 33 1895 4279</a>
                <h4>Location:</h4>
                <span>Mexico</span>
                <h4>Service:</h4>
                <span>internacional</span>
            </div>

        </footer>
    </div>
</template>
    
<script>
import { mapActions, mapState } from "vuex";
export default {
    name: 'PieDePagina'
    ,
    computed: {
        ...mapState(["scroll"]),
        double() {
            return this.value * 2;
        }
    },
    methods: {
        to() {

            // let route = this.$router.resolve('/link/to/page'); // This also works.
            window.open("https://www.rodselect.com/terminos", '_blank');
        }

    }
}
</script>
    
<style scoped>
.PieDePagina__container {
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    z-index: 90;
    background-image: linear-gradient( 135deg, #cefffd61 10%, #ffffff32 100%);
    box-shadow: rgba(0, 115, 255, 0.364) 0px -50px 36px -28px inset;
}

#pie {
    /*background: #C6BFC2;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

#pie a {
    text-decoration: none;
    color: rgb(131, 82, 82);
}

#encabezado-pie {
    margin: 20px;
    text-align: center;
}

h3 {
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    font-style: italic;
    padding: 1rem 0.5rem
}

#encabezado-pie span{
    font-weight: 300;
    padding: 0.3rem;
}

#encabezado-pie .iconos {
    display: flex;
    justify-content: space-around;
}

#encabezado-pie i {
    font-size: 3em;
}

#link-terminos {
    margin: 0.3em;
    font-size: 1em;
    font-weight: 400;
    transition: all 300ms;
}

#link-terminos:hover {
    text-decoration: underline;
    font-weight: 600;


}

#info {
    margin: 20px;
    text-align: center;
}

#redes {
    width: 100%;
    padding: 120px 2rem 10px;
    background-color: #f2f9ff5b;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}

#redes ion-icon {
    margin: 0 3rem;
    font-size: 1.7rem;
    color: black;
}

.network {
    display: flex;
    justify-content: space-around;
}

.network a {
    font-size: 3em;
    transition: all 300ms;
}

.network a:hover {
    transform: scale(1.1);
}
</style>