<template lang="pug">
  div
    User
</template>

<script>
import User from './User'

export default {
  name: 'hello',
  components: {
    User
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
