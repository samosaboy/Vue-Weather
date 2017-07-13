<template lang="pug">
  div
    span Saved Places
    ul
      li(v-for="cities in item")
        | {{ cities.city }}
        button(@click='remove(cities)') Remove
</template>

<script>
  import { mapGetters } from 'vuex'
  import _ from 'lodash'

  export default {
    computed: {
      ...mapGetters([
        'item',
      ]),
    },
    methods: {
      remove(city) {
        this.$store.dispatch('REMOVE_ITEM', city)
      },
    },
  }
</script>

<style lang='scss' scoped>
  span {
    font-weight: 300;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 1em 0 0 0;
  }
  li {
    line-height: 2rem;
  }
</style>
