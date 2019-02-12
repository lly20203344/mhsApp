<template>
	<div class="loginArea midCenter">

		<mt-header fixed title="新用户注册">
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
		<div class="loginForm" style="margin-top: 150px;">
			<form class="Formcenter_">
				<section class="input_container">
					<div class="input_text input_box">
						<b :class="{ 'class-uesrA': uesrInputA, 'class-uesrB': uesrInputB}"></b>
						<input type="text" placeholder="请输入登录账号" v-model.lazy="loginForm.username" @focus='uesrI($event)' @blur="uesrIdone($event)">
					</div>
				</section>
				<section class="input_container">
					<div class="input_text input_box input_code">
						<div class="input_code1">
							<b :class="{ 'codeA': codeA, 'codeB': codeB}"></b>
							<input type="text" placeholder="请输入验证码" v-model.lazy="loginForm.code"@focus='codeAI($event)' @blur="codeBdone($event)">
						</div>
						<div class="input_code2">
							<div @click="sendCodePowd" class="pawod">
								<strong :disabled="mtdisabled" style="background: #fff;box-shadow: none;color: #e60039;font-size: 0.55rem">{{timerCodeMsg}}</strong>
							</div>
						</div>
					</div>
				</section>
				<section class="input_container input_p">
					<div class="input_password input_box">
						<b :class="{ 'class-passAS': passUesrInputAS, 'class-passBS': passUesrInputBS}"></b>
						<input v-if="!showPassword" type="password" placeholder="请输入登录密码" v-model="loginForm.password" @focus='passIS($event)' @blur="passIdoneS($event)">


					</div>
				</section>
				<section class="input_container input_p">
					<div class="input_password input_box">
						<b :class="{ 'class-passA': passUesrInputA, 'class-passB': passUesrInputB}"></b>
						<input v-if="!showPassword" type="password" placeholder="请输入登录密码" v-model="loginForm.password2" @focus='passI($event)' @blur="passIdone($event)">


					</div>
				</section>
				<section class="input_container">
					<div class="input_text input_box">
						<b :class="{ 'class-recommendA': recommendA, 'class-recommendB': recommendB}"></b>
						<input type="text" placeholder="请输入推荐人手机号" v-model.lazy="loginForm.mobie" @focus='recommendI($event)' @blur="recommendIdone($event)">
					</div>
				</section>
				<section class="input_container">
					<div class="input_btn" @click="login">登 录</div>
				</section>
				<section class="input_container">
					<div class="input_bottom">
						<router-link to="/Login">
							<span>已有账号?点击登录</span>
						</router-link>
						<span class="input_bottom_rightSpan"></span>
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
		mounted() {},
		data() {
			return {
				number: null,
				timerCodeMsg: '获取验证码',
				mtdisabled:false,
				showPassword: false, // 是否显示密码
				padImgA: true,
				padImgB: false,
				uesrInputA: true,
				uesrInputB: false,
				passUesrInputA: true,
				passUesrInputB: false,
				passUesrInputAS: true,
				passUesrInputBS: false,
				codeInputA: true,
				codeInputB: false,
				codeA: true,
				codeB: false,
				checked: true,
				recommendA:true,
				recommendB:false,
				imgUrl: this.apiJSON.login_captcha,
				imgParam: '',
				loginForm: {
					username: '', //账号
					password: '', //密码
					password2:'',
					code:'',
					mobie:'',
				},

			}
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
			codeAI(){
				this.codeA = !this.codeA;
				this.codeB = !this.codeB;
			},
			codeBdone(){
				this.codeA = !this.codeA;
				this.codeB = !this.codeB;
			},
			recommendI(){
				this.recommendA = !this.recommendA;
				this.recommendB = !this.recommendB;
			},
			recommendIdone(){
				this.recommendA = !this.recommendA;
				this.recommendB = !this.recommendB;
			},
			passI($event) {
				this.passUesrInputA = !this.passUesrInputA;
				this.passUesrInputB = !this.passUesrInputB;
			},
			passIdone($event) {
				this.passUesrInputA = !this.passUesrInputA;
				this.passUesrInputB = !this.passUesrInputB;

			},
			passIS($event) {
				this.passUesrInputAS = !this.passUesrInputAS;
				this.passUesrInputBS = !this.passUesrInputBS;
			},
			passIdoneS($event) {
				this.passUesrInputAS= !this.passUesrInputAS;
				this.passUesrInputBS = !this.passUesrInputBS;

			},
			sendCodePowd() { //发送短信验证码
				if(!!!this.loginForm.loginForm) {
					MessageBox('手机号不能为空');
					return;
				}
				if(!this.isPhoneNo(this.loginForm.loginForm)) {
					MessageBox('手机号格式不正确');
					return;
				}

				let data = {}
				this.axios.post(this.apiJSON.index_smsSend, JSON.stringify(data), {}).then((response) => {
					if(response.data.code == '000000') {
						this.timeOut();
						this.mtdisabled = true
					} else {
						MessageBox(response.data.message)
					}
				}).catch((error) => {
					MessageBox(response.data.message)
				});

			},
			
			
			login() {
				console.log(this.loginForm)
				MessageBox('Notice', '注册成功');
			},

		}
	}
</script>