<template>
  <div class="section-2 row wrap items-center justify-center ">
    <div class="col-lg-3 justify-center">
      <div class="row wrap justify-center">
      <q-card flat>
        <q-card-title class="text-section2 ">
          <h1 style="text-align: center" class="font-size-subheader-28 font-weight-normal">MONOPOLY CELLYMUT</h1>
        </q-card-title>
        <q-card-main align="center" class="text-section2 font-size-subheader-18 font-weight-normal">
          <p class="font-weight-normal">
            Included with the purchase of this product:
            Kartu kesempatan, Kartu petunjuk, Kartu hak sewa rumah,
            Boneka dadu, Uang monopoli
          </p>
        </q-card-main>
        <q-card-actions align="center" >
          <q-btn icon="shopping_cart" text-color="white" no-caps="true" class="style-button-2">Tambah ke Keranjang</q-btn>
        </q-card-actions>
      </q-card>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="row wrap justify-center">
        <img class="bed" :src="monopoly1" alt="">
      </div>
    </div>
    <div class="col-lg-3">
      <div class="row wrap justify-center">
        <img class="size-image" :src="monopoly2" alt="">
      </div>
      <div class="row wrap justify-center">
        <img class="size-image" :src="monopoly3" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import monopoly1 from '../../assets/assets/monopoly-01.png'
  import monopoly2 from '../../assets/assets/monopoly-02.png'
  import monopoly3 from '../../assets/assets/monopoly-03.png'
  export default {
    data () {
      return {
        monopoly1,
        monopoly2,
        monopoly3
      }
    }
  }
</script>

<style>
  .section-2 {
    background-color: #f9e1e6;
    width: 100%;
    height: 100%;
  }
  .bed {
    width: 100%;
    height: 100%;
    padding: 24px
  }
  .size-image {
    width: 70%;
    height: 70%;
    padding: 12px
  }
  .style-button-2 {
    width: 80%;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #df8fc5;
  }
</style>
