function noticeView(id) {
	$("#dialog").dialog({
		height: 400,
		width: 650,
		title: '通知查看',
		modal: true,
		buttons: {
			"关闭": function() {
				$(this).dialog("close")
			}
		},
		open: function() {
			$.getJSON('./index.php?s=/Storage/Index/noticeView/ntc_id/' + id, function(data) {
				$("#ntc_title").html(data.ntc_title);
				$("#ntc_content").html(data.ntc_content);
				$("#ntc_author").val(data.ntc_author)
			})
		}
	})
};

function checkUpdate() {
	$.ajax({
		url: '#',
		async: false,
		error: function() {
			$('#newStr').html("<a href='#' onClick='checkUpdate()'>目前无法更新</a>")
		},
		success: function(data, state) {
			$('#newStr').html("<a href='#' onClick='checkUpdate()'>" + "最新版本:" + data.version + "</a>")
		}
	})
};

function formatFloat(src, pos) {
	return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos)
};

Highcharts.setOptions({
    lang:{
       contextButtonTitle:"图表导出菜单",
       decimalPoint:".",
       downloadJPEG:"下载JPEG图片",
       downloadPDF:"下载PDF文件",
       downloadPNG:"下载PNG文件",
       downloadSVG:"下载SVG文件",
       drillUpText:"返回 {series.name}",
       loading:"加载中",
       months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
       noData:"没有数据",
       numericSymbols: [ "千" , "兆" , "G" , "T" , "P" , "E"],
       printChart:"打印图表",
       resetZoom:"恢复缩放",
       resetZoomTitle:"恢复图表",
       shortMonths: [ "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"],
       thousandsSep:",",
       weekdays: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六","星期天"]
    }
});

$(document).ready(function() {
	var chart1 = new Highcharts.Chart({
		chart: {
			renderTo: 'container1',
			type: 'line',
			marginRight: 130,
			marginBottom: 25,
			height: 160
		},
		title: {
			text: ' ',
			x: -20
		},
		xAxis: {
			categories: line_cate
		},
		yAxis: {
			title: {
				text: '数量(件)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: false
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>' + this.series.name + '</b><br/>' + this.x + ' : ' + this.y + '个'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -10,
			y: 100,
			borderWidth: 0
		},
		series: [{
			name: '入库',
			data: line_count_in
		}, {
			name: '出库',
			data: line_count_out
		}]
	});
	var chart2 = new Highcharts.Chart({
		chart: {
			renderTo: 'container2',
			type: 'line',
			marginRight: 130,
			marginBottom: 25,
			height: 160
		},
		title: {
			text: ' ',
			x: -20
		},
		xAxis: {
			categories: line_cate
		},
		yAxis: {
			title: {
				text: '金额(元)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: false
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>' + this.series.name + '</b><br/>' + this.x + ' : ' + this.y + '个'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -10,
			y: 100,
			borderWidth: 0
		},
		series: [{
			name: '入库',
			data: line_total_in
		}, {
			name: '出库',
			data: line_total_out
		}]
	});
	chart3 = new Highcharts.Chart({
		chart: {
			renderTo: 'container3',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			height: 200,
	        options3d: {
	            enabled: true,
	            alpha: 45,
	            beta: 0
	        }
		},
		title: {
			text: '出入库总金额比率图',
			style: {
				fontSize: '12px'
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>' + this.point.name + '</b>: ' + formatFloat(this.percentage, 0) + ' %'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
	            depth: 15,
				dataLabels: {
					enabled: true,
					color: '#000000',
					distance: 18,
					softConnector: true,
					connectorColor: '#000000',
					formatter: function() {
						return '<b>' + this.point.name + '</b>: ' + formatFloat(this.percentage, 0) + ' %'
					}
				},
				showInLegend: false
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['入库总金额', pie_in_total],
				['出库总金额', pie_out_total]
			]
		}]
	});
	chart4 = new Highcharts.Chart({
		chart: {
			renderTo: 'container4',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			height: 200,
	        options3d: {
	            enabled: true,
	            alpha: 45,
	            beta: 0
	        }
		},
		title: {
			text: '出入库总数量比率图',
			style: {
				fontSize: '12px'
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>' + this.point.name + '</b>: ' + formatFloat(this.percentage, 0) + ' %'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
	            depth: 15,
				dataLabels: {
					enabled: true,
					color: '#000000',
					distance: 18,
					connectorColor: '#000000',
					formatter: function() {
						return '<b>' + this.point.name + '</b>: ' + formatFloat(this.percentage, 0) + ' %'
					}
				},
				showInLegend: false
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['入库总数量', pie_in_count],
				['出库总数量', pie_out_count]
			]
		}]
	})
});