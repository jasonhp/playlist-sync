<template>
  <div class="page main">
    <!-- main view -->
    <span class="start-btn" @click="f1">163歌单</span>
    <span class="start-btn" @click="f2">163歌单内容</span>
  </div>
</template>

<script>
  import CONSTANTS from '../constants'

  export default {
    data() {
      return {

      }
    },
    mounted: function(){

    },
    methods: {
      f1() {
        chrome.runtime.sendMessage({
          operation: CONSTANTS.MSGS.GET_LISTS,
          platform: CONSTANTS.PLATS.NETEASE,
        })
      },
      f2() {
        chrome.runtime.sendMessage({
          operation: CONSTANTS.MSGS.GET_DETAILS,
          platform: CONSTANTS.PLATS.NETEASE,
          playListId: '953168127'
        })
      }
    }
  }
</script>

<style type="text/scss" lang="scss">

  .page.main{
    text-align: center;
    padding-top: 100px;
  }
  .start-btn{
    display: inline-block;
    cursor: pointer;
    width: 100px;
    height: 100px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    background-color: orange;
    text-align: center;
    line-height: 100px;
    color: #fff;
    background-image: url(../assets/img/icons/icon-addlink.png);
  }
</style>
