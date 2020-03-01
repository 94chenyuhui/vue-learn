<template>
  <div class="chenyuhui">
      {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name:'chenyuhui',
    data(){
      return{
        msg:'你好，陈宇辉'
      }
    }
  }
</script>

<style>
  h1{
    color: red;
  }
</style>
