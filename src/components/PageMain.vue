<script>
import store from "../data/store.js";
import cardImg from "./cardImg.vue";


export default {
  components: {
    cardImg
  },
  data() {

    return {


      store,
      numero: 0,
      numMax: 280,
      number: 0,
      numbMax: 3600,
      percent: 0,
      maxPercent: 100,


    }
  },
  methods: {

    startAnimations() {

      const interval1 = setInterval(() => {
        if (this.numero !== this.numMax) {
          this.numero++;
        } else {
          clearInterval(interval1);
        }
      }, 50);

      const interval2 = setInterval(() => {
        if (this.number !== this.numbMax) {
          this.number++;
        } else {
          clearInterval(interval2);
        }
      }, 1);

      const interval3 = setInterval(() => {
        if (this.percent !== this.maxPercent) {
          this.percent++;
        } else {
          clearInterval(interval3);
        }
      }, 120);
    },
    getImg(path) {
      let risultato = new URL(`../assets/images/${path}`, import.meta.url);
      return risultato.href;
    },

  }
}

</script>

<template>
  <div class="container m-0 d-flex flex-row justify-content-between mt-5">
    <div class="row">
      <div class="col-6">
        <div class="imgPerson1 shadow"></div>
        <div class="cardGreen shadow"></div>
        <div class="imgPerson2 shadow"></div>
      </div>
    </div>

    <div class="row ms-5 m-0">
      <div class="col-12 m-0">
        <h1 style="font-size: 3rem;">Learn more about our <h1 style="color: #00D9A6; font-size: 3rem;">missions</h1>
        </h1>

        <div class="d-flex flex-row">
          <hr class="hr1">
          <hr class="hr2 ms-3">
        </div>

        <div>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.Separated they live in Bookmarksgrove.</p>
        </div>

        <div>
          <button class="btn-green ">READ MORE</button>
        </div>

      </div>
    </div>
  </div>



  <div class="container m-0 mt-5 d-flex flex-row">
    <div class=" row">

      <div class="col-7" style="margin-top: 20rem;">

        <div class="d-flex flex-row mt-5">
          <hr class="hr1">
          <hr class="hr2 ms-3">
        </div>
        <h1 style="font-size: 3.5rem;">Our recent <span style="color: #00D9A6; font-size: 3.5rem;">web designs</span> &
          some examples of
          past <h1 style="color: #00D9A6; font-size: 3.5rem;">projects</h1>
        </h1>

        <div class="d-flex flex-row">
          <hr class="hr1">
          <hr class="hr2 ms-3">
        </div>
      </div>

      <div class="col-5" style="margin-top: 30rem;">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
          texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
          ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      </div>
    </div>
  </div>

  <div class="container mt-4">

    <div class="row">
      <div class="col-12">


        <cardImg v-for="img in store.immagini" :immagini="img" />

      </div>
    </div>




  </div>

  <div class="mt-5 d-flex justify-content-center">
    <button class="btn-green2 ">READ MORE</button>
  </div>



  <div class="container-fluid m-0 mt-5">
    <div class="row" @click="startAnimations">
      <div class="col-6">

        <div class="cardGreen2 ms-5 shadow">

          <div class=" d-flex flex-column justify-content-center">
            <div style="font-size: 8rem; color: white; margin-left: 15rem; margin-top: 5rem;">{{ numero }}</div>
            <span style="font-size: 2rem; color: white; margin-left: 17rem; margin-top: -2.5rem;">PROJECTS</span>
          </div>

          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
              <div style="font-size: 3rem; color: white; margin-top: 5rem; margin-left: 5rem;"> +{{ number }}</div>
              <span style="font-size: 1rem; color: white; margin-left: 5rem;">USERS' COMMENTS</span>
            </div>

            <div class="d-flex flex-column">
              <div style="font-size: 3rem; color: white; margin-top: 5rem;">{{ percent }}%</div>
              <span style="font-size: 1rem; color: white; margin-right: 15rem;">HAPPY CLIENTS</span>
            </div>
          </div>


        </div>
        <div class="imgPerson3 ms-5 shadow"></div>


        <div class="col-6">
          <div class="containerWhite shadow">
            <h1 class="ms-5" style="font-size: 3rem;">We <span style="color: #00D9A6;">Love</span> What</h1>
            <h1 class="ms-5" style="font-size: 3rem;">We Do</h1>

            <div class="d-flex flex-row ms-5">
              <hr class="hr1">
              <hr class="hr2 ms-3">
            </div>

            <div class="ms-5">
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.Separated they live in Bookmarksgrove. Far far away, behind the word mountains. large language
                ocean. far from the countries Vokalia and Consonantia</p>
            </div>

            <div class="ms-5">
              <ul style="list-style: none;">
                <li class="mb-3"> <i class="fa-solid fa-check text-success"></i> far far away, behind the word mountains
                </li>
                <li class="mb-3"> <i class="fa-solid fa-check text-success"></i> large language ocean</li>
                <li> <i class="fa-solid fa-check text-success"></i> far from the countries Vokalia and Consonantia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid mt-5">
    <div class="row" style="margin-top: 20rem;">

      <div class="col-5">
        <h1 style="font-size: 4.5rem;">With <span style="color: #00D9A6;">Live Chat</span>
          <span style="color: #00D9A6;"> 24/7</span> Support
        </h1>

        <div class="d-flex flex-row ">
          <hr class="hr1">
          <hr class="hr2 ms-3">
        </div>

        <div>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
          </p>
        </div>
      </div>


      <!-- ----CARD BLACK----- -->
      <div class="col-2 cardBlack p-0 shadow">

        <div class="mt-3" style="width: 100%; height: auto; background-color: white;">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h2>DESIGNING</h2>
            <p>All Designs</p>
          </div>
        </div>

        <p class="text-white d-flex justify-content-center align-items-center ">
          <span style="font-size: 2.5rem;">$10</span> /Design
        </p>

        <div class="mt-3 rounded-bottom" style="width: 100%; height: 10rem; background-color: white;">
          <div>
            <ul style="list-style: none; font-size: 0.9rem;">
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Creative Design Enabled</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Vibrant Color Usage</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Eye Catching Design</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Extreme Typography</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Exceptional Design</li>
            </ul>
          </div>
        </div>
      </div>

      <!------- CARD GREEN----- -->
      <div class="col-2 cardGreen3 p-0 shadow ms-4">

        <div class="mt-3" style="width: 100%; height: auto; background-color: white;">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h2>DEVELOPMENT</h2>
            <p>WordPress project</p>
          </div>
        </div>

        <p class="text-white d-flex justify-content-center align-items-center ">
          <span style="font-size: 2.5rem;">$15</span> /Design
        </p>

        <div class="mt-3 rounded-bottom" style="width: 100%; height: 10rem; background-color: white;">
          <div>
            <ul style="list-style: none; font-size: 0.9rem;">
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Creative Design Enabled</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Vibrant Color Usage</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Eye Catching Design</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Extreme Typography</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Exceptional Design</li>
            </ul>
          </div>
        </div>
      </div>

      <!------- CARD BLACK----- -->
      <div class="col-2 cardBlack p-0 shadow ms-4">

        <div class="mt-3" style="width: 100%; height: auto; background-color: white;">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h2>SEO</h2>
            <p>Web Products</p>
          </div>
        </div>

        <p class="text-white d-flex justify-content-center align-items-center ">
          <span style="font-size: 2.5rem;">$10</span> /Product
        </p>

        <div class="mt-3 rounded-bottom" style="width: 100%; height: 10rem; background-color: white;">
          <div>
            <ul style="list-style: none; font-size: 0.9rem;">
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Creative Design Enabled</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Vibrant Color Usage</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Eye Catching Design</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Extreme Typography</li>
              <li class="mt-2"> <i class="fa-solid fa-check text-success"></i> Exceptional Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--------CONTAINER JUMBO--------->

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">

        <div class="containerJumbo"></div>

        <div class="backBlack"></div>

        <div class="d-flex flex-column justify-content-center align-items-center" style="margin-top: -40rem;">
          <i class="fa-solid fa-quote-left" style="font-size: 5rem; color: #00D9A6;"></i>
          <p class="mt-5" style="color: white; font-size: 2rem; width: 900px;">When it comes to barbequing, there are
            two main
            schools of thought
            for the techniques
            that you can use.
            Freshly scrambled eggs with applewood smoked bacon - are amazing!
          </p>

          <div class="imgClient shadow2 mt-5"></div>

          <h2 class="mt-5" style="color: #00D9A6;">LISSA DURBIN</h2>

          <p class="text-white mt-1" style="font-size: 1.5rem;">Client</p>

        </div>
      </div>
    </div>
  </div>






























</template>

<style></style>