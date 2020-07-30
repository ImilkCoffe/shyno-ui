<template>
  <div>
    <div class="typeTitle">横坐标滚动</div>
    <div id="shyCharts"></div>
    <div class="describe">
      <div class="rich-text-test">
        <div id='codeTitle0' class="codeTitle" @click="changeShow('myPre1','codeTitle0')">查看代码</div>
        <pre id="myPre1">
      <code>
         chartsInit: function () {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("shyCharts"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "费用使用情况",
          x: "center",
          y: "top",
          left: "50%",
          textAlign: "center",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
        },
        itemStyle: {
          color: "#29616e",
          width: "5px",
          normal: {
            color: "#ffc356",
          },
        },
        lineStyle: {
          color: "#ffc356",
        },
        xAxis: {
          type: "category",
          data: this.xList,
          axisPointer: {
            type: "shadow",
          },
          axisLabel: {
            interval: 0,
            rotate: 40,
          },
        },
        //在这里设置坐标滚动条
        dataZoom: [
          {
            show: this.xList ? (this.xList.length > 6 ? true : false) : false,
            type: "slider",
            height: 20,
            xAxisIndex: 0,
            filterMode: "empty",
            startValue: 0,
            endValue: 2,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "费用(万元)",
            splitLine: {
              show: false,
            },
            min: 0,
            axisLabel: {},
          },
        ],
        series: [
          {
            name: "费用",
            type: "bar",
            barWidth: "15px",
            data: this.yList,
          },
        ],
        grid: {
          top: "80px",
          left: "20%",
          bottom: "70px",
        },
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
      </code>
    </pre>
      </div>
    </div>
    <div class="typeTitle">纵坐标滚动</div>
    <div id="shyCharts1"></div>
    <div class="describe">
      <div class="rich-text-test">
        <div id='codeTitle1' class="codeTitle" @click="changeShow('myPre2','codeTitle1')">查看代码</div>
        <pre id="myPre2">
      <code>
 chartsInit1: function () {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      console.log("pppp", this.xList, this.yList);
      var myChart = echarts.init(document.getElementById("shyCharts1"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "费用使用情况",
          x: "center",
          y: "top",
          left: "50%",
          // 为了让副标题左对齐                                                                  ",
          textAlign: "center",
          textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 14,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          // feature: {
          //     dataView: {show: true, readOnly: false},
          //     magicType: {show: true, type: ['line', 'bar']},
          //     restore: {show: true},
          //     saveAsImage: {show: true}
          // }
        },
        itemStyle: {
          color: "#29616e",
          width: "5px",
          normal: {
            color: "#ffc356",
          },
        },
        lineStyle: {
          color: "#ffc356",
        },
        // legend: {
        //     data:['销量']
        // },
        xAxis: {
          //x轴的type改成value
         type: "value",
          // data: this.xList,
          axisPointer: {
            type: "shadow",
          },
          axisLabel: {
            interval: 0,
            rotate: 10,
          },
        },
        dataZoom: [
          {
            show: this.xList ? this.xList.length > 6 : false,
            type: "slider",
            //滑块的样式在这里改
            height: 250,
            // xAxisIndex: 0,
            //这里是y坐标
            yAxisIndex: 0,
            filterMode: "empty",
            startValue: 0,
            endValue: 2,
          },
        ],
        yAxis: [
          {
            //这里的类型要改掉
            type: "category",
            name: "费用(万元)",
            splitLine: {
              show: false,
            },
            min: 0,
            axisLabel: {},
            data: this.xList,
          },
        ],
        series: [
          {
            name: "费用",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "right",
              },
              barWidth: "5px",
            },
            data: this.yList,
          },
        ],
        grid: {
          top: "80px",
          left: "20%",
          bottom: "70px",
        },
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
      </code>
    </pre>
      </div>
    </div>
  </div>
</template>
<script>
// import mapMutations from 'vuex'
export default {
  name: 'charts_roll',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      xList: [
        '小明',
        '小红',
        '小刚',
        '小青',
        '小小',
        '小司机',
        '小东西',
        '小白'
      ],
      yList: [1, 3, 4, 5, 7, 8, 5, 4]
    }
  },
  mounted: function () {
    this.chartsInit()
    this.chartsInit1()
  },
  computed: {
    getTitle (index) {
      return this.$store.getters.getTitle(index)
    }
  },
  methods: {
    // ...mapMutations(['showCode']),
    changeShow: function (key, titleKey) {
      this.Common.showCode(key, titleKey)
    },
    chartsInit: function () {
      var echarts = require('echarts')
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('shyCharts'))

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '费用使用情况',
          x: 'center',
          y: 'top',
          left: '50%',
          // 为了让副标题左对齐                                                                  ",
          textAlign: 'center',
          textStyle: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          // feature: {
          //     dataView: {show: true, readOnly: false},
          //     magicType: {show: true, type: ['line', 'bar']},
          //     restore: {show: true},
          //     saveAsImage: {show: true}
          // }
        },
        itemStyle: {
          color: '#29616e',
          width: '5px',
          normal: {
            color: '#ffc356'
          }
        },
        lineStyle: {
          color: '#ffc356'
        },
        // legend: {
        //     data:['销量']
        // },
        xAxis: {
          type: 'category',
          data: this.xList,
          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        dataZoom: [
          {
            show: this.xList ? this.xList.length > 6 : false,
            type: 'slider',
            height: 20,
            xAxisIndex: 0,
            // yAxisIndex: 0,
            filterMode: 'empty',
            startValue: 0,
            endValue: 2
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '费用(万元)',
            splitLine: {
              show: false
            },
            min: 0,
            axisLabel: {}
          }
        ],
        series: [
          {
            name: '费用',
            type: 'bar',
            barWidth: '15px',
            data: this.yList
          }
        ],
        grid: {
          top: '80px',
          left: '20%',
          bottom: '70px'
        }
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    chartsInit1: function () {
      var echarts = require('echarts')
      // 基于准备好的dom，初始化echarts实例
      console.log('pppp', this.xList, this.yList)
      var myChart = echarts.init(document.getElementById('shyCharts1'))

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '费用使用情况',
          x: 'center',
          y: 'top',
          left: '50%',
          // 为了让副标题左对齐                                                                  ",
          textAlign: 'center',
          textStyle: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          // feature: {
          //     dataView: {show: true, readOnly: false},
          //     magicType: {show: true, type: ['line', 'bar']},
          //     restore: {show: true},
          //     saveAsImage: {show: true}
          // }
        },
        itemStyle: {
          color: '#29616e',
          width: '5px',
          normal: {
            color: '#ffc356'
          }
        },
        lineStyle: {
          color: '#ffc356'
        },
        // legend: {
        //     data:['销量']
        // },
        xAxis: {
          // x轴的type改成value
          type: 'value',
          // data: this.xList,
          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            interval: 0,
            rotate: 10
          }
        },
        dataZoom: [
          {
            show: this.xList ? this.xList.length > 6 : false,
            type: 'slider',
            // 滑块的样式在这里改
            height: 250,
            // xAxisIndex: 0,
            // 这里是y坐标
            yAxisIndex: 0,
            filterMode: 'empty',
            startValue: 0,
            endValue: 2
          }
        ],
        yAxis: [
          {
            // 这里的类型要改掉
            type: 'category',
            name: '费用(万元)',
            splitLine: {
              show: false
            },
            min: 0,
            axisLabel: {},
            data: this.xList
          }
        ],
        series: [
          {
            name: '费用',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'right'
              },
              barWidth: '5px'
            },
            data: this.yList
          }
        ],
        grid: {
          top: '80px',
          left: '20%',
          bottom: '70px'
        }
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#shyCharts,
#shyCharts1 {
  margin-top: 20px;
  width: 100%;
  height: 400px;
}
</style>
