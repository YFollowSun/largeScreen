<template>
  <el-container>
    <el-header style="height: 20px;">
      <div v-if="this.$router.currentRoute.path=='/coal_mining'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/coal_mining'}">采煤工作面</el-breadcrumb-item>
          <el-breadcrumb-item>数据标准</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>

    <el-main>
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
        <el-table :data="tableData" style="width: 100%" border stripe  @cell-click="addcoalSystem">
          <el-table-column type="index" label="#" header-align="center" align="center" width="80">
          </el-table-column>
          <el-table-column prop="device_name" label="设备名称" header-align="center" align="center" width="180">
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

      <dataQuality v-if="checkVisible" ref="dataQuality"></dataQuality>
    </el-main>
  </el-container>
</template>

<script>
    import dataQuality from "./dataQuality";
    export default {
        name: "dataStandard",
        data() {
            return {
                // visible: true,
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
                subsystems: [{
                    title: '地址',
                    num: '王家岭'
                }, {
                    title: '产量',
                    num: '25万吨'
                }, {
                    title: '煤质',
                    num: '精煤'
                }, {
                    title: '灾害类型',
                    num: '水灾'
                }, {
                    title: '服务年份',
                    num: '10年'
                }],
                tableData: [{
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
                    device_name: '中部4#驱动电机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    device_name: '中部5#驱动电机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    device_name: '中部6#驱动电机',
                    describe: 'YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86',
                    remark: '暂无'
                }, {
                    device_name: '1#滚筒',
                    describe: '无',
                    remark: '暂无'
                }, {
                    device_name: '2#滚筒',
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
            // init(id) {
            //
            //   this.visible = true;
            //
            // },
            addcoalSystem(row, column) {
                if (column.label == "设备名称") {
                    this.checkVisible = true;
                    // console.log(this.checkVisible);
                    this.$nextTick(() => {
                        this.$refs.dataQuality.init();
                    });
                }
            },
        },
        components: {
            dataQuality
        }

    }
</script>


<style scoped>

</style>