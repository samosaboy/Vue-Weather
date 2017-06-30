import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment-timezone'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  strict: true,
  getters: {
    city: state => state.city,
    country: state => state.country,
    item: state => state.item,
  },
  actions: {
    GET_WEATHER(state, vm) {
      state.commit('SET_CITY', vm)
      axios.get(`weather?q=${vm}`)
        .then((r) => {
          const data = r.data
          state.commit('SET_ITEM', data)
          state.commit('SET_COUNTRY', data.sys.country)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
  mutations: {
    SET_CITY(state, item) {
      state.city = item
    },
    SET_COUNTRY(state, item) {
      state.country = item
    },
    SET_ITEM(state, item) {
      state.item = item
    },
  },
  state: {
    /*
      When you enter the city in the component, it returns the country in API response
      so you can enter that response by entering the city + country
      into the moment timezone. CA = Canada, US = America, etc.
    */
    city: '',
    country: '',
    item: {},
  },
})

export default store