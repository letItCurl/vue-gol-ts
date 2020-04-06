<template>
  <div class="modal-page">
    <div class="content-box">
      <div class="header">
        <h1>{{header}}</h1>
      </div>
      <div class="content">
        <p>{{content}}</p>
      </div>
      <div class="footer">
        <router-link :to="destination">##~ {{footer}} ~## </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModalPage extends Vue {
  @Prop() private header!: string;
  @Prop() private content!: string;
  @Prop() private footer!: string;
  @Prop() private destination!: string;
}
</script>>

<style lang="scss">
  @import '@/assets/theme_love.scss';
  .modal-page{
    .content-box{
      max-width: 600px;
      margin: auto;
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      border: 1px solid $text-secondary;
      box-shadow: 3px 0px 5px 1px $bg-secondary;
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
      }
      .footer{
        text-align: center;
      }
    }
  }
</style>
