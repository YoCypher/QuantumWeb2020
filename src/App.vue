<template>
  <div id="app">
    <div id="nav">
      <Menu/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default{
  name: 'App',
  components:{
    Menu
  }
}
</script>

<style>
</style>
