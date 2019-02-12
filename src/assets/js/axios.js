import axios from 'axios'
import httpUrl from './http.js';

import { MessageBox } from 'mint-ui';
import router from '../../router';
var headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
var instance = axios.create({
  baseURL: httpUrl.api,
  timeout: 50000,
  transformRequest: [function (data) {
     let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
     return ret
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'auth':sessionStorage.getItem('mhsAuth')
  }
});

instance.interceptors.response.use(function (response) {
	if(response.data.code !== '000000'){
    if(response.data.msg!==''){
      MessageBox.alert(response.data.msg);
    }
    if(response.data.code == 'E100000' || response.data.code == 'E000015'){
      router.push({name:'Login'});
      sessionStorage.removeItem('mhsAuth')
    }
		return false;
	}
  if(!sessionStorage.getItem('mhsAuth')){
      sessionStorage.setItem('mhsAuth',response.data.body.token)
      instance.defaults.headers['auth'] = sessionStorage.getItem('mhsAuth');
  }
	return response.data.body || true;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance
