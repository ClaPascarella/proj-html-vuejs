<script></script>

<template>
  <div class="container m-0 d-flex flex-row justify-content-between">
    <div class="row">
      <div class="col-6">
        <div class="imgPerson1 "></div>
        <div class="cardGreen"></div>
        <div class="imgPerson2"></div>
      </div>
    </div>

    <div class="row ms-5 m-0">
      <div class="col-12 m-0">
        <h1>Learn more about our <h1 style="color: #00D9A6;">missions</h1>
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
</template>

<style>
.imgPerson1 {
  background-image: url(../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg);
  background-size: cover;
  width: 600px;
  height: 500px;
  border-radius: 25px;
  margin-left: 8rem;
  top: 2rem;
  position: relative;
  z-index: 6;
}

.cardGreen {
  background: linear-gradient(to right, #64CE74, #21D8A6);
  background-size: cover;
  width: 600px;
  height: 500px;
  border-radius: 25px;
  margin-top: -32rem;
  position: absolute;
}

.imgPerson2 {
  background-image: url(../assets/images/busy-architect-PYVKWM4-1024x872.jpg);
  background-size: cover;
  width: 600px;
  height: 500px;
  opacity: 0.1;
  border-radius: 25px;
  margin-top: -31.5rem;
}

.hr1 {
  border: none;
  width: 1rem;
  height: 5px;
  background: linear-gradient(to right, #64CE74, #21D8A6);
  opacity: 1;
  border-radius: 50px;
}

.hr2 {
  border: none;
  width: 3rem;
  height: 5px;
  background: linear-gradient(to right, #64CE74, #21D8A6);
  opacity: 1;
  border-radius: 50px;
}

.btn-green {
  background: linear-gradient(to right, #64CE74, #21D8A6);
  color: white;
  font-size: 0.8rem;
  border-radius: 25px;
  padding: 10px 20px;
  border: none;
}

.btn-green:hover {
  background: linear-gradient(to right, gray, black);

}
</style>