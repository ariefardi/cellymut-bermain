<template>
  <q-page class="flex">
      <AboutCellymutSection1/>
      <Review />
      <AboutCellymutSection2/>
  </q-page>
</template>

<script>
  import AboutCellymutSection1 from '../components/AboutCellymutSection1'
  import AboutCellymutSection2 from '../components/AboutCellymutSection2'
  import Review from '../components/SectionHome4'
  export default {
    components: {
      AboutCellymutSection1, AboutCellymutSection2, Review
    },
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
