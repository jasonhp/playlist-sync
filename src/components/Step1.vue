<template>
  <div class="page step1">
    <div class="login-wrap" v-show="!showPlats">
      <h2>请登录账号</h2>
      <div class="account-item from">
        <p>从</p>
        <div class="chooser" @click="f_goChoose(0)">登录账号>></div>
      </div>
      <div class="account-item to">
        <p>到</p>
        <div class="chooser" @click="f_goChoose(1)">登录账号>></div>
      </div>
    </div>
    <div class="plat-wrap" v-if="showPlats">
      <span class="back" @click="showPlats = false">返回</span>
      <div class="plat-wrap">
        <span class="plat-item" @click="f_goPlat(0)">网易云</span>
        <span class="plat-item" @click="f_goPlat(1)">qq音乐</span>
      </div>
      <button>确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showPlats: false,

      }
    },
    methods: {
      f_goChoose(as) {
        this.showPlats = true;
      }
    }
  }
</script>

<style type="text/scss" lang="scss">

  h2{
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .account-item{
    font-size: 16px;
    margin-bottom: 10px;
    p{
      text-align: center;
    }
    .chooser{
      width: 100%;
      height: 40px;
      border-radius: 4px;
      cursor: pointer;
      background-color: orange;
    }
  }
  .login-wrap{

  }

</style>
