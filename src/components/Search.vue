<template lang="pug">
  div
    h2 {{ showme }}
    input(v-model.lazy='city', placeholder='Enter a city', value='city', @change='getWeather()')
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      city: '',
      item: {},
      weather: {
        today: [],
        allDays: [],
      },
      showme: 'Show me the weather for',
    }
  },
  methods: {
    getWeather() {
      this.$http.get(`weather?q=${this.city}`)
        .then((r) => {
          this.item = r.body
          if (r.body.weather.length === 1) {
            this.weather.today = r.body.weather[0]
          } else if (r.body.weather.length > 1) {
            this.weather.AllDays = r.body.weather
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
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
