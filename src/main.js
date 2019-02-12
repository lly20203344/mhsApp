/**
*@author  作者     leying
*@param  {axios}   封装的axios请求
*@param  {baseUrl} api请求根路径
*@param  {apiUrl}  api请求url leying
*@param  {imgUrl}  图片显示路径
**/
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.less';
import './assets/css/style.less';
import './assets/css/font-awesome.css';
import axios from './assets/js/axios.js';
import {imgUrl} from './assets/js/http.js';
import httpUrl from './assets/js/api.js';
import des from './assets/js/des.js';
import echarts from 'echarts';
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.imgBaseUrl = imgUrl;
Vue.prototype.apiJSON = httpUrl;
Vue.prototype.encryptByDES = des;

Vue.prototype.$echarts = echarts;




new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
