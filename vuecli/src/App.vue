<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航：
      <router-link to="/">首页</router-link>
      <router-link to="/chenyuhui">陈宇辉页面</router-link>
      <router-link to="/chenyuhui/chenyuhui1">陈宇辉页面1</router-link>
      <router-link to="/chenyuhui/chenyuhui2">陈宇辉页面2</router-link>
      <br />
      {{aa}}<br />
      <button @click="add">增加</button>

    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      aa:1
    }
  },
  methods:{
    add:function(){
      this.aa++
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
