$(function() {
	var language =getLang();
	
	loadBundles(language);
	$('#lang').click(function() {
		loadBundles('zh_CN');
		setCookie('zh_CN')
	})
})

function getLang(){
	var language;
	if (window.localStorage) {
		language = localStorage.getItem('language')
	} else {
		language = document.cookie;
		language = document.cookie.substring(language.indexOf('=') + 1,
				language.length)
	}
	if(language ==""){
		language ='en_US'
		}
	return language;
	}

function setCookie(lang) {
	if (window.localStorage) {
		localStorage.setItem('language', lang)
	} else {
		document.cookie = 'language=' + lang

	}
}