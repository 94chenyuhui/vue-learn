import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chenyuhui from '@/components/chenyuhui'
import chenyuhui1 from '@/components/chenyuhui1'
import chenyuhui2 from '@/components/chenyuhui2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
		path:'/chenyuhui',
    name:'chenyuhui',
		component:chenyuhui,
    children:[
      {path:'/',component:chenyuhui},
      {path:'chenyuhui1',component:chenyuhui1},
      {path:'chenyuhui2',component:chenyuhui2},
    ]
	}
  ]
})
