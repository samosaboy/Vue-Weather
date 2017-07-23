<template lang="pug">
  .row
    .locationselect.component.shadow.col-xs-12.col-md-2(v-for='cities in item', @click='selectedCity(cities)')
      h3 {{ cities.city }}
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
          'item',
          'selected',
        ]),
    },
    methods: {
      selectedCity(cities) {
        this.$store.dispatch('SHOW_SELECTED', cities)
      },
    },
  }
</script>

<style lang='scss' scoped>

</style>
