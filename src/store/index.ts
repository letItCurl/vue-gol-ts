import Vue from 'vue'
import Vuex from 'vuex'
import {world} from "gol-engine"
import { flow } from '@/rxjs/index'
import { backConcern } from '@/concerns/store_concerns'
import { dataBus } from '@/rxjs/message';


var astroWorld = new world["default"](70); // eslint-disable-line

astroWorld.initWorld()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: astroWorld.map,
    time: {},
    mobileActive: 'barFive',
    size: 2000,
    grid: 70
  },
  mutations: {
    NEXT(state){
      astroWorld.nextDay()
      state.map = [...astroWorld.map]
    },
    BACK(state){
      backConcern(state, astroWorld)
    },
    PLAY_PAUSE(state, payload){
      if(!payload){
        state.time = flow.subscribe(x=>{
          astroWorld.nextDay()
          state.map = [...astroWorld.map]
        })
      }else{
        state.time.unsubscribe()
      }
    },
    REWIND(state, payload){
      if(!payload){
        state.time = flow.subscribe(x=>{
          if(!backConcern(state, astroWorld)){
            state.time.unsubscribe()
            dataBus.sendMessage('UNLOCK');
          }
        })
      }else{
        state.time.unsubscribe()
      }
    },
    CLEAR(state){
      astroWorld.clear()
      state.map = [...astroWorld.map]
    },
    SET_BAR_FIVE(state, payload){
      astroWorld.barFive(payload.X,payload.Y)
      state.map = [...astroWorld.map]
    },
    SET_FROG(state, payload){
      astroWorld.frog(payload.X,payload.Y)
      state.map = [...astroWorld.map]
    },
    SET_GLIDER(state, payload){
      astroWorld.glider(payload.X,payload.Y)
      state.map = [...astroWorld.map]
    },
    SET_U_CLOWN(state, payload){
      astroWorld.uClown(payload.X,payload.Y)
      state.map = [...astroWorld.map]
    },
    MOBILE_ACTIVE(state, payload){
      state.mobileActive = payload
    },
    MOBILE_RESIZE(state, payload){
      state.grid = payload.grid;
      state.size = payload.size;
      astroWorld = new world["default"](payload.grid);
      astroWorld.initWorld()
    }
  },
  actions: {
    back(context): void {
      context.commit('BACK')
    },
    playPause(context, payload): void {
      context.commit('PLAY_PAUSE', payload)
    },
    next(context): void {
      context.commit('NEXT')
    },
    clear(context): void{
      context.commit('CLEAR')
    },
    barFive(context, payload){
      context.commit('SET_BAR_FIVE', payload)
    },
    frog(context, payload){
      context.commit('SET_FROG', payload)
    },
    glider(context, payload){
      context.commit('SET_GLIDER', payload)
    },
    uClown(context, payload){
      context.commit('SET_U_CLOWN', payload)
    },
    rewind(context, payload){
      context.commit('REWIND', payload)
    },
    mobileActive(context, payload){
      context.commit('MOBILE_ACTIVE', payload)
    }
  },
  getters:{
    map(state){
      return state.map
    },
    mobileActive(state){
      return state.mobileActive
    },
    size(state){
      return state.size
    },
    grid(state){
      return state.grid
    }
  },
  modules: {
  }
})
