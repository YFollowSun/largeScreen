<template>
<el-row :gutter="20">
    <el-col :span="4">
        <div class="block">
            <span class="text">{{propertyItem}}</span></br>
            <el-select style="width: 120px; margin-left: 25px" v-model="dataRange" placeholder="请选择数据范围">
                <el-option v-for="item in dataRangeItems" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary">数据分析</el-button>
            <el-button type="primary" >详细数据</el-button>
        </div>
    </el-col>
    <el-col :span="14">
        <div class="block">
            <span class="threshold">超出阈值：0.83</span>
            <direction></direction>
        </div>

    </el-col>
    <el-col :span="6">
        <div class="block">
            <el-card>
                <span class="info">设备健康程度:{{healthItem}}</span></br>
                <span class="info">安全隐患程度:{{dangerItem}}</span></br>
                <span class="info">正常运行:{{normal_timeItem}}</span></br>
                <span class="info">数值超标总时长:{{total_timeItem}}</span></br>
           </el-card>
        </div>
    </el-col>
</el-row>
<analysisDia v-if="moreVisible" ref="moreDialog"></analysisDia>
</template>
<script>
    import analysisDia from "./analysisDia.vue";
    import direction from '@/components/transportation/coalCentral/belt_body/direction.vue'
    export default {
        name: "beltbodyRow",
        data() {
            return {
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
                propertyItem: '',
                healthItem: '',
                dangerItem: '',
                normal_timeItem: '',
                total_timeItem: '',
                moreVisible: false
            }
        },
        // 在props中声明一下，代表等会要引用父组件的数据
        props: ['property', 'health', 'danger', 'normal_time', 'total_time'],
        created() {
            // 把父组件的传过来的赋值给子组件
            this.propertyItem = this.property;
            this.healthItem = this.health;
            this.dangerItem = this.danger;
            this.normal_timeItem = this.normal_time;
            this.total_timeItem = this.total_time;
        },
        methods: {

        },
        components: {
            analysisDia,
            direction
        },
    }
</script>