<template>
	<div>
		<!--标签-->
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="系统数据" name="first">
				<!-- 系统数据页面 -->
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>瓦斯抽放设备</el-breadcrumb-item>
					<el-breadcrumb-item>系统数据</el-breadcrumb-item>
				</el-breadcrumb>
                <el-card>
            <el-table :data="deviceData" style="width: 100%" border stripe>
                <el-table-column type="index" label="#" header-align="center" align="center" width="60">
                </el-table-column>
                <el-table-column prop="device_name" label="设备名" header-align="center" align="center" width="180">
                </el-table-column>
                <el-table-column prop="num" label="数量" header-align="center" align="center" width="60">
                </el-table-column>
                <el-table-column prop="describe" label="设备描述" header-align="center" align="center" width="180">
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
			</el-tab-pane>
			<el-tab-pane label="数据标准" name="second">
				<!-- 数据标准页面 -->
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>瓦斯抽放设备</el-breadcrumb-item>
					<el-breadcrumb-item>数据标准</el-breadcrumb-item>
				</el-breadcrumb>
				
			</el-tab-pane>
		</el-tabs>
	
	</div>

</template>



<script>
    export default {
        name: "gas",
        data() {
            return {
                // 被激活页签的名称
				activeName: "first",
                subSystem_name: '',
                deviceData: [{
                    device_name: '1#瓦斯抽放泵',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '2#瓦斯抽放泵',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '3#瓦斯抽放泵',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '4#瓦斯抽放泵',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '1#冷却水泵',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '2#冷却水泵',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '冷却塔',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '高位水池',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '高位水池',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '1#低位水池',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '2#低位水池',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '泵房间环境瓦斯',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '管道',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '手动控制',
                    num: '1',
                    describe: '无'
                }, {
                    device_name: '自动控制',
                    num: '1',
                    describe: '无'
                }],
                currentPage1: 1,
            }
        },
        created() {

        },
        methods: {
            handleSizeChange(newSize) {
                console.log(newSize)
            },
            //监听 页码值 改变的事件
            handleCurrentChange(newPage) {
                console.log(newPage)
            },
            watchSubDevice(row) {
                this.$router.push({
                    path: '/gasSubDeviceList'
                })
                window.sessionStorage.setItem("device_name", row.device_name); //存到sessionStorage中，下一个页面获取
            }
        }

    }
</script>


<style scoped>

</style>