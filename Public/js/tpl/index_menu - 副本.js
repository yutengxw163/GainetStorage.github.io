﻿//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('e 6(){b(5){5.7=\'\'};9(2 i=0;i<4.d;i++){2 3=4[i];b(3.7==\'8\'){5=3}}};2 4=g.h(\'l\').f(\'a\');2 5=\'\';9(2 i=0;i<4.d;i++){2 3=4[i];3.j=e(){m(\'6()\',1);c.7=\'8\';c.k()}};6();',23,23,'||var|menu|menus|lastmenu|cleartabon|className|tabon|for||if|this|length|function|getElementsByTagName|document|getElementById||onclick|blur|leftmenu|setTimeout'.split('|'),0,{}))
function cleartabon() {
	if (lastmenu) {
		lastmenu.className = ''
	};
	for (var i = 0; i < menus.length; i++) {
		var menu = menus[i];
		if (menu.className == 'tabon') {
			lastmenu = menu
		}
	}
};
var menus = document.getElementById('leftmenu').getElementsByTagName('a');
var lastmenu = '';
for (var i = 0; i < menus.length; i++) {
	var menu = menus[i];
	menu.onclick = function() {
		setTimeout('cleartabon()', 1);
		this.className = 'tabon';
		this.blur()
	}
};
cleartabon();