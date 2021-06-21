<!-- 一号通风机页面 -->
<template>
    <div >
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/ventilate'}">主通风系统</el-breadcrumb-item>
            <el-breadcrumb-item>一号通风机</el-breadcrumb-item>
          </el-breadcrumb>
        <div class="back">
            <!-- 第一行 -->
          <el-row :gutter="20">
              <!-- 1-1 一号通风机时长 -->
            <el-col :span="8">
                
                <div class="grid-content " style="display: flex;">
                    <el-card>
                        <div class="text">一号通风机工作时长</div>
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
                        <div class="text">风机当月总耗电量</div>
                        <el-divider class="divi"></el-divider>
                    </br>
                            <span style="font-size: 24px;">{{traffic_num}}</span>
                            &nbsp<span style="font-size: 17px;">kwh</span>
            
                    </el-card>
                </div>
            </el-col>
            <!-- 1-2  健康状态-->
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
            <!-- 1-3 风机功率 -->
            <el-col :span="8">
                <div class="grid-content">
                    <el-card style="width: 330px;">
                        <power></power>
                    </el-card>
                </div>
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row :gutter="20">
              <!-- 2-1 一号通风机摘要信息 -->
            <el-col :span="8">
                <div class="grid-content ">
                    <el-card style="width: 330px;">
                        <div class="text">一号通风机摘要信息</div>
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
<!-- 2-2 警报信息 -->
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
<!-- 2-3 煤风机风速  -->
<el-col :span="8">
    <div class="grid-content">
        <el-card style="width: 330px;">
            <wind_speed></wind_speed>
        </el-card>
    </div>
</el-col>
</el-row>
</div>

<el-button type="primary" style="margin-top: 40px;">风机电机</el-button>
<!-- <MouseOverPop class="toolbox-element">
	<template #heading>
		<div class="element-title" @click="openMainpump()">
			风机电机
		</div>
	</template>
<template #body>
    <div class="pop-content">
        <div style="background-color: cornsilk;">
            <location></location>
        </div>
    </div>
	</template>
</MouseOverPop> -->
<!-- <div style="background-color: burlywood;" class="cavasbox" ref="SCEchart"></div> -->
<!-- <div class="pop-content">
    <location></location>
</div> -->


</div>

</template>


<script>
    import MouseOverPop from './MouseOverPop.vue'
    import power from '@/components/ventilate/firstVentilator/power.vue'
    import wind_speed from '@/components/ventilate/firstVentilator/wind_speed.vue'
    // 鼠标悬浮弹出页面中的两个折线图
    // import location from '@/components/ventilate/firstVentilator/fan_motor/location.vue'
    // import pulling_speed from '@/components/ventilate/firstVentilator/fan_motor/pulling_speed.vue'
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
            wind_speed,
            MouseOverPop,
            // location,
            // pulling_speed
        },

        methods: {
            //打开采煤机本体页面
            openMainpump() {
                this.$router.push({
                    path: '/main_pump'
                })
            }

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
    
    .block {
        height: 140px;
        background-color: cadetblue
    }
    
    .cavasbox {
        box-sizing: border-box;
        width: 400px;
        height: 200px;
    }
</style>