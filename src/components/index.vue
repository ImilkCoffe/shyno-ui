<template>
  <div class="hello">
   <div id='bg'></div>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bg{
  float:right;
  width: 50%;
  height:700px;
  background-image: url('../assets/img/sannai2.png');
  background-position: top center;
  background-size: 100% 100%;
  /* background-position: 0 -280px; */
}
</style>
