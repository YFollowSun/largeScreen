<template>
  <div>
    <!--标签-->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="系统数据" name="first">
        <systemData></systemData>
      </el-tab-pane>
      <el-tab-pane label="数据标准" name="second">
        <dataStandard></dataStandard>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
    import systemData from "./systemData";
    import dataStandard from "./dataStandard";
    export default {
        name: "monitor",
      data() {
        return {
          activeName: 'first',
          checkVisible: 'false'
        }
      },
        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
          }
        },
        components: {
          systemData,
          dataStandard
        }
    }
</script>


<style scoped>

</style>
