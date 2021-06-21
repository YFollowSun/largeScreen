<!-- 主通风系统 数据标准页面 -->
<template>
<div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/ventilate'}">主通风系统</el-breadcrumb-item>
        <el-breadcrumb-item>数据标准</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form>
        <el-form-item>
          <span style="font-size: 10px;">搜索：</span>
          <el-select v-model="value" placeholder="请选择子系统">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-card>
        <el-table :data="deviceData" style="width: 100%" border stripe>
            <el-table-column type="index" label="#" header-align="center" align="center" width="60">
            </el-table-column>
            <el-table-column prop="device_name" label="设备名称" header-align="center" align="center" width="150">
            </el-table-column>
            <el-table-column prop="describe" label="描述" header-align="center" align="center" width="500">
            </el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="150">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="watchDevice(scope.row)">查看</el-button>
                </template>
</el-table-column>
<el-table-column prop="remark" label="备注" header-align="center" align="center" width="150">
</el-table-column>

</el-table>

<!-- 分页区域 -->
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination>
</el-card>
<watchDevice v-if="watchVisible" ref="watchdevice"></watchDevice>
</div>
</template>
<script>
    import watchDevice from './watchDevice.vue'
    export default {
        name: "dataStandard",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '煤中央皮带'
                }, {
                    value: '选项2',
                    label: '主平硐皮带'
                }, {
                    value: '选项3',
                    label: '上仓皮带'
                }],
                value: '',
                deviceData: [{
                    device_name: '皮带本体',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    device_name: '头部1#驱动电机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    device_name: '头部2#驱动电机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    device_name: '头部3#驱动电机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    device_name: '头部4#驱动电机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }],
                watchVisible: false,
                currentPage4: 4
            }
        },
        methods: {
            handleSizeChange(newSize) {
                console.log(newSize)
            },
            //监听 页码值 改变的事件
            handleCurrentChange(newPage) {
                console.log(newPage)
            },
            watchDevice(row) {
                this.watchVisible = true;
                this.$nextTick(() => {
                    this.$refs.watchdevice.init();
                });
            },
        },
        components: {
            watchDevice
        }
    }
</script>
<style>

</style>