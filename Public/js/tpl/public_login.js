//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('0 A(r){q d=z y().w();p(r){$(\'#v\').u("t",\'./6.8?s=/c/f/D/1/\'+d)}F{$(\'#v\').u("t",\'./6.8?s=/c/f/\'+d)}};0 5(g){$(\'#5\').G(k).H(E).L(k);$(\'#5\').M("<l K=\'I:J;x-B:C\'>"+g+"</l>")};0 e(){$.Z(\'./6.8?s=/c/10/m/\'+$(\'#m\').9()+\'/i/\'+$(\'#i\').9()+\'/j/\'+$(\'#j\').9(),0(h){11(h){7\'1\':5(\'14\');a;7\'2\':5(\'12\');a;7\'3\':5(\'15\');a;7\'4\':o.Q.R=\'./6.8?s=/P/6\'}})};$("#N").O(0(){e()});$(S).W(0(b){q n=o.X?b.V:b.T;p(n==13){e()}});$(".U").Y();',62,68,'function|||||tip|index|case|php|val|break|evt|Public|timenow|doSubmit|verify|msg|data|user_password|code|500|font|user_name|key|window|if|var|type||src|attr|verifyImg|getTime|margin|Date|new|fleshVerify|bottom|20px|adv|1000|else|fadeIn|delay|color|red|style|fadeOut|html|btnSubmit|click|Index|location|href|document|which|btn|keyCode|keydown|event|button|get|doLogin|switch|密码不正确||不存在此用户|验证码不正确'.split('|'),0,{}))
function fleshVerify(type) {
	var timenow = new Date().getTime();
	if (type) {
		$('#verifyImg').attr("src", './index.php?s=/Storage/Public/verify/adv/1/' + timenow)
	} else {
		$('#verifyImg').attr("src", './index.php?s=/Storage/Public/verify/' + timenow)
	}
};

function tip(msg) {
	$('#tip').fadeIn(500).delay(1000).fadeOut(500);
	$('#tip').html("<font style='color:red;margin-bottom:20px'>" + msg + "</font>")
};

function doSubmit() {
	//$.get('./index.php?s=/Public/doLogin/user_name/' + $('#user_name').val() + '/user_password/' + $('#user_password').val() + '/code/' + $('#code').val(), function(data) {
	$.get('./index.php?s=/Storage/Public/doLogin/user_name/' + $('#user_name').val() + '/user_password/' + $('#user_password').val() + '/code/' + $('#code').val(), function(data) {
		switch (data) {
		case '1':
			tip('不存在此用户');
			break;
		case '2':
			tip('密码不正确');
			break;
		case '3':
			tip('验证码不正确');
			break;
		case '4':
			//window.location.href = './index.php?s=/Index/index'
			window.location.href = './index.php?s=/Storage/Index/index'
		}
	})
};
$("#btnSubmit").click(function() {
	doSubmit()
});
$(document).keydown(function(evt) {
	var key = window.event ? evt.keyCode : evt.which;
	if (key == 13) {
		doSubmit()
	}
});
$(".btn").button();