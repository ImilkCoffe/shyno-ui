<template>
  <div id="app">
    <div id="topHead">
      <span class="title">shyno-ui</span>
    </div>
    <div id="content">
      <div class="title">
        <el-row class="tac">
          <el-col :span="24">
            <div class="item" v-for="(item) in muneData" :key="item.name">
              <p class="type">{{item.name}}</p>
              <p class="thanTitle" v-for="(item1) in item.moduleList" :key="item1.title" @click="goRouter(item1)">{{item1.title}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="example">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      muneData: require('./assets/js/mune')
    }
  },
  methods: {
    goRouter: function (item) {
      this.$router.push({ path: `/${item.component}` })
    }
  },
  created: function () {},
  mounted: function () {
    console.log('嗯呵', this.$mapMutations)
  },
  components: {

  }
}
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
}
#topHead {
  position: relative;
  top: 0;
  height: 50px;
  width: 100%;
  text-align: center;
  font-family: Arial;
  font-weight: 700;
  font-size: 20px;
  line-height: 50px;
  background-color: aqua;
  background-image: linear-gradient(90deg, #fff, #00b6e3, #fff);
}
#topHead .title {
  background-image: -webkit-linear-gradient(
    bottom,
    rgb(0, 68, 255),
    #fd8403,
    yellow
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#content {
  width: 100%;
  height:800px;
  overflow: hidden;
  display: flex;
  /* background-color: aquamarine; */
}
#content .title {
  height: 100%;
  width: 300px;
  /* background-color: brown; */
}
#content .example {
  flex: 1;
  height: 100%;
  overflow: auto;
  background-color: hsla(219, 38%, 88%, 0.3);
}
.item{
  padding: 10px ;
  padding-left: 40px;
  text-align: left;
}
.item .type{
  font-size: 16px;
  font-family: fantasy;
  color: #00b6e3;
}
.item .thanTitle{
  padding-left: 30px;
  margin-top: 10PX;
  cursor: pointer;
}
.item .thanTitle.active{
  color: aquamarine;
}
</style>
