<template>
  <el-container >
    <el-header style="height: 20px;">
      <div v-if="this.$router.currentRoute.path=='/checkSubSys'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/monitor'}">安全监控</el-breadcrumb-item>
          <el-breadcrumb-item>{{ sub_system_name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>

    <el-main>
      <span style="font-size: 20px;">{{ sub_system_name }}：</span>
      <div class="monitorblock" v-for="item in options" :key="item.title">
        <span style="font-size: 12px; color:#9196a1 ;">{{item.title}}</span>
        <br>
        <span style="font-size: 24px;">{{item.num}}</span>
      </div>
      <e-card>
        <el-table :data="tableData" style="width: 100%" border stripe>
          <el-table-column type="index" label="序号" header-align="center" align="center" width="160">
          </el-table-column>
          <el-table-column prop="check_point_name" label="测点数据" header-align="center" align="center" width="180">
          </el-table-column>
          <el-table-column prop="describe" label="描述" header-align="center" align="center" width="230">
          </el-table-column>
          <el-table-column label="操作" header-align="center" align="center" width="180">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="checkCheckPointEnv(scope.row)">查看</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="remark" label="备注" header-align="center" align="center" width="180">
          </el-table-column>
        </el-table>
        <!-- 分页区域 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="9">
        </el-pagination>
      </e-card>

    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "checkSubSys",
        data() {
            return {
                sub_system_name: '',
                options: [{
                    title: "测点个数",
                    num: "20"
                }],
                tableData: [{
                    check_point_name: '烟气浓度',
                    describe: '5#监测分站',
                    remark: '暂无'
                }, {
                    check_point_name: '二氧化碳浓度',
                    describe: '4#监测分站',
                    remark: '暂无'
                }, {
                    check_point_name: '风速',
                    describe: '6#监测分站',
                    remark: '暂无'
                }, {
                    check_point_name: '一氧化碳浓度',
                    describe: '9#监测分站',
                    remark: '暂无'
                }, {
                    check_point_name: '瓦斯浓度',
                    describe: '10#监测分站',
                    remark: '暂无'
                }, {
                    check_point_name: '粉尘浓度',
                    describe: '无',
                    remark: '暂无'
                }, {
                    check_point_name: '氧气浓度',
                    describe: '无',
                    remark: '暂无'
                }, {
                    check_point_name: 'xxx',
                    describe: '无',
                    remark: '暂无'
                }, {
                    check_point_name: 'xxx',
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
            checkCheckPointEnv(row) {
                this.$router.push({
                    path: '/checkCheckPoint',
                    name: '查看测点数据',
                    // params: {
                    //     key: 'key',
                    //     value: [row.check_point_name, this.sub_system_name]
                    // }
                });
                window.sessionStorage.setItem("checkPointName", row.check_point_name);
            },
        },
        mounted() {
            // this.sub_system_name = this.$route.params.value;
            const name = window.sessionStorage.getItem("subSystemName");
            this.sub_system_name = name;
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
