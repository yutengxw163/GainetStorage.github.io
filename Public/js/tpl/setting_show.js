//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(".p").e();$(\'#d\').f(0(){$.h(\'./g.c?9=/8/a\',$("#b").o(),0(7){n(7==1){4(\'r\')}},\'q\')});0 4(5){$(\'#2\').j(5);$(\'#2\').i(6).k(m).l(6)};$(".3").3();',28,28,'function||tipShow|datepicker|tip|msg|500|data|Setting|s|doSaveShow|formShow|php|btnShowSubmit|button|click|index|post|fadeIn|html|delay|fadeOut|1000|if|serialize|btn|json|设置已保存'.split('|'),0,{}))
$(".btn").button();
$('#btnShowSubmit').click(function() {
	$.post('./index.php?s=/Storage/Setting/doSaveShow', $("#formShow").serialize(), function(data) {
		if (data == 1) {
			tip('设置已保存')
		}
	}, 'json')
});

function tip(msg) {
	$('#tipShow').html(msg);
	$('#tipShow').fadeIn(500).delay(1000).fadeOut(500)
};
$(".datepicker").datepicker();