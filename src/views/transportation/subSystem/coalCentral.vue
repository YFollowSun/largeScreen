<!-- 煤中央皮带页面 -->
<template>
	<div>	
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/transportation'}">主运输系统</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/transportation'}">系统数据</el-breadcrumb-item>
                <el-breadcrumb-item >煤中央皮带</el-breadcrumb-item>
			</el-breadcrumb>

			<div class="back">
				<!-- 第一行 -->
				<el-row :gutter="20">
					<!-- 1-1 皮带工作时长-->
				  <el-col :span="8">
					  
					  <div class="grid-content " style="display: flex;">
						  <el-card>
							  <div class="text">皮带工作时长</div>
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
				  <!-- 1-2 健康状态-->
				  <el-col :span="8">
					  <div class="grid-content ">
						  <el-card style="width: 330px;">
							  <div class="text">健康状态</div>
							  <el-divider class="divi_small"></el-divider>
							   <img style="margin-left:110px;" src="@/assets/img/warn.png" alt="warn">
							   <el-divider class="divi_small"></el-divider>
						  <div style="display:flex;justify-content: space-around;">
							  <span style="font-size: small;">电机</span>
							   <img style="margin-left:110px;" src="@/assets/img/u1371.png" alt="u1371">
						  </div>
						  <el-divider class="divi_small"></el-divider>
						  <div style="display:flex;justify-content: space-around;">
							  <span style="font-size: small;">皮带</span>
							   <img style="margin-left:110px;" src="@/assets/img/u1371.png" alt="u1373">
						  </div>
						  <el-divider class="divi_small"></el-divider>
						  <div style="display:flex;justify-content: space-around;">
							  <span style="font-size: small;">滚筒</span>
							   <img style="margin-left:110px;" src="@/assets/img/u1371.png" alt="u1371">
						  </div>
							   
						  </el-card>
					  </div>
				  </el-col>
				  <!-- 1-3 中央皮带平均功率 -->
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
					<!--  2-1 中央皮带摘要信息 -->
				  <el-col :span="8">
					  <div class="grid-content ">
						  <el-card style="width: 330px;">
							  <div class="text">中央皮带摘要信息</div>
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
	  <!-- 2-2警报信息 -->
	  <el-col :span="8">
		  <div class="grid-content ">
			  <el-card style="width: 330px;">
				  <div class="text">警报信息</div>
				  <el-divider class="divi_small"></el-divider>
				  <img style="margin-left:110px;" src="@/assets/img/u1399.png" alt="u1399">
				  <el-divider class="divi_small"></el-divider>
				  <div style="display:flex;justify-content: space-around;">
					  <span style="font-size: small;">头部1#电机</span>
					  <span style="font-size: small;">2021.1.20 12:25 &nbsp;&nbsp;&nbsp;重启</span>
				  </div>
				  <el-divider class="divi_small"></el-divider>
				  <div style="display:flex;justify-content: space-around;">
					  <span style="font-size: small;">皮带保护器</span>
					  <span style="font-size: small;">2021.1.19 17:56 &nbsp;&nbsp;&nbsp;关机</span>
				  </div>
	  
			  </el-card>
		  </div>
	  </el-col>
	  <!-- 2-3中央皮带平均运煤量  -->
	  <el-col :span="8">
		  <div class="grid-content">
			  <el-card style="width: 330px;">
				  <centraloutput></centraloutput>
			  </el-card>
		  </div>
	  </el-col>
	  </el-row>
	  </div>
	  <el-button type="primary" @click="OpenBelt_body">皮带本体</el-button>
    </div>
</template>
<script>
    import centraloutput from '@/components/transportation/coalCentral/output.vue'
    import power from '@/components/transportation/coalCentral/power.vue'

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
                    name: '头部电机 ',
                    num: '3个'
                }, {
                    name: '中部电机 ',
                    num: '3个'
                }, {
                    name: '滚筒',
                    num: '7个'
                }, {
                    name: '破碎机',
                    num: '1个'
                }, {
                    name: '皮带本体',
                    num: '1个'
                }],
            }
        },
        components: {
            power,
            centraloutput
        },
        methods: {
            //打开采煤机本体页面
            // openMainpump() {
            //     this.$router.push({
            //         path: '/main_pump'
            //     })
            // },
            OpenBelt_body() {
                this.$router.push({
                    path: '/belt_body'
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
</style>