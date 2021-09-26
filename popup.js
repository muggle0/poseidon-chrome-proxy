const bg = chrome.extension.getBackgroundPage()

window.onload = function() {
	const switchKey = document.getElementById("switch");
	const domain = document.getElementById("domain");
	const storeSwitch = bg.localStorage.getItem("switch");
	const storeDomain = bg.localStorage.getItem("domain");
	const storeUrlEx = bg.localStorage.getItem("urlEx");
	const storeHeadEx = bg.localStorage.getItem("headEx");
	const urlEx = document.getElementById("urlEx");
	const headEx = document.getElementById("headEx");
	switchKey.checked=(storeSwitch==='true');
	domain.innerText=storeDomain;
	urlEx.innerText=storeUrlEx;
	headEx.innerText=storeHeadEx;
}

window.onbeforeunload=save;
document.getElementById("save").onclick=save;

function save(){
	const switchKey = document.getElementById("switch");
	bg.localStorage.setItem("switch",switchKey.checked)
	const domain = document.getElementById("domain");
	bg.localStorage.setItem("domain",domain.innerText)
	const urlEx = document.getElementById("urlEx");
	bg.localStorage.setItem("urlEx",urlEx.innerText);
	const headEx = document.getElementById("headEx");
	bg.localStorage.setItem("headEx",headEx.innerText);
}