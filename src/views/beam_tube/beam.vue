<template>
	<div>
		<!--标签-->
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="系统数据" name="first">
				<!-- 系统数据页面 -->
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>束管检测</el-breadcrumb-item>
					<el-breadcrumb-item>系统数据</el-breadcrumb-item>
				</el-breadcrumb>
                <el-card>
            <el-table :data="subSystemData" style="width: 100%" border stripe>
                <el-table-column type="index" label="#" header-align="center" align="center" width="60">
                </el-table-column>
                <el-table-column prop="subSystem_name" label="子系统名称" header-align="center" align="center" width="150">
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
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination>
</el-card>

			</el-tab-pane>
			<el-tab-pane label="数据标准" name="second">
				<!-- 数据标准页面 -->
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>束管检测</el-breadcrumb-item>
					<el-breadcrumb-item>数据标准</el-breadcrumb-item>
				</el-breadcrumb>
				
			</el-tab-pane>
		</el-tabs>
	
	</div>

</template>



<script>
    export default {
        name: "beam",
        data() {
            return {
                // 被激活页签的名称
				activeName: "first",
                subSystemData: [{
                    subSystem_name: '12302工作面',
                    remark: '暂无'
                }, {
                    subSystem_name: '12313工作面',
                    remark: '暂无'
                }],
                currentPage: 1
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
                this.$router.push({
                    path: '/beamDeviceList'
                })
                window.sessionStorage.setItem("beamSubSystem_name", row.subSystem_name); //存到sessionStorage中，下一个页面获取
            }
        },
    }
</script>


<style scoped>

</style>