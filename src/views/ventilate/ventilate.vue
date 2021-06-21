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
    import dataStandard from "./dataStandard";
    import systemData from "./systemData";
    export default {
        name: "ventilate",
        data() {
            return {
                activeName: 'first',
                checkVisible: 'false'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        components: {
            dataStandard,
            systemData
        }
    };
</script>


<style scoped>

</style>