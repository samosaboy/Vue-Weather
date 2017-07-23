<template lang="pug">
  div
    pre {{ selected }}
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return { }
    },
    computed: {
      ...mapGetters(
        [
          'selected',
        ]),
      mapCity() {
        console.log(this.$listeners.cities)
      },
    },
  }
</script>

<style lang='scss' scoped>
  pre {
    color: black;
  }
</style>
