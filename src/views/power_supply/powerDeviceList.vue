<template>
  <div>
    <el-card>
      <el-table :data="deviceData" style="width: 100%" border stripe>
        <el-table-column type="index" label="#" header-align="center" align="center" width="60">
        </el-table-column>
        <el-table-column prop="device_code" label="设备编号" header-align="center" align="center" width="180">
        </el-table-column>
        <el-table-column prop="device_name" label="设备名" header-align="center" align="center" width="180">
        </el-table-column>
        <el-table-column prop="device_use" label="设备用途" header-align="center" align="center" width="480">
        </el-table-column>
        <el-table-column label="操作" header-align="center" align="center" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="watchCheckPoint(scope.row)">查看</el-button>
          </template>
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
  name: "powerDeviceList",
  data() {
    return {
      subSystem_name: '',
      deviceData: [],
      currentPage4: 4,
    }
  },
  methods: {
    // 获取列表数据
    getDeviceList() {
      if (this.subSystem_name == '王家岭110kv变电站 10kv') {
        this.deviceData = [{
          device_code: '5101',
          device_name: '10KV进线柜',
          device_use: '1#进线 '
        }, {
          device_code: '5105',
          device_name: '10KV出线柜',
          device_use: '选煤厂1# '
        }, {
          device_code: '5106',
          device_name: '10KV出线柜',
          device_use: '电厂启动电源'
        }, {
          device_code: '5107',
          device_name: '10KV出线柜',
          device_use: '接地变1'
        }, {
          device_code: '站用Ⅰ',
          device_name: '10KV出线柜',
          device_use: '所用变1#'
        }, {
          device_code: '5108',
          device_name: '10KV出线柜',
          device_use: '锅炉房1#'
        }]
      }
      if (this.subSystem_name == '王家岭110kv变电站 110kv') {
        this.deviceData = [{
          device_code: '1#主变',
          device_name: '变压器',
          device_use: '1号主变'
        }, {
          device_code: '2#主变',
          device_name: '变压器',
          device_use: '2号主变'
        }, {
          device_code: '1101',
          device_name: '110KVGIS开关单元',
          device_use: '1#变压器高压侧开关'
        }, {
          device_code: '1102',
          device_name: '110KVGIS开关单元',
          device_use: '2#变压器高压侧开关'
        }]
      }
      if (this.subSystem_name == '碟子沟110kv变电站 10kv') {
        this.deviceData = [{
          device_code: '1#主变',
          device_name: '变压器',
          device_use: '1号主变'
        }, {
          device_code: '2#主变',
          device_name: '变压器',
          device_use: '2号主变'
        }, {
          device_code: '1101',
          device_name: '110KVGIS开关单元',
          device_use: '1#变压器高压侧开关'
        }, {
          device_code: '1102',
          device_name: '110KVGIS开关单元',
          device_use: '2#变压器高压侧开关'
        }]
      }
      if (this.subSystem_name == '碟子沟110kv变电站 110kv') {
        this.deviceData = [{
          device_code: '1#主变',
          device_name: '变压器',
          device_use: '1号主变'
        }, {
          device_code: '2#主变',
          device_name: '变压器',
          device_use: '2号主变'
        }, {
          device_code: '1101',
          device_name: '110KVGIS开关单元',
          device_use: '1#变压器高压侧开关'
        }, {
          device_code: '1102',
          device_name: '110KVGIS开关单元',
          device_use: '2#变压器高压侧开关'
        }]
      }

    },
    handleSizeChange(newSize) {
      console.log(newSize)
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage)
    },
    watchCheckPoint(row) {
      this.$router.push({
        path: '/powerCheckPoint'
      })
      window.sessionStorage.setItem("device_name", row.device_name); //存到sessionStorage中，下一个页面获取
    }
  },
  mounted() {
    // this.subSystem_name = this.$route.params.value;
    const name = window.sessionStorage.getItem("subSystem_name");
    this.subSystem_name = name;
    this.getDeviceList()
  }
}
</script>

<style scoped>

</style>
