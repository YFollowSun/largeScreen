<!--  主通风系统 风速 折线图 -->
<template>
    <div class="com-chart" ref="wind_speed"></div>
</template>
<script>
    export default {
        name: "wind_speed",
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
                this.myChart = this.$echarts.init(this.$refs.wind_speed)

            },
            // 更新图表
            updateChart() {
                const option = {
                    title: [{
                        text: '风速',
                        left: '5%',
                        textStyle: {
                            fontSize: 12,
                            fontWeight: 'bold'
                        }
                    }, {
                        text: '平均值：5m/s',
                        right: '5%',
                        textStyle: {
                            fontSize: 12,
                            fontWeight: 'bold'
                        },

                    }],
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
                        data: ['1:00', '2:00', '3:00', '4:00', '5:00'],
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
                        // name: '采煤机平均采煤量',
                        type: 'line',
                        smooth: true,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#00ff00",
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
                        data: [2.5, 2.6, 2.4, 3.5, 2.8, 2.1, 3.1]
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