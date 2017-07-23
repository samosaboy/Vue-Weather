<template lang="pug">
  div
    button(@click='toggleComponent')
      iconadd.icon.icon-medium(v-if='!search')
      iconclose.icon.icon-medium(v-else)
</template>

<script>
  import iconclose from './../../assets/icons/ios-close-outline.svg'
  import iconadd from './../../assets/icons/ios-plus-outline.svg'

  export default {
    components: {
      iconadd,
      iconclose,
    },
    data() {
      return {
        search: false,
      }
    },
    methods: {
      toggleComponent() {
        this.$store.commit('SET_OVERLAY', this.search = !this.search)
      },
    },
  }
</script>

<style lang='scss' scoped>

</style>
