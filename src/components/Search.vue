<template lang="pug">
  div
    h2 Show me the weather for
    input(v-model.lazy='city', placeholder='Enter a city', value='city', @change='getWeather()')
    pre {{ item }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Search',
  data() {
    return {
      city: '',
    }
  },
  methods: {
    getWeather() {
      this.$store.dispatch('GET_WEATHER', this.city)
    },
  },
  computed: {
    ...mapGetters([
      'item',
      'country',
    ]),
  },
}
</script>

<style lang='scss' scoped>
div {
  color: white;
}

h2 {
  font-weight: 200;
  font-size: 24pt;
}

input {
  background: none;
  border: none;
  color: white;
  font-size: 80pt;
  font-weight: 200;
  width: 100%;

  &::placeholder {
    color: white;
  }
}
</style>

