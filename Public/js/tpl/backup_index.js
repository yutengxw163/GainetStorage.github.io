﻿//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('6 3(0){4(5("d？c")){1.9.2="./7.a?b=/8/3/0/"+0}};6 e(0){4(5("i？j")){1.9.2="./7.a?b=/8/f/0/"+0}};$(".g").h();',20,20,'back_id|window|href|resume|if|confirm|function|index|Backup|location|php|s|确认后数据库也将恢复到该备份之前|确认恢复吗|del|delete|btn|button|确认删除吗|删除后不可恢复'.split('|'),0,{}))
function resume(back_id) {
	if (confirm("确认恢复吗？确认后数据库也将恢复到该备份之前")) {
		//window.location.href = "./index.php?s=/Backup/resume/back_id/" + back_id
		window.location.href = "./index.php?s=/Storage/Backup/resume/back_id/" + back_id
	}
};

function del(back_id) {
	if (confirm("确认删除吗？删除后不可恢复")) {
		//window.location.href = "./index.php?s=/Backup/delete/back_id/" + back_id
		window.location.href = "./index.php?s=/Storage/Backup/delete/back_id/" + back_id
	}
};
$(".btn").button();
