<template>
<div id="nowTime">{{time}}</div>

</template>

<script>
export default {
  data(){
    return {
    time:''
   }
  },

  mounted() {
    this.currentTime();
  },
  methods: {
    //   时间
    currentTime() {
      setInterval(this.getTime, 500);
    },
    getTime() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      this.time =
        yy + "年" + mm + "月" + dd + "日 " + hh + ":" + mf + ":" + ss;
    }
  }
};
</script>

<style>
#nowTime{
    background-color: blue;
    text-align: center;
    margin: 0%;
    padding: 0%;
    width: 100%;
    height: 100%;
    font-size: 1.75rem;
}
</style>