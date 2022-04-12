<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  name: 'IndexPage',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/inter/Inter-Bold.ttf') format('truetype')
}
@font-face {
  font-family: 'Inter-Regular';
  src: url('../assets/fonts/inter/Inter-Regular.ttf') format('truetype')
}
@font-face {
  font-family: 'Manrop-Bold';
  src: url('../assets/fonts/manrope/Manrope-Bold.ttf') format('truetype')
}
@font-face {
  font-family: 'Manrop-Medium';
  src: url('../assets/fonts/manrope/Manrope-Medium.ttf') format('truetype')
}
@font-face {
  font-family: 'Manrop-Regular';
  src: url('../assets/fonts/manrope/Manrope-Regular.ttf') format('truetype')
}
@font-face {
  font-family: 'Manrop-SemiBold';
  src: url('../assets/fonts/manrope/Manrope-SemiBold.ttf') format('truetype')
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  padding: 0 90px;
}

@media (max-width: 1400px) {
  .container {
    padding: 0 30px;
  }
}

@media (max-width: 770px){
  .container {
    padding: 0 16px;
  }
}
</style>
