<script>
import store from '../data/store.js'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="services" class="container-fluid">
        <div class="row">
            <div class="col-5 py-5">
                <h2>We Aew Here</h2>
                <h2>To</h2>
                <h2>Make Your</h2>
                <h2 class="color-green">Website</h2>
                <h2>look More</h2>
                <h2 class="color-green">Elegant</h2>
                <h2>And Stulish!</h2>
                <hr>
                <button>VIEW ALL</button>
            </div>
            <div class="col-7">
                <div class="row">

                    <div class="col-5 cardServices">
                        <i class="fa-solid fa-gauge-high color-green"></i>
                        <h3>Speed <br> optimization</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia
                            Separated...</p>
                    </div>

                    <div class="col-5 cardServices">
                        <i class="fa-solid fa-cloud color-green"></i>
                        <h3>Cloud <br> Solutions</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                    </div>

                    <div class="col-5 cardServices">
                        <i class="fa-solid fa-mobile-screen-button color-green"></i>
                        <h3>Website <br> Design</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                    </div>

                    <div class="col-5 cardServices">
                        <i class="fa-solid fa-stopwatch color-green"></i>
                        <h3>Online <br> Marketing</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
h2 {
    font-size: 3rem;
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

#services {
    background-color: rgb(240, 240, 240);
}

hr {
    width: 100px;
    height: 0.5rem;
    opacity: 1;
    border-radius: 1rem;
    background: rgb(148, 225, 96);
    background: linear-gradient(90deg, rgba(148, 225, 96, 1) 0%, rgba(16, 218, 159, 1) 100%);
}

.cardServices {
    background-color: white;
    color: black;
    margin: 1rem;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.cardServices:hover {
    transition: 1s;
    background: rgb(148, 225, 96);
    background: linear-gradient(193deg, rgba(148, 225, 96, 1) 0%, rgba(16, 218, 159, 1) 99%);
    color: white;
}

.cardServices:hover i {
    color: white;
}

.cardServices i {
    font-size: 3.5rem;
}
</style>