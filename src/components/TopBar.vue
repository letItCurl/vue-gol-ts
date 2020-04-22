<template>
  <div id="topbar">
    <draggable class="panel">
        <ul class="panel-actions">
          <li id="barFive" draggable="true" class="panel-element">
            <p>BF</p>
          </li>
          <li id="frog" class="panel-element">
            <p>FR</p>
          </li>
          <li id="glider" class="panel-element">
            <p>GL</p>
          </li>
          <li id="uClown" class="panel-element">
            <p>UC</p>
          </li>
          <li class="panel-element"> 
            <p>E</p>
          </li>
        </ul>
      </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  methods: {
      dragstart(e){
        e.dataTransfer.setData("application/preset-drop", e.target.id);
        e.dataTransfer.dropEffect = "move";
      }
  }
}
</script>

<style lang="scss">
    @import '@/assets/theme_love.scss';
    #topbar{
    position: fixed;
    top: -1px;
    width: 100%;
    height: 50px;
    transition: $speed;
    &:hover{
        transition: $speed;
        height: 50px;        
    }
    .panel{
        color: $text-primary;
        background: $grey;
        overflow: hidden;
        width: 300px;
        height: 100%;
        margin: auto;
        border-bottom-left-radius: 5px 5px;
        border-bottom-right-radius: 5px 5px;
        border: 1px solid $text-secondary;
        box-shadow: 0 0 12px 4px $shadow;
        ul.panel-actions{
        display: flex;
        justify-content: space-around;
        margin-top: 7px;
        }
        li.panel-element{ 
        margin-top: 5px;
        width: 45px;
        text-align: center;
        cursor: pointer;
        svg{ 
            color: $text-primary;
            width: 25px;
            height: 25px;
            path{
            margin: auto;
            }
        }
        }
    }
  }
</style>