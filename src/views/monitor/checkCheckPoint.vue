<template>
  <el-container>
    <el-header style="height: 20px;">
      <div v-if="this.$router.currentRoute.path=='/checkCheckPoint'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/monitor'}">安全监控</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/checkSubSys'}">{{ sub_system_name }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ check_point_name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>

    <el-main>
      <el-row>
        <check-point-info v-bind="dg1"></check-point-info>
      </el-row>
      <el-row>
        <check-point-info v-bind="dg2"></check-point-info>
      </el-row>
      <el-row>
        <check-point-info v-bind="dg3"></check-point-info>
      </el-row>
      <el-row>
        <check-point-info v-bind="dg4"></check-point-info>
      </el-row>
      <el-row>
        <check-point-info v-bind="dg4"></check-point-info>
      </el-row>
    </el-main>

<!--    <el-divider class="divi"></el-divider>-->
    <!-- 第一行 -->
<!--    <el-row :gutter="20">-->
<!--      <el-col :span="4">-->
<!--        <div class="block">-->
<!--          <span class="text">牵引方向</span></br>-->
<!--&lt;!&ndash;          <el-button type="primary">选择数据范围</el-button></br>&ndash;&gt;-->
<!--          <el-dropdown size="mini" split-button type="primary">-->
<!--            选择数据范围-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>十分钟</el-dropdown-item>-->
<!--              <el-dropdown-item>一小时</el-dropdown-item>-->
<!--              <el-dropdown-item>六小时</el-dropdown-item>-->
<!--              <el-dropdown-item>近 天</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
<!--          <el-button type="primary" >数据分析</el-button></br>-->
<!--          <el-button type="primary">详细数据</el-button></br>-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="14">-->
<!--        <div class="block">-->
<!--          <direction></direction>-->
<!--        </div>-->

<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <div class="block">-->
<!--          <el-card>-->
<!--            <span class="info">设备健康程度:{{health}}</span></br>-->
<!--            <span class="info">安全隐患程度:{{danger}}</span></br>-->
<!--            <span class="info">正常运行:{{normal_time}}</span></br>-->
<!--            <span class="info">数值超标总时长:{{total_time}}</span></br>-->
<!--          </el-card>-->
<!--        </div>-->

<!--      </el-col>-->
<!--    </el-row>-->
<!--    &lt;!&ndash; 第二行 &ndash;&gt;-->
<!--    <el-row :gutter="20">-->
<!--      <el-col :span="4">-->
<!--        <div class="block">-->
<!--          <span class="text">牵引状态</span></br>-->
<!--          <el-button type="primary">选择数据范围</el-button></br>-->
<!--          <el-button type="primary" >数据分析</el-button></br>-->
<!--          <el-button type="primary">详细数据</el-button></br>-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="14">-->
<!--        <div class="block">-->
<!--          <pull_status></pull_status>-->
<!--        </div>-->

<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <div class="block">-->
<!--          <el-card>-->
<!--            <span class="info">设备健康程度:{{health}}</span></br>-->
<!--            <span class="info">安全隐患程度:{{danger}}</span></br>-->
<!--            <span class="info">正常运行:{{normal_time}}</span></br>-->
<!--            <span class="info">数值超标总时长:{{total_time}}</span></br>-->
<!--          </el-card>-->
<!--        </div>-->

<!--      </el-col>-->
<!--    </el-row>-->
<!--    &lt;!&ndash; 第三行 &ndash;&gt;-->
<!--    <el-row :gutter="20">-->
<!--      <el-col :span="4">-->
<!--        <div class="block">-->
<!--          <span class="text">加速状态</span></br>-->
<!--          <el-button type="primary">选择数据范围</el-button></br>-->
<!--          <el-button type="primary" >数据分析</el-button></br>-->
<!--          <el-button type="primary">详细数据</el-button></br>-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="14">-->
<!--        <div class="block">-->
<!--          <speed_status></speed_status>-->
<!--        </div>-->

<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <div class="block">-->
<!--          <el-card>-->
<!--            <span class="info">设备健康程度:{{health}}</span></br>-->
<!--            <span class="info">安全隐患程度:{{danger}}</span></br>-->
<!--            <span class="info">正常运行:{{normal_time}}</span></br>-->
<!--            <span class="info">数值超标总时长:{{total_time}}</span></br>-->
<!--          </el-card>-->
<!--        </div>-->

<!--      </el-col>-->
<!--    </el-row>-->
<!--    &lt;!&ndash; 第四行 &ndash;&gt;-->
<!--    <el-row :gutter="20">-->
<!--      <el-col :span="4">-->
<!--        <div class="block">-->
<!--          <span class="text">牵引速度</span></br>-->
<!--          <el-button type="primary">选择数据范围</el-button></br>-->
<!--          <el-button type="primary" >数据分析</el-button></br>-->
<!--          <el-button type="primary">详细数据</el-button></br>-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="14">-->
<!--        <div class="block">-->
<!--          <pulling_speed></pulling_speed>-->
<!--        </div>-->

<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <div class="block">-->
<!--          <el-card>-->
<!--            <span class="info">设备健康程度:{{health}}</span></br>-->
<!--            <span class="info">安全隐患程度:{{danger}}</span></br>-->
<!--            <span class="info">正常运行:{{normal_time}}</span></br>-->
<!--            <span class="info">数值超标总时长:{{total_time}}</span></br>-->
<!--          </el-card>-->
<!--        </div>-->

<!--      </el-col>-->
<!--    </el-row>-->

    <!-- 分页区域 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="4">
    </el-pagination>
  </el-container>
</template>

<script>

  import direction from '@/components/mining/main_bump/direction.vue'
  import pull_status from '@/components/mining/main_bump/pull_status.vue'
  import pulling_speed from '@/components/mining/main_bump/pulling_speed.vue'
  import speed_status from '@/components/mining/main_bump/speed_status.vue'
  import checkPointInfo from "./checkPointInfo";
  export default {
    name: "checkCheckPoint",
    data() {
      return {
        check_point_name: '',
        sub_system_name: '',
        // health: '健康',
        // danger: '较低',
        // normal_time: '9天',
        // total_time: '20s',
        dg1: {
          name: '牵引方向',
          health: '健康',
          danger: '较低',
          normal_time: '9天',
          total_time: '20s',
        },
        dg2: {
          name: '牵引状态',
          health: '健康',
          danger: '较低',
          normal_time: '9天',
          total_time: '20s',
        },
        dg3: {
          name: '加速状态',
          health: '健康',
          danger: '较低',
          normal_time: '9天',
          total_time: '20s',
        },
        dg4: {
          name: '牵引速度',
          health: '健康',
          danger: '较低',
          normal_time: '9天',
          total_time: '20s',
        }
      }
    },
    components: {
      direction,
      pull_status,
      pulling_speed,
      speed_status,
      checkPointInfo
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
      // back() {
      //   // this.$router.go(-1);
      //
      //   console.log(this.sub_system_name)
      //   this.$router.push({
      //     path: '/checkSubSys',
      //     name: '查看子系统',
      //     params: {
      //       key: 'key',
      //       value: this.sub_system_name
      //     }
      //   })    }
    },
    mounted() {
      // this.check_point_name = this.$route.params.value[0];
      // this.sub_system_name = this.$route.params.value[1];
      const subSystemName = window.sessionStorage.getItem("subSystemName");
      const checkPointName = window.sessionStorage.getItem("checkPointName");
      this.sub_system_name = subSystemName;
      this.check_point_name = checkPointName;
    }
  }
</script>

<style scoped>
    .divi {
        display: block;
        height: 1px;
        width: 100%;
        margin: 10px 0px 10px 0px;
        background-color: #dcdfe6;
        position: relative;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .block {
        height: 140px;
        /* background-color: burlywood */
    }

    .el-button {
        margin: 3px;
        margin-left: 25px;
        width: 120px;
    }

    .text {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bolder;
        margin-left: 50px;
    }

    .info {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .el-card {
        background: #ffffff;
        border-radius: 8px;
        width: 180px;
        height: 120px;
        margin-top: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
</style>
