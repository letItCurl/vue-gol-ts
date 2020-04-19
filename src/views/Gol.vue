<template>
  <div class="gol">
    <canvas id="grid" width="800" height="800" n="30"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch } from 'vue-property-decorator';
@Component
export default class Grid extends Vue{

  get computedMap (){
    return this.$store.getters.map
  }

  @Watch('computedMap')
  onMapChanged(val: any, oldVal: any) {
    this.validate(this.drawGrid)
  }
  
  mounted(){
    this.validate(this.drawGrid);
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
    for(let j = 0; j < n ; j ++){
      for(let i = 0; i < n ; i ++){
        ctx.strokeRect(rectW*i, rectW*j, rectW, rectW);
      }
    }
    for(let j = 0; j < n ; j ++){
      for(let i = 0; i < n ; i ++){
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
  canvas#grid { border: 1px solid #df00f3; height: 800px; width: 800px}
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
