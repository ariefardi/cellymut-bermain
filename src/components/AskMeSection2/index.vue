<template>
  <div style="width: 100%" >
    <q-card>
      <q-card-title>
        <h1 class="align-center font-weight-normal font-size-header-48" style="color: #766a77">Kontak Kami</h1>
      </q-card-title>
      <div class="row wrap justify-center">
        <q-card-main style="width: 50%">
          <label for="name"> Nama</label> <br>
          <input type="text" id="name"  class="input-style" placeholder="Your Name"> <br>
          <label for="email"> Email</label> <br>
          <input type="text" id="email"  class="input-style" placeholder="Your Email">
        </q-card-main>
      </div>
      <q-card-actions align="center">
        <q-btn text-color="white" class="styled-button-kontak">Send</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '' ,
        email: ''
      }
    }
  }
</script>

<style>
  .input-style {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .styled-button-kontak {
    width: 240px;
    height: 40px;
    border-radius: 8px;
    background-color: #a7b5d8;
  }

</style>
