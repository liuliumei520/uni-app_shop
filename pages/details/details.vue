<template>
	<view class="details">

		<!-- 商品图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image class="swiper-img" :src="item.imgUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 价格、名称 -->
		<view class="details-goods">
			<view class="goods-pprice">$99</view>
			<view class="goods-oprice">$999</view>
			<view class="goods-name">超声波萨户纯白按时吃卷撒娇第八届</view>
		</view>

		<!-- 商品详情 -->
		<view class="">
			<view>
				<image class="details-img" src="../../static/image/r.jpg" mode=""></image>
			</view>
			<view>
				<image class="details-img" src="../../static/image/s.jpg" mode=""></image>
			</view>
			<view>
				<image class="details-img" src="../../static/image/w.jpg" mode=""></image>
			</view>
			<view>
				<image class="details-img" src="../../static/image/c.jpg" mode=""></image>
			</view>
			<view>
				<image class="details-img" src="../../static/image/g.jpg" mode=""></image>
			</view>
		</view>

		<!-- 商品列表 -->
		<Card cardTitle="看了又看"></Card>
		<CommodityList :dataList="dataList"></CommodityList>

		<!-- 底部 -->
		<view class="details-foot">
			<view class="iconfont icon-xiaoxi"></view>
			<view class="iconfont icon-shouye" @tap="goShopCart"></view>
			<view class="add-shopcart" @tap="showPop">加入购物车</view>
			<view class="purchase" @tap="showPop">立即购买</view>
		</view>

		<!-- 底部弹出层 -->
		<view class="pop" v-show="isShow">
			<view class="pop-mask" @tap="hidePop"></view>
			<view class="pop-box" :animation="animationData">
				<view class="">
					<image class="pop-img" src="../../static/image/s.jpg" mode=""></image>
				</view>
				<view class="pop-num">
					<view class="">购买数量</view>
					<UniNumberBox></UniNumberBox>
				</view>
				<view class="pop-sub" @tap="addCart">
					确定
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import UniNumberBox from '@/components/uni/use-number-box/use-number-box.vue'
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				isShow: false,
				animationData : {},
				goodsContent :{id: 1,
					imgUrl: "../../static/image/a.jpg",
					name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
					pprice: "299",
					oprice: "999",
					discount: "5.2"},
				num : 2,
				swiperList: [{
						imgUrl: "../../static/image/a.jpg"
					},
					{
						imgUrl: "../../static/image/b.jpg"
					},
					{
						imgUrl: "../../static/image/c.jpg"
					},
				],
				dataList: [{
					id: 1,
					imgUrl: "../../static/image/a.jpg",
					name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
					pprice: "299",
					oprice: "999",
					discount: "5.2"
				}, {
					id: 2,
					imgUrl: "../../static/image/b.jpg",
					name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
					pprice: "299",
					oprice: "999",
					discount: "5.2"
				}, {
					id: 3,
					imgUrl: "../../static/image/c.jpg",
					name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
					pprice: "299",
					oprice: "999",
					discount: "5.2"
				}, {
					id: 4,
					imgUrl: "../../static/image/w.jpg",
					name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
					pprice: "299",
					oprice: "999",
					discount: "5.2"
				}, ]
			}
		},
		// 修改返回默认行为
		onBackPress() {
			if(this.isShow){
				this.hidePop();
				return true;
			}
		},
		
		// 点击分享按钮
		onNavigationBarButtonTap(e) {
			if(e.type === 'share'){
				uni.share({
					"provider" : "weixin",
					"type" : 0,
					"scene" : "WXSceneSession",
					"title" : "分享",
					"href" : "http://192.168.43.101:8080/#/pages/details/details",
					"imageUrl":"",
					success: () => {
						uni.showToast({
							title:"分享成功"
						})
					},
					fail: () => {
						uni.showToast({
							title:"分享成功"
						})
					}
				})
			}
		},
		methods: {
			...mapMutations(['addShopCart']),
			showPop() {
				
				var animation = uni.createAnimation({
					duration:300,
				})
				
				animation.translateY(800).step();
				this.animationData = animation.export();
				
				this.isShow = true;
				
				setTimeout(()=>{
					animation.translateY(0).step();
					this.animationData = animation.export();
				},300)
			},
			hidePop() {
				var animation = uni.createAnimation({
					duration:300,
				})
				
				animation.translateY(800).step();
				this.animationData = animation.export();
				
				
				
				setTimeout(()=>{
					animation.translateY(0).step();
					this.isShow = false;
				},300)
			},
			// 跳转到购物车
			goShopCart(){
				uni.switchTab({
					url:'../shopcart/shopcart'
				})
			},
			// 加入购物车
			addCart(){
				let goods = this.goodsContent;
				this.goodsContent['checked'] = false;
				this.goodsContent['num'] = this.num;
				
				// 加入购物车
				this.addShopCart(goods);
				
				// 影藏弹框
				this.hidePop();
				
				// 提示弹框
				uni.showToast({
					title: "成功加入购物车",
					icon:"none"
				})
				
				
			}
		},
		components: {
			CommodityList,
			Card,
			UniNumberBox
		}
	}
</script>

<style scoped>
	.details {
		padding-bottom: 90rpx;
	}

	swiper {
		width: 100%;
		height: 700rpx;
	}

	.swiper-img {
		width: 100%;
		height: 700rpx;
	}

	.details-goods {
		text-align: center;
		font-weight: bold;
		font-size: 36rpx;
		padding: 10rpx;
	}

	.details-img {
		width: 100%;
	}

	.details-foot {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
	}

	.details-foot .iconfont {
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 100%;
		background-color: #000000;
		color: #FFFFFF;
		text-align: center;
		margin: 0 10rpx;
	}

	.add-shopcart {
		margin: 0 40rpx;
		padding: 6rpx 30rpx;
		background-color: #000000;
		color: #FFFFFF;
		border-radius: 40rpx;
	}

	.purchase {
		margin: 0 40rpx;
		padding: 6rpx 30rpx;
		background-color: #49BDF8;
		color: #FFFFFF;
		border-radius: 40rpx;
	}


	.pop {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
	}

	.pop-mask {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.pop-box {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		/* height: 800rpx; */
		background-color: #FFFFFF;
	}
	.pop-img{
		width: 260rpx;
		height: 260rpx;
	}
	.pop-num{
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.pop-sub{
		line-height: 80rpx;
		background-color: #49BDF8;
		color: #FFFFFF;
		text-align: center;
	}
</style>
