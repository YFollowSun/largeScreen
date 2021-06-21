<template>

	<table class="mailTable" :style="styleObject" v-if="s_showByRow">
		<tr v-for="index in rowCount">
			<td class="column">{{tableData[index*2-2].key}}</td>
			<td>{{tableData[index*2-2].value}}</td>
			<td class="column">{{tableData[index*2-1] !== undefined ? tableData[index*2-1].key : ''}}</td>
			<td>{{tableData[index*2-1] !== undefined ? tableData[index*2-1].value : ''}}</td>
		</tr>
	</table>

	<table class="mailTable" :style="styleObject" v-else>
		<tr v-for="index in rowCount">
			<td class="column">{{tableData[index-1].key}}</td>
			<td>{{tableData[index-1].value}}</td>
			<!-- <td class="column">{{tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].key : ''}}</td>
			<td>{{tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].value : ''}}</td> -->
		</tr>
	</table>
</template>

<script>
    export default {
        data() {
            return {
                styleObject: {},
                s_showByRow: false,
            };
        },
        // 在props中声明一下，代表等会要引用父组件的数据
        props: ['tableData', 'tableStyle', 'showByRow'],
        computed: {
            rowCount: function() {
                return Math.ceil(this.tableData.length);
            }
        },
        created() {
            // 把父组件的tableStyle赋值给子组件
            this.styleObject = this.tableStyle;
            // 如果父组件规定了按行或列展开，将其传给子组件
            if (this.showByRow !== undefined) {
                this.s_showByRow = this.showByRow;
            }
        },
    }
</script>


<style>
    .mailTable,
    .mailTable tr,
    .mailTable tr td {
        border: 1px solid #E6EAEE;
    }
    
    .mailTable {
        font-size: 12px;
        color: #71787E;
    }
    
    .mailTable tr td {
        border: 1px solid #E6EAEE;
        width: 150px;
        height: 35px;
        line-height: 35px;
        box-sizing: border-box;
        padding: 0 10px;
    }
    
    .mailTable tr td.column {
        background-color: #EFF3F6;
        color: #393C3E;
    }
</style>