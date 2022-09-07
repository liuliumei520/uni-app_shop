<template>
	<view class="search">
		<Lines></Lines>

		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-lajitong" @tap="clearHistory"></view>
			</view>

			<view class="" v-if="searchData.length > 0">
				<view class="search-name f-color" v-for="(item,index) in searchData" :key="index">{{item}}</view>

			</view>
			<view v-else class="search-end">暂无搜索记录</view>
		</view>

		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热门搜索</view>
			</view>

			<view class="">
				<view class="search-name f-color">四件套</view>
				<view class="search-name f-color">面膜</view>
			</view>
		</view>


	</view>
</template>

<script>
	import Lines from '@/common/Lines.vue'
	export default {
		data() {
			return {
				// 输入的关键词
				keyword: '',

				// 搜索过的搜索词
				searchData: [],
			}
		},
		components: {
			Lines,
		},
		// 页面加载时
		onLoad() {
			uni.getStorage({
				key : "searchData",
				success: (res) => {
					this.searchData = JSON.parse(res.data);
				}
			})
		},
		// 点击顶部栏
		onNavigationBarButtonTap(e) {
			this.search();
		},

		// 监听搜索框的变化
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text;
		},
		// 监听软键盘的搜索按钮点击
		onNavigationBarSearchInputConfirmed() {
			this.search();
		},

		methods: {
			// 判断关键字是否为空和跳转业面
			search() {
				if (this.keyword === "") {
					return uni.showToast({
						title: "关键字不能为空",
						icon: "none"
					})
				} else {
					uni.navigateTo({
						url: "../search-list/search-list?keyword="+this.keyword+""
					})
				}

				uni.hideKeyboard();
				this.addSearch();
			},

			// 记录最近搜索词
			addSearch() {
				
				// 查找
				let idx = this.searchData.indexOf(this.keyword);
				// 重复判断
				if (idx < 0) {
					this.searchData.unshift(this.keyword)
				}else{
					// 否则需要将最近搜索过的放到最前面
					// 先删掉在添加
					this.searchData.unshift(this.searchData.splice(idx,1)[0]);
				}
				
				uni.setStorage({
					key:"searchData",
					data : JSON.stringify(this.searchData)
				})
			},
			
			// 清楚搜索记录
			clearHistory(){
				// 点击删除按钮，弹框
				uni.showModal({
					title : "重要提示",
					content:"是否要清除搜索记录",
					cancelText:"取消",
					confirmText:"确定",
					success: (res) => {
						if(res.confirm){
							uni.removeStorage({
								key : "searchData"
							})
							this.searchData = [];
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.search-item {
		padding: 20rpx;
		font-size: 35rpx;
	}

	.search-title {
		display: flex;
		justify-content: space-between;
	}

	.icon-lajitong {
		font-size: 40rpx;
	}

	.search-name {
		padding: 4rpx 24rpx;
		background-color: #E1E1E1;
		display: inline-block;
		border-radius: 26rpx;
		margin: 10rpx;
	}

	.search-end {
		text-align: center;
	}
</style>
