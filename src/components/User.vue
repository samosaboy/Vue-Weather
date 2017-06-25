<template lang="pug">
  div
    h2 {{ city }}
    input(v-model.lazy='city', placeholder='Enter a city', value='city')
    pre {{ item }}
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      city: '',
      item: {},
    }
  },
  watch: {
    getWeatherCity() {
      this.$http.get(`weather?q=${this.city}&appid=50ea24e8454f290b1331066ae9c8f63a`)
        .then((r) => {
          this.item = r.body
          console.log(this.item)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style scoped>

</style>
