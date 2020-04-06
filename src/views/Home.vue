<template>
  <div class="home">
      <ModalPage header="The game of life"
      content="Made in typescript and vue.js with typscript template."
      footer="Go to Game !"
      destination="/gol"/>
  </div>
</template>

<script>
import ModalPage from '@/components/ModalPage'

export default {
  name: 'Home',
  components:{
    ModalPage
  }
}
</script>
