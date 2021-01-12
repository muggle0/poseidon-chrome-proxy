const bg = chrome.extension.getBackgroundPage()

window.onload = function() {
	console.log(bg)
	var proxyList = bg.localStorage.getItem("proxy_list");
	console.log(proxyList);
	if (proxyList == null) {
		bg.localStorage.setItem("poseidon_onoff", true);
		bg.localStorage.setItem("proxy_list", JSON.stringify([{
			"perfix": "/ioc/api/wallChart/",
			"host": "http://ipcrio-dev-121.pdcts.com.cn",
			"target": "127.0.0.1:8888"
		}]))
	}
	var item = bg.localStorage.getItem("proxy_list");
	// var parse = JSON.parse(item);
	console.log(parse)
}