import Vue from 'vue'
import Vuex from 'vuex'
import {world, socialGroups} from "gol-engine"
import { flow } from '@/rxjs/index'

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
      const time = astroWorld.history.length;
      if(time > 0){
        const back = astroWorld.history[time-1]
        state.map = [...back]
        astroWorld.map = [...back]
        astroWorld.history = [...astroWorld.history.slice(0,time-1)]
      }
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
