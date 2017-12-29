DROP TABLE IF EXISTS `twms_backup`;CREATE TABLE `twms_backup` (
  `back_id` int(11) NOT NULL AUTO_INCREMENT,
  `back_name` varchar(50) DEFAULT NULL,
  `back_path` varchar(100) DEFAULT NULL,
  `back_datetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`back_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_customer`;CREATE TABLE `twms_customer` (
  `cust_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cust_name` varchar(15) DEFAULT NULL,
  `cust_comfullname` varchar(50) DEFAULT NULL,
  `cust_address` varchar(300) DEFAULT NULL,
  `cust_phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cust_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_employee`;CREATE TABLE `twms_employee` (
  `emp_id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_name` varchar(30) DEFAULT NULL,
  `emp_phone` varchar(25) DEFAULT NULL,
  `emp_mobile` varchar(25) DEFAULT NULL,
  `emp_address` varchar(100) DEFAULT NULL,
  `emp_idnum` varchar(18) DEFAULT NULL,
  `emp_remark` varchar(300) DEFAULT NULL,
  `emp_isdefault` tinyint(1) DEFAULT NULL,
  `emp_isleave` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_instore_main`;CREATE TABLE `twms_instore_main` (
  `ism_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ism_sn` varchar(30) DEFAULT NULL,
  `ism_operator` int(11) DEFAULT NULL,
  `ism_writer` varchar(30) DEFAULT NULL,
  `ism_datetime` datetime DEFAULT NULL,
  `ism_phone` varchar(20) DEFAULT NULL,
  `ism_contactor` varchar(15) DEFAULT NULL,
  `ism_supplier` int(11) DEFAULT NULL,
  `ism_total` decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (`ism_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;DROP TABLE IF EXISTS `twms_instore_sub`;CREATE TABLE `twms_instore_sub` (
  `iss_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `iss_mainid` int(11) DEFAULT NULL,
  `iss_prod` int(11) DEFAULT NULL,
  `iss_prodname` varchar(50) DEFAULT NULL,
  `iss_cate` int(11) DEFAULT NULL,
  `iss_price` decimal(20,2) DEFAULT NULL,
  `iss_count` float(11,0) DEFAULT NULL,
  `iss_total` decimal(20,2) DEFAULT NULL,
  `iss_store` int(11) DEFAULT NULL,
  `iss_remark` varchar(300) DEFAULT NULL,
  `iss_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`iss_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_log`;CREATE TABLE `twms_log` (
  `log_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `log_operator_name` varchar(20) DEFAULT NULL,
  `log_operator_realname` varchar(20) DEFAULT NULL,
  `log_datetime` datetime DEFAULT NULL,
  `log_action` varchar(30) DEFAULT NULL,
  `log_ip` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`log_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;insert into `twms_log`(`log_id`,`log_operator_name`,`log_operator_realname`,`log_datetime`,`log_action`,`log_ip`) values('1','admin','管理员','2017-08-10 17:07:32','用户登录','::1');DROP TABLE IF EXISTS `twms_notice`;CREATE TABLE `twms_notice` (
  `ntc_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ntc_title` varchar(200) DEFAULT NULL,
  `ntc_content` varchar(1000) DEFAULT NULL,
  `ntc_author` varchar(15) DEFAULT NULL,
  `ntc_datetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ntc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_outstore_main`;CREATE TABLE `twms_outstore_main` (
  `osm_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `osm_sn` varchar(30) DEFAULT NULL,
  `osm_customer` int(11) DEFAULT NULL,
  `osm_datetime` datetime DEFAULT NULL,
  `osm_operator` int(11) DEFAULT NULL,
  `osm_phone` varchar(30) DEFAULT NULL,
  `osm_writer` varchar(30) DEFAULT NULL,
  `osm_total` decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (`osm_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_outstore_sub`;CREATE TABLE `twms_outstore_sub` (
  `oss_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `oss_prod` int(11) DEFAULT NULL,
  `oss_prodname` varchar(50) DEFAULT NULL,
  `oss_cate` int(11) DEFAULT NULL,
  `oss_count` int(11) DEFAULT NULL,
  `oss_price` decimal(20,2) DEFAULT NULL,
  `oss_total` decimal(20,2) DEFAULT NULL,
  `oss_store` int(11) DEFAULT NULL,
  `oss_remark` varchar(300) DEFAULT NULL,
  `oss_datetime` datetime DEFAULT NULL,
  `oss_mainid` int(11) DEFAULT NULL,
  `oss_stockid` int(11) DEFAULT NULL COMMENT '引用的入仓子表id',
  PRIMARY KEY (`oss_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;DROP TABLE IF EXISTS `twms_prod_cate`;CREATE TABLE `twms_prod_cate` (
  `pdca_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pdca_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`pdca_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_product`;CREATE TABLE `twms_product` (
  `prod_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `prod_name` varchar(30) DEFAULT NULL,
  `prod_price` decimal(20,2) DEFAULT NULL,
  `prod_count` int(11) DEFAULT NULL,
  `prod_cate` int(11) DEFAULT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_setting`;CREATE TABLE `twms_setting` (
  `set_id` tinyint(1) DEFAULT '1',
  `set_list_pagesize` tinyint(3) DEFAULT NULL,
  `set_index_notice_pagesize` tinyint(3) DEFAULT NULL,
  `set_graph_count_start` datetime DEFAULT NULL,
  `set_graph_count_end` datetime DEFAULT NULL,
  `set_graph_amount_start` datetime DEFAULT NULL,
  `set_graph_amount_end` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_stock`;CREATE TABLE `twms_stock` (
  `stk_id` int(11) NOT NULL AUTO_INCREMENT,
  `stk_inmainid` int(11) DEFAULT NULL,
  `stk_prod` int(11) DEFAULT NULL,
  `stk_prodname` varchar(50) DEFAULT NULL,
  `stk_cate` int(11) DEFAULT NULL,
  `stk_price` decimal(20,2) DEFAULT NULL,
  `stk_count` int(11) DEFAULT NULL,
  `stk_total` decimal(20,2) DEFAULT NULL,
  `stk_store` int(11) DEFAULT NULL,
  `stk_remark` varchar(300) DEFAULT NULL,
  `stk_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`stk_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_store`;CREATE TABLE `twms_store` (
  `sto_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `sto_name` varchar(20) DEFAULT NULL,
  `sto_address` varchar(50) DEFAULT NULL,
  `sto_storer` varchar(15) DEFAULT NULL,
  `sto_phone` varchar(20) DEFAULT NULL,
  `sto_mobile` varchar(15) DEFAULT NULL,
  `sto_isdefault` tinyint(11) DEFAULT NULL,
  `sto_remark` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`sto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_supplier`;CREATE TABLE `twms_supplier` (
  `sup_id` int(11) NOT NULL AUTO_INCREMENT,
  `sup_name` varchar(50) DEFAULT NULL,
  `sup_linkman` varchar(20) DEFAULT NULL,
  `sup_phone` varchar(20) DEFAULT NULL,
  `sup_mobile` varchar(20) DEFAULT NULL,
  `sup_fax` varchar(20) DEFAULT NULL,
  `sup_address` varchar(200) DEFAULT NULL,
  `sup_remark` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`sup_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;DROP TABLE IF EXISTS `twms_user`;CREATE TABLE `twms_user` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT NULL,
  `user_realname` varchar(20) DEFAULT NULL,
  `user_password` varchar(32) DEFAULT NULL,
  `user_lastlogindate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_lastloginip` varchar(20) DEFAULT NULL,
  `user_type` int(5) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;insert into `twms_user`(`user_id`,`user_name`,`user_realname`,`user_password`,`user_lastlogindate`,`user_lastloginip`,`user_type`) values('1','admin','管理员','21232f297a57a5a743894a0e4a801fc3','2017-08-10 17:07:32','::1','1');