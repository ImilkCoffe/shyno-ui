<template>
  <div class="hello">
     <div class="tableBox gs">
        <el-form :model="tableForm" ref="formTable" header-cell-style="backgroundColor:#e0ecfd !important">
            <el-table
                    :data="tableForm.tableData[localPage.pageIndex-1]"
                    border
                    style="width: 100%; margin-top: 20px">
                <el-table-column
                        prop="rm"
                        label="平均回弹值Rm">
                </el-table-column>
                <el-table-column
                        prop="avgV"
                        label="测区混凝土强度换算值">
                    <el-table-column
                            prop="avgV"
                            label="平均碳化深度值">
                        <el-table-column
                                prop="dm0"
                                label="0.0">
                            <template slot-scope="props">
                                <el-form-item :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm0'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm0"  size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm05"
                                label="0.5">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm05'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm05"  size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm10"
                                label="1.0">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm10'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm10"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm15"
                                label="1.5">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm15'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm15"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm20"
                                label="2.0">
                            <template slot-scope="props">
                                <el-form-item :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm20'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm20"  size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm25"
                                label="2.5">
                            <template slot-scope="props">
                                <el-form-item :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm25'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm25"  size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm30"
                                label="3.0">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm30'"   :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm30"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm35"
                                label="3.5">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm35'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" v-model="props.row.dm35"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>

                        <el-table-column
                                prop="dm40"
                                label="4.0">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm40'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm40"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm45"
                                label="4.5">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm45'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm45"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm50"
                                label="5.0">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm50'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm50"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm55"
                                label="5.5">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm55'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm55"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="dm6"
                                label="≥6">
                            <template slot-scope="props">
                                <el-form-item  :prop="'tableData['+(localPage.pageIndex-1)+'].' + props.$index + '.dm6'"  :rules="[{ pattern: /^[\-\+]?\d+(\.\d)?$/, message: '不超过一位小数'}]">
                                    <el-input :disabled="disabled" type="number" v-model.number="props.row.dm6"   size="mini"></el-input>
                                </el-form-item>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </el-form>

    </div>
    <el-pagination
            background
            layout="prev, pager, next"
            @current-change="indexChange"
            :current-page="localPage.pageIndex"
            :total="localPage.total">
    </el-pagination>
    <div slot="footer" class="dialog__footer buttons" >
        <el-button :disabled="cantEdit" size="mini" type="primary" @click="editClick" style="width: 120px">修改</el-button>
        <el-button :disabled="cantSubmit" size="mini" type="warning" @click="editList" style="width: 120px" >提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dynamicTable',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataList: [],
      htmlText: ["<p class='fontP tip1'>无背景色</p>", "<p class='fontP bg'><span class='tip2'>有背景色</span></p>"],
      lengthArray: [],
      fileList: [], // 人员附件
      tableForm: {
        tableData: []
      },
      // 分页数据
      dataLists: [],
      disabled: true,
      cantSubmit: true,
      cantEdit: false,
      localPage: {
        total: 0,
        pageIndex: 1,
        pageSize: 10
      },
      radio1: '1',

      min: 0,
      max: 10
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
    splitArray: function (arr, num) {
      var result = []
      for (var i = 0, len = arr.length; i < len; i += num) {
        result.push(arr.slice(i, Math.min(i + num, len)))
      }
      return result
    },
    // 初始化生成数组
    creatList: function (sizeList) {
      var myList = []
      for (var i = Number(sizeList[0]); i <= Number(sizeList[1]) + 0.2; i = i + 0.2) {
        myList.push(
          {
            'rm': i.toFixed(1),
            'dm0': '',
            'dm05': '',
            'dm6': '',
            'dm10': '',
            'dm15': '',
            'dm20': '',
            'dm25': '',
            'dm30': '',
            'dm35': '',
            'dm40': '',
            'dm45': '',
            'dm50': '',
            'dm55': '',
            'type': '2'
          }
        )
      }
      this.localPage.total = myList.length
      this.dataLists = this.splitArray(myList, 10)
      // return myList
    },
    getTableData: function () {
      this.tableForm.tableData = this.dataLists
    },
    // getListAll: function () {
    //   var list = []
    //   this.dataLists.forEach(function (item, n) {
    //     item.forEach(function (item1, n1) {
    //       list.push(item1)
    //     })
    //   })
    //   return list
    // },
    // 获取数组区间
    getListSize: function () {
      this.creatList(this.sizeList)
      this.getTableData()
    },
    // 获取数组
    // getList: function () {
    //   var that = this
    //   $.ajax({
    //     type: 'post',
    //     url: ctx + 'system/strengthConversionCoefficient/list',
    //     contentType: 'application/json',
    //     data: JSON.stringify({
    //       type: 2
    //     }),
    //     dataType: 'json',
    //     success: function (r) {
    //       if (r.code == 0) {
    //         var rows = r.rows
    //         if (rows.length == 0) {
    //           that.getListSize()
    //         } else {
    //           that.dataLists = $.splitArray(rows, 10)
    //           that.localPage.total = rows.length
    //           that.getTableData()
    //         }
    //       } else { console.log(r); _vm.$message({message: r.msg, type: 'error'}) }
    //     },
    //     error: function (r) { console.log(r); _vm.$message({message: r.msg, type: 'error'}) }
    //   })
    // },
    // 点击修改
    editClick: function () {
      this.disabled = false
      this.cantSubmit = false
      this.cantEdit = true
    },
    // 修改提交
    editList: function () {
    //   var that = this
    //   var paramList = []
    //   paramList = this.getListAll()
    //   this.$refs['formTable'].validate(function (val) {
    //     if (val) {
    //       $.ajax({
    //         type: 'post',
    //         url: ctx + 'system/strengthConversionCoefficient/edit',
    //         contentType: 'application/json',
    //         loading: true,
    //         loadingText: '正在提交中，请稍后...',
    //         data: JSON.stringify({
    //           list: paramList
    //         }),
    //         dataType: 'json',
    //         success: function (r) {
    //           if (r.code == 0) {
    //             $.layer_msg('修改成功！', {
    //               icon: 1
    //             })
    //             that.localPage.pageIndex = 1
    //             that.getList()
      this.disabled = true
      this.cantSubmit = true
      this.cantEdit = false
    //           } else { console.log(r); _vm.$message({message: r.msg, type: 'error'}) }
    //         },
    //         error: function (r) { console.log(r); _vm.$message({message: r.msg, type: 'error'}) }
    //       })
    //     } else {

    //     }
    //   })
    }

  },
  computed: {
    // getLengthArray () {

    // }
  },
  created: function () {
    this.getListSize()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
 .buttons{
            padding-bottom: 20px;
            margin-top: 10px;
            text-align: center;
        }
        .el-table thead.is-group th{
            background-color: #e0ecfd !important;
        }
        .el-table--border th, .el-table__fixed-right-patch{
            border-bottom: 1px solid #fff;
        }
        .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
            border-right: 1px solid #fff;
        }
        .tableBox.gs{
            height:87%;
            overflow: auto;
        }
        .hidden-row{ display: none; }
        .cell{
          text-align: center;
        }
</style>
