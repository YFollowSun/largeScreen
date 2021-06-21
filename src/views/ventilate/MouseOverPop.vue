<template>
	<!-- 当鼠标指针穿过被选元素时,会发生 mouseenter 事件 -->
	<div class="mouse-over-pop" @mouseenter="mouseEnter" @mouseout="mouseOut">
		<!-- 父组件的东西会直接显示在子组件slot这一部分中 -->
		<slot name="heading"></slot>
		<div v-show="isActive" class="pop-body">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'MouseOverPop',
        data() {
            return {
                // 初始为隐藏状态
                isActive: false
            };
        },

        methods: {
            mouseEnter() {
                this.isActive = true
            },
            mouseOut() {
                this.isActive = false
            },
        }

    }
</script>

<style>
    .toolbox-element .element-title {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        color: #c2c2c2;
        font-size: 13px;
        padding: 5px 5px;
        margin: 3px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .toolbox-element .element-title:hover {
        color: #00aaff;
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4);
        width: 100px;
    }
    
    .toolbox-element .pop-content {
        position: absolute;
        top: 320px;
        left: 210px;
        width: 460px;
        padding: 10px;
        height: 140px;
        /* background: #eee; */
    }
</style>