<script>
import store from "../data/store.js";
export default {
    name: "cardImg",
    props: {
        immagini: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImg(path) {
            let risultato = new URL(`../assets/images/${path}`, import.meta.url);
            return risultato.href;
        },
    },
}
</script>
<!-- HTML -->
<template>
    <img :src="getImg(immagini.immagine)" alt="" class="cardImg">
</template>
<!-- CSS -->
<style>
.cardImg {
    width: 18rem;
    height: 18rem;
    border-radius: 5px;
    transition: transform 0.3s ease;
    margin: 5px;
    background: linear-gradient(to right, #64CE74, #21D8A6);
}

.cardImg:hover {
    transform: scale(1.2);

}
</style>