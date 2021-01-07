
chrome.proxy.settings.set({
	value: {
		mode: "pac_script",
		pacScript: {
			data: String(function FindProxyForURL(url, host) {
				var onoff = localStorage.getItem("poseidon_onoff");
				if(onoff){
					var proxyList = localStorage.getItem("proxy_list");
					var proxy;
					for (var i = 0; i < proxyList.length; i++) {
						if (proxyList[i].host==host&& ~url.indexOf(proxyList[i].perfix) ){
							proxy=proxyList[i]
						}
					}
					if (proxy==null){
						return 'DIRECT'
					}else {
						return 'PROXY '+proxy.target+'; DIRECT'
					}
				}
				return 'DIRECT'
			}),
			mandatory: true,
		}
	},
	scope: 'regular'
})
