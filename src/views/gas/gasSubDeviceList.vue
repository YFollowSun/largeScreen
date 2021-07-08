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
        name: "gasSubDeviceList",
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
                if (this.device_name == '1#瓦斯抽放泵') {
                    this.subDeviceData = [{
                        subDevice_name: '泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '电机',
                        remark: '暂无'
                    }, {
                        subDevice_name: '阀门',
                        remark: '暂无'
                    }, {
                        subDevice_name: '油泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '减速机',
                        remark: '暂无'
                    }]
                }
                if (this.device_name == '2#瓦斯抽放泵') {
                    this.subDeviceData = [{
                        subDevice_name: '泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '电机',
                        remark: '暂无'
                    }, {
                        subDevice_name: '阀门',
                        remark: '暂无'
                    }, {
                        subDevice_name: '油泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '减速机',
                        remark: '暂无'
                    }]
                }
                if (this.device_name == '3#瓦斯抽放泵') {
                    this.subDeviceData = [{
                        subDevice_name: '泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '电机',
                        remark: '暂无'
                    }, {
                        subDevice_name: '阀门',
                        remark: '暂无'
                    }, {
                        subDevice_name: '油泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '减速机',
                        remark: '暂无'
                    }]
                }
                if (this.device_name == '4#瓦斯抽放泵') {
                    this.subDeviceData = [{
                        subDevice_name: '泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '电机',
                        remark: '暂无'
                    }, {
                        subDevice_name: '阀门',
                        remark: '暂无'
                    }, {
                        subDevice_name: '油泵',
                        remark: '暂无'
                    }, {
                        subDevice_name: '减速机',
                        remark: '暂无'
                    }]
                }


            },
            watchCheckPoint(row) {
                this.$router.push({
                    path: '/gasCheckPoint'
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