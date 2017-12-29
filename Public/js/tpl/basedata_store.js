$(".btn").button();

function del(id) {
	if (confirm("确认删除吗？")) {
		$.get("./index.php?s=/Storage/BaseData/deleteStore/sto_id/" + id, function(data) {
			if (data == 1) {
				window.location.href = "./index.php?s=/Storage/BaseData/store";
			}
		})
	}
};

function toAddStore() {
	$("#dialogStore").dialog({
		height: 400,
		width: 650,
		title: '仓库添加',
		modal: true,
		open: function() {
			$("#sto_name").val('');
			$("#sto_address").val('');
			$("#sto_storer").val('');
			$("#sto_phone").val('')
		},
		buttons: {
			"保存": function() {
				var sto_name = $("#sto_name").val();
				var sto_address = $("#sto_address").val();
				var sto_storer = $("#sto_storer").val();
				var sto_phone = $("#sto_phone").val();
				var sto_mobile = $("#sto_mobile").val();
				var sto_remark = $("#sto_remark").val();
				var sto_isdefault = $("#sto_isdefault").prop('checked') == true ? 1 : 0;
				action_url = "./index.php?s=/Storage/BaseData/doAddStore";
				if (sto_name != "") action_url += "/sto_name/" + sto_name;
				if (sto_address != "") action_url += "/sto_address/" + sto_address;
				if (sto_storer != "") action_url += "/sto_storer/" + sto_storer;
				if (sto_phone != "") action_url += "/sto_phone/" + sto_phone;
				if (sto_mobile != "") action_url += "/sto_mobile/" + sto_mobile;
				if (sto_remark != "") action_url += "/sto_remark/" + sto_remark;
				action_url += "/sto_isdefault/" + sto_isdefault;
				$.get(action_url, function(data) {
					if (data == 1) {
						window.location.href = "./index.php?s=/Storage/BaseData/store";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
};

function toEditStore(sto_id) {
	$("#dialogStore").dialog({
		height: 400,
		width: 650,
		title: '产品编辑',
		modal: true,
		open: function() {
			$.getJSON("./index.php?s=/Storage/BaseData/getStoreById/sto_id/" + sto_id, function(data) {
				$('#sto_name').val(data.sto_name);
				$('#sto_address').val(data.sto_address);
				$('#sto_storer').val(data.sto_storer);
				$('#sto_phone').val(data.sto_phone);
				$('#sto_mobile').val(data.sto_mobile);
				$('#sto_remark').val(data.sto_remark);
				$('#sto_isdefault').prop('checked', data.sto_isdefault == 1 ? true : false)
			})
		},
		buttons: {
			"保存": function() {
				var sto_name = $("#sto_name").val();
				var sto_address = $("#sto_address").val();
				var sto_storer = $("#sto_storer").val();
				var sto_phone = $("#sto_phone").val();
				var sto_mobile = $("#sto_mobile").val();
				var sto_remark = $("#sto_remark").val();
				var sto_isdefault = $("#sto_isdefault").prop('checked') == true ? 1 : 0;
				action_url = "./index.php?s=/Storage/BaseData/doEditStore/sto_id/" + sto_id;
				if (sto_name != "") action_url += "/sto_name/" + sto_name;
				if (sto_address != "") action_url += "/sto_address/" + sto_address;
				if (sto_storer != "") action_url += "/sto_storer/" + sto_storer;
				if (sto_phone != "") action_url += "/sto_phone/" + sto_phone;
				if (sto_mobile != "") action_url += "/sto_mobile/" + sto_mobile;
				if (sto_remark != "") action_url += "/sto_remark/" + sto_remark;
				action_url += "/sto_isdefault/" + sto_isdefault;
				$.get(action_url, function(data) {
					if (data == 1) {
						window.location.href = "./index.php?s=/Storage/BaseData/store";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
}