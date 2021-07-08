<template>
  <div>
    <el-card>
      <el-table :data="checkPointData" style="width: 100%" border stripe>
        <el-table-column type="index" label="#" header-align="center" align="center" width="60">
        </el-table-column>
        <el-table-column prop="checkpoint" label="测点" header-align="center" align="center" width="150">
        </el-table-column>
        <el-table-column prop="dataType" label="数据类型" header-align="center" align="center" width="150">
        </el-table-column>
        <el-table-column prop="unit" label="工程单位" header-align="center" align="center" width="150">
        </el-table-column>
        <el-table-column prop="frequency" label="采集频率" header-align="center" align="center" width="150">
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
  name: "powerCheckPoint",
  data() {
    return {
      device_name: '',
      checkPointData: [],
      currentPage4: 4,
    }
  },
  methods: {
    // 获取测点列表数据
    getCheckpointList() {
      if (this.device_name == '10KV进线柜') {
        this.checkPointData = [{
          checkpoint: '电流Ia',
          dataType: '浮点',
          unit: 'A',
          frequency: '1s'
        }, {
          checkpoint: '有功功率P',
          dataType: '浮点',
          unit: 'KW',
          frequency: '1s'
        }, {
          checkpoint: '无功功率Q',
          dataType: '浮点',
          unit: 'KVar',
          frequency: '1s'
        }, {
          checkpoint: '断路器合闸',
          dataType: '布尔',
          unit: ' ',
          frequency: '1s'
        }]
      }
      if (this.device_name == '10KV出线柜') {
        this.checkPointData = [{
          checkpoint: '电流Ia',
          dataType: '浮点',
          unit: 'A',
          frequency: '1s'
        }, {
          checkpoint: '有功功率P',
          dataType: '浮点',
          unit: 'KW',
          frequency: '1s'
        }, {
          checkpoint: '无功功率Q',
          dataType: '浮点',
          unit: 'KVar',
          frequency: '1s'
        }, {
          checkpoint: '断路器合闸',
          dataType: '布尔',
          unit: '',
          frequency: '1s'
        }]
      }
      if (this.device_name == '变压器') {
        this.checkPointData = [{
          checkpoint: '温度 ',
          dataType: '浮点',
          unit: '℃',
          frequency: '1s'
        }, {
          checkpoint: '挡位',
          dataType: '浮点',
          unit: '',
          frequency: '1s',
        }, {
          checkpoint: '变压器有载调压升',
          dataType: '布尔',
          unit: '',
          frequency: '1s',
        }, {
          checkpoint: '变压器有载调压降',
          dataType: '布尔',
          unit: '',
          frequency: '1s',
        }, {
          checkpoint: '变压器停',
          dataType: '布尔',
          unit: '',
          frequency: '',
        }]
      }
      if (this.device_name == '110KVGIS开关单元') {
          this.checkPointData = [{
            checkpoint: '电流Ia',
            dataType: '浮点',
            unit: 'A',
            frequency: '1s'
          }, {
            checkpoint: '有功功率P',
            dataType: '浮点',
            unit: 'KW',
            frequency: '1s'
          }, {
            checkpoint: '无功功率Q',
            dataType: '浮点',
            unit: 'KVar',
            frequency: '1s'
          }, {
            checkpoint: '断路器合闸',
            dataType: '布尔',
            unit: ' ',
            frequency: '1s'
          }]
      }
    },
    handleSizeChange(newSize) {
      console.log(newSize)
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage)
    }
  },
  mounted() {
    // this.subSystem_name = this.$route.params.value;
    const name = window.sessionStorage.getItem("device_name");
    this.device_name = name;
    this.getCheckpointList();
  }
}
</script>

<style scoped>

</style>
