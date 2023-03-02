
<template>
    <div v-motion-pop-visible class="quiz">
        <ul v-if="contador < 5" v-motion-pop-visible class="quiz__form">
            <div v-motion-fade-visible-once class="quiz__title">
                <div class="logo">
                    <img src="../assets/insignia.png" alt="">
                </div>
                <h2>{{ preguntas[contador].pregunta }}</h2>
            </div>

            <li v-motion-fade-visible-once class="quiz__item" @click="select(opcion)"
                v-for="(opcion, index) in preguntas[contador].opciones" :key="index">
                {{ opcion }}
            </li>
            <div v-if="contador == 4" class="extra">
                <h3>If you know the exact amount of Budget you’ll have per piece, please put it right
                    below:</h3>
                <div class="extra__input">
                    <input type="number" min="1" v-model="personalCost"><small>DLS</small>

                </div>
                <button class="button" @click="select(personalCost)">Send</button>
            </div>
            <div class="options">
                {{ contador }} / 7
            </div>
        </ul>
        <ul v-else v-motion-pop-visible class="quiz__form">
            <li>
                <h2>{{ cuestionario }}</h2>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            scrollPosition: window.scrollY,
            menuShow: false,
            contador: 0,
            personalCost: 1,
            preguntas: [
                {
                    numero: 1,
                    pregunta: 'What is the purpose of your Project?',
                    opciones: [
                        'Work recognitions for your associates', 'Gifts for work anniversaries', 'Gifts for new year’s eve', 'General gifts for your associates', 'Gifts to encourage and thank your customers', 'Something else'
                    ]
                },
                {
                    numero: 2,
                    pregunta: 'What type or pieces you were looking for?',
                    opciones: [
                        'Rings', 'Necklaces', 'Medallions', 'Cufflinks', 'Tie bars', 'Label pins', 'Watches', 'Money clips', 'Keychains', 'Glass identifiers', 'Ornaments'
                    ]
                },
                {
                    numero: 3,
                    pregunta: 'What is the volumen of pieces you need?',
                    opciones: [
                        '1-100', '101-500', '501-1000', '1001-2000', '+ 2000 mil piezas', 'another amount'
                    ]
                },
                {
                    numero: 4,
                    pregunta: 'Do you have a budget estimate per piece?',
                    opciones: [
                        '1-10 dls', '11-50 dls', '51-100 dls', '101-300 dls', '301-500 dls', '+ de 500 dólares por pieza'
                    ]
                },
            ],
        }

    },
    computed: {
    ...mapState(["cuestionario"]),
  },
    methods: {
        ...mapActions(["addOptionCuestionarioAction"]),
        select(opcion) {
            this.addOptionCuestionarioAction(opcion)
            console.log(opcion)
            this.contador++;
        }
    }

}
</script>

<style scoped>
.quiz {
    background-color: #e5e5e5;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f3fffa19;
    max-width: 800px;
    width: 90vw;
    height: auto;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
}

.quiz__form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f9feffa4;
    padding: 0.6em 1.5em;
    z-index: 90;
}

.quiz__item {
    color: #232121;
    width: 100%;
    height: 40px;
    margin: 0.1em 0.1em;
    padding: 0.6rem 0.8rem;
    background-color: #3937ba0a;
    border-radius: 3px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.127) 0px 0px 0px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 17px;
    transition: all 500ms;
    animation: alternate;
    cursor: pointer;

}

.quiz__item:hover {
    transform: scale(0.9);
    background-color: #f3f3f3cb;
    color: #141313;
    font-weight: 600;
}

.quiz__item-select {}

.quiz__title {
    position: relative;
    border-radius: 1rem;
    margin: 0.5rem 0.6rem 1.6rem;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.131) 0px 4px 12px;
}

.quiz__title .logo {
    position: absolute;
    width: 12%;
    top: -10;
    left: 0;
}

.quiz__title .logo img {
    width: 100%;
    height: 100%;
    opacity: 2.2;
}

.quiz__title h2 {
    color: #141313;
    font-weight: 800;
    margin: 1em;
}

.options {
    padding: 0.5rem 0.7rem;
    font-size: 20px;
    font-weight: 700;
}

.extra {
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.extra h3 {
    font-weight: 800;
}

.extra input {
    margin: 1rem 2rem;
    padding: 1rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 1em;
}

.extra__input {
    display: flex;
    justify-content: center;
    align-items: center;
}

.extra__input small {
    font-weight: 800;
    font-size: 1.2rem;
}

.extra button {
    border: none;
    margin: 0.5rem 0.7rem;
    padding: 1rem 2rem;
    background-color: rgb(118, 60, 243);
    color: whitesmoke;
    font-weight: 700;
    border-radius: 0.2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
}
.extra button:hover{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
</style>
