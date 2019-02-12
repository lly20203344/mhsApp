import baseUrl from './http.js';
var rootUrl = baseUrl.api;
var apiUrl = {
	//首页URL
	"index_info": rootUrl+"/getIndexInfo", //首页信息
	"index_login_out": rootUrl+"/logoutSuccess", //首页退出
	//--------登陆界面[login]----------
	
    "login_user": rootUrl+"/userLogin", //提交登陆-POST

 "agent_listmerchant": rootUrl+"/sellerInfo/list/merchant", //商家列表-GET-------/商户列表查询
}
export default apiUrl;
