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
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination>
</el-card>
</div>
</template>


<script>
    export default {
        name: "deviceList",
        data() {
            return {
                subSystem_name: '',
                deviceData: [],
                currentPage4: 4,
            }
        },
        created() {

        },
        methods: {
            // 获取列表数据
            getDeviceList() {
                if (this.subSystem_name == '中央水泵房') {
                    this.deviceData = [{
                        device_name: '1#泵（监控系统1#泵）',
                        num: '1',
                        describe: '矿用耐磨多极离心泵 MD280－43×8 额定流量：280m3/h 水泵级数：8 额定扬程：344m 额定转速：1485r/min'
                    }, {
                        device_name: '2#泵（监控系统2#泵）',
                        num: '1',
                        describe: '矿用耐磨多极离心泵 MD280－43×8 额定流量：280m3/h 水泵级数：8 额定扬程：344m 额定转速：1485r/min'
                    }, {
                        device_name: '3#泵（监控系统3#泵）',
                        num: '1',
                        describe: '矿用耐磨多极离心泵 MD280－43×8 额定流量：280m3/h 水泵级数：8 额定扬程：344m 额定转速：1485r/min'
                    }, {
                        device_name: '水仓',
                        num: '1',
                        describe: '暂无'
                    }]
                }
                if (this.subSystem_name == '硐底水泵房') {
                    this.deviceData = [{
                        device_name: '1#泵（监控系统7#泵）',
                        num: '1',
                        describe: '矿用耐磨多级离心式水泵 MD85－67×4 流量：85m3/h 扬程：268m   转速：2980r/min 电机功率：132KW  电压：660V  转速：2980r/min'
                    }, {
                        device_name: '2#泵（监控系统8#泵）',
                        num: '1',
                        describe: '矿用耐磨多级离心式水泵 MD85－67×4 流量：85m3/h 扬程：268m   转速：2980r/min 电机功率：132KW  电压：660V  转速：2980r/min'
                    }, {
                        device_name: '3#泵（监控系统9#泵）',
                        num: '1',
                        describe: '矿用耐磨多级离心式水泵 MD85－67×4 流量：85m3/h 扬程：268m   转速：2980r/min 电机功率：132KW  电压：660V  转速：2980r/min'
                    }, {
                        device_name: '水仓',
                        num: '1',
                        describe: '暂无'
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
                    path: '/drainSubDeviceList'
                })
                window.sessionStorage.setItem("device_name", row.device_name); //存到sessionStorage中，下一个页面获取
            }

        },
        mounted() {
            // this.subSystem_name = this.$route.params.value;
            var name = window.sessionStorage.getItem("subSystem_name");
            this.subSystem_name = name;
            this.getDeviceList()
        }
    }
</script>


<style scoped>

</style>