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
  },
  actions: {
    GET_WEATHER(state, vm) {
      if (vm) {
        axios.get(`forecast?q=${vm}`)
          .then((r) => {
            const data = r.data
            const location = Object.assign({}, {
              city: data.city.name,
              country: data.city.country,
              coord: data.city.coord,
              weather: data.list,
            })
            state.commit('SET_ITEM', location)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
    REMOVE_ITEM(state, vm) {
      state.commit('REMOVE_CITY', vm)
    },
  },
  mutations: {
    SET_ITEM(state, item) {
      if (!_.includes(_.map(state.item, o => o.city), item.city)) {
        state.item.push(item)
      }
    },
    REMOVE_CITY(state, item) {
      _.forEach(state.item, (location) => {
        if (item.city === location.city) {
          const itemIndex = state.item.indexOf(item)
          state.item.splice(itemIndex, 1)
        }
      })
    },
  },
  state: {
    /*
      When you enter the city in the component, it returns the country in API response
      so you can enter that response by entering the city + country
      into the moment timezone. CA = Canada, US = America, etc.
      item: [
        { city: '', country: '', weather: '', time: '' },
        { city: '', country: '', weather: '', time: '' },
        { city: '', country: '', weather: '', time: '' },
        { city: '', country: '', weather: '', time: '' }
      ]

      You also need to return the city as the network request city, and not the user input city
      i.e. if User inputs KJDASDASD and it goes to Paris, return Paris instead!
      New array must be uniq ! DeepClone the array and uniq it before pushing it into state.item
    */
    item: [],
  },
})

export default store
