<template>
<div id="log">
    <ul>
        <li >
            <span id="r_title">日志:</span>
        </li>

        <li>
            <span id="l_one">{{one}}</span>
            <!-- <textarea name="myLog" id="log" cols="30" rows="10"></textarea> -->
        </li>

    </ul>
</div>
</template>

<script>
export default {
  data(){
    return {
            one:'进入设备     ',
            allData:null,    // 服务器返回的数据
 
            currentPage: 1,  //当前显示的页数， 当修改页数时， 数据动态刷新

            totalPage: 0,    //一共多少也
            timerId:null,      //定时器
   }
  },

  mounted() {
    this.getData()
    // window.addEventListener('resize', this.screenAdapter)
    // 在页面加载完成的时候, 主动进行屏幕的适配
    // this.screenAdapter()
  },
  destroyed(){
    clearInterval(this.timerId)
   // 在组件销毁的时候, 需要将监听器取消掉
    // window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    async getData(){
        // 请求数据 allData
        // const { data: ret } = await this.$http.get('hbase/getJSON')
        const { data:ret  } = await this.$http.get('engine/start/?mode=all')
        this.allData = ret
        // this.allData = ["连接断开","连接成功"]
        // 每1个元素显示一页
        // this.totalPage = this.allData.length % 1 ===0 ? this.allData.length /1 : this.allData.length / 1 +1 

        // 获取完数据， 更新图标
        this.updateData()

        // 启动定时器， 每隔三秒改变currentPage, 进而更新图表
        this.startInterval()
    },
    updateData() {

        // const start = (this.currentPage - 1) * 1
        // const end = this.currentPage * 1
        // const showData = this.allData.slice(start, end) 
        for(var i = 0; i<=this.allData.length-1; i++){
            this.one = this.allData[i] + this.one
        }   

        // this.one.join("\n")
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
            // if(this.currentPage > this.totalPage){
            //     this.currentPage = 1
            // }
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
    /* margin-top: 1.25rem; */
    /* margin-right:.75rem; */
    font-size: 1.625rem;
    text-align:center


}
#l_one{
    width: 12.5rem;
    height: 15rem;
    background-color: #161522;
    /* margin: 0 .325rem .25rem;  */
    text-align: center;
}

#r_title{
    width: 8.75rem;
    height: 1.875rem;
    background-color: rgb(30, 3, 66);
    color: pink;
    text-align: center;
}
</style>