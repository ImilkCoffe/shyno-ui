<template>
  <canvas id="time_line" width="1500" height="250" @mousemove='showcaver'></canvas>
</template>

<script>
export default {
  name: 'timerSection ',
  data () {
    return {
      canvasId: '',
      title: '66标八干渠二分干10号出口',
      yDataList: ['挖掘机-公司-001', '挖掘机-公司-002', '挖掘机-公司-003'],
      isOut: true,
      isCreated: false,
      ctx: '',
      body: '',
      dataList: [{
        name: '挖掘机-公司-001',
        list: [{
          startDate: '02:11:32',
          endDare: '03:31:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        },
        {
          startDate: '10:11:32',
          endDare: '12:01:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        },
        {
          startDate: '20:11:32',
          endDare: '21:31:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        }
        ]
      },
      {
        name: '挖掘机-公司-002',
        list: [{
          startDate: '02:11:32',
          endDare: '03:31:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        },
        {
          startDate: '7:11:32',
          endDare: '8:01:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        },
        {
          startDate: '20:11:32',
          endDare: '21:31:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        }
        ]
      },
      {
        name: '挖掘机-公司-003',
        list: [{
          startDate: '02:11:32',
          endDare: '03:31:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        },
        {
          startDate: '10:11:32',
          endDare: '12:01:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        },
        {
          startDate: '15:11:32',
          endDare: '16:31:32',
          totalTate: '10小时10分',
          time: '1小时10分',
          name: '挖掘机-公司-001'
        }
        ]
      }
      ]
    }
  },
  props: [],
  methods: {
    xCanvas: function (x1, y1, x2, y2) {
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.stroke()
      this.ctx.font = '15px Arial'
      for (var i = 0; i <= 24; i++) {
        // 这里涉及到一位数和两位数的宽度区别，分开处理各自宽度带来的视觉影响
        if (i < 10) {
          this.ctx.fillText(i, 140 + 50 * i - 3, 25)
        } else {
          this.ctx.fillText(i, 140 + 50 * i - 7, 25)
        }
      }
    },
    dotted: function (x, y, interval, lineHeight, number) {
      var yAdd = 0
      for (var i = 0; i <= number; i++) {
        this.ctx.moveTo(x, y + yAdd)
        this.ctx.lineTo(x, y + yAdd + lineHeight)
        this.ctx.stroke()
        yAdd = yAdd + lineHeight + interval
      }
    },
    allDotted: function (x, y, interval, number) {
      for (var i = 0; i <= number; i++) {
        this.dotted(140 + interval * i, 40, 2, 4, 15)
      }
    },
    yLists: function (x, y, interval, yData) {
      this.ctx.font = '15px Arial'
      for (var i = 0; i <= yData.length - 1; i++) {
        this.ctx.fillText(yData[i], x, y + interval * i + 15 * i)
      }
    },
    /**
     * 时间刻度与横坐标刻度的切换50px=1h=60m=3600s
     */
    dateToX: function (date) {
      // 获取小时后,后面的统一转化成秒,方便处理
      let startList = date.split(':')
      let startX1 = 140 + Number(startList[0]) * 50
      let startX2 = (Number(startList[1] * 60) + Number(startList[2])) / 3600 * 50
      let startX = startX1 + startX2
      return startX
    },
    dataItem: function (dataItem, interval, height, i) {
      var startX = this.dateToX(dataItem.startDate)
      var endX = this.dateToX(dataItem.endDare)
      this.ctx.fillStyle = '#4c90ff'
      this.ctx.fillRect(startX, 40 + i * (interval + height), endX - startX, height)
      // 为了后续判断事件,必须把横坐标保存起来
      return [startX, endX]
    },
    /**
     * 生成所有条码
     */
    allItem: function (dataList) {
      dataList.forEach((item, index) => {
        item.list && item.list.forEach(item1 => {
          var list = this.dataItem(item1, 20, 20, index)
          // 赋值为了后续判断拿取数据
          item1.xList = list
          item1.yList = [40 + index * (40), 60 + index * (40)]
        })
      })
    },
    /**
     * 动态生成一个遮罩层
     */
    addDom: function (x, y, width, height, data) {
      if (data && !this.isCreated) {
        var myDiv = document.createElement('DIV')
        var myHtml =
            '<p style="margin:20px 10px 10px 10px;color:#4c90ff;font-weight:700;padding-bottom:5px"><span>当前时段: ' + data
              .startDate + '-' + data.endDare + '</span></p>' +
            '<p style="margin:10px;color:#4c90ff;font-weight:700;padding-bottom:5px"><span>总时长: ' + data.totalTate +
            '</span></p>' +
            '<p style="margin:10px;width:90%;border-bottom:1px solid gray;color:#4c90ff;font-weight:700;padding-bottom:5px"><span>运行: ' +
            data.time + '</span></p>' +
            '<p style="margin:10px"><span>设备名称: ' + data.name + '</span></p>'
        myDiv.setAttribute('id', 'myDiv')
        myDiv.style.height = height + 'px'
        myDiv.style.width = width + 'px'
        myDiv.style.position = 'absolute'
        myDiv.style.left = x + 'px'
        myDiv.style.top = y + 'px'
        myDiv.style.borderRadius = '5px'
        myDiv.style.boxShadow = '0px 0px 20px black'
        myDiv.innerHTML = myHtml
        this.body[0].appendChild(myDiv)
        // 创建一个后马上制止创建第二个
        this.isCreated = true
      }
    },
    /**
     * 坐标比较来获取数据
     */
    getData: function (x, y, dataList) {
      dataList.map(item => {
        item.list && item.list.map(item1 => {
          if (x >= item1.xList[0] && x <= item1.xList[1] && y >= item1.yList[0] && y <= item1
            .yList[1]) {
            this.isOut = false
            this.addDom(x, y, 300, 180, item1)
          } else {

          }
        })
      })
      this.isOut = true
    },
    // 鼠标事件
    showcaver: function (e) {
      var Div = document.getElementById('myDiv')
      if (Div) {
        Div.remove()
        this.isCreated = false
      }
      this.getData(e.offsetX, e.offsetY, this.dataList)
    },
    /**
     * 初始化
     */
    init: function () {
      this.xCanvas(140, 40, 1400, 40)
      this.allDotted(140, 40, 50, 24)
      this.yLists(20, 60, 20, this.yDataList)
      this.allItem(this.dataList)
    }
  },
  computed: {

  },
  mounted: function () {
    this.canvasId = document.getElementById('time_line')
    this.ctx = this.canvasId.getContext('2d')
    this.body = document.getElementsByTagName('body')
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   canvas {
background-color: #f2f5f9;
        }
</style>
