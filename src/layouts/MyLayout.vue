<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <Navbar />
    </q-layout-header>
    <!--<q-page-container>-->
      <router-view />
    <!--</q-page-container>-->
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Navbar from '../components/Navbar'
import logo from '../assets/assets/logo-cellimut.png'
export default {
  name: 'MyLayout',
  components: {
    Navbar
  },
  data () {
    return {
      logo: logo
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
