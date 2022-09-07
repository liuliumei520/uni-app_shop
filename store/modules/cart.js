export default {
	state: {
		list: [
		// {
		// 		checked: false,
		// 		id: 1,
		// 		name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
		// 		color: "颜色：返回对方的过分的",
		// 		imgUrl: "../../static/image/a.jpg",
		// 		pprice: "27",
		// 		num: 1
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 2,
		// 		name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
		// 		color: "颜色：返回对方的过分的",
		// 		imgUrl: "../../static/image/b.jpg",
		// 		pprice: "27",
		// 		num: 1
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 3,
		// 		name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
		// 		color: "颜色：返回对方的过分的",
		// 		imgUrl: "../../static/image/c.jpg",
		// 		pprice: "27",
		// 		num: 1
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 4,
		// 		name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
		// 		color: "颜色：返回对方的过分的",
		// 		imgUrl: "../../static/image/d.jpg",
		// 		pprice: "27",
		// 		num: 1
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 5,
		// 		name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
		// 		color: "颜色：返回对方的过分的",
		// 		imgUrl: "../../static/image/g.jpg",
		// 		pprice: "27",
		// 		num: 1
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 6,
		// 		name: "打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
		// 		color: "颜色：返回对方的过分的",
		// 		imgUrl: "../../static/image/s.jpg",
		// 		pprice: "27",
		// 		num: 1
		// 	},
		// 	{
		// 		checked: false,
		// 		id: 7,
		// 		name: "111打客服的和非恶搞认为微软业务打客服的和非恶搞认为微软业务",
		// 		color: "颜色：返回对方的过分的",
		// 		imgUrl: "../../static/image/w.jpg",
		// 		pprice: "27",
		// 		num: 1
		// 	}
		],
		selectedList : []
	},
	getters : {
		// 是否全选
		checkedAll(state){
			return state.list.length === state.selectedList.length;
		},
		
		// 合计
		totalCount(state){
			let total = {
				pprice : 0,
				num :0
			}
			
			state.list.forEach(v=>{
				// 是否选中
				if(state.selectedList.indexOf(v.id) >-1){
					// 合计
					total.pprice += v.pprice * v.num;
					// 结算数量
					total.num = state.selectedList.length;
				}
			})
			
			return total
		}
	},
	mutations : {
		// 全选
		checkAll(state){
			state.selectedList = state.list.map(v=>{
				v.checked = true;
				return v.id;
			})
		},
		
		// 全不选
		unCheckAll(state){
			state.list.forEach(v=>{
				v.checked = false;
			})
			state.selectedList = [];
		},
		
		// 单选
		selectedItem(state,index){
			let id = state.list[index].id;
			
			let i = state.selectedList.indexOf(id);
			
			// 从数组中查找，如果找到就是选中转态，删除
			if(i > -1){
				state.list[index].checked = false;
				return state.selectedList.splice(i,1);
			}
			// 如果之前没有选中，就将当前id添加到数组中
			state.list[index].checked = true;
			state.selectedList.push(id)
		},
		delGoods(state){
			state.list = state.list.filter(v=>{
				return state.selectedList.indexOf(v.id) === -1;
			})
		},
		
		// 加入购物车
		addShopCart(state,goods){
			state.list.push(goods)
		}
		
	},
	actions : {
		checkedAllFn({commit,getters}){
			getters.checkedAll ? commit("unCheckAll") : commit("checkAll")
		},
		
		delGoodsFn({commit}){
			commit("delGoods");
			commit("unCheckAll");
			uni.showToast({
				title:"删除成功",
				icon:'none'
			})
		}
	}
}
