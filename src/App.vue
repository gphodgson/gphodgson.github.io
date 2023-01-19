<template>
  <Header/>
  <MainPage/>
  <Footer/>
</template>

<script>
import MainPage from './components/MainPage.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/FooterItem.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    Header,
    Footer
  }
}
</script>

<style>
  /* #toast-container > div { opacity:1; } */

  body{
    padding: 0px;
    margin: 0px;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
</style>
