<!-- JS -->
<script>
import store from "../data/store.js";
import card from "./card.vue";
import cardImage from "./cardImage.vue";

export default {
    name: "PageFooter",
    components: {
        card,
        cardImage,
    },

    data() {
        return {
            store,
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
    <footer>
        <!-- titolo -->
        <h2 class=" text-center p-3">
            Latest News & Our <span class="verdeAcqua">Blog</span>
        </h2>
        <div class="d-flex flex-row centro p-2">
            <hr class="hr1">
            <hr class="hr2 ms-3">
        </div>



        <!-- tre carte -->
        <div class="col-12 d-flex">
            <card v-for="card in store.cards" :card="card" />
        </div>



        <!-- primo bottone -->
        <button type="button" class="btn nero btn-lg text-white">VEIW ALL POST</button>



        <!-- due carte -->
        <div class="col-12 centro padding-top ">
            <div class="card-center nero">
                <p class="titolo1 text-center text-white">Are You Ready?</p>
                <h3 class="titolo2 text-center text-white">Start a New Project</h3>
                <div class="input-group radius">
                    <input class="input-text" type="text" placeholder="Enter Your Email Address">
                    <button class="input-btn">SUBMIT</button>
                </div>
            </div>
            <div class="card-center verde">
                <p class="titolo1 text-center text-white">What Are You Waiting for?</p>
                <h3 class="titolo2 text-center text-white">Let's Talk About Work</h3>
                <button type="button" class="btn nero btn-lg text-white mt-5">START NOW</button>
            </div>
        </div>



        <!-- immagini pubblicità -->
        <div class="col-12 padding-t-b grigio">
            <cardImage v-for="img in store.images" :img="img" />
        </div>



        <!-- quattro colonne con info -->
        <div class="col-12 padding-t-b">

            <div class="col">
                <!-- <img src="../assets/images/cropped-Group-39-2x.png" alt=""> -->
                <img :src="getImg(store.info[0].image)" alt="">
                <p class="mt-3">{{ store.info[0].didascalia }}</p>
            </div>


            <div class="col">
                <h5 class="mb-1 text-end"> <b>{{ store.info[1].titolo }}</b> </h5>

                <div class="d-flex flex-row">
                    <hr class="hr1">
                    <hr class="hr2 ms-3">
                </div>

                <ul>
                    <li class="mt-2" v-for="link in store.info[1].links">
                        {{ link }}
                    </li>
                </ul>

            </div>


            <div class="col">

                <h5 class=" text-end"> <b>{{ store.info[2].titolo }}</b> </h5>

                <div class="d-flex flex-row">
                    <hr class="hr1">
                    <hr class="hr2 ms-3">
                </div>

                <p class="mt-4"> {{ store.info[2].indirizzo }}</p>
                <p class="mt-4"> {{ store.info[2].email }}</p>
                <p class="mt-4"> {{ store.info[2].cellulare }}</p>

            </div>


            <div class="col">

                <h5 class="text-end"> <b>{{ store.info[3].titolo }}</b> </h5>

                <div class="d-flex flex-row mb-3">
                    <hr class="hr1">
                    <hr class="hr2 ms-3">
                </div>

                <!-- <img class="map mt-4" src="../assets/images/map.png" alt=""> -->
                <img class="w-100" :src="getImg(store.info[3].image)" alt="">
            </div>
        </div>

        <!-- fascione nero con social  -->
        <div class="col-12 nero p-5">
            <div class="col-3">
                <span class="bianco-trasp fs-6">c 2020 PHLOX BUSINESS THEME</span>
            </div>
            <div class="col-8"></div>
            <div class="col-1 col-icons">
                <a href="#">
                    <i class=" c-nero fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                    <i class=" c-nero fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                    <i class=" c-nero fa-brands fa-pinterest-p"></i>
                </a>
            </div>
        </div>


    </footer>
</template>




<!-- CSS -->
<style scoped>
/* colori */
.verdeAcqua {
    color: rgb(1, 217, 166);
}


.c-nero {
    color: #454545;
}

.verde {
    background: linear-gradient(to left, #64CE74, #21D8A6);
}

.nero {
    background: linear-gradient(to right, #393939, #000000);

}

.grigio-scuro {
    background: linear-gradient(to right, #393939, #202020);
    color: rgba(255, 255, 255, 0.436);

}

.bianco-trasp {
    color: rgba(255, 255, 255, 0.436);

}

.grigio {
    background-color: rgb(249, 249, 249);
}


/* ------------------------------ */



/* margini e padding */

.bord {
    border-bottom: 0.2rem solid rgb(1, 217, 166);
}

.padding-top {
    padding-top: 10rem;
}

.padding-t-b {
    padding: 6rem 0;
}

.radius {
    border-radius: 2rem;
}


.titolo1 {
    margin-top: 2rem;
}

.titolo2 {
    margin-bottom: 3rem;
}

/* ----------------------------------------- */



/* hr */
.hr1 {
    border: none;
    width: 1rem;
    height: 0.3rem;
    background: linear-gradient(to right, #64CE74, #21D8A6);
    opacity: 1;
    border-radius: 2rem;
    margin-right: 0.3rem;
}

.hr2 {
    border: none;
    width: 3rem;
    height: 0.3rem;
    background: linear-gradient(to right, #64CE74, #21D8A6);
    opacity: 1;
    border-radius: 2rem;
}

/* -------------------------------------- */



/* colonne */
.col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.col {
    width: calc((100% - 3rem) / 4);
    padding: 1.5rem;
    border: 0.01rem solid white;
    min-height: 20rem;
}

.col-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: end;
}

/* -------------------------------------- */



/* card */
.card {
    width: calc((100% - 5rem) / 3);
    margin: 0.7rem;
    border-radius: 0.5rem;
    padding-bottom: 10rem;
    border: none;

}

.card-center {
    width: calc((100% - 3rem) / 2);
    border-radius: 0.8rem;
    height: 20rem;
    margin: 0.7rem;
    padding: 2rem;
    box-shadow: 6px 6px 25px 0 rgba(0, 0, 0, .35);
    text-shadow: 0 0 0 rgba(0, 0, 0, .3);

}

/* -------------------------------- */



/* bottoni */
.btn {
    border-radius: 2rem;
    font-size: 0.8rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    margin: auto;
    box-shadow: 6px 6px 25px 0 rgba(0, 0, 0, .35);
    text-shadow: 0 0 0 rgba(0, 0, 0, .3);

}

.btn:hover {
    background: linear-gradient(to right, #64CE74, #21D8A6);

}

/* ------------------------------- */



/* impaginazione centrale */
.centro {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

/* ------------------------------ */



/* disposizione sulla pagina di  immagini pubblicità */
.img {
    width: calc((100% - 3rem) / 6);
    margin: 0.5rem;
    padding: 2rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* -------------------------------- */



/* nascondo decorazione unordered list */
li {
    list-style: none;
}

/* ------------------------------- */



/* input  */
.input-group {
    width: 25rem;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #606060;
    margin: auto;
}

.input-text {
    background-color: #606060;
    border: 0.01rem solid #606060;
    width: 19rem;
}

.input-btn {
    background-color: #606060;
    border: 0.01rem solid #606060;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.33);

}
</style>