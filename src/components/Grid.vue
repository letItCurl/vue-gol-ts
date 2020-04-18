<template>
  <div class="grid">
    <canvas id="grid" width="500" height="500" n="10"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue{
  mounted(){
    console.log("i'm mounted")
    this.validate(this.drawGrid)
  }

  validate(code: any): void {
    const canvas = document.getElementById('grid');
    console.log(canvas)
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      console.log("validated")
      code(ctx)
    } else {
        throw "canvas not supported";
    }
  }

  drawGrid(ctx: any): void {
    const width = ctx.canvas.width;
    const n = ctx.canvas.getAttribute('n');
    const rectW = width / n; 
    for(let j = 0; j < n ; j ++){
      for(let i = 0; i < n ; i ++){
        if(i===1 && j===2){
          ctx.fillRect(rectW*i, rectW*j, rectW, rectW);
        }else{
          ctx.strokeRect(rectW*i, rectW*j, rectW, rectW);
        }
      }
    }
  }

}
</script>
<style>
  canvas#grid { border: 1px solid black; height: 500px; width: 500px}
  .grid{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>
