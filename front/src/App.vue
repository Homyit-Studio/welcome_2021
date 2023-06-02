<template>
  <div id="app">
    <router-view></router-view>
    <!-- <test/> -->
  </div>
    
</template>

<script>
// import NavBar from "./components/enter/enter.vue"
// import test from './components/common/test.vue'
export default {
  name: "App",
  components:{
    // test
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
