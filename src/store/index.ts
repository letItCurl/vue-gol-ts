import Vue from 'vue'
import Vuex from 'vuex'
import {world, socialGroups} from "gol-engine"
import { flow } from '@/rxjs/index'
import { backConcern } from '@/concerns/store_concerns'

const astroWorld = new world["default"](30);
const antiSocial = new socialGroups["default"](astroWorld.getGrid())

astroWorld.initWorld()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: astroWorld.map,
    time: {}
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
          backConcern(state, astroWorld)
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
    }
  },
  getters:{
    map(state){
      return state.map
    }
  },
  modules: {
  }
})
