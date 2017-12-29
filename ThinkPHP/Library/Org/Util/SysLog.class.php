<?php
/**
 * Think仓储管理系统
 * @author:duncan
 * @date:2011-11-7
 * @qq:575773080
 * @email:575773080@qq.com
 */
namespace Org\Util;
use Think\Think;
class SysLog{
	public static function writeLog($action){
		$model=M("log");
		$data["log_operator_name"]=$_SESSION['user']["user_name"];
		$data["log_operator_realname"]=$_SESSION['user']["user_realname"];
		$data["log_datetime"]=date("Y-m-d H:i:s");
		$data["log_action"]=$action;
		$data["log_ip"]=$_SERVER['REMOTE_ADDR'];
		$model->add($data);
	}
	
	function getIP($ip){
		$ipArray=explode('.',$ip);
		$ipArray[1]='*';
		$ipArray[2]='*';
		return implode('.',$ipArray);	
	}
}
?>
