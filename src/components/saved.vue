<template lang="pug">
  div
    span Saved Places
    ul
      li(v-for="citynames in city") {{ citynames }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'item',
        'city',
      ]),
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
