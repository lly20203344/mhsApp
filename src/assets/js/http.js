var system,httpObj,currentHttp;
system = 'pre';
httpObj = {
	api:{
		env: 'http://192.168.1.52:9206/', // 本地
		test:'http://testbms.mhsapp.xyz',
		pre:'https://prebms.mhsapp.com',
		pro:'https://bms.mhsapp.com'
	},
	imgUrl:{
		test:'http://img.mhsapp.xyz/',
		pre:'http://preimg.mhsapp.com/',
		pro:'http://img.mhsapp.com/'
	}
}
currentHttp = {
	api:httpObj.api[system],
	imgUrl:httpObj.imgUrl[system]
}
module.exports = currentHttp;
