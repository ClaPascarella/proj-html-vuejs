<!-- JS -->
<script>
import store from "../data/store.js";

export default {

    name: "cardImage",

    props: {
        img: Object
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

    <div class="img">
        <img :src="getImg(img.image)" alt="">





    </div>
</template>

<!-- CSS -->
<style scoped>
.img {
    height: 7rem;

}
</style>