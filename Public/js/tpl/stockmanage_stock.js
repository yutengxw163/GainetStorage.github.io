//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(".J").X();3 L(b){$("#w").k({K:N,M:H,U:\'T\',R:S,Q:3(){$.O(\'./j.h?s=/i/P/b/\'+b,3(4){$(\'#d\').2(4.d);$(\'#g\').2(4.g);$(\'#5\').2(4.5);$(\'#6\').2(4.6);$(\'#7\').2(4.7);$(\'#c\').2(4.c);$(\'#f\').2(4.f)})},W:{"V":3(){a d=$("#d").2();a g=$("#g").2();a 5=$("#5").2();a 6=$("#6").2();a 7=$("#7").2();a c=$("#c").2();a f=$("#f").2();9="./j.h?s=/i/I/b/"+b;8(d!="")9+="/d/"+d;8(g!="")9+="/g/"+g;8(5!="")9+="/5/"+5;8(6!="")9+="/6/"+6;8(7!="")9+="/7/"+7;8(c!="")9+="/c/"+c;8(f!="")9+="/f/"+f;$("#w").18();$(y).k("v");$.19(9,3(4){8(4==1){$(\'#z\').z(\'16\',0)}})},\'17\':3(){$(y).k("v")}}})};3 1c(b){8(1a("1b？")){p.q.x="./j.h?s=/i/11/b/"+b}};3 o(r,u){a m=0,l=r.t(),n=u.t();F{m+=l.G(".")[1].B}A(e){} F{m+=n.G(".")[1].B}A(e){} 15 C(l.D(".",""))*C(n.D(".",""))/14.13(10,m)};$(\'#5\').E(3(){$(\'#7\').2(o($(\'#5\').2(),$(\'#6\').2()))});$(\'#6\').E(3(){$(\'#7\').2(o($(\'#5\').2(),$(\'#6\').2()))});$(\'#12\').Y(3(){p.q.x=\'./j.h?s=/i/Z\'});',62,75,'||val|function|data|stk_price|stk_count|stk_total|if|action_url|var|stk_id|stk_store|stk_prodname||stk_remark|stk_cate|php|StockManage|index|dialog|s1||s2|mul|window|location|arg1||toString|arg2|close|dialogStock|href|this|tabs|catch|length|Number|replace|blur|try|split|650|doEditStock|btn|height|toEditStock|width|400|getJSON|getStockById|open|modal|true|库存编辑|title|确认|buttons|button|click|export||delete|btnExport|pow|Math|return|load|取消|remove|get|confirm|确认删除吗|del'.split('|'),0,{}))
$(".btn").button();

function toEditStock(stk_id) {
	$("#dialogStock").dialog({
		height: 400,
		width: 650,
		title: '库存编辑',
		modal: true,
		open: function() {
			$.getJSON('./index.php?s=/Storage/StockManage/getStockById/stk_id/' + stk_id, function(data) {
				$('#stk_prodname').val(data.stk_prodname);
				$('#stk_cate').val(data.stk_cate);
				$('#stk_price').val(data.stk_price);
				$('#stk_count').val(data.stk_count);
				$('#stk_total').val(data.stk_total);
				$('#stk_store').val(data.stk_store);
				$('#stk_remark').val(data.stk_remark)
			})
		},
		buttons: {
			"确认": function() {
				var stk_prodname = $("#stk_prodname").val();
				var stk_cate = $("#stk_cate").val();
				var stk_price = $("#stk_price").val();
				var stk_count = $("#stk_count").val();
				var stk_total = $("#stk_total").val();
				var stk_store = $("#stk_store").val();
				var stk_remark = $("#stk_remark").val();
				action_url = "./index.php?s=/Storage/StockManage/doEditStock/stk_id/" + stk_id;
				if (stk_prodname != "") action_url += "/stk_prodname/" + stk_prodname;
				if (stk_cate != "") action_url += "/stk_cate/" + stk_cate;
				if (stk_price != "") action_url += "/stk_price/" + stk_price;
				if (stk_count != "") action_url += "/stk_count/" + stk_count;
				if (stk_total != "") action_url += "/stk_total/" + stk_total;
				if (stk_store != "") action_url += "/stk_store/" + stk_store;
				if (stk_remark != "") action_url += "/stk_remark/" + stk_remark;
				$("#dialogStock").remove();
				$(this).dialog("close");
				$.get(action_url, function(data) {
					if (data == 1) {
						$('#tabs').tabs('load', 0)
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
};

function del(stk_id) {
	if (confirm("确认删除吗？")) {
		window.location.href = "./index.php?s=/Storage/StockManage/delete/stk_id/" + stk_id
	}
};

function mul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length
	} catch (e) {}
	try {
		m += s2.split(".")[1].length
	} catch (e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
};
$('#stk_price').blur(function() {
	$('#stk_total').val(mul($('#stk_price').val(), $('#stk_count').val()))
});
$('#stk_count').blur(function() {
	$('#stk_total').val(mul($('#stk_price').val(), $('#stk_count').val()))
});
$('#btnExport').click(function() {
	window.location.href = './index.php?s=/Storage/StockManage/export'
});