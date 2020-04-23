<template>
  <div id="topbar" class="topbar">
    <div class="panel">
        <ul class="panel-actions">
          <li id="barFive" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sword" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sword fa-w-16 fa-lg"><path fill="currentColor" d="M496.04 0c-.76 0-1.53.05-2.31.17L400 16 165.26 250.74l-39.15-39.15a15.887 15.887 0 0 0-11.31-4.68c-4.09 0-8.19 1.56-11.31 4.68l-34.79 34.8a16.005 16.005 0 0 0-2 20.19l45.9 68.84-39.79 39.79-16.76-8.38a13.82 13.82 0 0 0-6.21-1.47c-3.61 0-7.16 1.4-9.83 4.07L4.07 405.36c-5.42 5.43-5.42 14.22 0 19.64L87 507.93c2.71 2.71 6.27 4.07 9.82 4.07 3.55 0 7.11-1.36 9.82-4.07L142.57 472a13.889 13.889 0 0 0 2.6-16.03l-8.38-16.76 39.78-39.78 68.84 45.9c2.71 1.8 5.8 2.68 8.87 2.68 4.13 0 8.23-1.59 11.32-4.69l34.8-34.79c6.25-6.25 6.25-16.38 0-22.63l-39.15-39.15L496 112l15.83-93.73C513.23 8.49 505.57 0 496.04 0zM266.47 397.2l-14.21 14.21-57.92-38.62-21.83-14.55-18.55 18.55-39.78 39.78-16.31 16.31 10.31 20.63 2.54 5.09-13.9 13.9-57.32-57.32 13.9-13.9 5.08 2.54 20.63 10.32 16.31-16.31 39.79-39.79 18.55-18.55-14.55-21.83-38.62-57.92 14.21-14.21L266.47 397.2zM466.15 96.6L238.63 324.11l-50.74-50.74L415.4 45.85l61.06-10.32-10.31 61.07z" class=""></path></svg>
          </li>
          <li id="frog" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="frog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-frog fa-w-18 fa-2x"><path fill="currentColor" d="M576 189.94c0-21.4-11.72-40.95-30.48-51.23-28.68-15.71-65.94-29.69-85.51-36.62C448.64 61.74 411.98 32 368 32c-42.97 0-78.91 28.42-91.16 67.35C120.27 120.52-.49 254.49 0 416.98.11 451.89 29.08 480 64 480h304c8.84 0 16-7.16 16-16 0-17.67-14.33-32-32-32h-29.74l18.87-25.48c9.29-13.93 14.7-29.24 17.15-44.82L469.62 480H560c8.84 0 16-7.16 16-16 0-17.67-14.33-32-32-32h-53.63l-98.52-104.68 154.44-86.65A58.183 58.183 0 0 0 576 189.94zm-53.19 8.87l-174.79 96.05c-7.56-15.39-18.32-29.45-32.92-40.4-39.66-29.72-95-29.75-134.72 0l-34.78 26.09c-10.59 7.95-12.75 23-4.78 33.61 7.97 10.59 23 12.77 33.59 4.8l34.78-26.09c22.72-17.08 54.44-17.02 77.09 0 27.28 20.45 33.81 58.67 15.59 86.06L262.56 432H64c-8.65 0-15.97-6.95-16-15.17-.41-135.69 100.74-251.73 235.27-269.92l30.21-4.08 9.15-29.08C328.98 93.56 347.21 80 368 80c21.15 0 39.99 14.43 45.81 35.1l6.74 23.93 23.44 8.3c18.33 6.49 52.91 19.47 78.47 33.47 3.47 1.9 5.54 5.32 5.54 9.14 0 3.67-1.99 7.07-5.19 8.87zM368 120c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24z" class=""></path></svg>
          </li>
          <li id="glider" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rocket-launch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-rocket-launch fa-w-16 fa-3x"><path fill="currentColor" d="M368.05829,88.0293a55.99512,55.99512,0,1,0,55.99215,55.99414A56.01694,56.01694,0,0,0,368.05829,88.0293Zm0,79.99218a23.998,23.998,0,1,1,23.99608-23.998A24.02247,24.02247,0,0,1,368.05829,168.02148ZM505.1656,19.29492C503.98982,13.832,498.18123,8.0293,492.71835,6.86133,460.63244,0,435.48793,0,410.45084,0,307.26342,0,245.38261,55.19727,199.18734,127.98828H95.01555c-16.293,0-35.58786,11.92188-42.87692,26.4961L2.73242,253.27344A28.4,28.4,0,0,0,.2168,263.97656a24.00493,24.00493,0,0,0,23.99607,23.998H128.13466a95.98845,95.98845,0,0,1,95.98625,95.99023V487.95508a24.00243,24.00243,0,0,0,23.99608,23.998,28.53884,28.53884,0,0,0,10.70116-2.51562l98.71671-49.40039c14.55663-7.28516,26.46678-26.5625,26.46678-42.83984V312.76758C456.568,266.46094,511.982,204.37109,511.982,101.69336,512.0738,76.54492,512.0738,51.39648,505.1656,19.29492ZM37.15427,255.97656l43.60152-87.18164c1.85156-3.70508,10.11523-8.81054,14.25976-8.81054h85.08c-13.93554,28.06054-31.71287,63.99609-47.55465,95.99218l.0664.45313C131.08778,256.377,61.01753,255.97656,37.15427,255.97656Zm314.8513,161.22071c0,4.13085-5.09179,12.375-8.789,14.22461L256.115,475.01172c0-23.90234-.4043-94.06055-.46094-95.60938l.36719.04688c31.99606-15.82617,67.80267-33.58984,95.85929-47.541l.125.002Zm-102.078-70.51368a127.62739,127.62739,0,0,0-84.6347-84.55468c52.02731-103.98633,99.76945-230.13282,245.158-230.13282,21.164,0,41.29684,0,65.41987,4.1875,4.26562,24.377,4.1914,44.38477,4.11523,65.50977C479.98594,246.66406,353.00752,295.1543,249.92753,346.68359Zm-147.494-26.71289C54.35347,319.9707,2.03125,359.31836.168,480H0v32H32v-.23242C203.617,508.42969,216.8885,396.74414,165.80065,345.40039,150.85925,330.38477,127.22255,319.9707,102.43351,319.9707Zm52.914,109.39844c-12.83593,31.14844-57.63667,49.42969-123.36709,50.55078.06446-3.55469-1.11914-127.88867,70.45307-127.88867,15.09569,0,31.11521,6.29492,40.81051,16.03906C156.05456,380.94336,164.6483,406.80273,155.34753,429.36914Z" class=""></path></svg>
          </li>
          <li id="uClown" @click="register" draggable="true" @dragstart="dragstart" class="panel-element">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="alien" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-alien fa-w-14 fa-3x"><path fill="currentColor" d="M224,0C100.28125,0,0,88.0293,0,232.45117c0,111.77735,134.21484,224.59766,194.86328,269.875a48.71553,48.71553,0,0,0,58.27344,0C313.78516,457.04883,448,344.22852,448,232.45117,448,88.0293,347.6875,0,224,0Zm9.99219,476.68359a16.71415,16.71415,0,0,1-19.98633,0C171.30859,444.80859,32,332.99609,32,232.45117,32,114.42773,110.95312,32,224,32s192,82.42773,192,200.45117C416,332.99609,276.69141,444.80859,233.99219,476.68359ZM368,212H320a79.999,79.999,0,0,0-80,80v12a16.00079,16.00079,0,0,0,16,16h48a80.00021,80.00021,0,0,0,80-80V228A15.99954,15.99954,0,0,0,368,212Zm-64,76H272.166A48.06494,48.06494,0,0,1,320,244h31.834A48.06645,48.06645,0,0,1,304,288ZM128,212H80a15.99954,15.99954,0,0,0-16,16v12a80.00021,80.00021,0,0,0,80,80h48a16.00079,16.00079,0,0,0,16-16V292A79.999,79.999,0,0,0,128,212Zm16,76a48.06645,48.06645,0,0,1-47.834-44H128a48.06494,48.06494,0,0,1,47.834,44Z" class=""></path></svg>
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
        const li = document.getElementById(this.getMobileActive)
        li.classList.remove('active')
        li.firstElementChild.classList.remove('color-active')
        document.getElementById(el).classList.add('active')
        document.getElementById(el).firstElementChild.classList.add('color-active')
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
    document.getElementById(this.getMobileActive).firstElementChild.classList.add('color-active')
  }
}
</script>

<style lang="scss">
    @import '@/assets/theme_love.scss';
    .topbar{
    position: fixed;
    top: -1px;
    width: 100%;
    height: 60px;
    transition: $speed;
    .active{transform: scale(1.5);}
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
        margin-top: 13px;
        }
        li.panel-element{ 
        border-radius: 10px;
        margin-top: 5px;
        width: 45px;
        text-align: center;
        transition: $speed;
        .color-active{transition: $speed; color: $active-color;}
        cursor: pointer;
        &:hover{transform: scale(1.2);}
        }
    }
  }
</style>