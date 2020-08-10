<template>
  <div class="hello">
    <dynamic-table :sizeList='list'></dynamic-table>
    <div class="rich-text-test">
        <div id='codeTitle1' class="codeTitle" @click="changeShow('myPre2','codeTitle1')">查看代码</div>
        <pre id="myPre2">
      <code>
        太长了.....
      </code>
    </pre>
      </div>
  </div>
</template>

<script>
export default {
  name: 'pyramid',
  data () {
    return {
      list: ['10', '20'],
      htmlText: ["<p class='fontP tip1'>无背景色</p>", "<p class='fontP bg'><span class='tip2'>有背景色</span></p>"]
    }
  },
  methods: {
    changeShow: function (key, titleKey) {
      this.Common.showCode(key, titleKey)
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
