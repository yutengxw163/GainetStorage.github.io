﻿//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$("#y").z(h(){l.k.j="./6.i?s=/g/6/x/"+$(v).0()});h w(){l.k.j="./6.i?s=/g/6/n/"+$("#n").0()+"/o/"+$("#o").0()};h q(){$.m.p({r:"./6.i?s=/g/2",u:\'t\',A:\'I\',H:\'J\'}).L(\'K\',h(G,C){3($.m.B=="D"){5 4=$("F").E();5 f=4.2("7[8=\'f\']").0();5 e=4.2("7[8=\'e\']").0();5 d=4.2("7[8=\'d\']").0();5 c=4.2("7[8=\'c\']").0();5 b=4.2("7[8=\'b\']").0();5 a=4.2("7[8=\'a\']").0();5 9=4.2("7[8=\'9\']").0();1="./6.i?s=/g/6";3(f!="")1+="/f/"+f;3(e!="")1+="/e/"+e;3(d!="")1+="/d/"+d;3(c!="")1+="/c/"+c;3(b!="")1+="/b/"+b;3(a!="")1+="/a/"+a;3(9!="")1+="/9/"+9;l.k.j=1}})}',48,48,'val|action_url|find|if|content|var|index|input|name|iss_total_end|iss_total_start|iss_price_end|iss_price_start|iss_count|iss_name|iss_mainsn|StoreCount|function|php|href|location|window|FrameDialog|searchBy|keyword|create|goSearch|url||查询|title|this|fastSearch|order|btnOrder|change|height|_results|ui|OK|contents|iframe|event|width|400|600|dialogclose|bind'.split('|'),0,{}))
$("#btnOrder").change(function() {
	window.location.href = "./index.php?s=/Storage/StoreCount/index/order/" + $(this).val()
});

function fastSearch() {
	window.location.href = "./index.php?s=/Storage/StoreCount/index/searchBy/" + $("#searchBy").val() + "/keyword/" + $("#keyword").val()
};

function goSearch() {
	$.FrameDialog.create({
		url: "./index.php?s=/Storage/StoreCount/find",
		title: '查询',
		height: '400',
		width: '600'
	}).bind('dialogclose', function(event, ui) {
		if ($.FrameDialog._results == "OK") {
			var content = $("iframe").contents();
			var iss_mainsn = content.find("input[name='iss_mainsn']").val();
			var iss_name = content.find("input[name='iss_name']").val();
			var iss_count = content.find("input[name='iss_count']").val();
			var iss_price_start = content.find("input[name='iss_price_start']").val();
			var iss_price_end = content.find("input[name='iss_price_end']").val();
			var iss_total_start = content.find("input[name='iss_total_start']").val();
			var iss_total_end = content.find("input[name='iss_total_end']").val();
			action_url = "./index.php?s=/Storage/StoreCount/index";
			if (iss_mainsn != "") action_url += "/iss_mainsn/" + iss_mainsn;
			if (iss_name != "") action_url += "/iss_name/" + iss_name;
			if (iss_count != "") action_url += "/iss_count/" + iss_count;
			if (iss_price_start != "") action_url += "/iss_price_start/" + iss_price_start;
			if (iss_price_end != "") action_url += "/iss_price_end/" + iss_price_end;
			if (iss_total_start != "") action_url += "/iss_total_start/" + iss_total_start;
			if (iss_total_end != "") action_url += "/iss_total_end/" + iss_total_end;
			window.location.href = action_url
		}
	})
}