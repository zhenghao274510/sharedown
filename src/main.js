import Vue from 'vue'
import App from './App'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import router from './router'
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.use(Vant)
import {Lazyload} from 'vant';
Vue.use(Lazyload, {
	loading: '../static/img/logo.png',
	attempt: 3
})
Vue.use(Vant)
Vue.config.productionTip = false

require('es6-promise').polyfill()
Es6Promise.polyfill()

new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
