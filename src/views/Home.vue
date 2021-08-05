<template>
	<div>
		<el-row class="tac">
            <el-col :span="2">
		<!-- style="width: 110px;height: 800px;background-color: #000;" -->
		<div style="width: 110px;height: 800px;background-color: #000;">
            <div
            style="margin-left: 20px; background-color: #06235B;width: 53px;height: 30px;position: relative;border-radius: 5px;border:1px solid #fff">
            
            <span slot="title"
                style="color: #00ffff; font-size: 10px;position: absolute;top: 27%;text-align: center;">系统列表</span>
        </div>
			<el-menu class="el-menu-vertical-demo" default-active="1-4-1" @open="handleOpen" @close="handleClose" router>
				<template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
					<el-menu-item :index="item.path">
						<div
							style="background-color: #06235B;width: 53px;height: 53px;position: relative;border-radius: 5px;border:1px solid #fff">
							<img style="width: 30px;height:30px;text-align: center;position: absolute;left: 40%;top: 39%;transform:translate(-50%,-50%);"
								:src="imgSys[item.id]" alt="图片">
							<span slot="title"
								style="color: white;font-size: 10px;position: absolute;top: 27%;text-align: center;">{{item.name}}</span>
						</div>
					</el-menu-item>
				</template>
</el-menu>

</div>
</el-col>
<el-col :span="20">
    <!-- 展示   -->
    <el-main>
        <iframe v-if="this.$route.path=='/'" id="content" frameborder="0" src="http://localhost:50401/" width="1100px" height="800px"></iframe>
        <router-view></router-view>
    </el-main>
</el-col>
<!-- 右侧边栏 -->

<el-col :span="2">
    <div style="width: 110px;height: 800px;background-color: #000;">
        <div style="margin-left: 20px; background-color: #06235B;width: 53px;height: 30px;position: relative;border-radius: 5px;border:1px solid #fff">

            <span slot="title" style="color: #00ffff; font-size: 10px;position: absolute;top: 27%;text-align: center;">应用列表</span>
        </div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
            <template v-for="(item,index) in $router.options.routes[1].children" v-if="!item.hidden">
        <el-menu-item :index="item.path">
            <div
            style="background-color: #06235B;width: 53px;height: 53px;position: relative;border-radius: 5px;border:1px solid #fff">
            <img style="width: 30px;height:30px;text-align: center;position: absolute;left: 40%;top: 39%;transform:translate(-50%,-50%);"
                :src="imgApp[item.id]" alt="图片">
            <span slot="title"
                style="color: white;font-size: 10px;position: absolute;top: 27%;text-align: center;">{{item.name}}</span>
        </div>
       
           
        </el-menu-item>
    </template>
        </el-menu>
    </div>
</el-col>

</el-row>
</div>

</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                imgSys: {
                    '100': require('@/assets/img/100.png'),
                    '101': require('@/assets/img/101.png'),
                    '102': require('@/assets/img/102.png'),
                    '103': require('@/assets/img/103.png'),
                    '104': require('@/assets/img/104.png'),
                    '105': require('@/assets/img/105.png'),
                    '106': require('@/assets/img/106.png'),
                    '107': require('@/assets/img/107.png'),
                    '108': require('@/assets/img/104.png'),
                    '109': require('@/assets/img/109.png'),
                    '110': require('@/assets/img/110.png'),
                    '111': require('@/assets/img/111.png'),
                },
                imgApp: {
                    '200': require('@/assets/img/200.png'),
                    '201': require('@/assets/img/201.png'),
                    '202': require('@/assets/img/202.png'),
                    '203': require('@/assets/img/203.png'),
                    '204': require('@/assets/img/204.png'),
                    '205': require('@/assets/img/205.png'),
                    '206': require('@/assets/img/206.png'),
                    '207': require('@/assets/img/207.png'),
                    '208': require('@/assets/img/208.png'),
                    '209': require('@/assets/img/209.png')
                }
            }
        },
        mounted(){
            console.log(111)
            console.log(this.$route.path)

        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },

            toggleCollapser() {
                this.isCollapseright = !this.isCollapseright;

            }
        }
    }
</script>


<style scoped>
    .el-menu-vertical-demo {
        width: 1px;
    }
    /* .toggle-button {
        font-size: 10px;
        line-height: 24px;
        color: #001C1F;
        text-align: justify;
        letter-spacing: 0.2em;
        cursor: pointer;
    } */
</style>