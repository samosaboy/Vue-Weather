<template lang="pug">
  .background
    .container-fluid
      .row.content
        overlay.col-xs-12
    span test
</template>

<script>
  import overlay from './overlay'

  export default {
    components: {
      overlay,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
  }
</script>

<style lang='scss' scoped>
  .background {
    background: #6534FF;
    position: relative;
    height: 100vh;
  }
  .content {
    padding: 10% 0 0 0;
  }
</style>
