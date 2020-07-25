const commonJs = {
  title: '查看',
  isShow: true,
  showCode: function (key, bol, title) {
    const code = document.getElementById(key)
    if (bol || this.isShow) {
      code.style.display = 'block'
      this.isShow = false
      console.log('lll', this.title)
      if (title) {
        title = '收起'
      } else {
        this.title = '收起'
      }
      console.log('lll', this.title)
    } else {
      console.log('222', this.title)
      code.style.display = 'none'
      this.isShow = true
      if (title) {
        title = '查看'
      } else {
        this.title = '查看'
      }
      console.log('222', this.title)
    }
  }
}
module.exports = commonJs
