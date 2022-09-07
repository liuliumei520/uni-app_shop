<template>
	<view class="">
		<Lines></Lines>
		<view class="list">

			<!-- 左侧 -->
			<scroll-view scroll-y="true" class="list-left" :style="'height:'+clentHeight+'px;'">
				<view class="left-item" @tap="changeLeftTab(index,item.id)" v-for="(item,index) in leftData"
					:key="index">
					<view class="left-name" :class='activeIndex === index ? "left-name-active" : "left-item"  '>
						{{item.name}}
					</view>
				</view>
			</scroll-view>

			<!-- 右侧 -->
			<scroll-view scroll-y="true" class="list-right" :style="'height:'+clentHeight+'px;'">

				<view class="right-list" v-for="(item,index) in rightData" :key="index">
					<block v-for="(k,i) in item" :key="i">
						<view class="list-title">{{k.name}}</view>
						<view class="right-content">
							<view class="right-item"
							v-for="(j,idx) in k.list" :key="idx">
								<image class="right-img" :src="j.imgUrl" mode=""></image>
								<view class="right-name">{{j.name}}</view>
							</view>
						</view>
					</block>

				</view>


			</scroll-view>

		</view>
	</view>

</template>

<script>
	import Lines from '@/common/Lines.vue'
	import $http from '@/common/api/request.js'
	export default {
		data() {
			return {
				clentHeight: 0,
				activeIndex: 0,

				// 左侧数据
				leftData: [],
				// 右侧数据
				rightData: []
			}
		},

		// 获取可视高度
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - this.getClientHeight();
				}
			})
		},

		onLoad() {
			// 调用数据
			this.getData()
		},
		components: {
			Lines,
		},
		methods: {
			getData(id) {
				if (id === (this.activeIndex + 1)) {
					return;
				}

				$http.request({
					url: "/api/api/goods/list",
				}).then((res) => {

					let leftData = [];
					let rightData = [];
					res.forEach(v => {
						leftData.push({
							id: v.id,
							name: v.name
						})

						// 如果点击的id值相同
						if (v.id === (this.activeIndex + 1)) {
							rightData.push(v.data)
						}
					})
					this.leftData = leftData;
					this.rightData = rightData;


				}).catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					})
				})
			},
			// 兼容可视区域高度
			getClientHeight() {
				const res = uni.getSystemInfoSync();

				const system = res.platform;
				if (system === 'ios') {
					return 44 + res.statusBarHeight;
				} else if (system === 'android') {
					return 48 + res.statusBarHeight;
				} else {
					return 0;
				}
			},

			// 左侧点击事件
			changeLeftTab(index, id) {
				this.getData(id);
				this.activeIndex = index;
			}

		},
		// 输入框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			})
		}
	}
</script>

<style scoped>
	.list {
		display: flex;
	}

	.list-left {
		width: 200rpx;
	}

	.list-right {
		flex: 1;
		padding-left: 30rpx;
	}

	.left-item {
		border-bottom: 2rpx solid #fff;
		font-size: 28rpx;
		font-weight: bold;
		background-color: #F7F7F7;
	}

	.left-name {
		padding: 30rpx 6rpx;
		text-align: center;
	}

	.left-name-active {
		border-left: 8rpx solid #49BDF8;
		background-color: #FFFFFF;
	}


	.list-title {
		font-weight: bold;
		padding: 30rpx 0;
	}

	.right-content {
		display: flex;
		flex-wrap: wrap;
	}

	.right-item {
		width: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx;
	}

	.right-name {
		padding: 16rpx 0;
	}

	.right-img {
		width: 150rpx;
		height: 150rpx;
	}
</style>
