<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <header class="header">
        <span class="header-text">NHL Predictions</span>
        <SignIn/>
    </header>
</template>

<script>
import SignIn from './SignIn.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  components: {
    SignIn
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Ubuntu:wght@700&display=swap');

    .header{
        border-bottom: 3px solid lightgrey;
        background-color: grey;
        text-align: left;
        /* padding: 0px; */
        padding-bottom: 5px;
        padding-top: 5px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        font-family: Ubuntu;
        font-size: 2em;
        font-weight: bold;
    }

    .header-text{
        padding-left: 1%;
    }
</style>