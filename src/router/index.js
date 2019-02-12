import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Inpage from '@/components/Common/Inpage';
import NewEnrolled  from '@/components/Login/NewEnrolled';
import Home  from '@/components/Home/Home';   //首页
import HomeDetails  from '@/components/Myfans/HomeDetails';   //首页

import Myfans from '@/components/Myfans/Myfans';  //我的粉丝
import Rewards from '@/components/Myfans/Rewards';  //我的奖励
import Splash from '@/components/Login/Splash';  //启动页

Vue.use(Router)

const router = new Router({
  routes: [
  {
        path: '/',
        redirect:'/Splash'
        },
         {
      path: '/Splash',
      name: 'Splash',
      component: Splash,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '/newEnrolled',
      name: 'NewEnrolled',
      component: NewEnrolled,
    },
   
    {
      path: '/inpage',
      name: 'Inpage',
      component: Inpage,
      
      children: [
        {path: '/Home', name: 'Home', component: Home },          //首页
        {path:'/Myfans',name:'Myfans',component:Myfans}, //我的粉丝
        {path:'/Rewards',name:'Rewards',component:Rewards}, //
        {path:'/HomeDetails',name:'HomeDetails',component:HomeDetails},     //

      ]
    }

  ]

})


export default router;
