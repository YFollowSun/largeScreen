<template>
  <div id="tempChart" style="width: 100%;height: 90%;"></div>
</template>

<script>
    var TP_value = 20.3;
    var kd = [];
    var Gradient = [];
    var leftColor = '';
    var showValue = '';
    var boxPosition = [65, 0];
    var TP_txt = ''
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    for (let i = 0, len = 80; i <= len; i += 1) {
        if (i < 10) {
            kd.push('');
        } else if ((i - 10) % 10 === 0) {
            kd.push('-3');
        } else {
            kd.push('-1');
        }
    }
    //中间线的渐变色和文本内容
    if(TP_value > 24) {
        TP_txt = '温度偏高';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
            offset: 0.5,
            color: '#E4D225'
        }, {
            offset: 1,
            color: '#E01F28'
        })
    } else if(TP_value >= 14) {
        TP_txt = '温度正常';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
            offset: 1,
            color: '#E4D225'
        })
    } else {
        TP_txt = '温度偏低';
        Gradient.push({
            offset: 1,
            color: '#93FE94'
        })
    }
    if(TP_value > 80) {
        showValue = 80
    } else {
        if(TP_value < 0) {
            showValue = 0
        } else {
            showValue = TP_value + 10
        }
    }
    if(TP_value < 0) {
        boxPosition = [65, -120];
    }
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10

export default {
    data () {
        return {
            chartInstance: null,
           
            allData:null,    // 服务器返回的数据
 
            currentPage: 1,  //当前显示的页数， 当修改页数时， 数据动态刷新

            totalPage: 0,    //一共多少也
            timerId:null      //定时器
        }
    },
    mounted () {
        this.initChart()

        this.getData()
    //  对窗口大小变化的事件进行监听
        window.addEventListener('resize', this.screenAdapter)


    },
    destroyed () {
      clearInterval(this.timerId)
        // 在组件销毁的时候, 需要将监听器取消掉
        window.removeEventListener('resize', this.screenAdapter)


    },
    methods: {
        //初始化echarts实例对象


        initChart () {
            this.chartInstance = this.$echarts.init(document.getElementById('tempChart'))
    
             //对图表对象进行鼠标事件监听
            this.chartInstance.on('mousecver', () =>{
                this.clearInterval(this.timerId)
            })
            this.chartInstance.on('mouseout', () => {
                this.startInterval()
            })
        },

        async getData() {
            // 请求数据 allData
            const { data: ret } = await this.$http.get('hbase/getJSON')
            this.allData = ret
            // 对数据排序
            this.allData.sort((a,b) => {{
                return a.value-b.value //从小到大排序
            }})
            // 每5个元素显示一页
            this.totalPage = this.allData.length % 1 ===0 ? this.allData.length /1 : this.allData.length / 1 +1 

            // 获取完数据， 更新图标
            this.updateChart()

            // 启动定时器， 每隔三秒改变currentPage, 进而更新图表
            this.startInterval()

        },
        updateChart(){
            // 每一页显示1个数据， 获取1个数据
            const start = (this.currentPage - 1) * 1
            const end = this.currentPage * 1
            const showData = this.allData.slice(start, end)    
            const showValue = showData[0].wendu-10
            // const arrayData = this.showData.map((item) =>{
            //     return item.value
            // }) 
            // showValue = arrayData
            const option = {
                grid:{
                    x: 60,   //左侧与y轴的距离
                    y: -50,   //top部与x轴的距离
                    x2: -120,   //右侧与y轴的距离
                    y2: 20    //bottom部与x轴的距离
                },
                // backgroundColor: '#0C2F6F',
                title: {
                    text: '油缸温度',
                    show: true,
                    textStyle:{
                        color :'pink'
                    }
                },
                yAxis: [{
                    show: false,
                    data: [],
                    min: 0,
                    max: 120,
                    axisLine: {
                        show: false
                    }
                }, {
                    show: false,
                    min: 0,
                    max: 90,
                }],
                xAxis: [{
                    show: false,
                    min: -10,
                    max: 80,
                    data: []
                }, {
                    show: false,
                    min: -10,
                    max: 80,
                    data: []
                }, {
                    show: false,
                    min: -10,
                    max: 80,
                    data: []
                }, {
                    show: false,
                    min: -5,
                    max: 80,

                }],
                series: [{
                    name: '条',
                    type: 'bar',
                    // 对应上面XAxis的第一个对象配置
                    xAxisIndex: 0,
                    // data: arrayData[1],
                    data:[{
                        value:showValue
                    }],
                    barWidth: 8,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                        }
                    },
                    z: 2
                    }, {
                        name: '白框',
                        type: 'bar',
                        xAxisIndex: 1,
                        barGap: '-100%',
                        data: [80],
                        barWidth: 14,
                        itemStyle: {
                            normal: {
                                color: '#0C2E6D',
                                barBorderRadius: 50,
                            }
                        },
                        z: 1
                    }, {
                        name: '外框',
                        type: 'bar',
                        xAxisIndex: 2,
                        barGap: '-100%',
                        data: [81],
                        barWidth: 24,
                        itemStyle: {
                            normal: {
                                color: '#4577BA',
                                barBorderRadius: 50,
                            }
                        },
                        z: 0
                    }, {
                        name: '圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 0,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                color: '#93FE94',
                                opacity: 1,
                            }
                        },
                        series:{
                            data:[{
                                value:showValue
                            }]
                        },
                        z: 2
                    }, {
                        name: '白圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 1,
                        symbolSize: 24,
                        itemStyle: {
                            normal: {
                                color: '#0C2E6D',
                                opacity: 1,
                            }
                        },
                        
                        z: 1
                    }, {
                        name: '外圆',
                        type: 'scatter',
                        hoverAnimation: false,
                        data: [0],
                        xAxisIndex: 2,
                        symbolSize: 30,
                        itemStyle: {
                            normal: {
                                color: '#4577BA',
                                opacity: 1,
                            }
                        },
                        z: 0
                    }, {
                        name: '刻度',
                        type: 'bar',
                        yAxisIndex: 0,
                        xAxisIndex: 3,
                        label: {
                            normal: {
                                show: true,
                                position: 'left',
                                distance: 10,
                                color: 'white',
                                fontSize: 14,
                                formatter: function(params) {
                                    if (params.dataIndex > 80 || params.dataIndex < 10) {
                                        return '';
                                    } else {
                                        if ((params.dataIndex - 10) % 10 === 0) {
                                            return params.dataIndex - 10;
                                        } else {
                                            return '';
                                        }
                                    }
                                }
                            }
                        },
                        barGap: '-100%',
                        data: kd,
                        barWidth: 1,
                        itemStyle: {
                            normal: {
                                color: 'white',
                                barBorderRadius: 120,
                            }
                        },
                        z: 0
        }]
            }
            this.chartInstance.setOption(option)
        },
        startInterval () {
            // 每个3秒执行一次
            setInterval(() => { 
                // 保险操作
                if(this.timeId){
                    clearInterval(this.timerId)
                }
                 this.currentPage++
                //  当页数超过总页数是， 从头开始
                 if(this.currentPage > this.totalPage){
                     this.currentPage = 1
                 }
                 this.updateChart()
            },3000)
        }


    }
}
</script>

<style scoped>

</style>