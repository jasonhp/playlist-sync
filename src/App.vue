<template>
  <div id="app">
    <transition name="app-transition" mode="out-in">
      <keep-alive>
        <router-view
          class="app-view">
        </router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import Constants from './constants'

  export default {
    data() {
      return {

      }
    },
    components: {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

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

  .app-view{
    transition: all .1s linear;
  }
  .app-transition-enter, .app-transition-leave-active{
    opacity: 0;
    transform: translate3d(100px,0,0);
  }
  .app-transition-enter.main-page, .app-transition-leave-active.main-page{
    opacity: 0.5;
    transform: translate3d(0,0,-20px);
  }
  .app-transition-enter.features-page, .app-transition-leave-active.features-page{
    opacity: 0;
    transform: translate3d(0,0,0);
  }
</style>
