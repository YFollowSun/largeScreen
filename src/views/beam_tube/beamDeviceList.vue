<template>
    <div>
        <el-card>
            <el-table :data="deviceData" style="width: 100%" border stripe>
                <el-table-column type="index" label="#" header-align="center" align="center" width="60">
                </el-table-column>
                <el-table-column prop="device_name" label="设备名" header-align="center" align="center" width="180">
                </el-table-column>
                <el-table-column prop="num" label="数量" header-align="center" align="center" width="60">
                </el-table-column>
                <el-table-column prop="describe" label="设备描述" header-align="center" align="center" width="480">
                </el-table-column>
                <el-table-column label="操作" header-align="center" align="center" width="150">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="watchSubDevice(scope.row)">查看</el-button>
                    </template>
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
        name: "beamDeviceList",
        data() {
            return {
                subSystem_name: '',
                deviceData: [],
                currentPage1: 1,
            }
        },
        created() {

        },
        methods: {
            // 获取列表数据
            getDeviceList() {
                if (this.subSystem_name == '12302工作面') {
                    this.deviceData = [{
                        device_name: '1#监测点',
                        num: '1',
                        describe: '埋地采空距离0-50m'
                    }, {
                        device_name: '2#监测点',
                        num: '1',
                        describe: '埋地采空距离50-100m'
                    }, {
                        device_name: '3#监测点',
                        num: '1',
                        describe: '埋地采空距离100-150m'
                    }]
                }
                if (this.subSystem_name == '12313工作面') {
                    this.deviceData = [{
                        device_name: '1#监测点',
                        num: '1',
                        describe: '埋地采空距离0-50m'
                    }, {
                        device_name: '2#监测点',
                        num: '1',
                        describe: '埋地采空距离50-100m'
                    }, {
                        device_name: '3#监测点',
                        num: '1',
                        describe: '埋地采空距离100-150m'
                    }]
                }

            },
            handleSizeChange(newSize) {
                console.log(newSize)
            },
            //监听 页码值 改变的事件
            handleCurrentChange(newPage) {
                console.log(newPage)
            },
            watchSubDevice(row) {
                this.$router.push({
                    path: '/beamCheckPoint'
                })
                window.sessionStorage.setItem("beamDevice_name", row.device_name); //存到sessionStorage中，下一个页面获取
            }
        },
        mounted() {
            // this.subSystem_name = this.$route.params.value;
            var name = window.sessionStorage.getItem("beamSubSystem_name");
            this.subSystem_name = name;
            this.getDeviceList()
        }
    }
</script>


<style scoped>

</style>