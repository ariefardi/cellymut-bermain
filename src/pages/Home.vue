<template>
  <q-page class="flex">
    <SectionHome1  />
    <SectionHome2 />
    <SectionHome3 />
    <SectionHome4 />
    <SectionHome5 />
  </q-page>
</template>

<style>
</style>

<script>
  import SectionHome1 from '../components/SectionHome1'
  import SectionHome2 from '../components/SectionHome2'
  import SectionHome3 from '../components/SectionHome3'
  import SectionHome4 from '../components/SectionHome4'
  import SectionHome5 from '../components/SectionHome5'
export default {
  name: 'PageIndex',
  components: {
    SectionHome1,
    SectionHome2,
    SectionHome3,
    SectionHome4,
    SectionHome5
  }
}
</script>
