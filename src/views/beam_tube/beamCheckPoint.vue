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
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination>
</el-card>
</div>
</template>

<script>
    export default {
        name: "beamCheckPoint",
        data() {
            return {
                Device_name: '',
                checkPointData: [],
                currentPage1: 1,
            }
        },
        methods: {
            // 获取测点列表数据
            getCheckpointList() {
                if (this.Device_name == '1#监测点') {
                    this.checkPointData = [{
                        checkpoint: 'O2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'N2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'CO',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'CH4',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'C2H2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'C2H4',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }]
                }
                if (this.Device_name == '2#监测点') {
                    this.checkPointData = [{
                        checkpoint: 'O2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'N2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'CO',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'CH4',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'C2H2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'C2H4',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }]
                }
                if (this.Device_name == '3#监测点') {
                    this.checkPointData = [{
                        checkpoint: 'O2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'N2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'CO',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'CH4',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'C2H2',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }, {
                        checkpoint: 'C2H4',
                        dataType: '浮点',
                        unit: '%',
                        frequency: '300s',
                        remark: ''
                    }]
                }


            }

        },

        mounted() {
            // this.subSystem_name = this.$route.params.value;
            var name = window.sessionStorage.getItem("beamDevice_name");
            this.Device_name = name;
            this.getCheckpointList()
        }

    }
</script>


<style scoped>

</style>