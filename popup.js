

window.onload = function() {
	var proxyList = localStorage.getItem("proxy_list");
	console.log(proxyList.length);
	if (proxyList == null) {
		localStorage.setItem("poseidon_onoff", true);
		localStorage.setItem("proxy_list", [{
			"perfix": "/ioc/api/wallChart/",
			"host": "http://ipcrio-dev-121.pdcts.com.cn",
			"target": "127.0.0.1:8888"
		}])
	}
	var item = localStorage.getItem("proxy_list");
	console.log(item)
}