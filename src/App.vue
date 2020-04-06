<template>
  <div id="app">
    <TopBar/>
    <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="/gol">Gol</router-link> |
      <router-link to="/howto">How To</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Controls/>
  </div>
</template>

<script>
import Controls from '@/components/Controls'
import TopBar from '@/components/TopBar'

export default {
  name: 'App',
  components:{
    Controls,
    TopBar
  }
}
</script>>

<style lang="scss">
  @import '@/assets/style.scss';
</style>
