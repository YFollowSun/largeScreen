<template>
	<el-container>
		<!-- 左侧边栏 -->
		<el-aside :width="isCollapseleft?'65px':'200px'">
			<div class="toggle-button" @click="toggleCollapsel">|||</div>
			<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
				:collapse="isCollapseleft" :collapse-transition="false" router>
				<template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
					<el-menu-item :index="item.path">

						<img :src="imgSys[item.id]" alt="图片" align="middle">
						<span slot="title">{{item.name}}</span>
					</el-menu-item>
				</template>
</el-menu>
</el-aside>
<!-- 展示   -->
<el-main>
    <router-view></router-view>
</el-main>
<!-- 右侧边栏 -->
<el-aside :width="isCollapseright?'65px':'200px'">
    <div class="toggle-button" @click="toggleCollapser">|||</div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapseright" :collapse-transition="false" router>
        <template v-for="(item,index) in $router.options.routes[1].children" v-if="!item.hidden">
					<el-menu-item :index="item.path">
						<span slot="title">{{item.name}}</span>
						<img :src="imgApp[item.id]" alt="图片" align="middle">
					</el-menu-item>
				</template>
    </el-menu>
</el-aside>
</el-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                isCollapseleft: true,
                isCollapseright: true,
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
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toggleCollapsel() {
                this.isCollapseleft = !this.isCollapseleft;

            },
            toggleCollapser() {
                this.isCollapseright = !this.isCollapseright;

            }
        }
    }
</script>


<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    
    .bg-purple {
        background: white;
    }
    
    .toggle-button {
        font-size: 10px;
        line-height: 24px;
        color: #001C1F;
        text-align: justify;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
</style>