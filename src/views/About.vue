<template>
  <ModalPage destination="/" :destinationName="false">
    <template v-slot:header>
      <h1>wHAT IS THIS ??</h1>
    </template>
    <p>This game is a cellular automata named "the game of life"</p>
    <p>Basically a cell can survive, die or born based on the amount of neibourhoods.</p>
    <a href="https://www.youtube.com/watch?v=E8kUJL04ELA">#click <span class="link">here</span> for more info...</a>
    <h4>Here is how to play:</h4>
    <p>Select your partern above (Sword Frog Rocket or Alien) and click on the map to spawn paterns:</p>
    <div class="gif" ><img src="https://res.cloudinary.com/duydvdaxd/image/upload/v1587660536/Vue-Sprint/vue-gol-ts_zmzhic.gif" alt=""></div>
    <p><span class="link">Drag and drop availible on desktop!</span> I disabled the feature on mobile because if you are not careful, you can refresh the page...</p>
    <p>You can play / pause the frames, go forward or backward of one frame or rewind all generations by double clicking ( holding in mobile ) the "back" button.</p>
    <h4>Links:</h4>
    <h4><a href="https://www.linkedin.com/in/roland-lopez-developer/?locale=en_US"><span class="link">Linkedin</span></a></h4>
    <h4><a href="https://github.com/letItCurl"><span class="link">GitHub</span></a></h4>
  </ModalPage>
</template>

<script>
import ModalPage from '@/components/ModalPage' 

export default {

  name: 'About',
  components:{
    ModalPage
  }
}
</script>

<style lang="scss">
  @import '@/assets/theme_love.scss';
</style>
