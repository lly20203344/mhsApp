<template>
	<div class="box">
		<div class="HomeHeader">
			<mt-header fixed title="我的奖励">
				<router-link to="/Home" slot="left">
					<mt-button>
						<img src="../../assets/images/Home/back_icon2.png" alt="" />
					</mt-button>
				</router-link>
				<mt-button slot="right"></mt-button>
			</mt-header>

			<div class="HomeTop" v-for=" (item,index) in HomeCentenData">
				<p>
					<h2>我的奖励</h2></p>
				<p><b>{{item.totalProduced}}</b></p>
			</div>
		</div>

		<div class="main-body" ref="wrapper">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill" :top-status.sync="topStatus">
				<div class="forum-box">
					<ul v-for="(item,index) in fansList">
						<li>
							<b>{{index+1}}.</b>
							<span>{{item.cityName}}</span>
							<span class="forum-box_span">{{item.auditTime |formatDate}}</span>
						</li>
					</ul>
				</div>

				<div slot="top" class="mint-loadmore-top">
					<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
						Loading...
          				<!--<img src="../../../static/images/logo.png" alt="" style="width: 3rem">-->
         			 </span>
					<span v-show="topStatus === 'loading'">Loading...</span>
				</div>
			</mt-loadmore>
		</div>
	</div>
	</div>
</template>

<script type="text/javascript">
	import './Myfans.less';
	import { formatDate } from '../../assets/js/date.js';
	export default {
		data() {
			return {
				fansList: [],
				//可以进行上拉
				allLoaded: false,
				topStatus: '',
				//是否自动触发上拉函数
				isAutoFill: false,
				wrapperHeight: 0,
				courrentPage: 0,
				pageNum: 1, //页码=
				HomeCentenData: [{
					totalProduced: 60927.4580,
					yesterdayProduced: 564.25
				}],
				CentenData: [{
					totalProduced: 60927.4580,
					yesterdayProduced: 564.25
				}],
				Data: [{
					Fans: 123,
					Profit: 245,
					Rewards: 451,
				}]
			}
		},
		filters: {
			formatDate(time) {
				var date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd');
			}
		},
		mounted() {

			let windowWidth = document.documentElement.clientWidth; //获取屏幕高度
			if(windowWidth > 768) { //
				this.wrapperHeight = document.documentElement.clientHeight - 130;
			} else {
				this.wrapperHeight = document.documentElement.clientHeight - 90;
			}

		},
		created() {
			this.loadFrist();
		},
		methods: {
			//   下拉刷新
			loadTop() {
				this.loadFrist();
			},
			// 上拉加载
			loadBottom() {
				this.loadMore();
			},
			// 下来刷新加载
			loadFrist() {
				let queryData = {
					order: 'asc',
					offset: '0',
					limit: '10',
					pageSize: '10',
					pageNum: this.pageNum,
				}
				queryData = Object.assign(queryData, this.searObj);
				this.$http({
					url: this.apiJSON.agent_listmerchant,
					method: 'get',
					params: queryData
				}).then((response) => {
					setTimeout(() => {
						this.pageNum = 1;
						this.allLoaded = false; // 可以进行上拉
						this.fansList = response.list
						console.log(this.fansList, 'datas')
						this.$refs.loadmore.onTopLoaded();
					}, 300);

				}).catch((error) => {

				});

			},
			// 加载更多
			loadMore() {
				let queryData = {
					order: 'asc',
					offset: '0',
					limit: '10',
					pageSize: '10',
					pageNum: this.pageNum,
				}
				queryData = Object.assign(queryData, this.searObj);
				this.$http({
						url: this.apiJSON.agent_listmerchant,
						method: 'get',
						params: queryData
					}).then(response => {
						setTimeout(() => {
							// concat数组的追加
							this.fansList = this.fansList.concat(response.list);
							if(response.list == []) {
								this.allLoaded = true; // 若数据已全部获取完毕
							}
							this.pageNum++;
							this.$refs.loadmore.onBottomLoaded();
						}, 2000);

					})
					.catch(error => {
						console.log(error);
						alert("网络错误，不能访问");
					});
			},

		}
	}
</script>