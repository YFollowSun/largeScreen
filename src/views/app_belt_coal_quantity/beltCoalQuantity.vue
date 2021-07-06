<template>
  <div class="box">
    <el-col :span="13">
      <img src="@/assets/img/conveyor.gif" alt="图片" align="middle">
    </el-col>
    <el-col :span="11">
      <mailTable style="margin-top: 10px;margin-left: 10px;" :tableData="propertyTableData" :tableStyle="{ width:'310px'}"></mailTable>
    </el-col>
  </div>
</template>

<script>
    import mailTable from "@/views/tableComponent";
    export default {
        name: "beltCoalQuantity",
        data() {
            return {
                propertyTableData: [{
                    key: '名称',
                    value: '值'
                }, {
                    key: '设备名称',
                    value: '高压6A系统'
                }, {
                    key: '设备编码',
                    value: '60LAC72'
                }, {
                    key: 'KKS编码',
                    value: '60LAC72'
                }, {
                    key: '状态',
                    value: ''
                }, {
                    key: '状态日期',
                    value: ''
                }, {
                    key: '机组编码',
                    value: '#6'
                }, {
                    key: '所属专业',
                    value: '锅炉'
                }, {
                    key: '分类编码',
                    value: '给水泵'
                }, {
                    key: '型号',
                    value: ''
                }, {
                    key: '序列号',
                    value: ''
                }, {
                    key: '位置编码',
                    value: '高压6A系统'
                }, {
                    key: '制造商',
                    value: ''
                }, {
                    key: '出厂日期',
                    value: ''
                }, {
                    key: '安装日期',
                    value: ''
                }, {
                    key: '保修到期日期',
                    value: ''
                }, {
                    key: '形式',
                    value: '多级离心泵'
                }, {
                    key: '配用功率',
                    value: '1950'
                }, {
                    key: '配套电机',
                    value: 'ABB(AMA 500L2L B5F)'
                }, {
                    key: '转速',
                    value: '2980'
                }, {
                    key: '杨程',
                    value: '16000'
                }, {
                    key: '流量',
                    value: '350'
                }]
            }
        },
        components: {
            mailTable
        }
    }
</script>
<style scoped>
    /* .box {
        width: 600px;
        height: 600px;
        border: 1px solid red;
        /* background: require("@/assets/img/scenery.gif"); 
    
    background: require('@/assets/img/100.png');
}
*/
</style>