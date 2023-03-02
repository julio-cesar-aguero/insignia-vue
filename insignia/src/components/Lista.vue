<template>
    <ul  class="list__show">

        <li class="list__inside" v-for="(item, index) of dataList" :key="index">
            <a class="a" @click.prevent="to(item, ruta)" :seccion="item">{{ item }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['dataList', 'ruta'],
    methods: {
        to(item, ruta) {
            this.$store.dispatch("addOptionProjectAction", item);
            this.$router.push(ruta);
        }
    }
}
</script>

<style scoped>
.list__show {
    animation: alternate;
    transition: all 5s;
    
    background-color: #f2f2f2;
    position: absolute;
    width: 230px;
    height: auto;
    margin: 0;
    padding: 0.1rem 0.2rem;
    top: 70px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 90;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: rgba(225, 17, 17, 0.05) 0px 0px 0px 1px;
}

.list__inside {
    
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.list__inside:hover {}

.list__inside--more {
    background-color: #003057;

}

.list__inside--more .a {
    color: #f5f5f5;
}

.list__inside a {
    font-size: 0.8rem;
    border-radius: 5px;
    width: 100%;
    padding: 0.2rem 1rem;
    color: #003057;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list__inside a:hover {
    background: #2a9fff;
    color: #f2f2f2;
    font-weight: 500;
}

@media screen and (max-width: 1020px) {
    .list__show {
        width: 180px;
        position: relative;
        background: transparent;
        margin: 0;
        transition: all 3s;
        top: 0;
        overflow: hidden;
    }

    .list__inside {
        width: 180px;
        padding: 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .a{
        width: 100%;
    }
}
</style>