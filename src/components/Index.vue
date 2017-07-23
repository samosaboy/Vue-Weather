<template lang="pug">
  .background
    buttons
    .container
      transition(name='fade')
        overlay(v-if='overlayState')
      .row.main-body.component.shadow
        maincomponent
      locations
</template>

<script>
  import { mapGetters } from 'vuex'
  import maincomponent from './main-body/main'
  import locations from './locations/locations'
  import overlay from './search/overlay'
  import buttons from './search/buttons'

  export default {
    components: {
      overlay,
      buttons,
      maincomponent,
      locations,
    },
    data() {
      return {
        search: false,
      }
    },
    computed: {
      ...mapGetters([
        'overlayState',
      ]),
    },
  }
</script>

<style lang='scss' scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

</style>
