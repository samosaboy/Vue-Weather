<template lang="pug">
  .row.center-xs.overlay
    .col-xs-12.col-md-6
      span Show me the weather for
      search
      saved.saved
</template>

<script>
  import { mapGetters } from 'vuex'
  import search from './search'
  import saved from './saved'

  export default {
    components: {
      search,
      saved,
    },
    data() {
      return {}
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
  .overlay {
    text-align: left;
    color: white;
  }
  span {
    font-weight: 300;
  }
  .saved {
    margin-top: 1em;
  }
</style>
