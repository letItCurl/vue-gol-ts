<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ roland }}</h1>
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
    <h1>{{ fullName }}</h1>
    <button @click="incrementCounter">COUNT++</button>
    <h1>{{ counter }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
interface Test{
  roland: string;
  counter: number;
}
@Component
export default class HelloWorld extends Vue implements Test {
  @Prop() private msg!: string;
  roland="hello roland"
  firstName="roland"
  lastName="lopez"
  counter=0
  get fullName(): string{
    return this.firstName + this.lastName
  }
  incrementCounter(): void{
    this.counter++
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
