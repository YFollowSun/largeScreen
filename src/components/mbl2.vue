<template>
<div id="mbl2">
    <ul>
        <li>
            油泵 :<span>{{showValue}}</span>
            <!-- 油泵<span>{{showValue}}</span> -->
            截低 :<span>{{showValue}}</span>
            截高 :<span>{{showValue}}</span>
        </li>
        <li>
            二运 :<span>{{showValue}}</span>
            风机 :<span>{{showValue}}</span>
            水泵 :<span>{{showValue}}</span>
        </li>
        <li>
            电铃 :<span>{{showValue}}</span>
            左轮 :<span>{{showValue}}</span>
            右轮 :<span>{{showValue}}</span>
        </li>
        <li>
            一运 :<span>{{showValue}}</span>
            隔离 :<span>{{showValue}}</span>
            铲板 :<span>{{showValue}}</span>
        </li>
        <li>
            后支 :<span>{{showValue}}</span>
            润滑 :<span>{{showValue}}</span>
            伸缩 :<span>{{showValue}}</span>
        </li>
        
    </ul>
</div>
</template>

<script>
export default {
  data(){
    return {
            showValue:'停止',
            allData:null,    // 服务器返回的数据
 
            currentPage: 1,  //当前显示的页数， 当修改页数时， 数据动态刷新

            totalPage: 0,    //一共多少也
            timerId:null,      //定时器
   }
  },

  mounted() {
    this.getData()
    //  对窗口大小变化的事件进行监听
        // window.addEventListener('resize', this.screenAdapter)
  },
  destroyed(){
    clearInterval(this.timerId)
        // 在组件销毁的时候, 需要将监听器取消掉
        // window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    getData(){
        // 请求数据 allData
        this.allData = ['停止','正常']
        // 对数据排序
        this.allData.sort((a,b) => {{
            return a.value-b.value //从小到大排序
        }})
        // 每1个元素显示一页
        this.totalPage = this.allData.length % 1 ===0 ? this.allData.length /1 : this.allData.length / 1 +1 

        // 获取完数据， 更新图标
        this.updateData()

        // 启动定时器， 每隔三秒改变currentPage, 进而更新图表
        this.startInterval()
    },
    updateData() {

        const start = (this.currentPage - 1) * 1
        const end = this.currentPage * 1
        const showData = this.allData.slice(start, end)    
        this.showValue = showData[0]
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
            this.updateData()
        },3000)
    }
  }
}
</script>

<style scoped>
ul{
    width: 100%;
    height: 100%;
}
li{
    width: 100%;
    height: 100%;
    color: royalblue;
    display: flex;
    font-size: 1rem;
    text-align: center;
}
span{
    width: 2.5rem;
    height: 2.25rem;
    background-color: rgb(133, 158, 231);
    margin: 0 .325rem .25rem; 
    
}
</style>