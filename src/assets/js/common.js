const commonJs = {
  showCode: function (key, titleKey) {
    const code = document.getElementById(key)
    const titleCode = document.getElementById(titleKey)
    if (titleCode.innerText === '查看代码') {
      code.style.display = 'block'
      titleCode.innerText = '收起代码'
    } else if (titleCode.innerText === '收起代码') {
      code.style.display = 'none'
      titleCode.innerText = '查看代码'
    } else {

    }
  }
}
module.exports = commonJs
