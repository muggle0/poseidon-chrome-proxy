var job = "";

function setValue(key,value){
	localStorage.setItem(key,value)
}
function getValue(key){
	return localStorage.getItem(key);
}

function setJob(str){
	job = str;
	chrome.proxy.settings.set({
		value: {
			mode: "pac_script",
			pacScript: {
				data:str,
				mandatory: true,
			}
		},
		scope: 'regular'
	})
}

chrome.proxy.settings.set({
	value: {
		mode: "pac_script",
		pacScript: {
			data: String(function FindProxyForURL(url, host) {
				var onoff = localStorage.getValue("poseidon_onoff");
				if(onoff){
					var list = JSON.parse('${jsonStr}');
					if(${flag} && !~url.indexOf('${siteInput.value}')){
						return 'DIRECT'
					}
					for (var i = 0; i < list.length; i++) {
						if (~url.indexOf(list[i].source)) {
							return 'PROXY '+ list[i].target +'; DIRECT'
						}
					}
				}
				return 'DIRECT'
			}),
			mandatory: true,
		}
	},
	scope: 'regular'
})
