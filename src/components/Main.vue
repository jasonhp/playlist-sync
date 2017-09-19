<template>
  <div class="page main">
    <!-- main view -->
    <span class="start-btn" @click="f_start">开始</span>
  </div>
</template>

<script>
  import Constants from '../constants'
  import Account from './Account.vue'

  export default {
    data() {
      return {
        accounts: [
          {
            name: '111',
          },
          {
            name: '222',
          }
        ]
      }
    },
    components: {
      Account
    },
    mounted: function(){

    },
    methods: {
      f_start() {
        this.$router.push({name: 'step1'});
        chrome.runtime.sendMessage({ operation: 'call163' })
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
