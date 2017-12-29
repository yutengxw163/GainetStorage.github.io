//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('8 G(y){6(F("E？")){g.i.h="./f.e?s=/d/J/9/"+y}};8 A(){$("#b").b({D:o,p:m,n:t,u:\'H\',q:{"r":8(){7 1=$("#1").0();7 2=$("#2").0();7 5=$("#5").0();7 a=$("#a").0();7 3=$("#3").0();6(5!=a){l("k,j");A();B};4="./f.e?s=/d/I";6(1!="")4+="/1/"+1;6(2!="")4+="/2/"+2;6(5!="")4+="/5/"+5;6(3!="")4+="/3/"+3;g.i.h=4},\'w\':8(){$(v).b("x")}},z:8(){$(\'#1\').0(\'\');$(\'#2\').0(\'\');$(\'#3\').0(\'\')}})};8 C(9){$("#b").b({D:o,p:m,n:t,u:\'P\',q:{"r":8(){7 1=$("#1").0();7 2=$("#2").0();7 5=$("#5").0();7 a=$("#a").0();7 3=$("#3").0();6(5!=a){l("k,j");C(9);B O};4="./f.e?s=/d/Q/9/"+9;6(1!="")4+="/1/"+1;6(2!="")4+="/2/"+2;6(5!="")4+="/5/"+5;6(3!="")4+="/3/"+3;g.i.h=4},\'w\':8(){$(v).b("x")}},z:8(){$.N(\'./f.e?s=/d/K/9/\'+9,8(c){$(\'#9\').0(c.9);$(\'#1\').0(c.1);$(\'#2\').0(c.2);$(\'#3\').0(c.3)})}})};$(".L").M();',53,53,'val|user_name|user_realname|user_type|action_url|user_password|if|var|function|user_id|user_password2|dialog|data|UserManage|php|index|window|href|location|请重新填写|密码不一致|alert|650|modal|400|width|buttons|保存||true|title|this|取消|close|id|open|toAdd|return|toEdit|height|确认删除吗|confirm|del|用户添加|doAdd|delete|view|btn|button|getJSON|false|用户编辑|doEdit'.split('|'),0,{}))
function del(id) {
	if (confirm("确认删除吗？")) {
		window.location.href = "./index.php?s=/Storage/UserManage/delete/user_id/" + id
	}
};

function toAdd() {
	$("#dialog").dialog({
		height: 400,
		width: 650,
		modal: true,
		title: '用户添加',
		buttons: {
			"保存": function() {
				var user_name = $("#user_name").val();
				var user_realname = $("#user_realname").val();
				var user_password = $("#user_password").val();
				var user_password2 = $("#user_password2").val();
				var user_type = $("#user_type").val();
				if (user_password != user_password2) {
					alert("密码不一致,请重新填写");
					toAdd();
					return
				};
				action_url = "./index.php?s=/Storage/UserManage/doAdd";
				if (user_name != "") action_url += "/user_name/" + user_name;
				if (user_realname != "") action_url += "/user_realname/" + user_realname;
				if (user_password != "") action_url += "/user_password/" + user_password;
				if (user_type != "") action_url += "/user_type/" + user_type;
				window.location.href = action_url
			},
			'取消': function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$('#user_name').val('');
			$('#user_realname').val('');
			$('#user_type').val('')
		}
	})
};

function toEdit(user_id) {
	$("#dialog").dialog({
		height: 400,
		width: 650,
		modal: true,
		title: '用户编辑',
		buttons: {
			"保存": function() {
				var user_name = $("#user_name").val();
				var user_realname = $("#user_realname").val();
				var user_password = $("#user_password").val();
				var user_password2 = $("#user_password2").val();
				var user_type = $("#user_type").val();
				if (user_password != user_password2) {
					alert("密码不一致,请重新填写");
					toEdit(user_id);
					return false
				};
				action_url = "./index.php?s=/Storage/UserManage/doEdit/user_id/" + user_id;
				if (user_name != "") action_url += "/user_name/" + user_name;
				if (user_realname != "") action_url += "/user_realname/" + user_realname;
				if (user_password != "") action_url += "/user_password/" + user_password;
				if (user_type != "") action_url += "/user_type/" + user_type;
				window.location.href = action_url
			},
			'取消': function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$.getJSON('./index.php?s=/Storage/UserManage/view/user_id/' + user_id, function(data) {
				$('#user_id').val(data.user_id);
				$('#user_name').val(data.user_name);
				$('#user_realname').val(data.user_realname);
				$('#user_type').val(data.user_type)
			})
		}
	})
};
$(".btn").button();