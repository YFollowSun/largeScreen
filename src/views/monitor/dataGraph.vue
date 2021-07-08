<template>
  <div class="com-chart" ref="dataGraph"></div>
</template>

<script>
    export default {
        name: "dataGraph",
        props: [
            'data_unit',
            'Y_scale',
            'X_data',
            'Y_data',
            'time_BT',
            'threshold',
        ],
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
                this.myChart = this.$echarts.init(this.$refs.dataGraph)
            },
            // 更新图表
            updateChart() {
                const option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        data: [this.data_unit]
                    },
                    grid: {
                        top: '15%',
                        left: '1%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        // data: ['16:20', '16:21', '16:22', '16:23', '16:24', '16:25', '16:26', '16:27'],
                        data: this.X_data,
                        // 修改x轴文字颜色和大小
                        axisLabel: {
                            textStyle: {
                                color: "rgba(187, 174, 200, 1)",
                                fontSize: "12"
                            }
                        },
                        // 修改分割线的颜色
                        splitLine: {
                            lineStyle: {
                                color: "rgba(199, 186, 212, 0.3)",
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        // axisTick: { show: false },
                        axisLine: {
                            // 修改Y轴坐标轴颜色
                            lineStyle: {
                                color: "rgba(187, 174, 200, 1)",
                            }
                        },
                        axisLabel: {
                            //修改y轴数据颜色
                            textStyle: {
                                color: "rgba(187, 174, 200, 1)",
                                fontSize: 12
                            }
                        },
                        // 修改分割线的颜色
                        splitLine: {
                            lineStyle: {
                                color: "rgba(199, 186, 212, 0.3)",
                            }
                        }
                    }],
                    series: [{
                        // name: '采煤机平均采煤量',
                        type: 'line',
                        smooth: true,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#0097e3",
                            width: "2"
                        },
                        // 设置拐点
                        symbol: "circle",
                        // 拐点大小
                        symbolSize: 3,
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: "#0184d5",
                            borderColor: "rgba(0, 170, 255, 0.1)",
                            borderWidth: 6
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        //data: [0.44, 0.40, 0.23, 0.60, 0.50, 0.53, 0.83, 0.5]
                        data: this.Y_data
                    }, {
                        name: '阈值',
                        type: 'line',
                        smooth: true,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#c1bed1",
                            width: "2"
                        },
                        symbol: "none",
                        // emphasis: {
                        //     focus: 'series'
                        // },
                        //data: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
                        data: [this.threshold, this.threshold, this.threshold, this.threshold, this.threshold, this.threshold,
                            this.threshold, this.threshold
                        ]
                    }]
                };
                this.myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>
    .com-chart {
        height: 145px;
    }
</style>