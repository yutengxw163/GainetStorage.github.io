$(".btn").button();

function del(id) {
	if (confirm("确认删除吗？")) {
		$.get("./index.php?s=/Storage/BaseData/deleteEmployee/emp_id/" + id, function(data) {
			if (data == 1) {
				//$('#tabs').tabs('load', 5)
				window.location.href = "./index.php?s=/Storage/BaseData/employee";
			}
		})
	}
};

function toAddEmployee() {
	$("#dialogEmployee").dialog({
		height: 400,
		width: 650,
		title: '员工添加',
		modal: true,
		open: function() {
			$("#emp_name").val('');
			$("#emp_phone").val('');
			$("#emp_mobile").val('');
			$("#emp_address").val('');
			$("#emp_idnum").val('');
			$("#emp_remark").val('');
			$("#emp_isdefault").val('');
			$("#emp_isleave").val('')
		},
		buttons: {
			"保存": function() {
				var emp_name = $("#emp_name").val();
				var emp_phone = $("#emp_phone").val();
				var emp_mobile = $("#emp_mobile").val();
				var emp_address = $("#emp_address").val();
				var emp_idnum = $("#emp_idnum").val();
				var emp_remark = $("#emp_remark").val();
				var emp_isdefault = $("#emp_isdefault").prop('checked') == true ? 1 : 0;
				var emp_isleave = $("#emp_isleave").prop('checked') == true ? 1 : 0;
				action_url = "./index.php?s=/Storage/BaseData/doAddEmployee";
				if (emp_name != "") action_url += "/emp_name/" + emp_name;
				if (emp_phone != "") action_url += "/emp_phone/" + emp_phone;
				if (emp_mobile != "") action_url += "/emp_mobile/" + emp_mobile;
				if (emp_address != "") action_url += "/emp_address/" + emp_address;
				if (emp_idnum != "") action_url += "/emp_idnum/" + emp_idnum;
				if (emp_remark != "") action_url += "/emp_remark/" + emp_remark;
				action_url += "/emp_isdefault/" + emp_isdefault;
				action_url += "/emp_isleave/" + emp_isleave;
				//$(this).dialog("close");
				$.get(action_url, function(data) {
					if (data == 1) {
						//$('#tabs').tabs('load', 5)
						window.location.href = "./index.php?s=/Storage/BaseData/employee";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
};

function toEditEmployee(emp_id) {
	$("#dialogEmployee").dialog({
		height: 400,
		width: 650,
		title: '员工编辑',
		modal: true,
		open: function() {
			$.getJSON("./index.php?s=/Storage/BaseData/getEmployeeById/emp_id/" + emp_id, function(data) {
				$('#emp_name').val(data.emp_name);
				if (data.emp_isdefault == 1) $('#emp_isdefault').prop('checked', true);
				if (data.emp_isleave == 1) $('#emp_isleave').prop('checked', true);
				$('#emp_phone').val(data.emp_phone);
				$('#emp_mobile').val(data.emp_mobile);
				$('#emp_idnum').val(data.emp_idnum);
				$('#emp_address').val(data.emp_address);
				$('#emp_remark').val(data.emp_remark)
			})
		},
		buttons: {
			"保存": function() {
				var emp_name = $("#emp_name").val();
				var emp_isdefault = $("#emp_isdefault").prop('checked') == true ? 1 : 0;
				var emp_isleave = $("#emp_isleave").prop('checked') == true ? 1 : 0;
				var emp_phone = $("#emp_phone").val();
				var emp_mobile = $("#emp_mobile").val();
				var emp_idnum = $("#emp_idnum").val();
				var emp_address = $("#emp_address").val();
				var emp_remark = $("#emp_remark").val();
				action_url = "./index.php?s=/Storage/BaseData/doEditEmployee/emp_id/" + emp_id;
				if (emp_name != "") action_url += "/emp_name/" + emp_name;
				action_url += "/emp_isdefault/" + emp_isdefault;
				action_url += "/emp_isleave/" + emp_isleave;
				if (emp_phone != "") action_url += "/emp_phone/" + emp_phone;
				if (emp_mobile != "") action_url += "/emp_mobile/" + emp_mobile;
				if (emp_idnum != "") action_url += "/emp_idnum/" + emp_idnum;
				if (emp_address != "") action_url += "/emp_address/" + emp_address;
				if (emp_remark != "") action_url += "/emp_remark/" + emp_remark;
				//$(this).dialog("close");
				$.get(action_url, function(data) {
					if (data == 1) {
						//$('#tabs').tabs('load', 5)
						window.location.href = "./index.php?s=/Storage/BaseData/employee";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
}