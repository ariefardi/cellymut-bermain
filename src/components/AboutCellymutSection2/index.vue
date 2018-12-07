<template>
  <div class="section-2-about row wrap items-start justify-center">
    <div style="width: 100%">
      <h1 class="font-size-header-48 font-weight-normal align-center" style="color: #9698f4">
        Gabung di Komunitas
      </h1>
      <div class="row wrap items-center justify-left">
        <div class="col-lg-6">
          <img class="image-size-about" :src="aboutBottomImage" alt="">
        </div>
        <div class="col-lg-6">
          <div class="row wrap items-center justify-left">
            <q-card flat style="width: 100%; color: #6c6c6c">
              <q-card-main>
                <p class="font-weight-normal font-size-subheader-28 align-center">
                  Gabung di komunitas Cellymut Sekarang!
                </p>
              </q-card-main>
              <q-card-actions align="center">
                <q-btn class="styled-button-bottom-about" text-color="white">
                  Gabung Sekarang
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import aboutBottomImage from '../../assets/assets/ulartangga-01.png'
  export default {
    data () {
      return {
        aboutBottomImage
      }
    }
  }
</script>

<style>
  .section-2-about {
    width: 100%;
    height: auto;
    background-color: #f8fafc;
  }
  .image-size-about {
    width: 673.2px;
    height: 448px;
  }
  .styled-button-bottom-about {
    width: 245px;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #a7b5d8;
  }
</style>
