//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(1(){$("#0").0({j:{k:1(h,i,n,6){$(6.l).m("c\'t b 3 9. d\'g f e p 3 5 A 5 z. "+"y 3 D\'t C a r.")}},q:1(u,x){w(2!=\'\'){$(\'#0\').0(\'8\',s(2));2=\'\'}},8:1(){$("7[v=\'B\']").4();$("7[o=\'\']").4()}})});',40,40,'tabs|function|selectNum|this|remove|as|anchor|div|select|tab||load|Couldn|We|to|try|ll|xhr|status|ajaxOptions|error|hash|html|index|class|fix|create|demo|parseInt||event|role|if|ui|If|possible|soon|dialog|be|wouldn'.split('|'),0,{}))
$(function() {
	$("#tabs").tabs({
		ajaxOptions: {
			error: function(xhr, status, index, anchor) {
				//$(anchor.hash).html("Couldn't load this tab. We'll try to fix this as soon as possible. " + "If this wouldn't be a demo.")
				$(anchor.hash).html("xhr=" + xhr + ";status=" + status + ";index="	+ index + ";anchor=" + anchor)
			}
		}
		/*
		create: function(event, ui) {
			if (selectNum != '') {
				$('#tabs').tabs('select', parseInt(selectNum));
				selectNum = ''
			}
		},
		select: function() {
			$("div[role='dialog']").remove();
			$("div[class='']").remove()
		}
		*/
	})
});