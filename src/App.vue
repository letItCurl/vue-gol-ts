<template>
  <div id="app">
    <TopBar/>
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
