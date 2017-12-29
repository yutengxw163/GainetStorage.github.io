//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(\'#h\').f(5(){e(\'j\');7;9($(\'#1\').0()==\'\'||$(\'#2\').0()==\'\'){3(\'l\');7};9($(\'#6\').0()!=$(\'#g\').0()){3(\'k\');7};$.o(\'./n.m?s=/i/d\',{8:$(\'#8\').0(),1:$(\'#1\').0(),2:$(\'#2\').0(),6:$(\'#6\').0()},5(4){$(\'#1\').0(4.1);$(\'#2\').0(4.2);z.y.D.B.C();3(\'x\')},\'r\')});5 3(c){$(\'#b\').q(c);$(\'#b\').p(a).t(w).v(a)};$(".u").A();',40,40,'val|user_name|user_realname|tip|data|function|user_password|return|user_id|if|500|tipPersonal|msg|doEditPersonal|alert|click|user_password2|btnSubmit|Setting|演示版禁止修改密码|两次密码不一致|请填写完整|php|index|post|fadeIn|html|json||delay|btn|fadeOut|1000|设置已保存|parent|window|button|location|reload|header'.split('|'),0,{}))
$('#btnSubmit').click(function() {
	alert('演示版禁止修改密码');
	return;
	if ($('#user_name').val() == '' || $('#user_realname').val() == '') {
		tip('请填写完整');
		return
	};
	if ($('#user_password').val() != $('#user_password2').val()) {
		tip('两次密码不一致');
		return
	};
	$.post('./index.php?s=/Storage/Setting/doEditPersonal', {
		user_id: $('#user_id').val(),
		user_name: $('#user_name').val(),
		user_realname: $('#user_realname').val(),
		user_password: $('#user_password').val()
	}, function(data) {
		$('#user_name').val(data.user_name);
		$('#user_realname').val(data.user_realname);
		window.parent.header.location.reload();
		tip('设置已保存')
	}, 'json')
});

function tip(msg) {
	$('#tipPersonal').html(msg);
	$('#tipPersonal').fadeIn(500).delay(1000).fadeOut(500)
};
$(".btn").button();