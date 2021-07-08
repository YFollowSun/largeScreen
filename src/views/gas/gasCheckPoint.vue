<template>
    <div> 
        <el-card>
        <el-table :data="checkPointData" style="width: 100%" border stripe>
            <el-table-column type="index" label="#" header-align="center" align="center" width="60">
            </el-table-column>
            <el-table-column prop="checkpoint" label="测点" header-align="center" align="center" width="150">
            </el-table-column>
            <el-table-column prop="dataType" label="数据类型" header-align="center" align="center" width="150">
            </el-table-column>
            <el-table-column prop="unit" label="工程单位" header-align="center" align="center" width="150">
            </el-table-column>
            <el-table-column prop="frequency" label="采集频率" header-align="center" align="center" width="150">
            </el-table-column>
           
<el-table-column prop="remark" label="备注" header-align="center" align="center" width="150">
</el-table-column>

</el-table>

<!-- 分页区域 -->
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination>
</el-card>
</div>
</template>


<script>
    export default {
        name: "gasCheckPoint",
        data() {
            return {
                subDevice_name: '',
                checkPointData: [],
                currentPage4: 4,
            }
        },
        methods: {
            // 获取测点列表数据
            getCheckpointList() {
                if (this.subDevice_name == '泵') {
                    this.checkPointData = [{
                        checkpoint: '抽放泵供水（供水状态）',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '抽放泵开停（开停状态）',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '抽放泵本体温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '接入冷却系统'
                    }]
                }
                if (this.subDevice_name == '电机') {
                    this.checkPointData = [{
                        checkpoint: '电机电流I',
                        dataType: '浮点',
                        unit: 'A',
                        frequency: '1s',
                        remark: '新增有传感器未接入'
                    }, {
                        checkpoint: '电机电压U',
                        dataType: '浮点',
                        unit: 'v',
                        frequency: '1s',
                        remark: '新增有传感器未接入'
                    }, {
                        checkpoint: '电机A相绕组温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器未接入'
                    }, {
                        checkpoint: '电机B相绕组温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器未接入'
                    }, {
                        checkpoint: '电机C相绕组温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器未接入'
                    }]
                }
                if (this.subDevice_name == '阀门') {
                    this.checkPointData = [{
                        checkpoint: '进气阀开闭（开闭状态）',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '排气阀开闭（开闭状态）',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }]
                }
                if (this.subDevice_name == '油泵') {
                    this.checkPointData = [{
                        checkpoint: '有无压',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }]
                }
                if (this.subDevice_name == '减速机') {
                    this.checkPointData = [{
                        checkpoint: '减速机轴温',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '接入冷却降温系统'
                    }]
                }
            }

        },

        mounted() {
            // this.subSystem_name = this.$route.params.value;
            var name = window.sessionStorage.getItem("subDevice_name");
            this.subDevice_name = name;
            this.getCheckpointList()
        }

    }
</script>


<style scoped>

</style>