<template>
<div id="three" :style="{width: '100%', height: '100%'}"></div>
</template>
 
<script type="text/ecmascript-6">
    export default {
    data(){
      return {
            chartInstance: null,
           
            allData:null,    // 服务器返回的数据
 
            currentPage: 1,  //当前显示的页数， 当修改页数时， 数据动态刷新

            totalPage: 0,    //一共多少也
            timerId:null      //定时器
      }
    }, 
    mounted(){
        this.initChart() //函数调用
        this.getData()
    //  对窗口大小变化的事件进行监听
        // window.addEventListener('resize', this.screenAdapter)
    },
        // Vue生命周期 - 销毁时
    destroyed () {
        clearInterval(this.timerId)
        // 在组件销毁的时候, 需要将监听器取消掉
        // window.removeEventListener('resize', this.screenAdapter)


    },
    methods:{
        initChart(){
            this.chartInstance = this.$echarts.init(document.getElementById('three'))
             //对图表对象进行鼠标事件监听
            this.chartInstance.on('mousecver', () =>{
                this.clearInterval(this.timerId)
            })
            this.chartInstance.on('mouseout', () => {
                this.startInterval()
            })
        },

        async getData () {
            // 请求数据
            const { data: ret } = await this.$http.get('hbase/getJSON')
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
            // 每一页显示1个数据， 获取1个数据
            const start = (this.currentPage - 1) * 1
            const end = this.currentPage * 1
            const showData = this.allData.slice(start, end)
            // const showValue = this.showData.map((item) =>{
            //     return item
            // })
            const showValue = showData[0].jiegaodianliu
            const option = {
                tooltip : {
                formatter: "{a} <br/>{c} {b}"
                },
                toolbox: {
                    show: true,
                    feature: {
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series : [
                {
                    name: '截高电流:',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 1200,
                    splitNumber: 10,
                    radius: '100%',
                    axisLine: {
                        lineStyle: {
                            width: 10,
                            color: [[0.1, 'green'], [0.2, 'yellow'],[0.3, 'orange'],[0.4,'#db555e'],[0.5,'#ba3779'],[1.1,'#881326'] ]
                        }
                    },
                    axisTick: {
                        length: 15,
                        lineStyle: {
                            color: 'auto'
                        }
                    },
                    //刻度分割线样式
                    splitLine: {
                        length: 10,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    //刻度数字样式
                    axisLabel: {
                        fontWeight:'bold',
                        color: '#0085FF',
                        fontSize:15     
                    },
                    detail : {
                        //说明数字大小
                        formatter: function (value) {
                            return value;
                        },
                        offsetCenter:['0%','80%'],
                        fontWeight: 'bolder',
                        borderRadius: 3,
                        backgroundColor: '#0085FF',
                        fontSize:30,
                        width: 100,
                        color: 'white',
                        padding:[5,15,2,15]
                    },
                    data:[{
                        value:showValue
                    }]
                },
            ]
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