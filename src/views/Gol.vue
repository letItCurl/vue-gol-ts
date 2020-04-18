<template>
  <div class="gol">
    <Grid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'

export default {
  name: 'Gol',
  components: {
    Grid
  }
}
</script>

<style>
  .gol{
    height: 100vh;
  }
</style>
