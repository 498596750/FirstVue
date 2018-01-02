import Vue from 'vue'
import Main from './Main.vue'
import './css/aui.2.0.css'
import './js/api.js'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*render:function(createElement){
  		return createElement(Main)
  }*/
  //es6写法,将单文件应用渲染到html初始页上
  render:(createElement)=>createElement(Main),
  beforeCreate:()=>alert('创建之前'),
  created:()=>alert('创建以后立即执行')

})
