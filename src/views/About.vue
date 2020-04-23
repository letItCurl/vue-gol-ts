<template>
  <ModalPage destination="/" :destinationName="false">
    <template v-slot:header>
      <h1>wHAT IS THIS ??</h1>
    </template>
    <p>This game is a cellular automata named "the game of life"</p>
    <p>Basically a cell can survive, die or born based on the amount of neibourhoods.</p>
    <a href="https://www.youtube.com/watch?v=E8kUJL04ELA">#click <span class="link">here</span> for more info...</a>
    <h4>Here is how to play:</h4>
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
  #about{
    .content-box{
      max-width: 600px;
      margin: auto;
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      border: 1px solid $text-secondary;
      box-shadow: 3px 0px 5px 1px $bg-secondary;
      padding: 10px;
      .header{
        text-align: center;
        h1{
          margin: 10px;
        }
      }
      .content{
        border-top: 1px solid $text-secondary;
        border-bottom: 1px solid $text-secondary;
      }
      .footer{
        text-align: center;
      }
    }
  }
</style>
