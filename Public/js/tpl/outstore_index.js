//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(".1i").1j();$("#o").11({1a:J});$("#p").11({1a:J});$("#1k").S(3(){C.F.E="./5.b?s=/a/5/Q/"+$("#Q").2()+"/V/"+$("#V").2()});$("#1g").S(3(){C.F.E="./5.b?s=/a/1h"});3 1l(r){4(1p("1q？")){C.F.E="./5.b?s=/a/1o/r/"+r}};3 1m(g){4($(g).2()==\'k\'){$(g).T(\'X\',\'W:#1n\');$(g).2(\'\')}};3 1e(g){4($(g).2()==\'\'){$(g).T(\'X\',\'W:#1d\');$(g).2(\'k\')}};$.1f("1F.O",$.6.q,{1G:3(L,P){7 U=12,I="";$.1E(P,3(5,d){4(d.D!=I){L.1C("<Y 1D=\'6-q-D\'>"+d.D+"</Y>");I=d.D};U.1H(L,d)})}});3 1K(){$("#B").B({M:N,K:1J,1I:J,1B:{"1u":3(){7 9=$("#B").1v();7 u=9.c("e[f=\'u\']").2();7 h=9.c("e[f=\'h\']").2();7 i=9.c("e[f=\'i\']").2();7 x=9.c("e[f=\'x\']").2();7 y=9.c("e[f=\'y\']").2();7 n=9.c("e[f=\'n\']").2();7 l=9.c("e[f=\'l\']").2();7 o=9.c("e[f=\'o\']").2();7 p=9.c("e[f=\'p\']").2();7 j=9.c("e[f=\'j\']").2();8="./5.b?s=/a/5";4(u!="")8+="/u/"+u;4(h!="k")8+="/h/"+h;4(i!="k")8+="/i/"+i;4(x!="")8+="/x/"+x;4(y!="")8+="/y/"+y;4(n!="k")8+="/n/"+n;4(l!="k")8+="/l/"+l;4(o!="")8+="/o/"+o;4(p!="")8+="/p/"+p;4(j!="k")8+="/j/"+j;C.F.E=8},\'1A\':3(){$(12).B("1y")}}})};3 10(A){$.H.13({16:"./5.b?s=/a/10/r/"+A,14:\'1w\',M:\'N\',K:\'1c\'}).1b(\'18\',3(m,6){4($.H.19=="17"){}Z{}})};3 15(A){$.H.13({16:"./5.b?s=/a/15/r/"+A,14:\'1x\',M:\'N\',K:\'1c\'}).1b(\'18\',3(m,6){4($.H.19=="17"){}Z{}})};$(3(){$("#j").O({v:\'./5.b?s=/a/1z\',w:1,z:0,t:3(m,6){$(\'#j\').2(6.d.1s)}});$("#h").q({v:\'./5.b?s=/a/1r\',w:1,z:0,t:3(m,6){$("#h").2(6.d.G)}});$("#i").q({v:\'./5.b?s=/a/R\',w:1,z:0,t:3(m,6){$("#i").2(6.d.G)}});$("#l").q({v:\'./5.b?s=/a/R\',w:1,z:0,t:3(m,6){$("#l").2(6.d.G)}});$("#n").q({v:\'./5.b?s=/a/1t\',w:1,z:0,t:3(m,6){$("#n").2(6.d.G)}})});',62,109,'||val|function|if|index|ui|var|action_url|content|Outstore|php|find|item|input|name|obj|osm_customer_name|osm_operator_name|oss_prodname|请输入关键字或空格|osm_writer_name|event|oss_store_name|osm_date_start|osm_date_end|autocomplete|osm_id||select|osm_sn|source|minLength|oss_total_start|oss_total_end|delay|id|dialog|window|category|href|location|value|FrameDialog|currentCategory|true|width|ul|height|400|catcomplete|items|searchBy|getOperator|click|attr|self|keyword|color|style|li|else|view|datepicker|this|create|title|toEdit|url|OK|dialogclose|_results|changeYear|bind|600|CCC|fillTip|widget|btnAdd|add|btn|button|fastSearch|del|clearTip|000|delete|confirm|确认删除吗|getCustomer|prod_name|getStore|确认|contents|查看|编辑|close|getProduct|取消|buttons|append|class|each|custom|_renderMenu|_renderItem|modal|650|toSearch'.split('|'),0,{}))
$(".btn").button();
$("#osm_date_start").datepicker({
	changeYear: true
});
$("#osm_date_end").datepicker({
	changeYear: true
});
$("#fastSearch").click(function() {
	//window.location.href = "./index.php?s=/Outstore/index/searchBy/" + $("#searchBy").val() + "/keyword/" + $("#keyword").val()
	window.location.href = "./index.php?s=/Storage/Outstore/index/searchBy/" + $("#searchBy").val() + "/keyword/" + $("#keyword").val()
});
$("#btnAdd").click(function() {
	//window.location.href = "./index.php?s=/Outstore/add"
	window.location.href = "./index.php?s=/Storage/Outstore/add"
});

function del(osm_id) {
	if (confirm("确认删除吗？")) {
		//window.location.href = "./index.php?s=/Outstore/delete/osm_id/" + osm_id
		window.location.href = "./index.php?s=/Storage/Outstore/delete/osm_id/" + osm_id
	}
};

function clearTip(obj) {
	if ($(obj).val() == '请输入关键字或空格') {
		$(obj).attr('style', 'color:#000');
		$(obj).val('')
	}
};

function fillTip(obj) {
	if ($(obj).val() == '') {
		$(obj).attr('style', 'color:#CCC');
		$(obj).val('请输入关键字或空格')
	}
};
$.widget("custom.catcomplete", $.ui.autocomplete, {
	_renderMenu: function(ul, items) {
		var self = this,
			currentCategory = "";
		$.each(items, function(index, item) {
			if (item.category != currentCategory) {
				ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
				currentCategory = item.category
			};
			self._renderItemData(ul, item)
		})
	}
});

function toSearch() {
	$("#dialog").dialog({
		height: 400,
		width: 650,
		modal: true,
		buttons: {
			"确认": function() {
				var content = $("#dialog").contents();
				var osm_sn = content.find("input[name='osm_sn']").val();
				var osm_customer_name = content.find("input[name='osm_customer_name']").val();
				var osm_operator_name = content.find("input[name='osm_operator_name']").val();
				var oss_total_start = content.find("input[name='oss_total_start']").val();
				var oss_total_end = content.find("input[name='oss_total_end']").val();
				var oss_store_name = content.find("input[name='oss_store_name']").val();
				var osm_writer_name = content.find("input[name='osm_writer_name']").val();
				var osm_date_start = content.find("input[name='osm_date_start']").val();
				var osm_date_end = content.find("input[name='osm_date_end']").val();
				var oss_prodname = content.find("input[name='oss_prodname']").val();
				//action_url = "./index.php?s=/Outstore/index";
				action_url = "./index.php?s=/Storage/Outstore/index";
				if (osm_sn != "") action_url += "/osm_sn/" + osm_sn;
				if (osm_customer_name != "请输入关键字或空格") action_url += "/osm_customer_name/" + osm_customer_name;
				if (osm_operator_name != "请输入关键字或空格") action_url += "/osm_operator_name/" + osm_operator_name;
				if (oss_total_start != "") action_url += "/oss_total_start/" + oss_total_start;
				if (oss_total_end != "") action_url += "/oss_total_end/" + oss_total_end;
				if (oss_store_name != "请输入关键字或空格") action_url += "/oss_store_name/" + oss_store_name;
				if (osm_writer_name != "请输入关键字或空格") action_url += "/osm_writer_name/" + osm_writer_name;
				if (osm_date_start != "") action_url += "/osm_date_start/" + osm_date_start;
				if (osm_date_end != "") action_url += "/osm_date_end/" + osm_date_end;
				if (oss_prodname != "请输入关键字或空格") action_url += "/oss_prodname/" + oss_prodname;
				window.location.href = action_url
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
};

function view(id) {
	$.FrameDialog.create({
		url: "./index.php?s=/Storage/Outstore/view/osm_id/" + id,
		title: '查看',
		height: '400',
		width: '600'
	}).bind('dialogclose', function(event, ui) {
		if ($.FrameDialog._results == "OK") {} else {}
	})
};

function toEdit(id) {
	$.FrameDialog.create({
		url: "./index.php?s=/Storage/Outstore/toEdit/osm_id/" + id,
		title: '编辑',
		height: '400',
		width: '600'
	}).bind('dialogclose', function(event, ui) {
		if ($.FrameDialog._results == "OK") {} else {}
	})
};
$(function() {
	$("#oss_prodname").catcomplete({
		source: './index.php?s=/Storage/Outstore/getProduct',
		minLength: 1,
		delay: 0,
		select: function(event, ui) {
			$('#oss_prodname').val(ui.item.prod_name)
		}
	});
	$("#osm_customer_name").autocomplete({
		source: './index.php?s=/Storage/Outstore/getCustomer',
		minLength: 1,
		delay: 0,
		select: function(event, ui) {
			$("#osm_customer_name").val(ui.item.value)
		}
	});
	$("#osm_operator_name").autocomplete({
		source: './index.php?s=/Storage/Outstore/getOperator',
		minLength: 1,
		delay: 0,
		select: function(event, ui) {
			$("#osm_operator_name").val(ui.item.value)
		}
	});
	$("#osm_writer_name").autocomplete({
		source: './index.php?s=/Storage/Outstore/getOperator',
		minLength: 1,
		delay: 0,
		select: function(event, ui) {
			$("#osm_writer_name").val(ui.item.value)
		}
	});
	$("#oss_store_name").autocomplete({
		source: './index.php?s=/Storage/Outstore/getStore',
		minLength: 1,
		delay: 0,
		select: function(event, ui) {
			$("#oss_store_name").val(ui.item.value)
		}
	})
});