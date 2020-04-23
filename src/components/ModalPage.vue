<template>
  <div class="modal-page">
    <div class="content-box">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="footer">
        <router-link :to="destination">
          <span v-if="destinationName"> {{destinationName}} </span>
          <svg v-else aria-hidden="true" focusable="false" data-prefix="fal" data-icon="window-close" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-window-close fa-w-16 fa-lg"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v352zM348.6 188.3L280.9 256l67.7 67.7c4.6 4.6 4.6 12 0 16.6l-8.3 8.3c-4.6 4.6-12 4.6-16.6 0L256 280.9l-67.7 67.7c-4.6 4.6-12 4.6-16.6 0l-8.3-8.3c-4.6-4.6-4.6-12 0-16.6l67.7-67.7-67.7-67.7c-4.6-4.6-4.6-12 0-16.6l8.3-8.3c4.6-4.6 12-4.6 16.6 0l67.7 67.7 67.7-67.7c4.6-4.6 12-4.6 16.6 0l8.3 8.3c4.5 4.6 4.5 12 0 16.6z" class=""></path></svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModalPage extends Vue {
  @Prop() private destination!: string;
  @Prop() private destinationName!: string;
}
</script>>

<style lang="scss">
  @import '@/assets/theme_love.scss';

  div.gif{
    display: flex;
    justify-content: center;
  }
  @media (max-width: 450px) {
    img{
      width: 250px;
    }
  }
  .modal-page{
    letter-spacing: 1px;
    margin: 15px;
    .content-box{
      max-width: 600px;
      margin: auto;
      margin-top: 10px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      border: 1px solid $text-secondary;
      box-shadow: 3px 0px 5px 1px $bg-secondary;
      color: $text-primary;
      padding: 10px;
      .header{
        text-align: center;
        h1{
          margin: 10px;
        }
      }
      .content{
        border-top: 1px solid $text-secondary;
        border-bottom: 1px solid $text-secondary;
        h4{
          text-align: center;
        }
        span{
          text-decoration: underline;
        }
        img{
          text-align: center;
        }
    }
      
      .footer{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        svg{
          margin-top: 13px;
          transform: scale(1.5);
        }
      }
    }
  }
</style>
