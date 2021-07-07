<template>
    <div>
        <el-card>
            <el-table :data="subDeviceData" style="width: 100%" border stripe>
                <el-table-column type="index" label="#" header-align="center" align="center" width="60">
                </el-table-column>
                <el-table-column prop="subDevice_name" label="附属设备名称" header-align="center" align="center" width="150">
                </el-table-column>
                <el-table-column label="操作" header-align="center" align="center" width="150">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="watchCheckPoint(scope.row)">查看</el-button>
                    </template>
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
        name: "subDevice",
        data() {
            return {
                device_name: '',
                subDeviceData: [],
                currentPage4: 4,
            }
        },
        methods: {
            // 获取列表数据
            getSubDeviceList() {
                if (this.device_name == '1#泵（监控系统1#泵）') {
                    this.subDeviceData = [{
                        subDevice_name: '1#水泵电机',
                        remark: '暂无'
                    }, {
                        subDevice_name: '1#水泵本体',
                        remark: '暂无'
                    }, {
                        subDevice_name: '1#水泵阀',
                        remark: '暂无'
                    }]
                }
                if (this.device_name == '2#泵（监控系统2#泵）') {
                    this.subDeviceData = [{
                        subDevice_name: '2#水泵电机',
                        remark: '暂无'
                    }, {
                        subDevice_name: '2#水泵本体',
                        remark: '暂无'
                    }, {
                        subDevice_name: '2#水泵阀',
                        remark: '暂无'
                    }]
                }
                if (this.device_name == '3#泵（监控系统3#泵）') {
                    this.subDeviceData = [{
                        subDevice_name: '3#水泵电机',
                        remark: '暂无'
                    }, {
                        subDevice_name: '3#水泵本体',
                        remark: '暂无'
                    }, {
                        subDevice_name: '3#水泵阀',
                        remark: '暂无'
                    }]
                }
                if (this.device_name == '水仓') {
                    this.subDeviceData = [{
                        subDevice_name: '水仓',
                        remark: '暂无'
                    }]
                }
            },
            watchCheckPoint(row) {
                this.$router.push({
                    path: '/drainCheckPoint'
                })
                window.sessionStorage.setItem("subDevice_name", row.subDevice_name); //存到sessionStorage中，下一个页面获取
            }
        },
        mounted() {
            // this.subSystem_name = this.$route.params.value;
            var name = window.sessionStorage.getItem("device_name");
            this.device_name = name;
            this.getSubDeviceList()
        }

    }
</script>


<style scoped>

</style>