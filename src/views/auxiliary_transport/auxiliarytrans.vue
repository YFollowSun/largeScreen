<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="系统数据" name="first">系统数据</el-tab-pane>
    <el-tab-pane label="数据标准" name="second">数据标准</el-tab-pane>
  </el-tabs>
</template>


<script>
    export default {
      name: "auxiliarytrans",
      data() {
        return {
          activeName: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    };
</script>


<style scoped>

</style>
