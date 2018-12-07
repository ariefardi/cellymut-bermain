<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @media only screen and (max-width: 1440px) {
    html, body ,  p, h1, h2, h3, h4, h5 {
      font-family: "Helvetica Neue";
    }
    .logo-size {
      width: 148px !important;
      height: 112px !important;
      /*box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);*/
    }
    .text-navbar {
      color: #6e819e;
    }
    .text-section2 {
      color: #df8fc5;
    }
    .text-section3 {
      color: #6e819e;
    }
    .text-about-section-1 {
      color: #766a77;
    }
    .font-weight-normal {
      font-weight: 500;
    }
    .font-weight-bold {
      font-weight: bold;
    }
    .font-size-header-48 {
      /*font-size: 48px !important;*/
      font-size: 28.8px !important;
    }
    .font-size-subheader-28 {
      font-size: 19.8px !important;
      /*font-size: 28px !important;*/
    }
    .font-size-paragraph-24 {
      /*font-size: 24px;*/
      font-size: 16.32px;
    }
    .font-size-paragraph-18 {
      font-size: 10.8px !important;
      /*font-size: 18px !important;*/
    }
    .padding-right-28 {
      padding-right: 28px;
    }
    .align-center {
      text-align: center;
    }

  }

</style>
