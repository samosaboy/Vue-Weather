import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
import VueAxios from 'vue-axios'

import _ from 'lodash'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  strict: true,
  getters: {
    item: state => state.item,
    overlayState: state => state.overlayState,
    selected: state => state.selected,
  },
  actions: {
    GET_WEATHER({ commit, state }, vm) {
      if (!_.includes(_.map(state.item, o => o.city), vm)) {
        axios.get(`forecast?q=${vm}`)
          .then((r) => {
            const data = r.data
            const location = Object.assign({}, {
              city: data.city.name,
              country: data.city.country,
              coord: data.city.coord,
              weather: data.list,
            })
            commit('SET_ITEM', location)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
    REMOVE_ITEM({ commit }, vm) {
      commit('REMOVE_CITY', vm)
    },
    SHOW_SELECTED({ commit, state }, vm) {
      commit('FILTER_CITY',
        _.filter(state.item, vm))
    },
  },
  mutations: {
    SET_ITEM(state, item) {
      state.item.push(item)
    },
    REMOVE_CITY(state, item) {
      _.forEach(state.item, (location) => {
        if (location.city === item.city) {
          const index = state.item.indexOf(item)
          state.item.splice(index, 1)
        }
      })
    },
    SET_OVERLAY(state, c) {
      state.overlayState = c
    },
    FILTER_CITY(state, item) {
      state.selected = item
    },
  },
  state: {
    item: [],
    overlayState: false,
    selected: {},
  },
})

export default store
