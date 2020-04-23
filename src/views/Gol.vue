<template>
  <perfect-scrollbar>
    <TopBar/>
      <div class="gol">
        <canvas @dragover="dragOver" @drop="drop" @click="clickEv" id="grid" :width="width" :height="width" :n="n"></canvas>
      </div>
    <Controls/>
  </perfect-scrollbar>
</template>

<script lang="ts">
import Controls from "../components/Controls.vue"
import TopBar from "../components/TopBar.vue"

import { Component, Prop, Vue, Model, Watch } from 'vue-property-decorator';


@Component({
  components:{
    TopBar,
    Controls
    }
})
export default class Grid extends Vue{

  get computedMap (){
    return this.$store.getters.map
  }

  get computedMobileActive (){
    return this.$store.getters.mobileActive
  }

  get n (){
    return this.$store.getters.grid
  }

  get width (){
    return this.$store.getters.size
  }

  get rectW (){
    return this.$store.getters.size / this.$store.getters.grid
  }

  get canvas(){
    return document.getElementById('grid');
  }

  @Watch('computedMap')
  onMapChanged(val: any, oldVal: any) {
    this.validate(this.drawGrid)
  }
  beforeCreate(){
    if(window.screen.width<500){
      this.$store.commit('MOBILE_RESIZE', {size: 800, grid: 30})
    }
  }
  mounted(){
    this.validate(this.drawGrid);
  }
  clickEv(e: any){
    const X = Math.floor(e.offsetX / this.rectW)
    const Y = Math.floor(e.offsetY / this.rectW)
    this.$store.dispatch(this.computedMobileActive, {X,Y})
  }
  drop(e: any){
    const action = e.dataTransfer.getData("application/preset-drop")
    const X = Math.floor(e.offsetX / this.rectW)
    const Y = Math.floor(e.offsetY / this.rectW)
    this.$store.dispatch(action, {X,Y})
  }

  dragOver(e: any){
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }
  validate(code: any): void {
    const canvas: any = document.getElementById('grid');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      code(ctx)
    } else {
        throw "canvas not supported";
    }
  }

  drawGrid(ctx: any): void {
    ctx.fillStyle = '#f694ff';
    ctx.strokeStyle = '#df00f3';
    for(let j = 1; j < this.n-1 ; j ++){
      for(let i = 1; i < this.n-1 ; i ++){
        ctx.strokeRect(this.rectW*i, this.rectW*j, this.rectW, this.rectW);
      }
    }
    for(let j = 1; j < this.n-1 ; j ++){
      for(let i = 1; i < this.n-1 ; i ++){
        if(this.computedMap[j][i] === 1){
          ctx.fillStyle = '#f694ff';
          ctx.fillRect(this.rectW*i+1, this.rectW*j+1, this.rectW-2, this.rectW-2);
        }else{
          ctx.clearRect(this.rectW*i+1, this.rectW*j+1, this.rectW-2, this.rectW-2);
        }
      }
    }
  }

}
</script>
<style lang="scss">
  .gol{
    overflow: auto;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gol::-webkit-scrollbar {
      display: none;
  }
  .gol::-webkit-moz-scrollbar {
      display: none;
  }
</style>
