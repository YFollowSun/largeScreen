<template>
  <div id="rulerChart" style="width: 100%;height: 100%;"></div>
</template>

<script>
    var TP_value = 20.3;
    var kd = [];
    var kd2 = []
    var Gradient = [];
    var leftColor = '';
    var showValue = '';
    var boxPosition = [65, 0];
    var TP_txt = ''
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    for (let i = 0, len = 60; i <= len; i += 1) {
        if (i < 10) {
            kd.push('');
        } else if ((i - 10) % 10 === 0) {
            kd.push('-3');
        } else {
            kd.push('-1');
        }
    }

        for (let i = 0, len = 60; i <= len; i += 1) {
        if (i < 10) {
            kd2.push('');
        } else if ((i - 10) % 10 === 0) {
            kd2.push('3');
        } else {
            kd2.push('1');
        }
    }
    //    leftColor = Gradient[Gradient.length - 1].color;
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
        // window.addEventListener('resize', this.screenAdapter)


    },
    destroyed () {
      clearInterval(this.timerId)
        // 在组件销毁的时候, 需要将监听器取消掉
        // window.removeEventListener('resize', this.screenAdapter)


    },
    methods: {
        //初始化echarts实例对象


        initChart () {
            this.chartInstance = this.$echarts.init(document.getElementById('rulerChart'))
    
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
            const { data1:ret1  } = await this.$http.get('engine/start/?mode=mode1')
            this.allData = ret
            // 对数据排序
            this.allData.sort((a,b) => {{
                return a.value-b.value //从小到大排序
            }})
            // 每1个元素显示一页
            this.totalPage = this.allData.length % 1 ===0 ? this.allData.length /1 : this.allData.length / 1 +1 

            // 获取完数据， 更新图标
            this.updateChart()

            // 启动定时器， 每隔三秒改变currentPage, 进而更新图表
            this.startInterval()

        },
        updateChart(){
            // 每一页显示1个数据， 获取5个数据
            const start = (this.currentPage - 1) * 1
            const end = this.currentPage * 1
            const showData = this.allData.slice(start, end)    
            const showValue = showData[0].xingzouzhuangtai
 
            const colors = ['#5470c6','#91cc75'] 
            const option = {
                grid:{
                    right:'30%',
                    left :'20%',
                    bottom:'5%'
                },
                title: {
                    text: '行走状态',
                    color:'pink',
                    show: true
                },
                yAxis: [{
                    type:'value',
                    name:'left',
                    show: true,
                    // data: [],
                    min: -100,
                    max: 100,
                    splitNumber:20,     //坐标轴分段个数

                    nameTextStyle:{
                        borderWidth:50
                    },
                    nameLocation:'end',
                    axisLine: {
                        show: true,
                        lineStyle:{
                            color:colors[0],
                            width:5     //刻度线宽度
                        }
                    }
                }, {
                    type:'value',
                    name:'right',
                    show: true,
                    // data: [],
                    min: -100,
                    max: 100,
                    splitNumber:20,     //坐标轴分段个数
                    nameLocation:'end',
                    axisLine: {
                        show: true,
                        lineStyle:{
                            color:colors[1],
                            width:5     //刻度线宽度
                        }
                    }
                }],
                xAxis: [{
                    type:'category',
                    show:false,

                }],
                   
                series: [{
                    name: 'left',
                    type: 'scatter',
                    // 对应上面XAxis的第一个对象配置
                    yAxisIndex :0,
                    // data: arrayData[1],
                    data:[{
                        value:showValue
                    }],
                    // z: 2
                    },
                    
                ]}
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


<style>

</style>