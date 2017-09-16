<template>
  <div class="account-item">
    <p>{{account.name}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: ['account']
  }
</script>

<style type="text/scss" lang="scss">
  .account-item{
    height: 50px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
</style>
