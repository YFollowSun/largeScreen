<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="4">
				<div class="block">
					<span class="text">{{name}}</span><br>
					<!--        <el-button type="primary">选择数据范围</el-button><br>-->
					<el-dropdown>
                        <el-button type="primary">
                            数据范围<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>十分钟</el-dropdown-item>
                            <el-dropdown-item>一小时</el-dropdown-item>
                            <el-dropdown-item>六小时</el-dropdown-item>
                            <el-dropdown-item>近一天</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
					<el-button type="primary" @click="dataAnalysis()">数据分析</el-button>
					<el-button type="primary" @click="openDetail()">详细数据</el-button>
				</div>
			</el-col>
			<el-col :span="14">
                <div class="block">
                    <!-- <direction></direction> -->
                    <span class="threshold" @click="beyondthreshold()">超出阈值：0.83</span>
                   <dataGraph v-bind="dg"></dataGraph>
                  </div>
            
			</el-col>
			<el-col :span="6">
				<div class="block">
					<el-card>
						<span class="info">设备健康程度:{{health}}</span><br>
						<span class="info">安全隐患程度:{{danger}}</span><br>
						<span class="info">正常运行:{{normal_time}}</span><br>
						<span class="info">数值超标总时长:{{total_time}}</span><br>
					</el-card>
				</div>
		
			</el-col>
		</el-row>
		<analysisDia v-if="moreVisible" ref="moreDialog"></analysisDia>
	</div>
</template>


<script>
    import dataGraph from "./dataGraph";
    import direction from "../../components/mining/main_bump/direction";
    import analysisDia from "./analysisDia.vue";
    export default {
        name: "checkPointInfo",
        components: {
            dataGraph,
            direction,
            analysisDia
        },
        props: [
            'name',
            'health',
            'danger',
            'normal_time',
            'total_time'
        ],
        data() {
            return {
                moreVisible: false,
                dg: {
                    X_data: ['16:20', '16:21', '16:22', '16:23', '16:24', '16:25', '16:26', '16:27'],
                    Y_data: [0.44, 0.40, 0.23, 0.60, 0.50, 0.53, 0.83, 0.5],
                    threshold: 0.8
                }
            }
        },
        methods: {
            dataAnalysis() {
                this.moreVisible = true;
                this.$nextTick(() => {
                    this.$refs.moreDialog.init();
                });
            },
            // 打开详细数据页面
            openDetail() {
                this.$router.push({
                    path: '/monitorDetail'
                })
            },
            // 超出阈值
            beyondthreshold() {
                this.$router.push({
                    path: '/monitorThreshold'
                })
            }
        }
    }
</script>

<style scoped>
    .block {
        height: 140px;
        /* background-color: burlywood */
    }
    
    .el-button {
        margin: 3px;
        margin-left: 25px;
        width: 120px;
    }
    
    .info {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    .threshold {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left: 460px;
        color: red;
        cursor: pointer;
    }
</style>