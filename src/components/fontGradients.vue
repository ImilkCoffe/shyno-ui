<template>
  <div class="hello">
    <div class="typeTitle">颜色渐变</div>
    <div class="describe">
        <p class='fontP tip1'>无背景色</p>
        <div id='codeTitle0' class="codeTitle" @click="changeShow('myPre1','codeTitle0')">查看代码</div>
        <pre id="myPre1">
          <code>
           html代码: {{htmlText[0]}}
      </code>
      <code>
        css:
         .tip1{
        background-image: -webkit-linear-gradient(
            bottom,
            rgb(0, 68, 255),
            #fd8403,
            yellow
            );
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
        }
      </code>
    </pre>
       <p class='fontP bg'><span class="tip2">有背景色</span></p>
        <div id='codeTitle1' class="codeTitle" @click="changeShow('myPre2','codeTitle1')">查看代码</div>
        <pre id="myPre2">
          <code>
           html代码: {{htmlText[1]}}
      </code>
      <code>
        css:
         .tip2{
              background-image: -webkit-linear-gradient(
                  bottom,
                  rgb(0, 68, 255),
                  #fd8403,
                  yellow
        );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
}
        .bg{
            background-color: blueviolet;
      }
      </code>
    </pre>
    </div>
  </div>
</template>

<script>
// import mapMutations from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      htmlText: ["<p class='fontP tip1'>无背景色</p>", "<p class='fontP bg'><span class='tip2'>有背景色</span></p>"]
    }
  },
  methods: {
    // ...mapMutations(['showCode'])
    // ,
    changeShow: function (key, titleKey) {
      this.Common.showCode(key, titleKey)
    }
  },
  computed: {
    getTitle (index) {
      return this.$store.getters.getTitle(index)
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
