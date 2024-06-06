<!-- JS -->
<script>
import store from "../data/store.js";

export default {

    name: "card",

    props: {
        card: Object
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
    <div class="card col-2">
        <div class="img">
            <img :src="getImg(card.image)" alt="">

        </div>

        <div class="testo bg-white m-auto shadow p-3 mb-5 bg-body-tertiary rounded">
            <p class=" text-center p-2">{{ card.data }}</p>

            <h6 class=" text-center p-2"> <i class="fa-solid fa-circle"></i>{{ card.titolo }}
            </h6>
        </div>



    </div>
</template>

<!-- CSS -->
<style scoped>
img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 6px 6px 25px 0 rgba(0, 0, 0, .35);
    text-shadow: 0 0 0 rgba(0, 0, 0, .3);

}



.testo {
    width: 25rem;
    position: absolute;
    top: 17rem;
    left: 2.5rem;
    border-radius: 0.5rem;
    transition-duration: 0.8s;
    color: gray;

}


.testo p {
    font-size: 0.8rem;
    margin-top: 2rem;
}

.fa-solid {
    margin-right: 0.5rem;
    font-size: 0.5rem;
    color: rgb(1, 217, 166);
}

h6 {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* all'hover sulla card succedono una serie fi cose */

.col-2:hover {
    .testo {
        color: white;
        transition-duration: 1s;
        background: linear-gradient(to right, #64CE74, #21D8A6);
        transform: translateY(1rem);
    }

    .testo p {
        color: white;
    }

    .img {
        transform: scale(1.02);
    }

    .fa-solid {
        color: white;
    }

}
</style>