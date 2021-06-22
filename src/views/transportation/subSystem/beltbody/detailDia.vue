<template>
    <!-- 查看数据质量信息 -->
    <el-dialog title="查看详细信息" :visible.sync="visible" width="72%" >
    <el-card>
		<template>
            <el-table :data="tableData" style="width: 100%" border stripe>
                <el-table-column label="完整性" align="center">
                    <el-table-column prop="name" label="名称" header-align="center" align="center" width="130">
                    </el-table-column>
                    <el-table-column prop="isExisted" label="数据是否存在" header-align="center" align="center" width="90">
                    </el-table-column>
                </el-table-column>
                <el-table-column label="准确性" align="center">
                    <el-table-column prop="dataType" label="数据类型" header-align="center" align="center" width="90">
                    </el-table-column>
                    <el-table-column prop="threshold" label="阈值范围" header-align="center" align="center" width="130">
                    </el-table-column>
                    <el-table-column prop="unit" label="数据单位" header-align="center" align="center" width="90">
                    </el-table-column>
                    <el-table-column prop="rationality" label="数据合理性" header-align="center" align="center" width="90">
                    </el-table-column>
                    <el-table-column prop="storage_len" label="数据存储长度" header-align="center" align="center" width="90">
                    </el-table-column>
                </el-table-column>
                <el-table-column label="时效性" align="center">
                    <el-table-column prop="frequency" label="采集频率" header-align="center" align="center" width="90">
                    </el-table-column>
                </el-table-column>
            </el-table>
        </template>
</el-table>

<!-- 分页区域 -->
<!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination> -->
</el-card>


</el-dialog>
</template>

<script>
    export default {
        name: "checkSystem",
        data() {
            return {
                visible: false,
                value: '',
                tableData: [{
                    name: '电机绕组A相温度',
                    isExisted: '是',
                    dataType: '浮点',
                    threshold: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '合理',
                    storage_len: '50',
                    frequency: '5s'
                }, {
                    name: '电机绕组B相温度',
                    isExisted: '是',
                    dataType: '浮点',
                    threshold: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '合理',
                    storage_len: '50',
                    frequency: '5s'
                }, {
                    name: '电机绕组C相温度',
                    isExisted: '是',
                    dataType: '浮点',
                    threshold: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '合理',
                    storage_len: '50',
                    frequency: '5s'
                }, {
                    name: '电机前轴温度',
                    isExisted: '是',
                    dataType: '浮点',
                    threshold: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '合理',
                    storage_len: '50',
                    frequency: '5s'
                }, {
                    name: '电机后轴温度',
                    isExisted: '是',
                    dataType: '浮点',
                    threshold: '上阈值120.0℃',
                    unit: '℃',
                    rationality: '合理',
                    storage_len: '50',
                    frequency: '5s'
                }, {
                    name: '电机振动1',
                    isExisted: '是',
                    dataType: '浮点',
                    threshold: '无',
                    unit: 'mm/s',
                    rationality: '合理',
                    storage_len: '50',
                    frequency: '5s'
                }, {
                    name: '电机振动2',
                    isExisted: '是',
                    dataType: '浮点',
                    threshold: '无',
                    unit: 'mm/s',
                    rationality: '合理',
                    storage_len: '50',
                    frequency: '5s'
                }],

                currentPage1: 1,
                currentPage2: 2,
                currentPage3: 3,
                currentPage4: 4
            }
        },
        methods: {

            init(id) {
                this.visible = true;
            }

        }
    }
</script>


<style scoped>

</style>