<template>
  <div class="section-3 row wrap items-center justify-center ">
    <div class="col-lg-5 justify-center">
      <div class="row wrap justify-center">
        <img class="size-ular-image" :src="ular_tangga1" alt="">
      </div>
    </div>
    <div class="col-lg-2 justify-center">
      <div class="row wrap justify-center">
        <img class="size-ular" :src="ular_tangga2" alt="">
      </div>
      <div class="row wrap justify-center">
        <img class="size-ular" :src="ular_tangga3" alt="">
      </div>
    </div>
    <div class="col-lg-5 justify-center">
      <div class="row wrap justify-center">
        <q-card flat>
          <q-card-title class="text-section3 ">
            <h1 style="text-align: center" class="font-size-subheader-28 font-weight-normal">ULAR TANGGA CELLYMUT</h1>
          </q-card-title>
          <q-card-main align="center" class="text-section3 font-size-subheader-18 font-weight-normal" style="padding-left: 64px; padding-right: 64px">
            <p class="font-weight-normal">
              Included with the purchase of this product: Kartu kesempatan, Kartu petunjuk,
              Kartu hak sewa rumah, Boneka dadu, Uang monopoli
            </p>
          </q-card-main>
          <q-card-actions align="center" >
            <q-btn icon="shopping_cart" text-color="white" no-caps="true" class="style-button-3">Tambah ke Keranjang</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  import ular_tangga1 from '../../assets/assets/ulartangga-01.png'
  import ular_tangga2 from '../../assets/assets/ulartangga-02.png'
  import ular_tangga3 from '../../assets/assets/ulartangga-03.png'
  export default {
    data () {
      return {
        ular_tangga1,
        ular_tangga2,
        ular_tangga3
      }
    }
  }
</script>

<style>
  .section-3 {
    background-color: #cfe1e3;
    width: 100%;
    height: auto;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .size-ular-image {
    width: 517px;
    height: 341px;
  }
  .size-ular {
    width: 100%;
    height: 100%;
    padding: 12px
  }
  .style-button-3 {
    width: 55% !important;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #6e819e;
  }
</style>
