<script>
import store from '../data/store.js'

export default {
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>

    <header>
        <div class="container-fluid">
            <div id="information" class="row d-flex align-items-center">
                <div class="col-6">
                    <i class="fa-solid fa-phone px-3"></i>
                    <span class="px-3">(001)88451234</span>
                    <span class="px-3">88455438</span>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <i class="fa-brands fa-facebook-f px-3"></i>
                    <i class="fa-brands fa-twitter px-3"></i>
                    <i class="fa-brands fa-pinterest-p px-3"></i>
                </div>
            </div>
            <div id="navBar" class="row py-3 d-flex align-items-center">
                <div class="col-3 px-3">
                    <img src="../assets/images/cropped-Group-39-2x.png" alt="">
                </div>

                <div class="col-6 px-3 d-flex justify-content-center align-items-center">
                    <ul class="d-flex m-0">
                        <li v-for="link in store.linkHeader" class="px-2"><a href="">{{ link }}</a></li>
                    </ul>
                </div>
                <div class="col-3 px-3 d-flex justify-content-end align-items-center">
                    <button class="mx-3">Purchase</button>
                    <span><i class="fa-solid fa-magnifying-glass color-green"></i></span>
                </div>
            </div>
        </div>
    </header>

</template>

<style scoped>
img {
    width: 100%;
}

a {
    text-decoration: none;
    color: unset;
}

button {
    padding: 0.5rem 1rem;
    background: rgb(148, 225, 96);
    background: linear-gradient(90deg, rgba(148, 225, 96, 1) 0%, rgba(16, 218, 159, 1) 100%);
    color: white;
    border: 0px;
    border-radius: 2rem;
}

button:hover {
    transition: 1s;
    background: #222;
}


header {
    height: 10rem;
    position: sticky;
    z-index: 999;
    width: 100%;
    top: 0px;
}

#information {
    height: 3rem;
    background-color: #222;
    color: white;
}

#navBar {
    height: 7rem;
    background-color: white;
    color: black;
}

#navBar img {
    width: 200px;
}

#navBar li {
    list-style: none;
}
</style>