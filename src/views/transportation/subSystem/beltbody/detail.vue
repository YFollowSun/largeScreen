<!-- 皮带本体 详细数据 -->
<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/transportation'}">主运输系统</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/transportation'}">系统数据</el-breadcrumb-item>
            <el-breadcrumb-item >煤中央皮带</el-breadcrumb-item>
            <el-breadcrumb-item >皮带本体</el-breadcrumb-item>
            <el-breadcrumb-item >详细数据</el-breadcrumb-item>
        </el-breadcrumb>
        <span class="text">数据测点：</span>
        <div  class="checkpointbox" v-for="item in checkpoints" :key="item.id">
            <el-button type="primary">{{item.name}}</el-button>    
        </div>

        <el-form :inline="true" >
            <span style="font-size: 10px;">搜索：</span>
            <el-select v-model="frequency" placeholder="请选择采集频率">
                <el-option v-for="item in frequencyItems" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="unit" placeholder="请选择工程单位">
                <el-option v-for="item in unitItems" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="threshold" placeholder="请选择预警阈值">
                <el-option v-for="item in thresholdItems" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button>重置</el-button>
            </el-form-item>
            <el-select v-model="dataTime" placeholder="请选择数据时间">
                <el-option v-for="item in datatimes" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form>

        <el-card>
            <template>
                <el-table :data="tableData" style="width: 100%" border stripe>
                    
                        <el-table-column prop="time" label="时间" header-align="center" align="center" width="130">
                        </el-table-column>
                        <el-table-column prop="dataType" label="数据类型" header-align="center" align="center" width="100">
                        </el-table-column>
                    
                    
                        <el-table-column prop="frequency" label="采集频率" header-align="center" align="center" width="100">
                        </el-table-column>
                        <el-table-column prop="value" label="测量数值" header-align="center" align="center" width="100">
                        </el-table-column>
                        <el-table-column prop="unit" label="工程单位" header-align="center" align="center" width="100">
                        </el-table-column>
                        <!-- <el-table-column prop="database" label="数据库" header-align="center" align="center" width="100">
                        </el-table-column> -->
                        <el-table-column prop="threshold" label="预警阈值" header-align="center" align="center" width="100">
                        </el-table-column>
                    
                        <el-table-column label="数据质量信息" header-align="center" align="center" width="130">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="watch(scope.row)">点击查看明细</el-button>
                            </template>
</el-table-column>

<el-table-column prop="classify" label="所属分类" header-align="center" align="center" width="100">
</el-table-column>

<el-table-column label="更多" header-align="center" align="center" width="100">
    <template slot-scope="scope">
            <el-button type="text" size="small" @click="more(scope.row)">...</el-button>
        </template>
</el-table-column>
</el-table>
</template>
</el-table>

<!-- 分页区域 -->
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="7">
</el-pagination>
</el-card>
<detailDia v-if="detailVisible" ref="detailDialog"></detailDia>
<more v-if="moreVisible" ref="moreDialog"></more>
</div>
</template>

<script>
    import detailDia from "./detailDia";
    import more from "./more";
    export default {
        name: "detail",
        data() {
            return {
                checkpoints: [{
                    id: 1,
                    name: '运行'
                }, {
                    id: 2,
                    name: '牵引方向'
                }, {
                    id: 3,
                    name: '牵引方向'
                }, {
                    id: 4,
                    name: '加速状态'
                }],
                frequencyItems: [{
                    value: '选项1',
                    label: '1s'
                }, {
                    value: '选项2',
                    label: '2s'
                }, {
                    value: '选项3',
                    label: '5s'
                }],
                unitItems: [{
                    value: '选项1',
                    label: 'kN'
                }, {
                    value: '选项2',
                    label: 'KW'
                }, {
                    value: '选项3',
                    label: 'KW/h'
                }, {
                    value: '选项4',
                    label: 'm/s'
                }],
                thresholdItems: [{
                    value: '选项1',
                    label: '0.8'
                }, {
                    value: '选项2',
                    label: '0.6'
                }, {
                    value: '选项3',
                    label: '0.5'
                }],
                datatimes: [{
                    value: '选项1',
                    label: '近一天'
                }, {
                    value: '选项2',
                    label: '近一周'
                }, {
                    value: '选项3',
                    label: '近一月'
                }, {
                    value: '选项4',
                    label: '近半年'
                }, {
                    value: '选项5',
                    label: '近一年'
                }],
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
                }, {
                    time: '2020-3-10 7:11',
                    dataType: '浮点',
                    frequency: '1s',
                    value: '0.50',
                    unit: 'kN',
                    database: 'hbase',
                    threshold: '0.8',
                    classify: '设备',
                    pointname: '1#滚筒',
                    num: '0.76',
                    deviceName: '皮带本体',
                    describe: '全长3432m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    remark: '无',
                    dataQuality: '高'
                }, {
                    time: '2020-3-12 11:11',
                    dataType: '浮点',
                    frequency: '1s',
                    value: '0.50',
                    unit: 'kN',
                    database: 'hbase',
                    threshold: '0.8',
                    classify: '设备',
                    pointname: '1#滚筒',
                    num: '0.34',
                    deviceName: '皮带本体',
                    describe: '全长6730m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    remark: '无',
                    dataQuality: '高'
                }],
                currentPage1: 1,
                currentPage2: 2,
                currentPage3: 3,
                currentPage4: 4,
                detailVisible: false,
                moreVisible: false,
                frequency: '',
                unit: '',
                threshold: '',
                dataTime: ''

            }


        },
        methods: {
            // 监听 pagesize 改变的事件
            handleSizeChange(newSize) {
                console.log(newSize)
            },
            //监听 页码值 改变的事件
            handleCurrentChange(newPage) {
                console.log(newPage)
            },
            watch(id) {
                this.detailVisible = true;
                this.$nextTick(() => {
                    this.$refs.detailDialog.init(id);
                });
            },
            more(id) {
                this.moreVisible = true;
                this.$nextTick(() => {
                    this.$refs.moreDialog.init(id);
                });
            }
        },
        components: {
            detailDia,
            more
        }
    }
</script>
<style scoped>
    .checkpointbox {
        display: inline-block;
    }
    
    .el-button {
        width: 100px;
        margin-left: 10px;
    }
    
    .el-select {
        margin-left: 10px;
        width: 160px;
    }
</style>