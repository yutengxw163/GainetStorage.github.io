$(".btn").button();

function del(id) {
	if (confirm("确认删除吗？")) {
		$.get("./index.php?s=/Storage/BaseData/deleteSupplier/sup_id/" + id, function(data) {
			if (data == 1) {
				//$('#tabs').tabs('load', 2)
				window.location.href = "./index.php?s=/Storage/BaseData/supplier";
			}
		})
	}
};

function toAddSupplier() {
	$("#dialogSupplier").dialog({
		height: 400,
		width: 650,
		title: '供应商添加',
		modal: true,
		buttons: {
			"保存": function() {
				var sup_name = $("#sup_name").val();
				var sup_linkman = $("#sup_linkman").val();
				var sup_phone = $("#sup_phone").val();
				var sup_mobile = $("#sup_mobile").val();
				var sup_fax = $("#sup_fax").val();
				var sup_address = $("#sup_address").val();
				var sup_remark = $("#sup_remark").val();
				action_url = "./index.php?s=/Storage/BaseData/doAddSupplier";
				if (sup_name != "") action_url += "/sup_name/" + sup_name;
				if (sup_linkman != "") action_url += "/sup_linkman/" + sup_linkman;
				if (sup_phone != "") action_url += "/sup_phone/" + sup_phone;
				if (sup_mobile != "") action_url += "/sup_mobile/" + sup_mobile;
				if (sup_fax != "") action_url += "/sup_fax/" + sup_fax;
				if (sup_address != "") action_url += "/sup_address/" + sup_address;
				if (sup_remark != "") action_url += "/sup_remark/" + sup_remark;
				//$(this).dialog("close");
				$.get(action_url, function(data) {
					if (data == 1) {
						//$('#tabs').tabs('load', 2)
						window.location.href = "./index.php?s=/Storage/BaseData/supplier";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
};

function toEditSupplier(sup_id) {
	$("#dialogSupplier").dialog({
		height: 400,
		width: 650,
		title: '供应商编辑',
		modal: true,
		open: function() {
			$.getJSON("./index.php?s=/Storage/BaseData/getSupplierById/sup_id/" + sup_id, function(data) {
				$('#sup_name').val(data.sup_name);
				$('#sup_linkman').val(data.sup_linkman);
				$('#sup_phone').val(data.sup_phone);
				$('#sup_mobile').val(data.sup_mobile);
				$('#sup_fax').val(data.sup_fax);
				$('#sup_address').val(data.sup_address);
				$('#sup_remark').val(data.sup_remark)
			})
		},
		buttons: {
			"保存": function() {
				var sup_name = $("#sup_name").val();
				var sup_linkman = $("#sup_linkman").val();
				var sup_phone = $("#sup_phone").val();
				var sup_mobile = $("#sup_mobile").val();
				var sup_fax = $("#sup_fax").val();
				var sup_address = $("#sup_address").val();
				var sup_remark = $("#sup_remark").val();
				action_url = "./index.php?s=/Storage/BaseData/doEditSupplier/sup_id/" + sup_id;
				if (sup_name != "") action_url += "/sup_name/" + sup_name;
				if (sup_linkman != "") action_url += "/sup_linkman/" + sup_linkman;
				if (sup_phone != "") action_url += "/sup_phone/" + sup_phone;
				if (sup_mobile != "") action_url += "/sup_mobile/" + sup_mobile;
				if (sup_fax != "") action_url += "/sup_fax/" + sup_fax;
				if (sup_address != "") action_url += "/sup_address/" + sup_address;
				if (sup_remark != "") action_url += "/sup_remark/" + sup_remark;
				//$(this).dialog("close");
				$.get(action_url, function(data) {
					if (data == 1) {
						//$('#tabs').tabs('load', 2)
						window.location.href = "./index.php?s=/Storage/BaseData/supplier";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
};