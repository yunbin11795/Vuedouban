<template>
  <div id="app">
  <HeaderTag></HeaderTag>
    <router-view class="child-view"></router-view>
  </div>
</template>

<script>
import HeaderTag from './view/header/header.vue';
export default {
  name: 'app',
  components:{
      HeaderTag
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:focus{
  text-decoration: none;
}
</style>
