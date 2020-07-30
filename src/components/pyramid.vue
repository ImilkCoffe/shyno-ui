<template>
  <div class="hello">
    <Pyramid :msgData='msg'></Pyramid>
  </div>
</template>

<script>
export default {
  name: 'pyramid',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      htmlText: ["<p class='fontP tip1'>无背景色</p>", "<p class='fontP bg'><span class='tip2'>有背景色</span></p>"]
    }
  },
  methods: {
    changeShow: function (key) {
      this.$store._mutations.showCode[0](key)
    }
  },
  computed: {
    getTitle () {
      return this.$store.getters.getTitle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tip1,.tip2{
background-image: -webkit-linear-gradient(
    bottom,
    rgb(0, 68, 255),
    #fd8403,
    yellow
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tip1{
  border:1px solid blueviolet
}
.bg{
  background-color: blueviolet;
}
</style>
