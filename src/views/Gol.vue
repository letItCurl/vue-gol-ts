<template>
  <div class="gol">
    <canvas @dragover="dragOver" @drop="drop" @click="clickEv" id="grid" width="800" height="800" n="30"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch } from 'vue-property-decorator';

@Component
export default class Grid extends Vue{

  canvas: any;
  n: any;
  width: any;
  rectW: any;

  get computedMap (){
    return this.$store.getters.map
  }

  get computedMobileActive (){
    return this.$store.getters.mobileActive
  }

  @Watch('computedMap')
  onMapChanged(val: any, oldVal: any) {
    this.validate(this.drawGrid)
  }
  
  mounted(){
    this.canvas = document.getElementById('grid');
    this.n = this.canvas.getAttribute('n');
    this.width = this.canvas.width;
    this.rectW = this.width / this.n;
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
    const width = ctx.canvas.width;
    const n = ctx.canvas.getAttribute('n');
    const rectW = width / n; 
    ctx.fillStyle = '#f694ff';
    ctx.strokeStyle = '#df00f3';
    for(let j = 1; j < n-1 ; j ++){
      for(let i = 1; i < n-1 ; i ++){
        ctx.strokeRect(rectW*i, rectW*j, rectW, rectW);
      }
    }
    for(let j = 1; j < n-1 ; j ++){
      for(let i = 1; i < n-1 ; i ++){
        if(this.computedMap[j][i] === 1){
          ctx.fillStyle = '#f694ff';
          ctx.fillRect(rectW*i+1, rectW*j+1, rectW-2, rectW-2);
        }else{
          ctx.clearRect(rectW*i+1, rectW*j+1, rectW-2, rectW-2);
        }
      }
    }
  }

}
</script>
<style lang="scss">
  canvas#grid { height: 800px; width: 800px}
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
