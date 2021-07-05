<template>
  <el-container>
    <el-header style="height: 20px;">
      <div v-if="this.$router.currentRoute.path=='/monitor'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/monitor'}">安全监控</el-breadcrumb-item>
          <el-breadcrumb-item>系统数据</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>

    <el-main>
      <span style="font-size: 20px;">安全系统：</span>
      <div class="monitorblock" v-for="item in options" :key="item.title">
        <span style="font-size: 12px; color:#9196a1 ;">{{item.title}}</span>
        <br>
        <span style="font-size: 24px;">{{item.num}}</span>
      </div>

      <el-card>
        <el-table :data="tableData" style="width: 100%" border stripe @cell-click="checkSubSys">
          <el-table-column type="index" label="序号" header-align="center" align="center" width="180">
          </el-table-column>
          <el-table-column prop="sub_system_name" label="子系统名称" header-align="center" align="center" width="200">
          </el-table-column>
          <el-table-column prop="describe" label="描述" header-align="center" align="center" width="240">
          </el-table-column>
          <el-table-column label="操作" header-align="center" align="center" width="180">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="watch(scope.row)">查看</el-button>
            </template>
</el-table-column>
<el-table-column prop="remark" label="备注" header-align="center" align="center" width="180">
</el-table-column>
</el-table>
<!-- 分页区域 -->
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="9">
</el-pagination>
</el-card>
</el-main>
</el-container>

</template>

<script>
    export default {
        name: "systemData",
        data() {
            return {
                options: [{
                    title: "总数据量",
                    num: "1.2T"
                }, {
                    title: "区域个数",
                    num: "8个"
                }, {
                    title: "测点个数",
                    num: "125个"
                }],
                tableData: [{
                    sub_system_name: '原煤仓二层分站',
                    describe: '5#监测分站',
                    remark: '暂无'
                }, {
                    sub_system_name: '碟子沟通风机房',
                    describe: '4#监测分站',
                    remark: '暂无'
                }, {
                    sub_system_name: '风速',
                    describe: '6#监测分站',
                    remark: '暂无'
                }, {
                    sub_system_name: '一氧化碳浓度',
                    describe: '9#监测分站',
                    remark: '暂无'
                }, {
                    sub_system_name: '瓦斯浓度',
                    describe: '10#监测分站',
                    remark: '暂无'
                }, {
                    sub_system_name: '粉尘浓度',
                    describe: '无',
                    remark: '暂无'
                }, {
                    sub_system_name: '氧气浓度',
                    describe: '无',
                    remark: '暂无'
                }, {
                    sub_system_name: 'xxx',
                    describe: '无',
                    remark: '暂无'
                }, {
                    sub_system_name: 'xxx',
                    describe: '无',
                    remark: '暂无'
                }],

                currentPage1: 1,
                currentPage2: 2,
                currentPage3: 3,
                currentPage4: 4,
                checkVisible: false
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
            watch(row) {
                console.log(row.sub_system_name)
                this.$router.push({
                    path: '/checkSubSys',
                    name: '查看子系统',
                    params: {
                        key: 'key',
                        value: row.sub_system_name
                    }
                })
            },
            checkSubSys(row, column) {
                if (column.label == "子系统名称") {
                    console.log(row.sub_system_name)
                    this.$router.push({
                        path: '/checkSubSys',
                        name: '查看子系统',
                        params: {
                            key: 'key',
                            value: row.sub_system_name
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .monitorblock {
        width: 115px;
        height: 77px;
        border: solid 1px #dcdfe6;
        padding-top: 20px;
        margin-left: 25px;
        text-align: center;
        display: inline-block;
    }
</style>