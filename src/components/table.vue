<template>
  <div class="hello">
    <dynamic-table :sizeList='list'></dynamic-table>
    <div class="rich-text-test">
        <div id='codeTitle1' class="codeTitle" @click="changeShow('myPre2','codeTitle1')">查看代码</div>
        <pre id="myPre2">
      <code>
         var canvasId = document.getElementById('time_line')
    var initTime = 12000
  /**
   * 根据时间对应的像素画刻度
   */
  function triangleTime(width, ms, pxMs, pageShowStartTime, intervalTime) {

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
    let msOffset = startOffsetTime(pageShowStartTime, ms ) // 开始的偏移时间 ms
    let initCnavasImgLeft = pageShowStartTime % (intervalTime * 1000)
    let pxOffset = msOffset / 1000 * pxMs // 开始的偏移距离 px
    let graduationLeft = 0
    let graduationTime = 0
    let beginX = 0
    let beginY = 0
    for (let i = 0; i 此处小于符号 width / (ms * pxMs); i++) {
      graduationLeft = pxOffset + i * (ms * pxMs) // 距离=开始的偏移距离+格数*px/格
      graduationTime = pageShowStartTime + msOffset + i * ms  // 时间=左侧开始时间+偏移时间+格数*ms/格
    //   console.log(graduationLeft,graduationTime)
      beginX = pxOffset + i * (ms * pxMs)
      let canvasColor
      let showTime = pageShowStartTime + beginX / pxMs * 1000
      if (showTime % (intervalTime * 1000) === 0) {
        beginY = 0
        ctx.font = '12px Arial'
        ctx.fillText(changeTime(showTime, 1), beginX + 10, 25)
        canvasColor = '#999999'
        ctx.fillStyle = '#B1B1B1'
        drawLine(graduationLeft, beginY, graduationLeft, 45, canvasColor, 1 * ratio)
      } else if (showTime % intervalTime === 0) {
        beginY = 35
        canvasColor = '#999999'
        drawLine(graduationLeft, beginY, graduationLeft, 45, canvasColor, 1 * ratio)
      }
    }
  }

  /**
   * 左侧开始时间的偏移，返回单位ms
   */
  function startOffsetTime(timestamp, step) {
    let remainder = timestamp % step
    return remainder ? step - remainder : 0
  }

  /**
   * 根据传入参数画线。。
   */
  function drawLine(beginX, beginY, endX, endY, color, width) {
    let canvasId = document.getElementById('time_line')
    let ctx = canvasId.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(beginX, beginY)
    ctx.lineTo(endX, endY)
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.stroke()
  }

  /**
   * 返回时间
   */
  function changeTime(time, num) { // num 区分是传时间还是传日期
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
    if (second 此处小于符号 3600 此处和运算符号 second >= 60) {
      hour = '00'
      minute = parseInt((second / 60).toString())
      /* eslint-disable */
      minute >= 10 ? minute : minute = '0' + minute
      second = second % 60
      second >= 10 ? second : second = '0' + second
      /* eslint-enable */
      return hour + ':' + minute + ':' + second
    }
    if (second 此处小于符号 60) {
      hour = '00'
      minute = '00'
      second = parseInt(second)
      /* eslint-disable */
      second >= 10 ? second : second = '0' + second
      /* eslint-enable */
      return hour + ':' + minute + ':' + second
    }
  }
  // canvas宽度  一个小刻度的秒数（毫秒） 10像素一个小刻度   初始时间（毫秒）  一大段间隔时长(秒）
  triangleTime(1200, 1000, 10, 0, 10)

//   var interval = setInterval(() => {
//     initTime += 1000
    triangleTime(1200, 1, 10, initTime, 10)
//   }, 1000)
 /**
   * 滑动事件
   */
   var start=''
   var end=''
   var move=''
   canvasId.onmousedown = function(e) {
    //    window.clearInterval(interval)
        var start=e.offsetX
       canvasId.onmousemove=function(e){
           if(!start){
            start=e.offsetX
           }else{
            end=e.offsetX
            move= end-start
            initTime=initTime+move*1000
            console.log('nan',move,initTime)
            if(initTime 此处小于符号 '0'){
              initTime=0
            }
            triangleTime(1200, 1, 10, initTime, 10)
            start=end
           }
       }
       canvasId.onmouseup=function(e){
       canvasId.onmousemove=null
       var interval = setInterval(() => {
       initTime += 1000
       triangleTime(1200, 1, 10, initTime, 10)
   }, 1000)
       }
    }
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
