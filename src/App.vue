<template>
  <div id="app">
    <div id="nav" v-bind:style="estilo">
      <Menu/>
    </div>
    <router-view v-on:desaparecer="ativar"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default{
  name: 'App',
  components:{
    Menu
  },
  data: function(){
    return {
      estilo: ''
    }
  },
  methods: {
    ativar: function(){
      this.estilo = 'display: none;'
    }
  }
}
</script>

<style>
</style>
