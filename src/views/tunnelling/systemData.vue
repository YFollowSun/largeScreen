<template>
  <el-container>
    <el-header style="height: 20px;">
      <div v-if="this.$router.currentRoute.path=='/tunnelling'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/tunnelling'}">掘进系统</el-breadcrumb-item>
          <el-breadcrumb-item>系统数据</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>

    <el-main>
      <span style="font-size: 20px;">掘进工作面：</span>
      <div class="coalblock" v-for="item in options" :key="item.title">
        <span style="font-size: 12px; color:#9196a1 ;">{{item.title}}</span>
        </br>
        <span style="font-size: 24px;">{{item.num}}</span>
      </div>

      <el-card>
        <el-table :data="tableData" style="width: 100%" border stripe>
          <el-table-column type="index" label="序号" header-align="center" align="center" width="160">
          </el-table-column>
          <el-table-column prop="sub_system_name" label="子系统名称" header-align="center" align="center" width="180">
          </el-table-column>
          <el-table-column prop="describe" label="描述" header-align="center" align="center" width="500">
          </el-table-column>
          <el-table-column prop="remark" label="备注" header-align="center" align="center" width="180">
          </el-table-column>
        </el-table>
        <!-- 分页区域 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page="currentPage1" :page-sizes="[1, 2, 5, 10]" :page-size="1"
                       layout="total, sizes, prev, pager, next, jumper" :total="9">
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
                    title: '总数据量',
                    num: '1.2T'
                }, {
                    title: '系统个数',
                    num: '8个'
                }, {
                    title: '子系统个数',
                    num: '12个'
                }, {
                    title: '设备个数',
                    num: '125个'
                }],
                tableData: [{
                    sub_system_name: '综掘机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    sub_system_name: '转载机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    sub_system_name: '装煤机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    sub_system_name: '局部扇风机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    sub_system_name: '锚索钻机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    sub_system_name: 'xxx',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    sub_system_name: 'xxx',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
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
            handleSizeChange(newSize) {
                // console.log(newSize)
            },
            //监听 页码值 改变的事件
            handleCurrentChange(newPage) {
                // console.log(newPage)
            }
        }
    }
</script>

<style scoped>
    .coalblock {
        width: 115px;
        height: 77px;
        border: solid 1px #dcdfe6;
        padding-top: 20px;
        margin-left: 25px;
        text-align: center;
        display: inline-block;
    }
</style>