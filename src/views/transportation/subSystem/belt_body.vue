<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/transportation'}">主运输系统</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/transportation'}">系统数据</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/coalCentral'}">煤中央皮带</el-breadcrumb-item>
            <el-breadcrumb-item >皮带本体</el-breadcrumb-item>
        </el-breadcrumb>

        <el-divider class="divi"></el-divider>
        <!-- 第一行 -->
        <el-row :gutter="20">
            <el-col :span="4">
                <div class="block">
                    <span class="text">牵引方向</span></br>
                    <el-select style="width: 120px; margin-left: 25px" v-model="dataRange" placeholder="请选择数据范围">
                        <el-option v-for="item in dataRangeItems" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" @click="dataAnalysis()">数据分析</el-button>
                    <el-button type="primary" @click="openDetail()">详细数据</el-button>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="block">
                    <span class="threshold" @click="beyondthreshold()">超出阈值：0.83</span>
                    <direction></direction>
                </div>

            </el-col>
            <el-col :span="6">
                <div class="block">
                    <el-card>
                        <span class="info">设备健康程度:{{health}}</span></br>
                        <span class="info">安全隐患程度:{{danger}}</span></br>
                        <span class="info">正常运行:{{normal_time}}</span></br>
                        <span class="info">数值超标总时长:{{total_time}}</span></br>
                   </el-card>
                </div>

            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20">
            <el-col :span="4">
                <div class="block">
                    <span class="text">牵引状态</span></br>
                    <el-button type="primary">选择数据范围</el-button></br>
                    <el-button type="primary" >数据分析</el-button></br>
                    <el-button type="primary">详细数据</el-button></br>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="block">
                    <span class="threshold">超出阈值：0.83</span>
                    <pull_status></pull_status>
                </div>

            </el-col>
            <el-col :span="6">
                <div class="block">
                    <el-card>
                        <span class="info">设备健康程度:{{health}}</span></br>
                        <span class="info">安全隐患程度:{{danger}}</span></br>
                        <span class="info">正常运行:{{normal_time}}</span></br>
                        <span class="info">数值超标总时长:{{total_time}}</span></br>
                   </el-card>
                </div>

            </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="20">
            <el-col :span="4">
                <div class="block">
                    <span class="text">加速状态</span></br>
                    <el-button type="primary">选择数据范围</el-button></br>
                    <el-button type="primary" >数据分析</el-button></br>
                    <el-button type="primary">详细数据</el-button></br>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="block">
                    <span class="threshold">超出阈值：0.83</span>
                    <speed_status></speed_status>
                </div>

            </el-col>
            <el-col :span="6">
                <div class="block">
                    <el-card>
                        <span class="info">设备健康程度:{{health}}</span></br>
                        <span class="info">安全隐患程度:{{danger}}</span></br>
                        <span class="info">正常运行:{{normal_time}}</span></br>
                        <span class="info">数值超标总时长:{{total_time}}</span></br>
                   </el-card>
                </div>

            </el-col>
        </el-row>
        <!-- 第四行 -->
        <el-row :gutter="20">
            <el-col :span="4">
                <div class="block">
                    <span class="text">牵引速度</span></br>
                    <el-button type="primary">选择数据范围</el-button></br>
                    <el-button type="primary" >数据分析</el-button></br>
                    <el-button type="primary">详细数据</el-button></br>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="block">
                    <span class="threshold">超出阈值：0.83</span>
                    <pulling_speed></pulling_speed>
                </div>

            </el-col>
            <el-col :span="6">
                <div class="block">
                    <el-card>
                        <span class="info">设备健康程度:{{health}}</span></br>
                        <span class="info">安全隐患程度:{{danger}}</span></br>
                        <span class="info">正常运行:{{normal_time}}</span></br>
                        <span class="info">数值超标总时长:{{total_time}}</span></br>
                   </el-card>
                </div>

            </el-col>
        </el-row>
        
<!-- 分页区域 -->
<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="4">
</el-pagination>
<analysisDia v-if="moreVisible" ref="moreDialog"></analysisDia>
<beltbodyRow style="margin-top: 185px;margin-left: 10px;" :property="property" :health="health" :danger="danger" :normal_time="normal_time" :total_time="total_time"></beltbodyRow>
    </div> 
   
</template>
<script>
    // import beltbodyRow from "@/views/transportation/subSystem/beltbody/beltbodyRow.vue";
    import analysisDia from "./analysisDia.vue";
    import direction from '@/components/transportation/coalCentral/belt_body/direction.vue'
    import pull_status from '@/components/transportation/coalCentral/belt_body/pull_status.vue'
    import pulling_speed from '@/components/transportation/coalCentral/belt_body/pulling_speed.vue'
    import speed_status from '@/components/transportation/coalCentral/belt_body/speed_status.vue'
    export default {
        name: "coalcutter",
        data() {
            return {
                property: "牵引方向",
                health: '健康',
                danger: '较低',
                normal_time: '9天',
                total_time: '20s',
                currentPage4: 4,
                dataRange: '',
                dataRangeItems: [{
                    value: '选项1',
                    label: '10分钟'
                }, {
                    value: '选项2',
                    label: '1小时'
                }, {
                    value: '选项3',
                    label: '6小时'
                }, {
                    value: '选项4',
                    label: '近1天'
                }],
                moreVisible: false
            }
        },
        components: {
            direction,
            pull_status,
            pulling_speed,
            speed_status,
            analysisDia,
            beltbodyRow

        },
        methods: {
            // 监听 pagesize 改变的事件
            handleSizeChange(newSize) {
                console.log(newSize)
            },
            //监听 页码值 改变的事件
            handleCurrentChange(newPage) {
                console.log(newPage)
            },
            // 打开详细数据页面
            openDetail() {
                this.$router.push({
                    path: '/detail'
                })
            },
            dataAnalysis() {
                this.moreVisible = true;
                this.$nextTick(() => {
                    this.$refs.moreDialog.init();
                });
            },
            // 超出阈值
            beyondthreshold() {
                this.$router.push({
                    path: '/threshold'
                })
            }
        }
    }
</script>
<style scoped>
    .divi {
        display: block;
        height: 1px;
        width: 100%;
        margin: 6px 0;
        background-color: #dcdfe6;
        position: relative;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    .block {
        height: 140px;
        /* background-color: burlywood */
    }
    
    .el-button {
        margin: 3px;
        margin-left: 25px;
        width: 120px;
    }
    
    .text {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bolder;
        margin-left: 50px;
    }
    
    .threshold {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left: 520px;
        color: red;
        cursor: pointer;
    }
    
    .info {
        font-size: 13px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    .el-card {
        background: #ffffff;
        border-radius: 8px;
        width: 180px;
        height: 120px;
        margin-top: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
</style>