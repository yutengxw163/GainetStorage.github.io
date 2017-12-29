//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('8 X(O){0(y("10？")){j.k.i="./c.d?s=/e/11/g/"+O}};8 Z(){j.k.i="./c.d?s=/e/c/p/"+$("#p").1()+"/C/"+$("#C").1()};$("#Y").U(8(){0(y("W？V")){j.k.i="./c.d?s=/e/19"}});8 18(b){0($(b).1()==\'A、D、E、B\'){$(b).z(\'w\',\'x:#1a\');$(b).1(\'\')}};8 1c(b){0($(b).1()==\'\'){$(b).z(\'w\',\'x:#1b\');$(b).1(\'A、D、E、B\')}};8 m(){$.l.o({u:"./c.d?s=/e/m",q:\'17\',r:\'t\',F:\'Q\'}).P(\'K\',8(T,R){0($.l.S=="N"){5 7=$("I").H();5 6=7.9("h[a=\'6\']").1();5 2=7.9("h[a=\'2\']").1();5 f=7.9("h[a=\'f\']").1();5 4=7.9("G[a=\'4\']").1();0(2!=f){n("J,M");m();L};3="./c.d?s=/e/13";0(6!="")3+="/6/"+6;0(2!="")3+="/2/"+2;0(4!="")3+="/4/"+4;n(3);j.k.i=3}})};8 v(g){$.l.o({u:"./c.d?s=/e/v/g/"+g,q:\'12\',r:\'t\',F:\'Q\'}).P(\'K\',8(T,R){0($.l.S=="N"){5 7=$("I").H();5 6=7.9("h[a=\'6\']").1();5 2=7.9("h[a=\'2\']").1();5 f=7.9("h[a=\'f\']").1();5 4=7.9("G[a=\'4\']").1();0(2!=f){n("J,M");m();L};3="./c.d?s=/e/16/g/"+g;0(6!="")3+="/6/"+6;0(2!="")3+="/2/"+2;0(4!="")3+="/4/"+4;j.k.i=3}})};$(".15").14();',62,75,'if|val|user_password|action_url|user_type|var|user_name|content|function|find|name|obj|index|php|Log|user_password2|user_id|input|href|window|location|FrameDialog|toAdd|alert|create|searchBy|title|height||400|url|toEdit|style|color|confirm|attr|输入用户名|IP|keyword|姓名|动作|width|select|contents|iframe|密码不一致|dialogclose|return|请重新填写|OK|id|bind|600|ui|_results|event|click|清空不可恢复|确认清空吗|del|btnClearLog|goSearch|确认删除吗|delete|编辑用户|doAdd|button|btn|doEdit|添加用户|clearTip|clearLog|000|CCC|fillTip'.split('|'),0,{}))
function del(id) {
	if (confirm("确认删除吗？")) {
		window.location.href = "./index.php?s=/Storage/Log/delete/user_id/" + id
	}
};

function goSearch() {
	window.location.href = "./index.php?s=/Storage/Log/index/searchBy/" + $("#searchBy").val() + "/keyword/" + $("#keyword").val()
};
$("#btnClearLog").click(function() {
	if (confirm("确认清空吗？清空不可恢复")) {
		window.location.href = "./index.php?s=/Storage/Log/clearLog"
	}
});

function clearTip(obj) {
	if ($(obj).val() == '输入用户名、姓名、动作、IP') {
		$(obj).attr('style', 'color:#000');
		$(obj).val('')
	}
};

function fillTip(obj) {
	if ($(obj).val() == '') {
		$(obj).attr('style', 'color:#CCC');
		$(obj).val('输入用户名、姓名、动作、IP')
	}
};

function toAdd() {
	$.FrameDialog.create({
		url: "./index.php?s=/Storage/Log/toAdd",
		title: '添加用户',
		height: '400',
		width: '600'
	}).bind('dialogclose', function(event, ui) {
		if ($.FrameDialog._results == "OK") {
			var content = $("iframe").contents();
			var user_name = content.find("input[name='user_name']").val();
			var user_password = content.find("input[name='user_password']").val();
			var user_password2 = content.find("input[name='user_password2']").val();
			var user_type = content.find("select[name='user_type']").val();
			if (user_password != user_password2) {
				alert("密码不一致,请重新填写");
				toAdd();
				return
			};
			action_url = "./index.php?s=/Storage/Log/doAdd";
			if (user_name != "") action_url += "/user_name/" + user_name;
			if (user_password != "") action_url += "/user_password/" + user_password;
			if (user_type != "") action_url += "/user_type/" + user_type;
			alert(action_url);
			window.location.href = action_url
		}
	})
};

function toEdit(user_id) {
	$.FrameDialog.create({
		url: "./index.php?s=/Storage/Log/toEdit/user_id/" + user_id,
		title: '编辑用户',
		height: '400',
		width: '600'
	}).bind('dialogclose', function(event, ui) {
		if ($.FrameDialog._results == "OK") {
			var content = $("iframe").contents();
			var user_name = content.find("input[name='user_name']").val();
			var user_password = content.find("input[name='user_password']").val();
			var user_password2 = content.find("input[name='user_password2']").val();
			var user_type = content.find("select[name='user_type']").val();
			if (user_password != user_password2) {
				alert("密码不一致,请重新填写");
				toAdd();
				return
			};
			action_url = "./index.php?s=/Storage/Log/doEdit/user_id/" + user_id;
			if (user_name != "") action_url += "/user_name/" + user_name;
			if (user_password != "") action_url += "/user_password/" + user_password;
			if (user_type != "") action_url += "/user_type/" + user_type;
			window.location.href = action_url
		}
	})
};
$(".btn").button();