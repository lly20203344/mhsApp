<template>
	<div class="loginArea midCenter">

		<mt-header fixed title="登录">
			<router-link to="/Login" slot="left">
				<mt-button>
					<img src="../../assets/images/Home/back_icon2.png" alt="" />
				</mt-button>
			</router-link>
			<mt-button slot="right"></mt-button>
		</mt-header>
		<div class="loginTitle midCenter">
			<span class="logo"></span>
		</div>
		<div class="loginForm" style="height: 100px;">
			<form class="Formcenter_">
				<section class="input_container">
					<div class="input_text input_box">
						<b :class="{ 'class-uesrA': uesrInputA, 'class-uesrB': uesrInputB}"></b>
						<input type="text" placeholder="请输入登录账号" v-model.lazy="loginForm.username" @focus='uesrI($event)' @blur="uesrIdone($event)">
					</div>
				</section>
				<section class="input_container input_p">
					<div class="input_password input_box">
						<b :class="{ 'class-passA': passUesrInputA, 'class-passB': passUesrInputB}"></b>
						<input v-if="!showPassword" type="password" placeholder="请输入登录密码" v-model="loginForm.password" @focus='passI($event)' @blur="passIdone($event)">
						<input v-else type="text" placeholder="请输入登录密码" v-model="loginForm.password">
						<span @click="changePassWordType" class="" :class="{ 'class-a': padImgA, 'class-b': padImgB}"></span>
					</div>
				</section>
				<section class="input_container">
					<div class="input_btn" @click="login">登 录</div>
				</section>
				<section class="input_container">
					<div class="input_bottom">
					 <router-link to="/newEnrolled">					
						<span>新用户注册</span>
					</router-link>
						<span class="input_bottom_rightSpan">找回密码</span>
					</div>
				</section>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './Login.less';
	import { MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
				showPassword: false, // 是否显示密码
				padImgA: true,
				padImgB: false,
				uesrInputA: true,
				uesrInputB: false,
				passUesrInputA: true,
				passUesrInputB: false,
				checked: true,
				imgUrl: this.apiJSON.login_captcha,
				imgParam: '',
				loginForm: {
					username: '', //账号
					password: '', //密码
				},

			}
		},
		mounted(){
			
		},
		methods: {
			changePassWordType() {
				this.showPassword = !this.showPassword;
				this.padImgA = !this.padImgA;
				this.padImgB = !this.padImgB;
			},
			uesrI($event) {
				this.uesrInputA = !this.uesrInputA;
				this.uesrInputB = !this.uesrInputB;

			},
			uesrIdone($event) {
				this.uesrInputA = !this.uesrInputA;
				this.uesrInputB = !this.uesrInputB;
			},

			passI($event) {
				this.passUesrInputA = !this.passUesrInputA;
				this.passUesrInputB = !this.passUesrInputB;
			},
			passIdone($event) {
				this.passUesrInputA = !this.passUesrInputA;
				this.passUesrInputB = !this.passUesrInputB;

			},
			login() {
				var data = {};
				data.usrName = this.loginForm.username;
				data.usrPwd = this.encryptByDES(this.loginForm.password, 'mxdKey2016');
				data.authCode = 'aaaaaa'
				data.usr_type=1;
				this.$http({
					url: this.apiJSON.login_user,    //登录请求的接口
					method: 'post',   //请求方式
					data: data,     //请求参数
				}).then((res) => {
					if(data) {
						sessionStorage.setItem('JGUser', res.userInfo.usrName);   //存储用户信息   //比如token
						sessionStorage.setItem('JGTrueName', res.userInfo.trueName);//
						MessageBox('Notice', '登录成功');
						this.$router.push({
							name: 'Home'
						})
					} else {
						
					}
				});
			},

		}
	}
</script>