<template>
<div id="rtop">
    <ul>
        <li>
            瓦斯涌出量:<span>{{one}}</span>m^3/min
            <span style="width:30px; height:30px; border:1px solid red; border-radius:50%; " v-bind:class="{red1:danger1, green1:save1}"></span>
        </li>
        <li>
            粉 尘 浓 度 :<span>{{two}}</span>g/m^3
            <span style="width:30px; height:30px; border:1px solid red; border-radius:50%; " v-bind:class="{red1:danger2, green1:save2}"></span>
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
            danger1:"",
            danger2:"",
            save1:"",
            save2:"",

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
        const { data1:ret1  } = await this.$http.get('engine/start/?mode=mode4')
        this.allData = ret
        // 每1个元素显示一页
        this.totalPage = this.allData.length % 1 ===0 ? this.allData.length /1 : this.allData.length / 1 +1 

        // 获取完数据， 更新图标
        this.updateData()

        // 启动定时器， 每隔三秒改变currentPage, 进而更新图表
        this.startInterval()
    },
    updateData() {
        this.danger1 = ""
        this.danger2 = ""
        this.save1 = ""
        this.save2 = ""
        const start = (this.currentPage - 1) * 1
        const end = this.currentPage * 1
        const showData = this.allData.slice(start, end)    
        this.one = showData[0].wasiyongchuliang
        this.two = showData[0].fenchennongdu
        if(this.one>3){
            this.danger1 = true
        }else{
            this.save1 = true
        }

        if(this.two>14){
            this.danger2 = true
        }else{
            this.save2 = true
        }
    
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
#rtop{
    text-align: center;
}
li{
    width: 100%;
    height: 100%;
    color: royalblue;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-right:.75rem;
    font-size: 1.25rem;
    text-align:end


}
span{
    width: 1.875rem;
    height: 1.625rem;
    background-color: rgb(133, 158, 231);
    margin: 0 .325rem .25rem; 
    text-align: center;
}
.red1{
    background-color: red;
}
.red2{
    background-color: red;
}
.green1{
    background-color: green;
}
.green2{
    background-color: green;
}
</style>