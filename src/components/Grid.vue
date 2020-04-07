<template>
  <div class="grid">
    <h1>Grid</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue{

}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('#canvas');
}

function draw() {
	background(102);
  ellipse(50, 50, 80, 80);
}
</script>
<style>

</style>
