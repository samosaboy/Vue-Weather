<template lang="pug">
  div
    input(
      v-model.lazy='city',
      placeholder='Enter a city',
      value='city',
      @change='getWeather()'
    )
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      city: '',
    }
  },
  methods: {
    getWeather() {
      this.$store.dispatch('GET_WEATHER', this.city)
        .then(this.city = '')
    },
  },
  computed: {
    ...mapGetters([
      'item',
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
    font-size: 40pt;
    font-weight: 300 !important;
    width: 100%;

    &::placeholder {
      color: rgba(white, 0.3);
    }

    &:focus {
      border: none;
      outline: 0;
    }
  }

</style>

