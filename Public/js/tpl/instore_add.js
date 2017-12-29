$(".btn").button();
var id_num = 0;

function getRow(id_num) {
	var row = "<tr id='row_" + id_num + "'>"
			+ "<td align='center'><input name='iss_prodname[]' type='text' id='iss_prodname_" + id_num + "' size='17' value='请输入关键字或空格' style='color:#CCC' onfocus='clearTip(this)' onblur='fillTip(this)'/></td>"
			+ "<td align='center'><input type='text' id='iss_cate_name_" + id_num + "' size='10' disabled='disabled'/></td>"
			+ "<td align='center'><input name='iss_price[]' type='text' id='iss_price_" + id_num + "' size='10' onblur='compute(" + id_num + ")'/></td>"
			+ "<td align='center'><input name='iss_count[]' type='text' id='iss_count_" + id_num + "' size='10' onblur='compute(" + id_num + ")'/></td>"
			+ "<td align='center'><input name='iss_total[]' type='text' id='iss_total_" + id_num + "' size='10'/></td>"
			+ "<td align='center'>" + "<select name='iss_store[]' id='iss_store_" + id_num + "'>"
			+ "<option value=''>--请选择--</option>"
			+ "</select>"
			+ "</td>"
			+ "<td align='center'><input name='iss_remark[]' type='text' id='iss_remark' size='25' /></td>"
			+ "<td align='center'><a href='#' id='linkDelete_" + id_num + "' name='linkDelete' onclick='deleteRow(" + id_num + ")'>删除</a></td>"
			+ "<input name='row_count[]' type='hidden' value='" + id_num + "'>"
			+ "<input id='iss_cate_id_" + id_num + "' name='iss_cate[]' type='hidden'>" 
			+ "<input id='iss_prod_" 	+ id_num + "' name='iss_prod[]' type='hidden'>" 
			+ "</tr>";
	return row
};

function deleteRow(rowid) {
	$("#row_" + rowid).remove()
};

$("#btnAdd").click(function() {
	var row = getRow(id_num);
	$("#table").append(row);
	bindAutoComplete(id_num);
	bindStore(id_num);
	id_num++
});

function bindStore(id) {
	var isdefault;
	$.getJSON('./index.php?s=/Storage/Instore/getStore', function(data) {
		$.each(data, function(index, ele) {
			isdefault = ele.isdefault == 1 ? "selected=true" : '';
			$('#iss_store_' + id).append(
					"<option value='" + ele.id + "' " + isdefault + ">"
							+ ele.value + "</option>")
		})
	})
};

function deleteRow(rowid) {
	$("#row_" + rowid).remove()
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

function mul(arg1, arg2) {
	var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length
	} catch (e) {
	}
	try {
		m += s2.split(".")[1].length
	} catch (e) {
	}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", ""))
			/ Math.pow(10, m)
};

function compute(id_num) {
	var arg1 = $("#iss_price_" + id_num).val();
	var arg2 = $("#iss_count_" + id_num).val();
	$("#iss_total_" + id_num).val(mul(arg1, arg2))
};

$.widget("custom.catcomplete",$.ui.autocomplete,
				{
					_renderMenu : function(ul, items) {
						var self = this, currentCategory = "";
						ul.append("<li style='font-weight:bold;font-style:italic'><a>添加产品</a></li>");
						$.each(items,function(index, item) {
									if (item.category != currentCategory) {
										ul.append("<li class='ui-autocomplete-category'>"
														+ item.category
														+ "</li>");
										currentCategory = item.category
									};
									self._renderItemData(ul, item)
								})
					}
				});

$.widget('custom.autocomplete_operator',$.ui.autocomplete,
				{
					_renderMenu : function(ul, items) {
						var self = this;
						ul.append("<li style='font-weight:bold;font-style:italic'><a>添加经办人</a></li>");
						$.each(items, function(index, item) {
							self._renderItemData(ul, item)
						})
					}
				});

$.widget('custom.autocomplete_supplier',$.ui.autocomplete,
				{
					_renderMenu : function(ul, items) {
						var self = this;
						ul.append("<li style='font-weight:bold;font-style:italic'><a>添加供应商</a></li>");
						$.each(items, function(index, item) {
							self._renderItemData(ul, item)
						})
					}
				});

function bindAutoComplete(id_num) {
	$("#iss_prodname_" + id_num).catcomplete({
		source : './index.php?s=/Storage/Instore/getProduct',
		minLength : 1,
		delay : 0,
		select : function(event, ui) {
			if (typeof (ui.item) == 'undefined') {
				window.location.href = './index.php?s=/Storage/BaseData/index';
				return false
			}
			;
			$("#iss_prod_" + id_num).val(ui.item.prod_id);
			$("#iss_prodname_" + id_num).val(ui.item.prod_name);
			$("#iss_price_" + id_num).val(ui.item.prod_price);
			$("#iss_count_" + id_num).val(1);
			$("#iss_total_" + id_num).val(ui.item.prod_price);
			$("#iss_cate_id_" + id_num).val(ui.item.prod_cate);
			$("#iss_cate_name_" + id_num).val(ui.item.pdca_name)
		}
	})
};

$(function() {
	$("#ism_supplier_name").autocomplete_supplier(
					{
						source : './index.php?s=/Storage/Instore/getSupplier',
						minLength : 1,
						delay : 0,
						select : function(event, ui) {
							if (typeof (ui.item) == 'undefined') {
								window.location.href = './index.php?s=/Storage/BaseData/index/selectNum/2';
								return false
							}
							;
							$("#ism_supplier").val(ui.item.id)
						}
					});
	$("#ism_operator_name").autocomplete_operator(
					{
						source : './index.php?s=/Storage/Instore/getOperator',
						minLength : 1,
						delay : 0,
						select : function(event, ui) {
							debugger;
							if (typeof (ui.item) == 'undefined') {
								window.location.href = './index.php?s=/Storage/BaseData/index/selectNum/5';
								return false
							}
							;
							$("#ism_operator").val(ui.item.id)
						}
					});

	switch (action) {
	case 'add':
		url = url + '/doAdd';
		break;
	case 'update':
		url = url + '/doEdit';
		$("input[name='iss_prodname[]']").each(function(index, ele) {
			bindAutoComplete(index)
		})
	}
	;
	$('#form1').attr('action', url)
});