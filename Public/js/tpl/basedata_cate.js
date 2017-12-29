$(".btn").button();

function del(pdca_id) {
	if (confirm("确认删除吗？")) {
		$.get("./index.php?s=/Storage/BaseData/deleteCate/pdca_id/" + pdca_id, function(data) {
			if (data == 1) {
				//$('#tabs').tabs('load', 1)
				window.location.href = "./index.php?s=/Storage/BaseData/cate";
			}
		})
	}
};

function toAddCate() {
	$("#dialogCate").dialog({
		height: 400,
		width: 650,
		title: '产品类别添加',
		modal: true,
		buttons: {
			"保存": function() {
				var pdca_name = $("#pdca_name").val();
				action_url = "./index.php?s=/Storage/BaseData/doAddCate";
				if (pdca_name != "") action_url += "/pdca_name/" + pdca_name;
				$.get(action_url, function(data) {
					if (data == 1) {
						//$('#tabs').tabs('load', 1)
						window.location.href = "./index.php?s=/Storage/BaseData/cate";
					}
				});
				$(this).dialog("close")
			},
			'取消': function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$('#pdca_name').val('')
		}
	})
};

function toEditCate(pdca_id) {
	$("#dialogCate").dialog({
		height: 400,
		width: 650,
		title: '产品类别编辑',
		modal: true,
		open: function() {
			$.getJSON("./index.php?s=/Storage/BaseData/getProdCateById/pdca_id/" + pdca_id, function(data) {
				$('#pdca_name').val(data.pdca_name)
			})
		},
		buttons: {
			"保存": function() {
				var pdca_name = $('#pdca_name').val();
				action_url = "./index.php?s=/Storage/BaseData/doEditCate/pdca_id/" + pdca_id;
				if (pdca_name != "") action_url += "/pdca_name/" + pdca_name;
				//$(this).dialog("close");
				$.get(action_url, function(data) {
					if (data == 1) {
						//$('#tabs').tabs('load', 1)
						window.location.href = "./index.php?s=/Storage/BaseData/cate";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
}