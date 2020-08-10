<template>
  <canvas id="time_line" width="1200" height="100" ></canvas>
</template>

<script>
export default {
  name: 'dynamicTable',
  data () {
    return {
      canvasId: '',
      initTime: 12000,
      start: '',
      end: '',
      move: '',
      interval: ''
    }
  },
  props: ['sizeList'],
  methods: {
    changeShow: function (key, titleKey) {
      this.Common.showCode(key, titleKey)
    },
    indexChange: function (val) {
      this.localPage.pageIndex = val
      this.getTableData()
    },
    triangleTime: function (width, ms, pxMs, pageShowStartTime, intervalTime) {
      let canvasId = document.getElementById('time_line')
      let ctx = canvasId.getContext('2d')
      ctx.clearRect(0, 0, 1200, 400)
      ctx.fillStyle = '#999999'
      // 为防止苹果屏幕2X显示不正常
      var getPixelRatio = function (context) {
        var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1
        return (window.devicePixelRatio || 1) / backingStore
      }
      let ratio = getPixelRatio(ctx)
      // ------------
      let msOffset = this.startOffsetTime(pageShowStartTime, ms) // 开始的偏移时间 ms
      // let initCnavasImgLeft = pageShowStartTime % (intervalTime * 1000)
      let pxOffset = msOffset / 1000 * pxMs // 开始的偏移距离 px
      let graduationLeft = 0
      // let graduationTime = 0
      let beginX = 0
      let beginY = 0
      for (let i = 0; i < width / (ms * pxMs); i++) {
        graduationLeft = pxOffset + i * (ms * pxMs) // 距离=开始的偏移距离+格数*px/格
        // graduationTime = pageShowStartTime + msOffset + i * ms // 时间=左侧开始时间+偏移时间+格数*ms/格
        //   console.log(graduationLeft,graduationTime)
        beginX = pxOffset + i * (ms * pxMs)
        let canvasColor
        let showTime = pageShowStartTime + beginX / pxMs * 1000
        if (showTime % (intervalTime * 1000) === 0) {
          beginY = 0
          ctx.font = '12px Arial'
          ctx.fillText(this.changeTime(showTime, 1), beginX + 10, 25)
          canvasColor = '#999999'
          ctx.fillStyle = '#B1B1B1'
          this.drawLine(graduationLeft, beginY, graduationLeft, 45, canvasColor, 1 * ratio)
        } else if (showTime % intervalTime === 0) {
          beginY = 35
          canvasColor = '#999999'
          this.drawLine(graduationLeft, beginY, graduationLeft, 45, canvasColor, 1 * ratio)
        }
      }
    },
    startOffsetTime: function (timestamp, step) {
      let remainder = timestamp % step
      return remainder ? step - remainder : 0
    },
    drawLine: function (beginX, beginY, endX, endY, color, width) {
      let canvasId = document.getElementById('time_line')
      let ctx = canvasId.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(beginX, beginY)
      ctx.lineTo(endX, endY)
      ctx.strokeStyle = color
      ctx.lineWidth = width
      ctx.stroke()
    },
    changeTime: function (time, num) { // num 区分是传时间还是传日期
      let hour = 0
      let minute = 0
      let second = 0
      second = time / 1000
      if (second >= 3600) {
        minute = (second - (second % 60)) / 60
        hour = parseInt((minute / 60).toString())
        minute = minute % 60
        /* eslint-disable */
      hour >= 10 ? hour : hour = '0' + hour
      minute >= 10 ? minute : minute = '0' + minute
      second = second % 60
      second >= 10 ? second : second = '0' + second
      /* eslint-enable */
        return hour + ':' + minute + ':' + second
      }
      if (second < 3600 && second >= 60) {
        hour = '00'
        minute = parseInt((second / 60).toString())
        /* eslint-disable */
      minute >= 10 ? minute : minute = '0' + minute
      second = second % 60
      second >= 10 ? second : second = '0' + second
      /* eslint-enable */
        return hour + ':' + minute + ':' + second
      }
      if (second < 60) {
        hour = '00'
        minute = '00'
        second = parseInt(second)
        /* eslint-disable */
      second >= 10 ? second : second = '0' + second
      /* eslint-enable */
        return hour + ':' + minute + ':' + second
      }
    }

  },
  computed: {

  },
  created: function () {

  },
  mounted: function () {
    this.canvasId = document.getElementById('time_line')
    this.interval = setInterval(() => {
      this.initTime += 1000
      this.triangleTime(1200, 1, 10, this.initTime, 10)
    }, 1000)
    this.canvasId.onmousedown = (e) => {
      window.clearInterval(this.interval)
      this.canvasId.onmousemove = (e) => {
        if (!this.start) {
          this.start = e.offsetX
        } else {
          this.end = e.offsetX
          this.move = this.end - this.start
          this.initTime = this.initTime + this.move * 1000
          if (this.initTime < 0) {
            this.initTime = 0
          }

          this.triangleTime(1200, 1, 10, this.initTime, 10)
          this.start = this.end
        }
      }
      this.canvasId.onmouseup = (e) => {
        this.canvasId.onmousemove = null
        // this.interval = setInterval(() => {
        //   this.initTime += 1000
        //   this.triangleTime(1200, 1, 10, this.initTime, 10)
        // }, 1000)
      }
    }
  },
  destroyed: function () {
    console.log('你好')
    window.clearInterval(this.interval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 #time_line {
            background: black;
        }
</style>
