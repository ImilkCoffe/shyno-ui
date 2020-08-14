<template>
  <div class="hello">
    <timerTable ></timerTable>
    <div class="rich-text-test">
        <div id='codeTitle1' class="codeTitle" @click="changeShow('myPre2','codeTitle1')">查看代码</div>
        <pre id="myPre2">
      <code>
       var canvasId = document.getElementById('time_line')
    var ctx = canvasId.getContext("2d");
    var title = '66标八干渠二分干10号出口'
    var xList = [1150, 1050, 950, 850, 750, 650, 550, 450, 350, 250, 150, 50, 0]
    /**
     * 标题
     */
    function titleText(text, x, y) {
        ctx.font = "30px Arial";
        ctx.fillText(text, x, y)
    }
    titleText(title, 500, 40)
    /**
     * 横坐标
     */
    function xCanvas(x1, y1, x2, y2) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.font = "15px Arial";
        for (var i = 0; i 此处小于符号 = xList.length - 1; i++) {
            //这里涉及到不同位数的宽度区别，分开处理各自宽度带来的视觉影响
            ctx.fillText(xList[i], 420 + 50 * i - 3 * xList[i].toString().length, 235)
        }

    }
    xCanvas(380, 210, 1021, 210)
    /**
     * 纵向刻度
     */
    function dotted(x, y, lineHeight, number) {
        var yAdd = 0
        for (var i = 0; i  此处小于符号= number; i++) {
            ctx.moveTo(x + 50 * i, y);
            ctx.lineTo(x + 50 * i, y - lineHeight);
            ctx.stroke();
        }
    }
    dotted(420, 210, 10, xList.length - 1)
    /**
     * 上面那个填充颜色的矩形
     */
    function doRect(x, y, width, height) {
        var gradient=ctx.createLinearGradient(430,102,430,162);
        gradient.addColorStop(0,"#9a9994")
        gradient.addColorStop(1,"#f7f2d3");
        ctx.fillStyle = gradient;
        ctx.rect(x, y, width, height);
        ctx.fill()
        ctx.stroke();
    }
    doRect(430, 102, 647, 60)
    function rhomboid() {
        ctx.moveTo(486, 162);
        ctx.beginPath()
        ctx.fillStyle = "#aba9aa";
        ctx.lineTo(1123, 162);
        ctx.lineTo(1021, 210);
        ctx.lineTo(380, 210);
        ctx.lineTo(486, 162);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();//返回原始状
    }

    rhomboid()
    /**
     * 两侧椭圆
     */
    function sildellipse(x, y, radiusX, scaleX, scaleY,
        anticlockwise, type) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.save();
        ctx.translate(x, y)
        ctx.scale(scaleX, scaleY);
        ctx.rotate(180 * Math.PI / 180);
        ctx.fillStyle = "#ffffff";
        ctx.arc(0, 0, radiusX, 0, anticlockwise, type)
        ctx.fill()
        ctx.restore(); //还原副本
        ctx.stroke()
    }
    sildellipse(435, 210, 27, 2, 4, 0.85 * Math.PI, 0)
    sildellipse(1075, 210, 27, 2, 4, 0.85 * Math.PI, 0)
    /**
     * 圆上面的虚线
     */
    function line(){
        ctx.lineWidth = 0.2;
        ctx.moveTo(1123, 162);
        ctx.lineTo(1027, 162);
        ctx.stroke();
    }
    line()
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
