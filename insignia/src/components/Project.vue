<template>
    <div class="container__especial">
        <div v-motion-pop-visible  class="container__principal-project">
            <div class="project__description">
                <h2>Project 2: Custom Championship Rings</h2>
                <p>Championship rings aren’t given for participation. These high-profile, custom pieces celebrate
                    athletes
                    who persevere through blood, sweat and tears to emerge victorious.

                    ​</p>

            </div>
            <div class="project__image">
                <img src="../assets/image.png" alt="">
            </div>
            <div class="project__tecnical">
                <span>​


                    <h4>Items:</h4> Men's Championship ring
                    <h4>Business Type:</h4> Sports team
                    <h4>Volume:</h4> approximately 30 annually
                    <h4>Purpose:</h4> Sports team championship
                    <h4>Budget:</h4> Luxury (over $1000)
                    <h4>Materials:</h4> White gold, rubies, diamonds and enamel.
                </span>
            </div>
        </div>
        <div v-motion-pop-visible  class="container__details-project">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            
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
.container__especial {
    width: 100%;
    background-color: rgba(255, 98, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container__principal-project {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.project__description {
    width: 30%;
    min-height: 400px;
    background-color: rgba(25, 24, 24, 0.066);
    padding: 0.5rem 0.7rem;
    margin: 0.8rem;
    border-radius: 0.6em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.project__description h2 {
    color: rgba(0, 0, 0, 0.363);
    font-weight: 700;
}

.project__description p {
    font-size: 1.3rem;
    font-weight: 300;
    padding: 1.8rem 0.9rem;
    color: rgba(0, 0, 0, 0.911);
}

.project__description h4 {
    color: rgba(0, 0, 0, 0.455);
    font-weight: 500;
    padding: 0.2rem 0.4rem;
}

.project__image {
    margin-top: 0px;
    background-color: rgba(0, 0, 0, 0.03);
    width: 30%;
    min-height: 400px;
    border-radius: 0.4em;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.project__image img {
    width: 100%;

    margin: 1em;
    filter: drop-shadow(30px 60px 75px rgba(0, 0, 0, 0.489));
}

.project__tecnical {
    width: 35%;
    min-height: 400px;
    background-color: rgba(25, 24, 24, 0.066);
    padding: 1em;
    margin: 0.8rem;
    border-radius: 0.6em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.project__tecnical h4 {
    color: rgba(0, 0, 0, 0.455);
    font-weight: 500;
    padding: 0.2rem 0.4rem;
}

.project__tecnical span {
    font-weight: 200;
    padding: 0.1rem 0.8rem;
}

.container__details-project {
    width: 100%;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: dense;
    grid-auto-rows: 18rem;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    padding: 6.3rem 3.5rem 1rem;
}

.container__details-project .box {
    background-color: #f2f2f27e;
    max-width: 500px;
    margin: 0.3rem 1.2rem 0.5rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}


/* responsive */
@media screen and (max-width: 1020px) {
.container__principal-project{
    flex-direction: column;
}

.project__description {
    width: 100%;
    min-height: 100px;
    padding: 1.5rem 1.7rem;
}

.project__description h2 {
    color: rgba(0, 0, 0, 0.363);
    font-weight: 700;
}

.project__description p {
    font-size: 1.5rem;
    font-weight: 200;
    padding: 1.8rem 0.9rem;
}

.project__description h4 {
    color: rgba(0, 0, 0, 0.455);
    font-weight: 500;
    padding: 0.2rem 0.4rem;
}

.project__image {
    margin-top: 0px;
    background-color: rgba(0, 0, 0, 0.03);
    width: 100%;
    min-height: 400px;
    border-radius: 0.4em;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project__image img {
    width: 80%;

    margin: 1em;
    filter: drop-shadow(30px 60px 75px rgba(0, 0, 0, 0.489));
}

.project__tecnical {
    width: 100%;
    min-height: 400px;
    background-color: rgba(25, 24, 24, 0.066);
    padding: 1.5em;
    margin: 0.8rem;
    border-radius: 0.6em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project__tecnical h4 {
    color: rgba(0, 0, 0, 0.455);
    font-weight: 500;
    padding: 0.2rem 0.4rem;
}

.project__tecnical span {
    font-weight: 200;
    padding: 0.1rem 0.8rem;
}

}
</style>