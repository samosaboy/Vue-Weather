<template lang="pug">
  .mainapp
    .search
      Search
</template>

<script>
  import Search from './Search'

  export default {
    name: 'vue-weather',
    components: {
      Search,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
  }
</script>

<style lang='scss' scoped>
  .mainapp {
    background: #6534FF;
    position: relative;
    height: 100%;
  }
  .search {
    width: 80vw;
    margin: 0 auto;
  }
</style>
