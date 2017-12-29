$(".btn").button();

function del(id) {
	if (confirm("确认删除吗？")) {
		$.get("./index.php?s=/Storage/BaseData/deleteProduct/prod_id/" + id, function(data) {
			if (data == 1) {
				window.location.href = "./index.php?s=/Storage/BaseData/deleteProduct/prod_id/" + id;
			}
		})
	}
};
$('#prod_cate').click(function() {
	if ($(this).val() == '-1') {
		$("#dialogProduct").dialog('close');
		//$('#tabs').tabs('select', 1)
		window.location.href = "./index.php?s=/Storage/BaseData/cate";
	}
});
function toAddProduct() {
	$("#dialogProduct").dialog({
		height: 400,
		width: 650,
		title: '产品添加',
		modal: true,
		buttons: {
			"保存": function() {
				var prod_name = $("#prod_name").val();
				var prod_price = $("#prod_price").val();
				var prod_cate = $("#prod_cate").val();
				action_url = "./index.php?s=/Storage/BaseData/doAddProduct";
				if (prod_cate != "") action_url += "/prod_cate/" + prod_cate;
				if (prod_name != "") action_url += "/prod_name/" + prod_name;
				if (prod_price != "") action_url += "/prod_price/" + prod_price;
				//$(this).dialog('close');
				$.get(action_url, function(data) {
					if (data == 1) {
						window.location.href = "./index.php?s=/Storage/BaseData/product";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$('#prod_cate').val(0);
			$('#prod_name').val('');
			$('#prod_price').val('');
			$('#prod_count').val('')
		}
	})
};

function toEditProduct(prod_id) {
	$("#dialogProduct").dialog({
		height: 400,
		width: 650,
		title: '产品编辑',
		modal: true,
		open: function() {
			$.getJSON("./index.php?s=/Storage/BaseData/getProdById/prod_id/" + prod_id, function(data) {
				$('#prod_cate').val(data.prod_cate);
				$('#prod_name').val(data.prod_name);
				$('#prod_price').val(data.prod_price);
				$('#prod_count').val(data.prod_count)
			})
		},
		buttons: {
			"保存": function() {
				var prod_name = $("#prod_name").val();
				var prod_price = $("#prod_price").val();
				var prod_cate = $("#prod_cate").val();
				action_url = "./index.php?s=/Storage/BaseData/doEditProduct/prod_id/" + prod_id;
				if (prod_name != "") action_url += "/prod_name/" + prod_name;
				if (prod_cate != "") action_url += "/prod_cate/" + prod_cate;
				if (prod_price != "") action_url += "/prod_price/" + prod_price;
				//$(this).dialog("close");
				$.get(action_url, function(data) {
					if (data == 1) {
						//$('#tabs').tabs('load', 0)
						window.location.href = "./index.php?s=/Storage/BaseData/product";
					}
				})
			},
			'取消': function() {
				$(this).dialog("close")
			}
		}
	})
}