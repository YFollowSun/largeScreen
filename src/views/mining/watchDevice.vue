<template>
    <el-dialog :visible.sync="visible" width="80%">
   
      <el-form :inline="true">
             <span style="font-size: 17px;">数据质量信息：</span>
              <el-select v-model="value" placeholder="点击选择元数据版本">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
  
      </el-form>
            
    
  
        <el-main>
          <el-col :span="18">
            
             
                <el-table :data="tableData" style="width: 100%" border stripe>
                  <el-table-column label="完整性" header-align="center">
                    <el-table-column prop="point1" label="测点" header-align="center" align="center" width="140">
                    </el-table-column>
                    <el-table-column prop="isExisted" label="数据是否存在" header-align="center" align="center" width="60">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column label="准确性" header-align="center">
                    <el-table-column prop="data_type" label="数据类型" header-align="center" align="center" width="80">
                    </el-table-column>
                    <el-table-column prop="range" label="阈值范围" header-align="center" align="center" width="130">
                    </el-table-column>
                    <el-table-column prop="unit" label="数据单位" header-align="center" align="center" width="70">
                    </el-table-column>
                    <el-table-column prop="rationality" label="数据合理性" header-align="center" align="center" width="70">
                    </el-table-column>
                    <el-table-column prop="storage_len" label="数据存储长度" header-align="center" align="center" width="70">
                    </el-table-column>
                  </el-table-column>
                  <el-table-column label="时效性" header-align="center">
                    <el-table-column prop="frequency" label="采集频率" header-align="center" align="center" width="60">
                    </el-table-column>
                  </el-table-column>
                </el-table>
      
  
  </el-col>
  
  <el-col :span="6">
      <mailTable style="margin-top: 185px;margin-left: 10px;" :tableData="versionTableData" :tableStyle="{ width:'200px'}"></mailTable>
  </el-col>
  </el-main>
  
  
  
  
  
  </el-dialog>
  </template>

<script>
    import mailTable from "@/views/tableComponent";
    export default {
        name: "dataQuality",
        data() {
            return {
                value: '',
                visible: false,
                tableData: [{
                    point1: '电机绕组A相温度',
                    isExisted: '是',
                    data_type: '浮点',
                    range: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '',
                    storage_len: '',
                    frequency: '5s'
                }, {
                    point1: '电机绕组B相温度',
                    isExisted: '是',
                    data_type: '浮点',
                    range: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '',
                    storage_len: '',
                    frequency: '5s'
                }, {
                    point1: '电机绕组C相温度',
                    isExisted: '是',
                    data_type: '浮点',
                    range: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '',
                    storage_len: '',
                    frequency: '5s'
                }, {
                    point1: '电机前轴温度',
                    isExisted: '是',
                    data_type: '浮点',
                    range: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '',
                    storage_len: '',
                    frequency: '5s'
                }, {
                    point1: '电机后轴温度',
                    isExisted: '是',
                    data_type: '浮点',
                    range: '上阈值85.0℃',
                    unit: '℃',
                    rationality: '',
                    storage_len: '',
                    frequency: '5s'
                }, {
                    point1: '电机振动1',
                    isExisted: '是',
                    data_type: '浮点',
                    range: '无',
                    unit: 'mm/s',
                    rationality: '',
                    storage_len: '',
                    frequency: '1s'
                }, {
                    point1: '电机振动2',
                    isExisted: '是',
                    data_type: '浮点',
                    range: '无',
                    unit: 'mm/s',
                    rationality: '',
                    storage_len: '',
                    frequency: '1s'
                }],
                versionTableData: [{
                    version: 'v2.1',
                    date: '2021.1.26',
                    person: '张三',
                    ps: "无"
                }],
                options: [{
                    value: '选项1',
                    label: 'v2.1'
                }, {
                    value: '选项2',
                    label: 'v1.5'
                }, {
                    value: '选项3',
                    label: 'v1.2'
                }, {
                    value: '选项4',
                    label: 'v1.1'
                }, {
                    value: '选项5',
                    label: 'v1.0'
                }],
                versionTableData: [{
                    key: '标准版本',
                    value: 'v2.1'
                }, {
                    key: '更新日期',
                    value: '2021.1.26'
                }, {
                    key: '更新说明',
                    value: '无'
                }, {
                    key: '更新人员',
                    value: '张三'
                }, {
                    key: '备注',
                    value: '无'
                }],
            }
        },
        methods: {
            init() {
                this.visible = true;
            }
        },
        components: {
            mailTable
        }
    }
</script>

<style scoped>

</style>