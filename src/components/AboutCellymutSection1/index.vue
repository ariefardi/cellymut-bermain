<template>
    <div style="margin-top: 120px">
      <img class="size-image-tentang-kami" :src="tentangKami" alt="">
      <div class="row wrap justify-center">
        <q-card class="card-width-max" style="padding-bottom: 64px !important;">
          <q-card-title>
            <h1 class="font-size-header-48 text-about-section-1 align-center font-weight-normal">Tentang Cellymut Bermain</h1>
          </q-card-title>
          <q-card-main>
            <p class="align-center text-about-section-1 paragraph-about">
              Cellymut Bermain adalah 100% produk Indonesia yang ramah anak, merupakan buah kreasi
              Jane Permana yang memiliki dua anak balita. Seberapapun sibuk hari-harinya sebagai wanita karir,
              Jane Permana tetap merasa bahwa bermain merupakan kebutuhan anak yang tidak boleh dikurangi, dan mainan
              terbaik menurutnya adalah yang dapat memperkuat bonding sekaligus mengajarkan ilmu pengetahuan dan positivity.
              Lahirlah Cellymut Bermain yang bisa digunakan untuk bonding time bersama anak-anaknya sebelum waktu tidur mereka.
            </p>
            <p class="align-center text-about-section-1 paragraph-about">
              Cellymut Bermain selain terbuat dari bahan katun yang lembut dan nyaman, dijahit dengan penuh cinta kasih
              oleh Oma Mariana. Cellymut Bermain memiliki desain dan warna yang ceria. Perpaduan estetika dan kreatifitas
              yg praktis ini menjadikan Cellymut Bermain pilihan bagi setiap ibu-ibu yang ingin memperkuat family bonding dengan
              buah hati mereka.
            </p>
            <p class="align-center text-about-section-1 paragraph-about">
              Di tengah-tengah perkembangan teknologi, kebanyakan anak-anak lebih memilih bermain dengan gadget. Tetapi,
              Jane Permana merasa bahwa teknologi gadget tidak dapat menggantikan dinamika interaksi yang diperoleh dari
              permainan konvensional seperti…
            </p>
          </q-card-main>
          <q-card-actions align="center">
            <q-btn text-color="white" class="style-button-about" no-caps>
              Lebih Lanjut
              <q-icon class="icon-margin" name="chevron_right" />
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
</template>


<script>
  import tentangKami from '../../assets/assets/Cellymut_Tentang_Kami.jpg'
  export default {
    data () {
      return {
        tentangKami
      }
    }
  }
</script>

<style>
  .section-about-1 {
    background-color: red;
    width: 100%;
    height: auto !important;
  }
  .size-image-tentang-kami {
    width: 100%;
    height: auto;
  }
  .margin-image {
    margin-top: 120px;
  }
  .card-width-max {
    width: 100%;
  }
  .paragraph-about {
    font-size: 14.28px;
    padding-left: 120px;
    padding-right: 120px;
  }
  .style-button-about {
    width: 245px;
    height: 46px;
    border-radius: 20px;
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
    background-color: #ec6e82;
  }
  .icon-margin {
    margin-left: 24px;
  }

</style>
