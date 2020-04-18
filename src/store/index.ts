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
  },
  actions: {
  },
  modules: {
  }
})
