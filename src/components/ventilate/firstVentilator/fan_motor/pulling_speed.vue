<!--  风机电机 悬浮弹出 牵引速度 折线图 -->
<template>
    <div class="com-chart" ref="pulling_speed"></div>
</template>
<script>
    export default {
        name: "pulling_speed",
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
                this.myChart = this.$echarts.init(this.$refs.pulling_speed)

            },
            // 更新图表
            updateChart() {
                const option = {
                    title: {
                        text: '牵引速度',
                        left: '5%',
                        textStyle: {
                            fontSize: 12,
                            fontWeight: 'bold'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        // axisPointer: {
                        //     type: 'cross',
                        //     label: {
                        //         backgroundColor: '#6a7985'
                        //     }
                        // }
                    },
                    legend: {
                        data: ['单位：m/s']
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
                        data: ['16：19', '16：21', '16：23', '16：25', '16：27'],
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
                            name: 'm/s',
                            nameLocation: "start",
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
                        }

                    ],
                    series: [{
                        name: '牵引速度',
                        type: 'line',
                        smooth: true,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#00aaff",
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
                            color: "#00e100",
                            borderColor: "rgba(0, 170, 255, 0.1)",
                            borderWidth: 6
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [22, 20, 10, 30, 27, 42, 30, 29]
                    }, {
                        name: '阈值',
                        type: 'line',
                        smooth: true,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#ff0000",
                            width: "2"
                        },
                        symbol: "none",
                        // emphasis: {
                        //     focus: 'series'
                        // },
                        data: [40, 40, 40, 40, 40, 40, 40, 40]
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