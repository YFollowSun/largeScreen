
<template>
	<div class="home" >
      <header class="screen-header">
          <!-- <img src="src/assets/img/head_bg.png" alt=""> -->
          <h1 >掘进机远程智能控制系统</h1>
      </header>
      <div class="screen-body">
          <section class="screen-left">
              <div id="left-top">
                  <div id="left-top-left">
                      <!-- 行走状态 -->
                      <!-- <footState></footState> -->
                      <ruler></ruler>
                  </div>
                  <div id="left-top-right">
                      <!-- 割接轨迹 -->
                      <hard></hard>
                  </div>
              </div>
              <div id="left-mid">
                     <!-- 压入式风机 -->
                     <lmid></lmid>
              </div>
              <div id="left-bottom">
                  <!-- 除尘风机 -->
                  <lbottom></lbottom>
              </div>
          </section>
          <section class="screen-middle">
              <div id="middle-top">
                <!-- 6个仪表盘 -->
                <div id="line_1">
                    <div id="top_1">
                        <dashBoard></dashBoard>
                    </div>
                    <div id="top_2">
                        <one></one>
                    </div>
                    <div id="top_3">
                        <two></two>
                    </div>
                </div>
                <div id="line_2">
                    <div id="bottom_1">
                        <three></three>
                    </div>
                    <div id="bottom_2">
                        <four></four>
                    </div>
                    <div id="bottom_3">
                        <five></five>                        
                    </div>
                </div>
              </div>
              <div id="middle-bottom">
                  <div id="middle-bottom-left">
                      <!-- 掘进机工作状态 -->
                      <mbl2></mbl2>
                  </div>
                  <div id="middle-bottom-right">
                      <div id="tem1">
                        <!-- 油缸温度 -->
                        <tempChart></tempChart>
                      </div>
                     <div id="tem2">
                        <!-- 油位 -->
                        <tempChart2></tempChart2>
                      </div> 
                  </div>
              </div>
          </section>
          <section class="screen-right">
              <div id="right-top">
                  <!-- 掘进机控制系统 -->
                  <rtop></rtop>
              </div>
              <div id="right-mid-one">
                  <!-- 时间 ************************************************-->
                  <current_time></current_time>
              </div>
              <div id="right-mid-two">
                  <!-- 远控模式 -->
                  <rtone></rtone>
              </div>
              <div id="right-bottom">
                  <!-- 日志 -->
                  <log></log>
              </div>
          </section>
      </div>
    </div>

</template>

<script>
import current_time from '@/components/current_time.vue'
import dashBoard from '@/components/dashBoard.vue'
import one from '@/components/six/one.vue'
import two from '@/components/six/two.vue'
import three from '@/components/six/three.vue'
import four from '@/components/six/four.vue'
import five from '@/components/six/five.vue'
import tempChart from '@/components/temporature.vue'
import ruler from '@/components/ruler.vue'
import tempChart2 from '@/components/temporature-two.vue'
import rtop from '@/components/rtop.vue'
import mbl2 from '@/components/mbl2.vue'
import rtone from '@/components/rtone.vue'
import lmid from '@/components/lmid.vue'
import lbottom from '@/components/lbottom.vue'
import log from '@/components/log.vue'
import hard from '@/components/hard.vue'
    export default {
        name: "Home",
        data() {
            return {

            }
        },
        components: {
            current_time,
            dashBoard,
            tempChart,
            tempChart2,
            one,
            two,
            three,
            four,
            five,
            ruler,
            mbl2,
            rtop,
            rtone,
            lmid,
            lbottom,
            log,
            hard
        },
   
        methods: {

        }
    }
</script>


<style scoped>
header{
    border-bottom: 1px solid red;
    color: red;
    position: relative;
    margin-bottom: 0%;
    padding: 0 0 0;
}
  /* 声明字体 */
/* @font-face {
    font-family: electronicFont;
    src: url(@/assets/font/DS-DIGIT.TTF);
} */
.fullscreen {
    position: relative!important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    /* z-index: 100; */
}
.home{
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: #161522;
    color: #fff;
    box-sizing: border-box;
    position: relative;
}
.screen-container {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    background-color: #161522;
    color: #fff;
    box-sizing: border-box;
}
.screen-header {
    width: 100%;
    height: 64px;
    font-size: 20px;
    position: relative;
}
h1 {
    color: blue;
    text-align: center;
    margin: 0%;
    height: 100%;

}
.screen-body {
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 10px;
}
.screen-left{
    height: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;
}
#left-top{
    height: 33%;
    display: flex;
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#left-top-left{
    flex: 3;
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#left-top-right{
    flex: 4;
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
        
#left-mid{
    height: 33%;
    margin-top: 10px;
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#left-bottom{
    height: 33%;
    margin-top: 10px;
    position: relative;  
    border: 1px solid rgba(25, 186, 139, 0.17);
}
.screen-middle{
    height: 100%;
    width: 41.5%;
    margin-left: 1.6%;
    margin-right: 1.6%;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#middle-top{
    height: 60%;
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    display: flex;
    flex-direction: column;
}
#line_1{    
    flex: 1;
    display: flex;
}
#top_1{     
    flex: 1;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#top_2{
    flex: 1;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#top_3{
    flex: 1;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#line_2{    
    flex: 1;
    display: flex;
}
#bottom_1{
    flex: 1;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#bottom_2{
    flex: 1;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#bottom_3{
    flex: 1;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#middle-bottom{
    height: 35%;
    margin-top: 5px;
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    display: flex;
}
#middle-bottom-left{
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    margin-right: 0.1875rem;
    flex:3;
    position: relative; 
    /* // 添加边角 */
}
#middle-bottom-right{
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    margin-right: 0.1875rem;
    width: 100%;
    height: 100%;
    flex: 2;
    /* position: relative; */
    display: flex;
    /* // 添加边角 */
}
#tem1{
    flex: 1;
    width: 50%;
    height: 100%;
    /* position: relative; */
}
#tem2{
    flex: 1;
    width: 50%;
    height: 100%;
    /* position: relative; */
}
.screen-right{
    flex: 2;
    display: flex;
    flex-direction: column ;
    border: 1px solid rgba(25, 186, 139, 0.17);
}
#right-top{
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    flex:2
}
#right-mid-one{
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    flex: 1;
}
#right-mid-two{
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    flex: 2;
}
#right-bottom{
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    flex: 5;
} 
</style>
