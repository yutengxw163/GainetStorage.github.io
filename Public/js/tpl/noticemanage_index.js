//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(".M").L();$("#N").P(0(){i.j.h="./c.f?s=/g/c/z/"+$("#z").4()});0 O(d){6(K("H？")){i.j.h="./c.f?s=/g/J/b/"+d}};0 I(){$("#7").7({p:n,k:v,w:"Q",x:t,r:{"y":0(){8 2=$("#2").4();8 3=$("#3").4();8 1=$("#1").4();8 5="./c.f?s=/g/X";6(2!="")5+="/2/"+2;6(3!="")5+="/3/"+3;6(1!="")5+="/1/"+1;i.j.h=5},"q":0(){$(o).7("l")}},m:0(){$("#2").e(\'\');$("#3").e(\'\');$("#1").4(1)}})};0 u(d){$("#7").7({p:n,k:v,w:"W",x:t,r:{"q":0(){$(o).7("l")}},m:0(){$.F(\'./c.f?s=/g/u/b/\'+d,0(9){$("#2").e(9.2);$("#3").e(9.3);$("#1").4(9.1)})}})};0 Z(d){$("#7").7({p:n,k:v,w:"V",x:t,r:{"y":0(){8 b=d;8 2=$("#2").4();8 3=$("#3").4();8 1=$("#1").4();8 5="./c.f?s=/g/T";6(b!="")5+="/b/"+b;6(2!="")5+="/2/"+2;6(3!="")5+="/3/"+3;6(1!="")5+="/1/"+1;i.j.h=5},"q":0(){$(o).7("l")}},m:0(){$.F(\'./c.f?s=/g/u/b/\'+d,0(9){$("#2").e(9.2);$("#3").e(9.3);$("#1").4(9.1)})}})};0 U(a){6($(a).4()==\'B、A、G\'){$(a).C(\'E\',\'D:#R\');$(a).4(\'\')}};0 S(a){6($(a).4()==\'\'){$(a).C(\'E\',\'D:#Y\');$(a).4(\'B、A、G\')}}',62,62,'function|ntc_author|ntc_title|ntc_content|val|url|if|dialog|var|data|obj|ntc_id|index|id|html|php|NoticeManage|href|window|location|width|close|open|400|this|height|关闭|buttons||true|view|650|title|modal|保存|keyword|内容|输入标题|attr|color|style|getJSON|作者|确认删除吗|add|delete|confirm|button|btn|fastSearch|del|click|通知添加|000|fillTip|doEdit|clearTip|通知编辑|通知查看|doAdd|CCC|toEdit'.split('|'),0,{}))
$(".btn").button();
$("#fastSearch").click(function() {
	window.location.href = "./index.php?s=/Storage/NoticeManage/index/keyword/" + $("#keyword").val()
});

function del(id) {
	if (confirm("确认删除吗？")) {
		window.location.href = "./index.php?s=/Storage/NoticeManage/delete/ntc_id/" + id
	}
};

function add() {
	$("#dialog").dialog({
		height: 400,
		width: 650,
		title: "通知添加",
		modal: true,
		buttons: {
			"保存": function() {
				var ntc_title = $("#ntc_title").val();
				var ntc_content = $("#ntc_content").val();
				var ntc_author = $("#ntc_author").val();
				var url = "./index.php?s=/Storage/NoticeManage/doAdd";
				if (ntc_title != "") url += "/ntc_title/" + ntc_title;
				if (ntc_content != "") url += "/ntc_content/" + ntc_content;
				if (ntc_author != "") url += "/ntc_author/" + ntc_author;
				window.location.href = url
			},
			"关闭": function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$("#ntc_title").html('');
			$("#ntc_content").html('');
			$("#ntc_author").val(ntc_author)
		}
	})
};

function view(id) {
	$("#dialog").dialog({
		height: 400,
		width: 650,
		title: "通知查看",
		modal: true,
		buttons: {
			"关闭": function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$.getJSON('./index.php?s=/Storage/NoticeManage/view/ntc_id/' + id, function(data) {
				$("#ntc_title").html(data.ntc_title);
				$("#ntc_content").html(data.ntc_content);
				$("#ntc_author").val(data.ntc_author)
			})
		}
	})
};

function toEdit(id) {
	$("#dialog").dialog({
		height: 400,
		width: 650,
		title: "通知编辑",
		modal: true,
		buttons: {
			"保存": function() {
				var ntc_id = id;
				var ntc_title = $("#ntc_title").val();
				var ntc_content = $("#ntc_content").val();
				var ntc_author = $("#ntc_author").val();
				var url = "./index.php?s=/Storage/NoticeManage/doEdit";
				if (ntc_id != "") url += "/ntc_id/" + ntc_id;
				if (ntc_title != "") url += "/ntc_title/" + ntc_title;
				if (ntc_content != "") url += "/ntc_content/" + ntc_content;
				if (ntc_author != "") url += "/ntc_author/" + ntc_author;
				window.location.href = url
			},
			"关闭": function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$.getJSON('./index.php?s=/Storage/NoticeManage/view/ntc_id/' + id, function(data) {
				$("#ntc_title").html(data.ntc_title);
				$("#ntc_content").html(data.ntc_content);
				$("#ntc_author").val(data.ntc_author)
			})
		}
	})
};

function clearTip(obj) {
	if ($(obj).val() == '输入标题、内容、作者') {
		$(obj).attr('style', 'color:#000');
		$(obj).val('')
	}
};

function fillTip(obj) {
	if ($(obj).val() == '') {
		$(obj).attr('style', 'color:#CCC');
		$(obj).val('输入标题、内容、作者')
	}
}