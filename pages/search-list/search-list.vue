<template>
	<view>
		<ShopList :keyword="keyword"></ShopList>
	</view>
</template>

<script>
	import ShopList  from '@/components/common/ShopList.vue'
	export default {
		data() {
			return {
				keyword :""
			}
		},
		onLoad(e) {
			
			this.keyword = e.keyword;
			
			// #ifdef APP-PLUS  
			var webView = this.$mp.page.$getAppWebview();  
			// 设置 searchInput的 text  
			webView.setTitleNViewSearchInputText(this.keyword) 
			// #endif
			
		},
		components:{
			ShopList,
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
