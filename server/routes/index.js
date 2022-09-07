var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');



// // 允许跨域
router.all('*', function(req, res, next) {
  console.log(req.headers.origin)
  console.log(req.environ)
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  // res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
}); 


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});


// 商品分类
router.get('/api/goods/list', function(req, res, next) {
	res.json({
		code : 0,
		data :[
			{
				id : 1,
				name :"家居家纺",
				data : [
					{
						name : "家纺",
						list : [
							{
								id : 1,
								name : "毛巾",
								imgUrl : "../../static/image/a.jpg"
							},{
								id : 2,
								name : "枕头",
								imgUrl : "../../static/image/b.jpg"
							},
						]
					},
					{
						name : "生活用品",
						list : [
							{
								id : 1,
								name : "牙刷",
								imgUrl : "../../static/image/a.jpg"
							},{
								id : 2,
								name : "牙膏",
								imgUrl : "../../static/image/b.jpg"
							},
						]
					}
				]
			
			},	{
				id : 2,
				name :"女装",
				data : [
					{
						name : "裙子",
						list : [
							{
								id : 1,
								name : "半身裙",
								imgUrl : "../../static/image/a.jpg"
							},{
								id : 2,
								name : "超短裙",
								imgUrl : "../../static/image/b.jpg"
							},
						]
					},
					{
						name : "上衣",
						list : [
							{
								id : 1,
								name : "T恤",
								imgUrl : "../../static/image/a.jpg"
							},{
								id : 2,
								name : "衬衫",
								imgUrl : "../../static/image/b.jpg"
							},
						]
					}
				]
			
			},
		]
	})
});


// 搜索数据的接口
router.get('/api/goods/search', function(req, res, next) {
	connection.query("select * from goods_search",function(error,results,fields){
		// if(error) throw error;
		console.log('The solution is:',results)
	});
	
	// connection.connect((err) => {
	//   // 如果有错误对象，表示连接失败
	//   if (err) return console.log('数据库连接失败')
	//   // 没有错误对象提示连接成功
	//   console.log('mysql数据库连接成功')
	// })
	// // 4. 执行SQL语句
	// // 查看语句
	// let sql = 'select id from goods_search'
	// connection.query(sql, (err, result, fields) => {
	//   // if (err) throw err; // throw err 相当于 return console.log(err);
	//   console.log(result); // result就是查询结果
	// })

	
});

// 运动户外第一次上拉加载更多的数据
router.get('/api/index_list/2/data/2', function(req, res, next) {
	res.json({
		code : '0',
		data : [
			{
				type: "commodityList",
				data: [
					{
						id : 1,
						imgUrl : "../../static/image/a.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 2,
						imgUrl : "../../static/image/b.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 3,
						imgUrl : "../../static/image/c.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 4,
						imgUrl : "../../static/image/w.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},
				]
			}
		]
	});
});

// 运动户外第二次上拉加载更多的数据
router.get('/api/index_list/2/data/3', function(req, res, next) {
	res.json({
		code : '0',
		data : [
			{
				type: "commodityList",
				data: [
					{
						id : 1,
						imgUrl : "../../static/image/a.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 2,
						imgUrl : "../../static/image/b.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 3,
						imgUrl : "../../static/image/c.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 4,
						imgUrl : "../../static/image/w.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},
				]
			}
		]
	});
});



// 运动户外
router.get('/api/index_list/2/data/1', function(req, res, next) {
	res.send({
		"code" : 0,
		"data" : [
			{
				type : "bannerList",
				imgUrl : "../../static/image/a.jpg"
			},
			{
				type : "iconsList",
				data : [
					{
						imgUrl : "../../static/image/c1.png",
						name : "运动户外"
					},{
						imgUrl : "../../static/image/c2.png",
						name : "运动户外"
					},{
						imgUrl : "../../static/image/c3.png",
						name : "运动户外"
					},{
						imgUrl : "../../static/image/c4.png",
						name : "运动户外"
					},{
						imgUrl : "../../static/image/c5.png",
						name : "运动户外"
					},{
						imgUrl : "../../static/image/c6.png",
						name : "运动户外"
					},{
						imgUrl : "../../static/image/c7.png",
						name : "运动户外"
					},{
						imgUrl : "../../static/image/c8.png",
						name : "运动户外"
					},
				]
			},
			{
				type : "hotList",
				data : [
					{
						id : 1,
						imgUrl : "../../static/image/a.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 2,
						imgUrl : "../../static/image/b.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 3,
						imgUrl : "../../static/image/c.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					}
				]
			},
			{
				type : "shopList",
				data : [
					{
						bigUrl : "../../static/image/e.jpg",
						data : [
							{
								id : 1,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 2,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 3,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 4,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 5,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 6,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 7,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 8,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							}
						]
					},
					{
						bigUrl : "../../static/image/e.jpg",
						data : [
							{
								id : 1,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 2,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 3,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 4,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 5,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 6,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 7,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 8,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							}
						]
					},
				]
			},
			{
				type: "commodityList",
				data: [
					{
						id : 1,
						imgUrl : "../../static/image/a.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 2,
						imgUrl : "../../static/image/b.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 3,
						imgUrl : "../../static/image/c.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 4,
						imgUrl : "../../static/image/w.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},
				]
			}
		]
	})
});


// 服饰内衣
router.get('/api/index_list/3/data/1', function(req, res, next) {
	res.send({
		"code" : 0,
		"data" : [
			{
				type : "bannerList",
				imgUrl : "../../static/image/a.jpg"
			},
			{
				type : "iconsList",
				data : [
					{
						imgUrl : "../../static/image/c1.png",
						name : "服饰内衣"
					},{
						imgUrl : "../../static/image/c2.png",
						name : "服饰内衣"
					},{
						imgUrl : "../../static/image/c3.png",
						name : "服饰内衣"
					},{
						imgUrl : "../../static/image/c4.png",
						name : "服饰内衣"
					},{
						imgUrl : "../../static/image/c5.png",
						name : "服饰内衣"
					},{
						imgUrl : "../../static/image/c6.png",
						name : "服饰内衣"
					},{
						imgUrl : "../../static/image/c7.png",
						name : "服饰内衣"
					},{
						imgUrl : "../../static/image/c8.png",
						name : "服饰内衣"
					},
				]
			},
			{
				type : "hotList",
				data : [
					{
						id : 1,
						imgUrl : "../../static/image/a.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 2,
						imgUrl : "../../static/image/b.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 3,
						imgUrl : "../../static/image/c.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					}
				]
			},
			{
				type : "shopList",
				data : [
					{
						bigUrl : "../../static/image/e.jpg",
						data : [
							{
								id : 1,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 2,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 3,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 4,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 5,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 6,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 7,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 8,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							}
						]
					},
					{
						bigUrl : "../../static/image/e.jpg",
						data : [
							{
								id : 1,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 2,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 3,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 4,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 5,
								imgUrl : "../../static/image/w.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 6,
								imgUrl : "../../static/image/c.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 7,
								imgUrl : "../../static/image/b.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							},{
								id : 8,
								imgUrl : "../../static/image/a.jpg",
								name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
								pprice : "299",
								oprice : "999",
								discount : "5.2"
							}
						]
					},
				]
			},
			{
				type: "commodityList",
				data: [
					{
						id : 1,
						imgUrl : "../../static/image/a.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 2,
						imgUrl : "../../static/image/b.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 3,
						imgUrl : "../../static/image/c.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},{
						id : 4,
						imgUrl : "../../static/image/w.jpg",
						name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
						pprice : "299",
						oprice : "999",
						discount : "5.2"
					},
				]
			}
		]
	})
});




// 首页
router.get('/api/index_list/data', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			topBar: [{
					id: 1,
					name: "推荐"
				},
				{
					id: 2,
					name: "运动户外"
				},
				{
					id: 3,
					name: "服饰内衣"
				},
				{
					id: 4,
					name: "箱包"
				},
				{
					id: 5,
					name: "美妆"
				},
				{
					id: 6,
					name: "家具数码"
				},
				{
					id: 7,
					name: "食品"
				},
			],
			data: [{
					type: "swiperList",
					data: [{
							imgUrl: "../../static/image/a.jpg"
						},
						{
							imgUrl: "../../static/image/b.jpg"
						},
						{
							imgUrl: "../../static/image/c.jpg"
						},
						{
							imgUrl: "../../static/image/d.jpg"
						},
					]
				},
				{
					type: "recommendList",
					data: [
						{
							bigUrl : "../../static/image/d.jpg",
							data : [
								{imgUrl : "../../static/image/c.jpg"},
								{imgUrl : "../../static/image/a.jpg"},
								{imgUrl : "../../static/image/s.jpg"}
							]
						}
					]
				},{
					type: "commodityList",
					data: [
						{
							id : 1,
							imgUrl : "../../static/image/a.jpg",
							name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
							pprice : "299",
							oprice : "999",
							discount : "5.2"
						},{
							id : 2,
							imgUrl : "../../static/image/b.jpg",
							name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
							pprice : "299",
							oprice : "999",
							discount : "5.2"
						},{
							id : 3,
							imgUrl : "../../static/image/c.jpg",
							name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
							pprice : "299",
							oprice : "999",
							discount : "5.2"
						},{
							id : 4,
							imgUrl : "../../static/image/w.jpg",
							name: "大海花开你的空间的上课时间思考收到货阿斯兰卡基础，爱神的箭啊哈",
							pprice : "299",
							oprice : "999",
							discount : "5.2"
						},
					]
				},
			]
		}
	});
});

module.exports = router;
