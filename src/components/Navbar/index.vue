<template>
  <q-layout-header>
    <q-toolbar color="transparent" text-color="navbar">
      <img class="logo-size" :src="logo" alt="logo celimute" >
      <q-toolbar-title>
      </q-toolbar-title>
      <q-btn no-ripple flat @click="moveToProduct"  >
        Produk
      </q-btn>
      <q-btn no-ripple flat  >
        Tentang Kami
      </q-btn>
      <q-btn no-ripple flat  >
        Tanya Kami
      </q-btn>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
  import { openURL } from 'quasar'
  import {logo} from '../../config/images'
  import {color1} from '../../config/color'
  export default {
    name: 'MyLayout',
    data () {
      return {
        logo,
        color1
      }
    },
    methods: {
      openURL,
      moveToProduct(){
        this.$router.push('/product')
      }
    }
  }
</script>

<style scoped>
.barName{
  text-decoration: none;
}
</style>

