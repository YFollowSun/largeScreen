<template>
<div id="rtone">
    <ul>
        <li>
            累计完成进尺 :<span>{{one}}</span>m
        </li>
        <li>
            月 完 成 进尺 :<span>{{two}}</span> m
        </li>
        <li>
            日 平 均 进尺 :<span>{{three}}</span> m 
        </li>
        <li>
            班 最 高 进尺 :<span>{{four}}</span> m  
        </li>
        <li>
            日 最 高 进尺 :<span>{{five}}</span> m
        </li>
        <li>
            当 前___人  员 :<span id="six">{{six}}</span>
        </li>
        
    </ul>
</div>
</template>

<script>
export default {
  data(){
    return {
            // showValue:'',
            one:'',
            two:'',
            three:'',
            four:'',
            five:'',
            six:'',
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
    async getData(){
        // 请求数据 allData
        const { data: ret } = await this.$http.get('hbase/getJSON')
        this.allData = ret
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
        this.one = showData[0].leijiwanchengjinchi
        this.two = showData[0].benyuewanchengjinchi
        this.three = showData[0].ripingjunjinchi
        this.four = showData[0].banzuigaojinchi
        this.five = showData[0].rizuigaojinchi
        this.six = showData[0].dangqianrenyuan
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
li{
    width: 100%;
    height: 100%;
    color: royalblue;
    display: flex;
    /* flex-direction: column; */
    font-size: 1.25rem;
    position: relative;
}
span{
    width: 7.5rem;
    height: 1.625rem;
    background-color: rgb(133, 158, 231);
    margin: 0 .325rem .25rem; 
    text-align: center;
}
</style>