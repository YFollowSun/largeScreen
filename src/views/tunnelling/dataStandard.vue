<template>
  <el-container>
    <el-header style="height: 20px;">
      <div v-if="this.$router.currentRoute.path=='/tunnelling'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/tunnelling'}">掘进系统</el-breadcrumb-item>
          <el-breadcrumb-item>数据标准</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "dataStandard"
}
</script>

<style scoped>

</style>
