<template>
<div id="lmid">
    <ul>
        <li >
            <span id="l_title">压入式风机</span>
        </li>

        <li>
            风  量 :<span id="l_one">{{one}}</span> m^3/min 
        </li>


        <li>
            风  压 :<span id="l_two">{{two}}</span> m^3/min
        </li>
    </ul>
</div>
</template>

<script>
export default {
  data(){
    return {
            one:'',
            two:'',
            allData:null,    // 服务器返回的数据
 
            currentPage: 1,  //当前显示的页数， 当修改页数时， 数据动态刷新

            totalPage: 0,    //一共多少也
            timerId:null,      //定时器
   }
  },

  mounted() {
    this.getData()

  },
  destroyed(){
    clearInterval(this.timerId)
  },
  methods: {
    async getData(){
        // 请求数据 allData
        const { data: ret } = await this.$http.get('hbase/getJSON')
        this.allData = ret
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
        this.one = showData[0].yarushifengjifengliang
        this.two = showData[0].yarushifengjifengya

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
    margin-top: 3rem;
    margin-right:.75rem;
    font-size: 1.625rem;
    text-align:center


}
#l_one{
    width: 5rem;
    height: 2rem;
    background-color: rgb(133, 158, 231);
    margin: 0 .325rem .25rem; 
    text-align: center;
}
#l_two{
    width: 5rem;
    height: 2rem;
    background-color: rgb(133, 158, 231);
    margin: 0 .325rem .25rem; 
    text-align: center;
}
#l_title{
    width: 8.75rem;
    height: 1.875rem;
    background-color: rgb(30, 3, 66);
    color: pink;
    text-align: center;
}
</style>