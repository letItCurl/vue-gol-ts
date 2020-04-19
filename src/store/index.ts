import Vue from 'vue'
import Vuex from 'vuex'
import {world, socialGroups} from "gol-engine"

const astroWorld = new world["default"](30);
const antiSocial = new socialGroups["default"](astroWorld.getGrid())

astroWorld.initWorld()
antiSocial.frog(4,4)
antiSocial.frog(15,15)
//astroWorld.generateDays(5)
//console.log(astroWorld.map)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    astroWorld
  },
  mutations: {
    NEXT(state){
      console.log("NEXT", state.astroWorld)
      state.astroWorld.nextDay()
    }
  },
  actions: {
    back(): void {
      console.log('back action')
    },
    playPause(): void {
      console.log('back playPause')
    },
    next(context): void {
      console.log('next action')
      context.commit('NEXT')
    }
  },
  getters:{
    astroWorld(state){
      return state.astroWorld
    }
  },
  modules: {
  }
})
