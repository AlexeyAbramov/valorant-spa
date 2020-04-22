import Vue from 'vue'
import Vuex from 'vuex'

import characters from './modules/characters.js'
import weapons from './modules/weapons.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        abilityKeys:['Q','C','E','X']
    },
    getters:{
        count(state){
            return state.abilityKeys
        }
    },
    modules:{
        characters,
        weapons
    }
})