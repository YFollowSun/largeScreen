<!-- 产量信息 饼状图-->
<template>
    <div class="com-chart" ref="output"></div>
</template>
<script>
    export default {
        name: "output",
        data() {
            return {
                myChart: null

            }
        },
        mounted() {
            this.initCharts();
            this.updateChart();
        },
        methods: {
            // 初始化图表
            initCharts() {
                this.myChart = this.$echarts.init(this.$refs.output)

            },
            // 更新图表
            updateChart() {
                const option = {
                    title: {
                        text: '产量信息',
                        padding: [20, 20, 25, 25],
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 'bold'
                        }
                    },
                    color: ["#0097e3", "#aac1d3"],
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },

                    series: [{
                        name: "产量信息",
                        type: "pie",
                        // 这个radius可以修改饼形图的大小
                        // radius 第一个值是内圆的半径 第二个值是外圆的半径
                        radius: ["40%", "60%"],
                        center: ["60%", "40%"],
                        avoidLabelOverlap: false,
                        // 图形上的文字
                        label: {
                            show: false,
                            position: "center"
                        },
                        // 链接文字和图形的线是否显示
                        labelLine: {
                            show: false
                        },
                        data: [{
                            value: 198,
                            name: "已完成"
                        }, {
                            value: 16,
                            name: "未完成"
                        }]
                    }]
                };
                this.myChart.setOption(option);
            }
        }
    }
</script>
<style scoped>
    .com-chart {
        height: 80px;
    }
</style>