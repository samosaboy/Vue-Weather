<template lang="pug">
  .overlay.component.shadow.row
    .col-xs-12.middle-xs
      search
      saved.saved.col-xs-12
</template>
`
<script>
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
  }
</script>

<style lang='scss' scoped>

  .saved {
    margin-top: 1em;
  }

</style>
