<template>
  <div class="container">
    <Head></Head>
      <Nav></Nav>
    <router-view/>
  <Foot></Foot>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from './components/Nav'
import Head from './components/Head'
import Foot from './components/Foot'

export default {
    components: {
      Nav, Head, Foot
    }
}
</script>
