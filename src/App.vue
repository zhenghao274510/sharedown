<template>
<div id="app">
<router-view/>
</div>
</template>

<script>
import set from "./../static/js/fontSize"
	export default {
		data(){
			return{    
			}
		},
		created(){
			window.onload=window.onresize=set.setrem;
		}
	}
</script>

<style>
@import url('./../static/css/base.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
  height:100%;
}
</style>
