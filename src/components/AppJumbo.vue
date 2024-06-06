<script>
import store from '../data/store.js'

export default {
    data() {
        return {
            store,
            slideActive: 0
        }
    },
    methods: {
        getImg(percorso) {
            let risultato = new URL('../assets/images/' + percorso, import.meta.url);
            return risultato.href
        },
        next() {
            this.slideActive++
            if (this.slideActive == this.store.slidesJumbo.length) {
                this.slideActive = 0
            }
        },
        back() {
            this.slideActive--
            if (this.slideActive == -1) {
                this.slideActive = this.store.slidesJumbo.length - 1
            }
        },
    },
    mounted() {

    }
}
</script>

<template>
    <section id="jumbo">

        <div class="container-fluid">
            <div class="row">
                <div class="col-5 slideSx">
                    <p class="color-green">17 YEARS OF EXPERIENCE</p>
                    <div class="title">
                        <h2>{{ store.slidesJumbo[slideActive].title }}</h2>
                        <h2 class="color-green">{{ store.slidesJumbo[slideActive].lastWord }}</h2>
                    </div>
                    <div class="d-flex flex-row ">
                        <hr class="line1">
                        <hr class="line2">
                    </div>
                    <p class="">{{ store.slidesJumbo[slideActive].text }}</p>
                    <span><button>Read More</button></span>


                </div>
                <div class="col-7">
                    <img :src="getImg(store.slidesJumbo[slideActive].image)" alt="">
                </div>
            </div>
            <div class="row py-3">
                <div class="col-4 d-flex align-items-center">
                    <p>
                        <span class="px-3">Facebook</span>
                        <span class="px-3">Instagram</span>
                        <span class="px-3">Twitter</span>
                        <span class="px-3">Youtube</span>
                    </p>
                </div>
                <div class="col-4 d-flex justify-content-center align-items-center">
                    <span class="Back btn" @click="back"><i class="fa-solid fa-caret-left"></i></span>
                    <span class="Next btn" @click="next"><i class="fa-solid fa-caret-right"></i></span>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
h2 {
    font-size: 3rem;
    display: inline;
}

img {
    width: 100%;
}

p {
    padding: 0;
    font-size: 0.8rem;
}

hr {
    display: inline-block;
    height: 5px;
    opacity: 1;
    border-radius: 1rem;
    background: rgb(148, 225, 96);
    background: linear-gradient(90deg, rgba(148, 225, 96, 1) 0%, rgba(16, 218, 159, 1) 100%);
}

.line1 {
    width: 15px;
    margin-right: 1rem;
}

.line2 {
    width: 100px;
}

button {
    padding: 0.5rem 1rem;
    background-color: black;
    color: white;
    border: 0px;
    border-radius: 2rem;
}

button:hover {
    background-color: rgba(16, 218, 159, 1);
}

#jumbo {
    background-color: rgb(233, 233, 233);
}


.slideSx {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn {
    background-color: lightgray;
    margin: 0.5rem;
    padding: 0 0.5rem;
    border-radius: 50%;
}

.btn:hover {
    transition: 1s;
    background-color: rgba(16, 218, 159, 1);
}
</style>