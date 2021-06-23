<template>
    <!-- 查看数据质量信息 -->
    <el-dialog title="查看详细信息" :visible.sync="visible" width="65%" >
    <!-- <div class="detail">
        <div class="item">
            <span class="info">测点名: {{checkForm.pointname}}</span></br>
            <span class="info">测量数值: {{checkForm.num}}</span></br>
            <span class="info">设备名: {{checkForm.deviceName}}</span></br>
            <span class="info">设备描述: {{checkForm.describe}}</span></br>
            <span class="info">所属设备: {{checkForm.device}}</span></br>
            <span class="info">预警阈值: {{checkForm.threshold}}</span></br>
            <span class="info">数据类型: {{checkForm.dataType}}</span></br>
            <span class="info">工程单位: {{checkForm.unit}}</span></br>
            <span class="info">采集频率: {{checkForm.frequency}}</span></br>
            <span class="info">备注: {{checkForm.remark}}</span></br>
            <span class="info">数据质量: {{checkForm.dataQuality}}</span>
        </div>
        <div class="item ">2</div>
        <div class="item ">3</div>
        <div class="item ">4</div>
    </div> -->
 
    <el-row style="background: #eeeeee" type="flex" justify="center">
        <el-col >
            <el-card class="box-card" shadow="never">
                
                <span class="info">测点名: </span>{{checkForm.pointname}}</br>
                <span class="info">测量数值:</span>{{checkForm.num}}</br>
                <span class="info">设备名: </span>{{checkForm.deviceName}}</br>
                <span class="info">设备描述: </span>{{checkForm.describe}}</br>
                <span class="info">所属设备: </span>{{checkForm.device}}</br>
                <span class="info">预警阈值: </span>{{checkForm.threshold}}</br>
                <span class="info">数据类型: </span>{{checkForm.dataType}}</br>
                <span class="info">工程单位: </span>{{checkForm.unit}}</br>
                <span class="info">采集频率: </span>{{checkForm.frequency}}</br>
                <span class="info">备注: </span>{{checkForm.remark}}</br>
                <span class="info">数据质量: </span>{{checkForm.dataQuality}}
            </el-card>

            
        </el-col>
    </el-row>

         <!-- <el-form :inline="true" ref="modifyForm" :model="checkForm">
                
                <el-form-item label="测点名" prop="pointname">
                    <el-input style="width: 258px;" v-model="checkForm.pointname" disabled></el-input>
                </el-form-item>
                <el-form-item label="测量数值" prop="num">
                    <el-input style="width: 258px;" v-model="checkForm.num" disabled></el-input>
                </el-form-item>
                <el-form-item label="设备名" prop="deviceName">
                    <el-input style="width: 258px;" v-model="checkForm.deviceName" disabled></el-input>
                </el-form-item>
                <el-form-item label="设备描述" prop="describe">
                    <el-input style="width: 258px;" v-model="checkForm.describe" disabled></el-input>
                </el-form-item>
                <el-form-item label="所属设备" prop="device">
                    <el-input style="width: 258px;" v-model="checkForm.device" disabled></el-input>
                </el-form-item>
                <el-form-item label="预警阈值" prop="threshold">
                    <el-input style="width: 258px;" v-model="checkForm.threshold" disabled></el-input>
                </el-form-item>
                <el-form-item label="数据类型" prop="dataType">
                    <el-input style="width: 258px;" v-model="checkForm.dataType" disabled></el-input>
                </el-form-item>
                <el-form-item label="工程单位" prop="unit">
                    <el-input style="width: 258px;" v-model="checkForm.unit" disabled></el-input>
                </el-form-item>
                <el-form-item label="采集频率" prop="frequency">
                    <el-input style="width: 258px;" v-model="checkForm.frequency" disabled></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input style="width: 258px;" v-model="checkForm.remark" disabled></el-input>
                </el-form-item>
                <el-form-item label="数据质量" prop="dataQuality">
                    <el-input style="width: 258px;" v-model="checkForm.dataQuality" disabled></el-input>
                </el-form-item>
            </el-form> -->
    
</el-dialog>
</template>

<script>
    export default {
        name: "checkSystem",
        data() {
            return {
                visible: false,
                checkForm: {
                    pointname: '皮带张力',
                    num: '0.52',
                    deviceName: '皮带本体',
                    describe: '全长5260m，带宽1.6m，带速4m/s，带强3150N/mm，运输能力3500t/h。',
                    device: '电机本体',
                    threshold: '0.8kN',
                    dataType: '浮点',
                    unit: 'kN',
                    frequency: '1s',
                    remark: '无',
                    dataQuality: '高'
                }
            }
        },
        methods: {
            init() {
                this.visible = true;
                // this.checkForm.pointname = id.pointname;
                // this.checkForm.num = id.num;
                // this.checkForm.deviceName = id.deviceName;
                // this.checkForm.describe = id.describe;
                // this.checkForm.device = id.device;
                // this.checkForm.threshold = id.threshold;
                // this.checkForm.dataType = id.dataType;
                // this.checkForm.unit = id.unit;
                // this.checkForm.frequency = id.frequency;
                // this.checkForm.remark = id.remark;
                // this.checkForm.dataQuality = id.dataQuality;
            }
        }
    }
</script>

<style scoped>
    .el-card {
        background: #fbfbfb;
        width: 400px;
        /* 一行一行显示 */
        display: inline-block;
        margin: 5px;
        border-radius: 20px;
    }
    /* .detail {
        display: grid;
        height: 620px;
        width: 300px;
        grid-template-columns: 425px 425px;
        grid-template-rows: 310px 310px;
        
    } */
    
    .item {
        font-size: 20px;
        text-align: center;
        text-justify: center;
    }
    
    .info {
        width: 415px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 14px;
        /* text-align: left; */
        /* float: left; */
        margin-left: 5px;
        color: cornflowerblue;
    }
</style>