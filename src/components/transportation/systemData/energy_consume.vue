<!-- 主运系统能耗 柱形图-->
<template>
    <div class="com-chart" ref="energy_consume"></div>
</template>
<script>
    export default {
        name: "energy_consume",
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
                this.myChart = this.$echarts.init(this.$refs.energy_consume)

            },
            // 更新图表
            updateChart() {
                const option = {
                    title: {
                        text: '主运系统能耗',
                        textStyle: {
                            fontSize: 12,
                            fontWeight: 'bold'
                        }
                    },
                    color: ["#2f89cf"],
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    // 修改图表的大小
                    grid: {
                        left: "1%",
                        top: "19%",
                        right: "0%",
                        bottom: "4%",
                        containLabel: true
                    },
                    xAxis: [{
                        type: "category",
                        data: [
                            "2.1",
                            "2.2",
                            "2.3",
                            "2.4",
                            "2.5",
                            "2.6",
                            "2.7"
                        ],
                        axisTick: {
                            // 保证刻度线和标签对齐
                            alignWithLabel: true,
                            lineStyle: {
                                color: "#98adbc"
                            }

                        },
                        // 修改刻度标签 相关样式
                        axisLabel: {
                            color: "rgba(187, 174, 200, 1)",
                            fontSize: "12"
                        },
                        // 不显示x坐标轴的样式
                        axisLine: {
                            show: false
                        },
                    }],
                    yAxis: [{
                        type: "value",
                        name: 'kwh',
                        nameLocation: "start",
                        // 修改刻度标签 相关样式
                        axisLabel: {
                            color: "rgba(187, 174, 200, 1)",
                            fontSize: "12"
                        },
                        // y轴的线条改为了 2像素
                        axisLine: {
                            lineStyle: {
                                color: "rgba(187, 174, 200, 1)",
                                width: 2
                            }
                        },
                        // y轴分割线的颜色
                        splitLine: {
                            lineStyle: {
                                color: "rgba(187, 174, 200, 1)",
                            }
                        }
                    }],
                    series: [{
                        name: "主运输系统能耗",
                        type: "bar",
                        barWidth: "35%",
                        data: [850, 270, 460, 760, 490, 600, 490],
                        itemStyle: {
                            // 修改柱子圆角
                            barBorderRadius: 4
                        }
                    }]
                };
                this.myChart.setOption(option);
            }
        }
    }
</script>
<style scoped>
    .com-chart {
        height: 130px;
    }
</style>