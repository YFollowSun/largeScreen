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
        name: "checkPoint",
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
                if (this.subDevice_name == '1#水泵电机') {
                    this.checkPointData = [{
                        checkpoint: '电压',
                        dataType: '浮点',
                        unit: 'V',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '电流',
                        dataType: '浮点',
                        unit: 'A',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '电机A相绕组温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器'
                    }, {
                        checkpoint: '电机B相绕组温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器'
                    }, {
                        checkpoint: '电机C相绕组温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器'
                    }, {
                        checkpoint: '电机前轴温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: ''
                    }, {
                        checkpoint: '电机后轴温度',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: ''
                    }]
                }
                if (this.subDevice_name == '1#水泵本体') {
                    this.checkPointData = [{
                        checkpoint: '开关状态',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '正压',
                        dataType: '浮点',
                        unit: 'MPa',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '负压',
                        dataType: '浮点',
                        unit: 'kPa',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '流量',
                        dataType: '浮点',
                        unit: 'm³/s',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '水泵后轴轴温',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器'
                    }, {
                        checkpoint: '水泵后轴轴温',
                        dataType: '浮点',
                        unit: '℃',
                        frequency: '5s',
                        remark: '新增有传感器'
                    }]
                }
                if (this.subDevice_name == '1#水泵阀') {
                    this.checkPointData = [{
                        checkpoint: '阀门1开到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '阀门1开到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '阀门2开到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '阀门2开到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '闸阀开度',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '闸阀开到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '闸阀关到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '排气阀开到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '排气阀关到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '射流阀开到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
                    }, {
                        checkpoint: '射流阀关到位',
                        dataType: '布尔',
                        unit: '',
                        frequency: '1s',
                        remark: ''
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