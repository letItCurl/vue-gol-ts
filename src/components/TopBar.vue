<template>
  <div id="topbar">
    <div class="panel">
        <ul class="panel-actions">
          <li id="barFive" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <p>BF</p>
          </li>
          <li id="frog" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <p>FR</p>
          </li>
          <li id="glider" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <p>GL</p>
          </li>
          <li id="uClown" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <p>UC</p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  methods: {
      dragstart(e){
        e.dataTransfer.setData("application/preset-drop", e.target.id);
        e.dataTransfer.dropEffect = "move";
      },
      register(e){
        const el = e.currentTarget.id;
        document.getElementById(this.getMobileActive).classList.remove('active')
        document.getElementById(el).classList.add('active')
        this.$store.dispatch('mobileActive', el)
      }
  },
  computed: {
    getMobileActive: function(){
      return this.$store.getters.mobileActive
    }
  },
  mounted(){
    document.getElementById(this.getMobileActive).classList.add('active')
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
    .active{
      transform: scale(1.3);
      box-shadow: 0 0 12px 4px $shadow;
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
        transition: $speed;
        cursor: pointer;
        &:hover{transform: scale(1.2);}
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