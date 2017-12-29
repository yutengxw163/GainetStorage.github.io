<?php
namespace Storage\Controller;

use Org\Util\Page;

class LogController extends BaseController
{
    public function index()
    {
        $model = D("log");
        if ($_GET["keyword"] != '') {
            $map['log_operator_name'] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
            $map['log_operator_realname'] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
            $map['log_action'] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
            $map['log_ip'] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
            $map['_logic'] = 'or';
            $this->assign("keyword", $_GET['keyword']);
        }
        $count = $model->where($map)->count();
        $Page = new Page($count, D('Setting')->where(array(
            'set_id' => 1
        ))->getField('set_list_pagesize'));
        
        //xw_add
        $Page->setConfig('header', '<li class="rows">共<b>%TOTAL_ROW%</b>条记录 第<b>%NOW_PAGE%</b>页/共<b>%TOTAL_PAGE%</b>页</li>');
        $Page->setConfig('prev', '上一页');
        $Page->setConfig('next', '下一页');
        $Page->setConfig('last', '末页');
        $Page->setConfig('first', '首页');
        $Page->setConfig('theme', '%FIRST%%UP_PAGE%%LINK_PAGE%%DOWN_PAGE%%END%%HEADER%');
        $Page->lastSuffix = false;//最后一页不显示为总页数
        //xw_add
        
        $show = $Page->show();
        $this->assign('page', $show);
        $list = $model->where($map)
        ->order("log_id desc")
        ->limit($Page->firstRow . ',' . $Page->listRows)
        ->select();
        $this->assign("list", $list);
        $this->assign("searchBy", $_GET['searchBy']);
        $this->assign("keyword", $_GET['keyword']);
        $this->display();
    }
    
    public function clearLog()
    {
        $model = D("log");
        $model->where(array(
            "log_id" => array(
                "neq",
                ""
            )
        ))->delete();
        $this->redirect("index");
    }
}

?>