<template>
  <el-container>
    <el-header>
      <div v-if="this.$router.currentRoute.path=='/coal_mining'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/coal_mining'}">采煤工作面</el-breadcrumb-item>
          <el-breadcrumb-item>系统数据</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-header>

    <el-main>
      <div class="top">
        <el-button type="primary" @click="coalcutter">采煤机</el-button>
      </div>

      <el-row :gutter="20">
        <!-- 1-1 采煤工作面设备摘要 -->
        <el-col :span="8">
          <div class="grid-content ">
            <el-card style="width: 330px;">
              <div class="text">采煤机工作面设备摘要</div>
              <el-divider class="divi"></el-divider>
              <el-row :gutter="20">
                <el-col :span="12">
                  <div style="border-right: 1px solid #9d9aab; width: 140px; ">
                    <span style="font-size: 30px;font-weight:normal;">{{coal_abstract.num}}</span>
                    <br>
                    <span style="font-size: 20px;">{{coal_abstract.name}}</span>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div v-for="item in options"  :key="item.index" style="justify-content:space-evenly;">
                    <span style="font-size: 14px; ">{{item.name}}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style="font-size: 14px;">{{item.num}}</span>
                  </div>
                </el-col>
              </el-row>
            </el-card>

          </div>
        </el-col>
        <!-- 1-2 液压支架压力 折线图 -->
        <el-col :span="8">
          <div class="grid-content ">
            <el-card style="width: 330px;">
              <pressure></pressure>

            </el-card>
          </div>
        </el-col>
        <!-- 1-3 健康状态 -->
        <el-col :span="8">
          <div class="grid-content">
            <el-card style="width: 330px;">
              <div class="text">健康状态</div>
              <el-divider class="divi_small"></el-divider>
              <img style="margin-left:110px;" src="@/assets/img/warn.png" alt="warn">
              <el-divider class="divi_small"></el-divider>
              <div style="display:flex;justify-content: space-around;">
                <span style="font-size: small;">牵引</span>
                <img style="margin-left:110px;" src="@/assets/img/u1371.png" alt="u1371">
              </div>
              <el-divider class="divi_small"></el-divider>
              <div style="display:flex;justify-content: space-around;">
                <span style="font-size: small;">摇臂</span>
                <img style="margin-left:110px;" src="@/assets/img/u1371.png" alt="u1373">
              </div>
              <el-divider class="divi_small"></el-divider>
              <div style="display:flex;justify-content: space-around;">
                <span style="font-size: small;">主泵</span>
                <img style="margin-left:110px;" src="@/assets/img/u1371.png" alt="u1371">
              </div>

            </el-card>
          </div>
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row :gutter="20">
        <!-- 2-1  瓦斯浓度  折线图 -->
        <el-col :span="8">
          <div class="grid-content ">
            <el-card style="width: 330px;">
              <gas_concentration></gas_concentration>
            </el-card>

          </div>
        </el-col>
        <!-- 2-2 浮尘浓度 折线图 -->
        <el-col :span="8">
          <div class="grid-content ">
            <el-card style="width: 330px;">
              <dust_concentration></dust_concentration>
            </el-card>
          </div>
        </el-col>
        <!-- 2-3 警报信息  -->
        <el-col :span="8">
          <div class="grid-content">
            <el-card style="width: 330px;">
              <div class="text">警报信息</div>
              <el-divider class="divi_small"></el-divider>
              <img style="margin-left:110px;" src="@/assets/img/u1399.png" alt="u1399">
              <el-divider class="divi_small"></el-divider>
              <div style="display:flex;justify-content: space-around;">
                <span style="font-size: small;">牵引</span>
                <span style="font-size: small;">2021.1.20 12:25 &nbsp;&nbsp;&nbsp;重启</span>
              </div>
              <el-divider class="divi_small"></el-divider>
              <div style="display:flex;justify-content: space-around;">
                <span style="font-size: small;">主泵</span>
                <span style="font-size: small;">2021.1.19 17:56 &nbsp;&nbsp;&nbsp;关机</span>
              </div>

            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>


<script>
    import pressure from '@/components/mining/systemData/pressure.vue'
    import gas_concentration from '@/components/mining/systemData/gas_concentration.vue'
    import dust_concentration from '@/components/mining/systemData/dust_concentration.vue'

    export default {
        name: "systemData",
        data() {
            return {
                coal_abstract: {
                    num: '18个',
                    name: '子设备总数'

                },
                options: [{

                    name: '采煤机 ',
                    num: '3个'
                }, {

                    name: '滚筒',
                    num: '3个'
                }, {
                    name: '破碎机',
                    num: '7个'
                }, {
                    name: '主泵',
                    num: '1个'
                }, {
                    name: '过滤站',
                    num: '1个'
                }],
            }
        },
        components: {
            pressure,
            gas_concentration,
            dust_concentration

        },
        methods: {
            // 点击采煤机按钮
            coalcutter() {
                this.$router.push('/coalcutter')

            },
        }
    }
</script>

<style scoped>
    .grid-content {
        /* border: 1px solid rgb(139, 136, 136); */
        height: 185px;
    }

    .el-card {
        background: #FFFFFF;
        border-radius: 8px;
        width: 160px;
        height: 165px;
        margin-top: 5px;
        margin-left: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .divi {
        display: block;
        height: 1px;
        width: 100%;
        margin: 6px 0;
        background-color: #dcdfe6;
        position: relative;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .divi_small {
        display: block;
        height: 1px;
        width: 100%;
        margin: 0px 0;
        background-color: #dcdfe6;
        position: relative;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
