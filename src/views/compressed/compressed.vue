<template>
    <div>
      <!--标签-->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="系统数据" name="first">
            <!-- 系统数据页面 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>压风系统</el-breadcrumb-item>
                <el-breadcrumb-item>系统数据</el-breadcrumb-item>
              </el-breadcrumb>
              <el-main>
                <span style="font-size: 12px;">掘进工作面：</span>
				<div class="coalblock" v-for="item in miningoptions" :key="item.title">
					<span style="font-size: 12px; color:#9196a1 ;">{{item.title}}</span>
					</br>
					<span style="font-size: 24px;">{{item.num}}</span>
		
				</div>
                <el-card>
                    <el-table :data="systemData" style="width: 100%" border stripe>
                        <el-table-column type="index" label="#" header-align="center" align="center" width="60">
                        </el-table-column>
                        <el-table-column prop="subsystem" label="子系统名称" header-align="center" align="center" width="150">
                        </el-table-column>
                        <el-table-column prop="describe" label="描述" header-align="center" align="center" width="450">
                        </el-table-column>
                        
<el-table-column prop="remark" label="备注" header-align="center" align="center" width="150">
</el-table-column>

</el-table>

<!-- 分页区域 -->
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination>
</el-card>
</el-main>
</el-tab-pane>
<el-tab-pane label="数据标准" name="second">
    <!-- 数据标准页面 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>压风系统</el-breadcrumb-item>
        <el-breadcrumb-item>数据标准</el-breadcrumb-item>
    </el-breadcrumb>
    <span style="font-size: 10px;">搜索：</span>
    <el-select v-model="value" placeholder="请选择子系统">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <el-card>
        <el-table :data="deviceData" style="width: 100%" border stripe>
            <el-table-column type="index" label="#" header-align="center" align="center" width="60">
            </el-table-column>
            <el-table-column prop="device_name" label="设备名称" header-align="center" align="center" width="150">
            </el-table-column>
            <el-table-column prop="describe" label="描述" header-align="center" align="center" width="500">
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
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="5">
</el-pagination>
</el-card>
</el-tab-pane>
</el-tabs>
<watchDevice v-if="watchVisible" ref="watchdevice"></watchDevice>
</div>

</template>


<script>
import watchDevice from "./watchDevice.vue";
export default {
  name: "compressed",
  data() {
    return {
      // 被激活页签的名称
      activeName: "first",
      miningoptions: [
        {
          title: "总数据量",
          num: "1.2T",
        },
        {
          title: "系统个数",
          num: "8个",
        },
        {
          title: "子系统系统个数",
          num: "12个",
        },
        {
          title: "设备个数",
          num: "125个",
        },
      ],
      systemData: [
        {
          subsystem: "综掘机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          subsystem: "转载机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          subsystem: "装煤机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          subsystem: "局部扇风机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          subsystem: "锚索钻机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "煤中央皮带",
        },
        {
          value: "选项2",
          label: "主平硐皮带",
        },
        {
          value: "选项3",
          label: "上仓皮带",
        },
      ],
      deviceData: [
        {
          device_name: "皮带本体",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          device_name: "头部1#驱动电机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          device_name: "头部2#驱动电机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          device_name: "头部3#驱动电机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
        {
          device_name: "头部4#驱动电机",
          describe: "YB2-5002-4型，功率900kW，U=6kV,I=105.1A，功率因数0.86",
          remark: "暂无",
        },
      ],
      watchVisible: false,
      currentPage4: 4,
      value: "",
    };
  },
  methods: {
    // Tab页签点击事件的处理函数
    handleClick(tab, event) {},
    watchDevice(row) {
      this.watchVisible = true;
      this.$nextTick(() => {
        this.$refs.watchdevice.init();
      });
    },
    handleSizeChange(newSize) {
      console.log(newSize);
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage);
    },
  },
  components: {
    watchDevice,
  },
};
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