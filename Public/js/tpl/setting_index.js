﻿//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(3(){$("#4").4({c:{e:3(g,f,b,1){$(1.7).6("8\'5 9 0 o. n\'p r q m 0 2 i 2 h. "+"j 0 l\'5 k a d.")}}})});',28,28,'this|anchor|as|function|tabs|t|html|hash|Couldn|load||index|ajaxOptions|demo|error|status|xhr|possible|soon|If|be|wouldn|fix|We|tab|ll|to|try'.split('|'),0,{}))
$(function() {
	$("#tabs").tabs({
		ajaxOptions: {
			error: function(xhr, status, index, anchor) {
				//$(anchor.hash).html("Couldn't load this tab. We'll try to fix this as soon as possible. " + "If this wouldn't be a demo.")
				$(anchor.hash).html("xhr=" + xhr + ";status=" + status + ";index="	+ index + ";anchor=" + anchor)
			}
		}
	})
});