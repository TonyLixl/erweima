import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.baseUrl = "http://125.72.111.70:8091/"; // 正式环境


/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon
 * @param bd_lat
 * @returns {*[]}
 */
Vue.prototype.transform = function(bd_lon, bd_lat) {
	var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
	var x = bd_lon - 0.0065;
	var y = bd_lat - 0.006;
	var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
	var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
	var gg_lng = z * Math.cos(theta);
	var gg_lat = z * Math.sin(theta);
	return [gg_lng, gg_lat]
}
Vue.prototype.cocode= function(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
				     var r = window.location.search.substr(1).match(reg);      
				     if (r != null) {   
				         return unescape(r[2]);  
				     }  
				
				     return "";  
			}

const app = new Vue({
	...App
})
app.$mount()
