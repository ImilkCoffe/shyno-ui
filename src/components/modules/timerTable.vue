<template>
  <canvas id="time_line" width="1500" height="250"></canvas>
</template>

<script>
export default {
  name: 'timerTable',
  data () {
    return {
      canvasId: '',
      title: '66标八干渠二分干10号出口',
      xList: [1150, 1050, 950, 850, 750, 650, 550, 450, 350, 250, 150, 50, 0],
      ctx: ''
    }
  },
  props: [],
  methods: {
    titleText: function (text, x, y) {
      this.ctx.font = '30px Arial'
      this.ctx.fillText(text, x, y)
    },
    xCanvas: function (x1, y1, x2, y2) {
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.stroke()
      this.ctx.font = '15px Arial'
      for (var i = 0; i <= this.xList.length - 1; i++) {
        // 这里涉及到不同位数的宽度区别，分开处理各自宽度带来的视觉影响
        this.ctx.fillText(this.xList[i], 420 + 50 * i - 3 * this.xList[i].toString().length, 235)
      }
    },
    /**
     * 纵向刻度
     */
    dotted: function (x, y, lineHeight, number) {
      for (var i = 0; i <= number; i++) {
        this.ctx.moveTo(x + 50 * i, y)
        this.ctx.lineTo(x + 50 * i, y - lineHeight)
        this.ctx.stroke()
      }
    },
    /**
     * 上面那个填充颜色的矩形
     */
    doRect: function (x, y, width, height) {
      var gradient = this.ctx.createLinearGradient(430, 102, 430, 162)
      gradient.addColorStop(0, '#9a9994')
      gradient.addColorStop(1, '#f7f2d3')
      this.ctx.fillStyle = gradient
      this.ctx.rect(x, y, width, height)
      this.ctx.fill()
      this.ctx.stroke()
    },
    /**
     * 平行四边形
     */
    rhomboid: function () {
      this.ctx.moveTo(486, 162)
      this.ctx.beginPath()
      this.ctx.fillStyle = '#aba9aa'
      this.ctx.lineTo(1123, 162)
      this.ctx.lineTo(1021, 210)
      this.ctx.lineTo(380, 210)
      this.ctx.lineTo(486, 162)
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.fill()
      this.ctx.restore()// 返回原始状
    },
    /**
     * 两侧椭圆
     */
    sildellipse: function (x, y, radiusX, scaleX, scaleY,
      anticlockwise, type) {
      this.ctx.beginPath()
      this.ctx.lineWidth = 1
      this.ctx.save() // 保存副本
      this.ctx.translate(x, y)
      this.ctx.scale(scaleX, scaleY)
      this.ctx.rotate(180 * Math.PI / 180)
      this.ctx.fillStyle = '#ffffff'
      this.ctx.arc(0, 0, radiusX, 0, anticlockwise, type)
      this.ctx.fill()
      this.ctx.restore() // 还原副本
      this.ctx.stroke()
    },
    line: function () {
      this.ctx.lineWidth = 0.2
      this.ctx.moveTo(1123, 162)
      this.ctx.lineTo(1027, 162)
      this.ctx.stroke()
    },
    /**
     * 因为涉及到颜色和图形覆盖,所有要按顺序画
     */
    init: function () {
      console.log('ooo', this.titleText)
      this.titleText(this.title, 500, 40)
      this.xCanvas(380, 210, 1021, 210)
      this.dotted(420, 210, 10, this.xList.length - 1)
      this.doRect(430, 102, 647, 60)
      this.rhomboid()
      this.sildellipse(435, 210, 27, 2, 4, 0.85 * Math.PI, 0)
      this.sildellipse(1075, 210, 27, 2, 4, 0.85 * Math.PI, 0)
      this.line()
    }

  },
  computed: {

  },
  mounted: function () {
    this.canvasId = document.getElementById('time_line')
    this.ctx = this.canvasId.getContext('2d')
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
   #time_line {
      background-color: #f2f5f9;
        }
</style>
