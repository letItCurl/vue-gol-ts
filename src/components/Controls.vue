<template>
    <div id="controls">
      <div class="panel">
        <ul class="panel-actions">
          <li :style="{cursor: cursorStyle}" class="panel-element" @click="back" @dblclick="rewind" v-touch:longtap="rewind">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-double-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-angle-double-left fa-w-12 fa-lg"><path fill="currentColor" d="M20.2 247.5L167 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L85.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L184 412.5c-4.7 4.7-12.3 4.7-17 0l-146.8-148c-4.7-4.7-4.7-12.3 0-17zm160 17l146.8 148c4.7 4.7 12.3 4.7 17 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17L245.3 256l118.5-119.7c4.7-4.7 4.7-12.3 0-17L344 99.5c-4.7-4.7-12.3-4.7-17 0l-146.8 148c-4.7 4.7-4.7 12.3 0 17z" class=""></path></svg>
          </li>
          <li class="panel-element" @click="playPause">
            <svg v-if="toggleIcon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-pause fa-w-14 fa-2x"><path fill="currentColor" d="M48 479h96c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48H48C21.5 31 0 52.5 0 79v352c0 26.5 21.5 48 48 48zM32 79c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V79zm272 400h96c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48zM288 79c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V79z" class=""></path></svg>
            <svg v-else aria-hidden="true" focusable="false" data-prefix="fal" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14 fa-lg"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zm-16.2 55.1l-352 208C45.6 483.9 32 476.6 32 464V47.9c0-16.3 16.4-18.4 24.1-13.8l352 208.1c10.5 6.2 10.5 21.4.1 27.6z" class=""></path></svg>
          </li>
          <li :style="{cursor: cursorStyle}" class="panel-element" @click="next"> 
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-angle-double-right fa-w-12 fa-2x"><path fill="currentColor" d="M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7-4.7 4.7-12.3 0-17z" class=""></path></svg>
          </li>
          <li :style="{cursor: cursorStyle}" class="panel-element" @click="clear"> 
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-lg"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class=""></path></svg>
          </li>
          <li class="panel-element" > 
            <router-link to="/about"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-info fa-w-8 fa-lg"><path fill="currentColor" d="M208 368.667V208c0-15.495-7.38-29.299-18.811-38.081C210.442 152.296 224 125.701 224 96c0-52.935-43.065-96-96-96S32 43.065 32 96c0 24.564 9.274 47.004 24.504 64H56c-26.467 0-48 21.533-48 48v48c0 23.742 17.327 43.514 40 47.333v65.333C25.327 372.486 8 392.258 8 416v48c0 26.467 21.533 48 48 48h144c26.467 0 48-21.533 48-48v-48c0-23.742-17.327-43.514-40-47.333zM128 32c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64zm88 432c0 8.837-7.163 16-16 16H56c-8.837 0-16-7.163-16-16v-48c0-8.837 7.163-16 16-16h24V272H56c-8.837 0-16-7.163-16-16v-48c0-8.837 7.163-16 16-16h104c8.837 0 16 7.163 16 16v192h24c8.837 0 16 7.163 16 16v48z" class=""></path></svg></router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, /*Prop,*/ Vue } from 'vue-property-decorator';
import { dataBus } from '@/rxjs/message';


@Component
export default class Controls extends Vue {
  toggleIcon = false;
  cursorStyle = "pointer";
  getData: any;
  back(): void {
    this.lockClicks('back')
  }
  rewind(): void {
    console.log("rewind")
    this.$store.dispatch('rewind', this.toggleIcon)
    this.toggleIcon = !this.toggleIcon
    this.cursorStyle = (this.cursorStyle==='pointer')? 'not-allowed':'pointer'
  }
  playPause(): void {
    this.$store.dispatch('playPause', this.toggleIcon)
    this.toggleIcon = !this.toggleIcon
    this.cursorStyle = (this.cursorStyle==='pointer')? 'not-allowed':'pointer'
  }
  next(): void {
    this.lockClicks('next') 
  }
  clear(){
    this.lockClicks('clear')
  }
  lockClicks(action: string): void{
    if(!this.toggleIcon){this.$store.dispatch(action)}
  }
  mounted(){
    this.getData = dataBus.getMessage().subscribe(pipe => {if(pipe.message === "UNLOCK"){this.playPause()}});
  }
  beforeDestroy(){
    this.getData.unsubscribe()
  }
}
</script>

<style lang="scss">
    @import '@/assets/theme_love.scss';
    #controls{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    transition: $speed;
    .panel{
        background: $grey;
        width: 300px;
        height: 100%;
        margin: auto;
        border-top-left-radius: 5px 5px;
        border-top-right-radius: 5px 5px;
        border: 1px solid $text-secondary;
        box-shadow: 0 0 12px 4px $shadow;
        ul.panel-actions{
        display: flex;
        justify-content: space-around;
        margin-top: 13px;
        }
        li.panel-element{
        margin-top: 5px;
        width: 45px;
        height: 30px;
        text-align: center;
        cursor: pointer;
        }
    }
  }
</style>