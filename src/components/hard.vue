<template>
<div id="hard" :style="{width: '100%', height: '100%'}"></div>
</template>
 
<script >
    var showValue = new Array()
const colors = ['#5470C6', '#91CC75', '#EE6666'];
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
            this.chartInstance = this.$echarts.init(document.getElementById('hard'))
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
            const { data1:ret1  } = await this.$http.get('engine/start/?mode=mode3')
            this.allData = ret
          // 对数据排序
            this.allData.sort((a,b) => {{
                return a.value-b.value //从小到大排序
            }})
            // 每1个元素显示一页
            this.totalPage = this.allData.length % 1 ===0 ? this.allData.length /1 : this.allData.length / 1 +1 

            // 获取完数据， 更新图标
            this.updateChart()

            // // 启动定时器， 每隔三秒改变currentPage, 进而更新图表
            this.startInterval()

        },
        updateChart(){
            // 每一页显示1个数据， 获取1个数据
            const start = (this.currentPage - 1) * 1
            const end = this.currentPage * 1
            const showData = this.allData.slice(start, end)    
            const tempDate = showData[0].gejieguiji
            showValue.push(tempDate)
            if(showValue.length>=12){
                for(let i=1; i<=showValue.length; i++){
                    showValue.pop()
                }
            }
            // const testData = [7,-6,7,6,7,-6,7,6,7,-6,7,6]
           var option = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross'
                }
            },
            grid: {
                right: '10%',
                show:'false'
                // color:'red'
            },

            xAxis: [
                {
                    // offset:0,
                    type: 'category',
                    axisLine:{
                    show:true
                    },
                        axisLabel:{
                    show:false
                    },
                    axisTick:{
                    show:false
                    },
                    // prettier-ignore
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                // {
                // offset: -100,
                // axisLine:{
                //     show:true,
                //     lineStyle:{
                //     color:'red',
                //     type:'dashed'
                //     }
                // },
                // },
                // {
                // offset: -80,
                // axisLine:{
                //     show:true,
                //     lineStyle:{
                //     color:'red',
                //     type:'dashed'
                //     }
                // }
                // }
                
            ],
            yAxis: [
                {
                type: 'value',
                min: -10,
                max: 10,
                position: 'right',
                offset:0,
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'blue',
                    }
                },
                    axisLabel:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                },
            
                {
                type: 'value',
                min: -10,
                max: 10,
                position: 'left',
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'blue',
                    }
                },
                    axisLabel:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                },
                    {
                type: 'value',
                name: '1',
                min: 0,
                max: 25,
                offset:-200,
                position: 'left',
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'blue',
                    }
                },
                    axisLabel:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                },
                    {
                type: 'value',
                name: '2',
                min: 0,
                max: 25,
                offset:-200,
                position: 'right',
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'blue',
                    }
                },
                    axisLabel:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                }
            ],
            series: [
                {
                type: 'line',
                data: showValue,
                symbol: 'triangle',
                symbolSize: 20,
                lineStyle: {
                    color: '#5470C6',
                    width: 4,
                    type: 'dashed'
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: '#EE6666',
                    color: 'yellow'
                },
                areaStyle:{}
                }
            ]
            };
        this.chartInstance.setOption(option)

            // 启动定时器， 每隔三秒改变currentPage, 进而更新图表
            // this.startInterval()
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
                 //this.getData（）
                 this.updateChart()
            },3000)
        }
  }
}
</script>
 
<style scoped>
 
</style>