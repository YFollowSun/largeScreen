<template>
    <div >
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/coal_mining'}">采煤工作面</el-breadcrumb-item>
            <el-breadcrumb-item>采煤机</el-breadcrumb-item>
          </el-breadcrumb>
        <div class="back">
          <el-row :gutter="20">
            <el-col :span="8">
                
                <div class="grid-content " style="display: flex;">
                    <el-card>
                        <div class="text">采煤工作面工作时长</div>
                        <el-divider class="divi"></el-divider>
                            <span style="font-size: 24px;">{{time.day}}</span>
                            &nbsp<span style="font-size: 17px;">天</span>
                        </br>
                            <span style="font-size: 24px;">{{time.hour}}</span>
                            &nbsp<span style="font-size: 17px;">小时</span>
                            </br>
                            <span style="font-size: 24px; ">{{time.min}}</span>
                            &nbsp<span style="font-size: 17px;">分</span>
                        </br>   
                    </el-card>
                    <el-card>
                        <div class="text">皮带当月总运输煤量</div>
                        <el-divider class="divi"></el-divider>
                    </br>
                            <span style="font-size: 24px;">{{traffic_num}}</span>
                            &nbsp<span style="font-size: 17px;">t</span>
            
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ">
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
            <el-col :span="8">
                <div class="grid-content">
                    <el-card style="width: 330px;">
                        <power></power>
                    </el-card>
                </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content ">
                    <el-card style="width: 330px;">
                        <div class="text">采煤机摘要信息</div>
                        <el-divider class="divi"></el-divider>
                        <el-row :gutter="20">
                            <el-col :span="12">
                            <div style="border-right: 1px solid #9d9aab; width: 140px; ">
                                <span style="font-size: 30px;font-weight:normal;">{{coal_abstract.num}}</span>
                                </br>
                                <span style="font-size: 20px;">{{coal_abstract.name}}</span>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div  v-for="item in options"  style="justify-content:space-evenly;">
                                <span style="font-size: 14px; ">{{item.name}}</span>
                                &nbsp;&nbsp;&nbsp;
                                <span style="font-size: 14px;">{{item.num}}</span>  
                            </div>
                        </el-col>
                    </el-row>


</el-card>

</div>
</el-col>
<el-col :span="8">
    <div class="grid-content ">
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
<el-col :span="8">
    <div class="grid-content">
        <el-card style="width: 330px;">
            <coal_output></coal_output>
        </el-card>
    </div>
</el-col>
</el-row>
</div>
<el-button type="primary" @click="openMainpump()">主泵</el-button>
</div>

</template>


<script>
    import power from '@/components/mining/power.vue'
    import coal_output from '@/components/mining/coal_output.vue'
    export default {
        name: "coalcutter",
        data() {
            return {
                time: {
                    day: '12',
                    hour: '5',
                    min: '23'
                },
                coal_abstract: {
                    num: '18个',
                    name: '子设备总数'

                },
                traffic_num: '52',
                options: [{
                    name: '采煤机本体 ',
                    num: '1个'
                }, {
                    name: '牵引',
                    num: '7个'
                }, {
                    name: '摇臂',
                    num: '1个'
                }, {
                    name: '主泵',
                    num: '1个'
                }],
            }
        },
        components: {
            power,
            coal_output
        },
        methods: {
            //打开采煤机本体页面
            openMainpump() {
                this.$router.push({
                    path: '/main_pump'
                })
            },
        }
    }
</script>
<style scoped>
    .back {
        background-color: #F7F4F2;
        margin-top: 20px;
    }
    
    .grid-content {
        /* border: 1px solid rgb(139, 136, 136); */
        height: 160px;
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
    
    .text {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bolder;
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
    
    .el-row {
        margin-top: 15px;
    }
</style>