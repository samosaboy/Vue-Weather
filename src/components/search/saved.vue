<template lang="pug">
  div
    transition-group.row.col-xs-12(name='fade' tag='ul')
      li.component.col-md-2.bottom-xs(v-for='cities in item', :key='cities.city')
        button(@click='remove(cities)')
          deleteicon.icon.icon-small
        | {{ cities.city }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import deleteicon from './../../assets/icons/close-round.svg'

  export default {
    components: {
      deleteicon,
    },
    data() {
      return { }
    },
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
    margin: 1em 0 0 0;
    padding: 0;
    flex-wrap: nowrap;
  }

  li {
    margin: 0 0.5em 0 0;
    font-size: 1.3em;
    font-weight: 300;
    position: relative;
  }

  .component {
    border:1px solid rgba(white, 0.3);
    padding: 1em;
    display: flex;
    height: 200px;
  }

  button {
    position: absolute;
    right: 0.4em;
    top: 0.4em;

    &:hover {
      cursor: pointer;
    }

    svg {
      fill: rgba(white, 0.3);
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

</style>
