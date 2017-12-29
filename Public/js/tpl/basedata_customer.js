$(".btn").button();

function del(cust_id) {
	if (confirm("确认删除吗？")) {
		$.get("./index.php?s=/Storage/BaseData/deleteCustomer/cust_id/" + cust_id, function(data) {
			if (data == 1) {
				window.location.href = "./index.php?s=/Storage/BaseData/customer";
			}
		})
	}
};
function toAddCustomer() {
	$("#dialogCustomer").dialog({
		height: 400,
		width: 650,
		title: '客户添加',
		modal: true,
		buttons: {
			"保存": function() {
				var cust_name = $('#cust_name').val();
				var cust_comfullname = $('#cust_comfullname').val();
				var cust_address = $('#cust_address').val();
				var cust_phone = $('#cust_phone').val();
				action_url = "./index.php?s=/Storage/BaseData/doAddCustomer";
				if (cust_name != "") action_url += "/cust_name/" + cust_name;
				if (cust_comfullname != "") action_url += "/cust_comfullname/" + cust_comfullname;
				if (cust_address != "") action_url += "/cust_address/" + cust_address;
				if (cust_phone != "") action_url += "/cust_phone/" + cust_phone;
				$.get(action_url, function(data) {
					if (data == 1) {
						window.location.href = "./index.php?s=/Storage/BaseData/customer";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
};

function toEditCustomer(cust_id) {
	$("#dialogCustomer").dialog({
		height: 400,
		width: 650,
		title: '产品编辑',
		modal: true,
		open: function() {
			$.getJSON("./index.php?s=/Storage/BaseData/getCustomerById/cust_id/" + cust_id, function(data) {
				$('#cust_name').val(data.cust_name);
				$('#cust_comfullname').val(data.cust_comfullname);
				$('#cust_phone').val(data.cust_phone);
				$('#cust_address').val(data.cust_address)
			})
		},
		buttons: {
			"保存": function() {
				var cust_name = $('#cust_name').val();
				var cust_comfullname = $('#cust_comfullname').val();
				var cust_address = $('#cust_address').val();
				var cust_phone = $('#cust_phone').val();
				action_url = "./index.php?s=/Storage/BaseData/doEditCustomer/cust_id/" + cust_id;
				if (cust_name != "") action_url += "/cust_name/" + cust_name;
				if (cust_comfullname != "") action_url += "/cust_comfullname/" + cust_comfullname;
				if (cust_address != "") action_url += "/cust_address/" + cust_address;
				if (cust_phone != "") action_url += "/cust_phone/" + cust_phone;
				$.get(action_url, function(data) {
					if (data == 1) {
						window.location.href = "./index.php?s=/Storage/BaseData/customer";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
}