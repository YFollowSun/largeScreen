<!-- 皮带本体 超标数据 -->
<template>
	<div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/monitor'}">安全监控</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/checkSubSys'}">{{ sub_system_name }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ check_point_name }}</el-breadcrumb-item>
            <el-breadcrumb-item>超标数据</el-breadcrumb-item>
        </el-breadcrumb>
        
	<el-card>
		<template>
			<el-table :data="tableData" style="width: 100%" border stripe>

				<el-table-column prop="time" label="时间" header-align="center" align="center" width="150">
				</el-table-column>
				<el-table-column prop="dataType" label="数据类型" header-align="center" align="center" width="120">
				</el-table-column>


				<el-table-column prop="frequency" label="采集频率" header-align="center" align="center" width="120">
				</el-table-column>
				<el-table-column prop="value" label="测量数值" header-align="center" align="center" width="120">
				</el-table-column>
				<el-table-column prop="unit" label="工程单位" header-align="center" align="center" width="120">
				</el-table-column>

				<el-table-column prop="threshold" label="预警阈值" header-align="center" align="center" width="120">
				</el-table-column>


				<el-table-column prop="classify" label="所属分类" header-align="center" align="center" width="120">
				</el-table-column>
			</el-table>
		</template>
</el-table>

<!-- 分页区域 -->
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="7">
</el-pagination>
</el-card>
</div>
</template>
<script>
    export default {
        name: "threshold",
        data() {
            return {
                check_point_name: '',
                sub_system_name: '',
                tableData: [{
                    time: '2020-1-20 9:41',
                    dataType: '浮点',
                    frequency: '1s',
                    value: '0.50',
                    unit: 'kN',
                    database: 'hbase',
                    threshold: '0.8',
                    classify: '设备',
                    pointname: '皮带张力',
                    num: '0.52',
                    deviceName: '皮带本体',
                    describe: '全长5260m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    remark: '无',
                    dataQuality: '高'
                }, {
                    time: '2020-1-20 12:01',
                    dataType: '浮点',
                    frequency: '1s',
                    value: '0.50',
                    unit: 'kN',
                    database: 'hbase',
                    threshold: '0.8',
                    classify: '设备',
                    pointname: '1#滚筒',
                    num: '0.52',
                    deviceName: '皮带本体',
                    describe: '全长5260m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    remark: '无',
                    dataQuality: '高'
                }, {
                    time: '2020-1-22 5:01',
                    dataType: '浮点',
                    frequency: '1s',
                    value: '0.50',
                    unit: 'kN',
                    database: 'hbase',
                    threshold: '0.8',
                    classify: '设备',
                    pointname: '2#滚筒',
                    num: '0.32',
                    deviceName: '皮带本体',
                    describe: '全长5521m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    remark: '无',
                    dataQuality: '高'
                }, {
                    time: '2020-2-20 16:21',
                    dataType: '浮点',
                    frequency: '1s',
                    value: '0.50',
                    unit: 'kN',
                    database: 'hbase',
                    threshold: '0.8',
                    classify: '设备',
                    pointname: '3#滚筒',
                    num: '0.98',
                    deviceName: '皮带本体',
                    describe: '全长5210m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    remark: '无',
                    dataQuality: '高'
                }, {
                    time: '2020-2-23 14:41',
                    dataType: '浮点',
                    frequency: '1s',
                    value: '0.50',
                    unit: 'kN',
                    database: 'hbase',
                    threshold: '0.8',
                    classify: '设备',
                    pointname: '1#滚筒',
                    num: '0.25',
                    deviceName: '皮带本体',
                    describe: '全长3135m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    remark: '无',
                    dataQuality: '高'
                }],
            }
        },
        mounted() {
            const subSystemName = window.sessionStorage.getItem("subSystemName");
            const checkPointName = window.sessionStorage.getItem("checkPointName");
            this.sub_system_name = subSystemName;
            this.check_point_name = checkPointName;
        }
    }
</script>