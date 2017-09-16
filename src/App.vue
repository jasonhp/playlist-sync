<template>
  <div id="app">
    <!-- main view -->

  </div>
</template>

<style lang="scss" type="text/scss">
  @import "assets/css/base";
  $linkColor: #1E7BE2;
  a{
    color: $linkColor;
  }
  #app {
    position: relative;
    margin: 0 auto;
    color: #2c3e50;
    width:360px;
    min-height: 460px;
    font-size: 14px;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: center;
    backface-visibility: visible;
    transform-style: preserve-3d;
    transition: width 0.2s linear;
  }
  #app::-webkit-scrollbar {
    width: 2px;
  }
  #app::-webkit-scrollbar-thumb {
    background-color: #1e7be2;
  }
</style>

<script>
  import Constants from './constants'
  import util from './util'

  export default {
    data() {
      return {

      }
    },
    watch: {

    },
    mounted: function(){

    },
    methods: {

    }
  }
</script>
