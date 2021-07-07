<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="block">
        <span class="text">{{name}}</span><br>
<!--        <el-button type="primary">选择数据范围</el-button><br>-->
        <el-dropdown size="mini" split-button type="primary">
          选择数据范围
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>十分钟</el-dropdown-item>
            <el-dropdown-item>一小时</el-dropdown-item>
            <el-dropdown-item>六小时</el-dropdown-item>
            <el-dropdown-item>近 天</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary" >数据分析</el-button><br>
        <el-button type="primary">详细数据</el-button><br>
      </div>
    </el-col>
    <el-col :span="14">
      <div class="block">
        <direction></direction>
<!--        <dataGraph v-bind="dg"></dataGraph>-->
      </div>

    </el-col>
    <el-col :span="6">
      <div class="block">
        <el-card>
          <span class="info">设备健康程度:{{health}}</span><br>
          <span class="info">安全隐患程度:{{danger}}</span><br>
          <span class="info">正常运行:{{normal_time}}</span><br>
          <span class="info">数值超标总时长:{{total_time}}</span><br>
        </el-card>
      </div>

    </el-col>
  </el-row>
</template>

<script>
  import dataGraph from "./dataGraph";
  import direction from "../../components/mining/main_bump/direction";
  export default {
    name: "checkPointInfo",
    components: {dataGraph, direction},
    props: [
      'name',
      'health',
      'danger',
      'normal_time',
      'total_time'
    ],
    data() {
      return {
        // dg: {
        //   data_unit: "KN",
        //   Y_scale: "1",
        //   X_data: ['16:20', '16:21', '16:22', '16:23', '16:24', '16:25', '16:26', '16:27'],
        //   Y_data: [0.44, 0.40, 0.23, 0.60, 0.50, 0.53, 0.83, 0.5],
        //   time_BT: '16:26',
        //   threshold: 0.8
        // }
      }
    }
  }
</script>

<style scoped>
  .block {
    height: 140px;
    /* background-color: burlywood */
  }
  .el-button {
    margin: 3px;
    margin-left: 25px;
    width: 120px;
  }
</style>
