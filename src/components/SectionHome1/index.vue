<template>
  <div class="section-1 row wrap items-center justify-center">
    <div class="col-lg-8 col-md-8 col-sm-12" >
      <img class="stop-motion" :src="stopMotion" alt="">
    </div>
    <div class="col-lg-4 col-md-8 col-sm-12 justify-center padding-right-28 font-weight-normal" >
      <q-card flat>
        <q-card-title align="right" class="text-navbar">
          <h1 class="font-size-header-48 font-weight-normal">Hallo Bunda dan Ayah</h1>
        </q-card-title>
        <q-card-main align="right" class="text-navbar font-size-subheader-28 font-weight-normal">
          <p class="font-weight-normal"> {{textMain}} </p>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
  import {stopMotion} from '../../config/images'
  export default {
    data () {
      return {
        stopMotion,
        textMain: 'Cellymut Bermain adalah 100% produk Indonesia yang ramah anak, merupakan buah kreasi ' +
          'Jane Permana yang memiliki dua anak balita.'
      }
    }
  }
</script>

<style>
  .section-1 {
    background-color: #e9e7f1;
    width: 100%;
    height: 100%;
  }
  .stop-motion {
    width: 100%;
    height: auto;
  }
</style>
