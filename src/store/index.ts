import Vue from 'vue'
import Vuex from 'vuex'
import {world, socialGroups} from "gol-engine"
import { flow } from '@/rxjs/index'

import { Observable } from 'rxjs'

const astroWorld = new world["default"](30);
const antiSocial = new socialGroups["default"](astroWorld.getGrid())

astroWorld.initWorld()
antiSocial.frog(4,3)
antiSocial.frog(24,3)
antiSocial.barFive(15,14)
antiSocial.frog(4,24)
antiSocial.frog(24,24)

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    map: astroWorld.map,
    time: {}
  },
  mutations: {
    NEXT(state){
      console.log("NEXT")
      astroWorld.nextDay()
      state.map = [...astroWorld.map]
    },
    BACK(state){
      const time = astroWorld.history.length;
      if(time > 0){
        const back = astroWorld.history[time-1]
        state.map = [...back]
        astroWorld.map = [...back]
        astroWorld.history = astroWorld.history.slice(0,time-1)
      }
    },
    PLAY_PAUSE(state, payload){
      if(!payload){
        console.log("playing")
        state.time = flow.subscribe(x=>{
          astroWorld.nextDay()
          state.map = [...astroWorld.map]
        })
      }else{
        console.log("paused")
        state.time.unsubscribe()
      }
    },
    CLEAR(state){
      astroWorld.clear()
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
