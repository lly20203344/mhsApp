<template>
	<div class="box">
		<div class="HomeHeader">
			<mt-header fixed title="金果">
				<router-link to="/Login" slot="left">
					<mt-button >
						<img src="../../assets/images/Home/back_icon2.png" alt="" />
					</mt-button>
				</router-link>
				<mt-button slot="right"></mt-button>
			</mt-header>

			<div class="HomeTop" v-for=" (item,index) in HomeCentenData">
				<p>
					<h2>总产量</h2></p>
				<p><b class="HomeTop_b">{{item.totalProduced}}</b></p>
				<p>
					<h3>昨天产量 ：</h3> <span>{{item.yesterdayProduced}}</span></p>
			</div>

		</div>
		<div class="HomeCenten" v-for=" (item,index) in CentenData">
			<div class="HomeCenten_top">
				<div class="HomeCenten_top_left">
					<div>
						<div class="HomeCenten_top_left_div">
							<p class="HomeCenten_top_left_p"> {{item.totalProduced}}</p>
							<b>活动</b>
						</div>
					</div>
				</div>
				<div class="HomeCenten_top_right">
					<div>
						<div>
							<p class="HomeCenten_top_left_p">{{item.yesterdayProduced}}</p>

							<b>锁仓</b>
						</div>
					</div>
				</div>
			</div>
			<div class="zi" style="background: #f4f4f4;height: .4rem;"></div>
			<div class="HomeCenten_bottom" v-for=" (item,index) in Data"> 
				<div class="setHome">
					<div class="infoHomeup">
						<router-link to="/Myfans">
							<mt-cell title="粉丝数:">
								<b>{{item.Fans}}</b>
								<img slot="icon" src="../../assets/images/SetupThe/home_icon1.png">
								<span><img src="../../assets/images/SetupThe/arrow.png" /></span>
							</mt-cell>
						</router-link>
						<router-link to="/HomeDetails">
							<mt-cell title="总分润:">
								<b>{{item.Profit}}</b>
								<img slot="icon" src="../../assets/images/SetupThe/home_icon2.png">
								<span><img src="../../assets/images/SetupThe/arrow.png" /></span>
							</mt-cell>
						</router-link>
						
						<router-link to="/Rewards">
						<mt-cell title="总奖励：">
							<b>{{item.Rewards}}</b>
							<img slot="icon" src="../../assets/images/SetupThe/home_icon3.png">
							<span><img src="../../assets/images/SetupThe/arrow.png" /></span>
						</mt-cell>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="HomeBottom">
			<span class="HomeBottom_left">转出</span>
			<span class="HomeBottom_right">退出</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './Home.less';

	export default {
		data() {
			return {
				HomeCentenData: [{
					totalProduced: 60927.4580,
					yesterdayProduced: 564.25
				}],
				CentenData: [{
					totalProduced: 60927.4580,
					yesterdayProduced: 564.25
				}],
				Data:[{
					Fans:123,
					Profit:245,
					Rewards:451,
				}]
			}
		},
		mounted() {

		}
	}
</script>

<style>

</style>