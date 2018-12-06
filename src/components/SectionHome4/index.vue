<template>
  <div class="section-4 row wrap items-start justify-center ">
    <div class="col-lg-3 justify-center">
      <div class="row wrap justify-center">
          <img class="size-image-review" :src="review1" alt="">
          <div class="row wrap justify-center">
            <q-card-main class="align-center">
              <span class="font-size-paragraph-24">Cute PlayMat!</span><br>
              <p class="font-size-paragraph-24 font-weight-bold"> Ibu Jessica and Fam</p>
            </q-card-main>
          </div>
      </div>
    </div>
    <div class="col-lg-3 justify-center self-end">
      <div class="row wrap justify-center">
        <img class="size-image-review" :src="review2" alt="">
        <div class="row wrap justify-center">
          <q-card-main class="align-center">
            <span class="font-size-paragraph-24">Children happy play with celimut</span><br>
            <p class="font-size-paragraph-24 font-weight-bold"> Ibu Francis and Fam</p>
          </q-card-main>
        </div>
      </div>
    </div>
    <div class="col-lg-3 justify-center">
      <div class="row wrap justify-center">
        <img class="size-image-review" :src="review1" alt="">
        <div class="row wrap justify-center">
          <q-card-main class="align-center">
            <span class="font-size-paragraph-24">Cute PlayMat!</span><br>
            <p class="font-size-paragraph-24 font-weight-bold"> Ibu Jessica and Fam</p>
          </q-card-main>
        </div>
      </div>
    </div>
    <div class="col-lg-3 justify-center self-end">
      <div class="row wrap justify-center">
        <img class="size-image-review" :src="review2" alt="">
        <div class="row wrap justify-center">
          <q-card-main class="align-center">
            <span class="font-size-paragraph-24">Children happy play with celimut</span><br>
            <p class="font-size-paragraph-24 font-weight-bold"> Ibu Francis and Fam</p>
          </q-card-main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import review1 from '../../assets/assets/review-01.png'
  import review2 from '../../assets/assets/review-02.png'
  export default {
    data () {
      return {
        review1,
        review2
      }
    }
  }
</script>

<style>
  .section-4 {
    background-image: url("../../assets/assets/bg-selimut.jpg");
    width: 100%;
    height: 609px;
  }
  .size-image-review {
    padding-top: 64px;
    width: 70%;
    height: 70%;
  }
  @media only screen and (max-width: 991px) {
    .section-4 {
      background-image: url("../../assets/assets/bg-selimut.jpg");
      width: 100%;
      height: auto;
    }
  }
</style>
