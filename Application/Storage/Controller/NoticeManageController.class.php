<?php
namespace Storage\Controller;

use Org\Util\Page;
use Org\Util\SysLog;

class NoticeManageController extends BaseController
{

    public function index()
    {
        Load('extend');
        $model = D("Notice");
        if ($_GET['keyword'] != '') {
            $map["ntc_title"] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
            $map["ntc_content"] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
            $map["ntc_author"] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
            $map["_logic"] = "or";
            $this->assign("keyword", $_GET['keyword']);
        }
        $count = $model->where($map)->count();
        $Page = new Page($count, D('Setting')->where(array(
            'set_id' => 1
        ))->getField('set_list_pagesize'));
        $show = $Page->show();
        $this->assign('page', $show);
        $list = $model->limit($Page->firstRow . ',' . $Page->listRows)
            ->order("ntc_id desc")
            ->where($map)
            ->select();
        $this->assign("searchBy", $_GET["searchBy"]);
        $this->assign("keyword", $_GET["keyword"]);
        $this->assign("list", $list);
        $this->display();
    }

    public function add()
    {
        $this->display();
    }

    public function doAdd()
    {
        $model = D("Notice");
        $model->add($_GET);
        //import('@.ORG.Util.SysLog');
        SysLog::writeLog("增加通知");
        $this->redirect("index");
    }

    public function toEdit()
    {
        $model = D("Notice");
        $this->assign("one", $model->where($_GET)
            ->find());
        $this->display();
    }

    public function doEdit()
    {
        $model = D("Notice");
        $data['ntc_title'] = $_GET['ntc_title'];
        $data['ntc_content'] = $_GET['ntc_content'];
        $data['ntc_author'] = $_GET['ntc_author'];
        $model->where(array(
            'ntc_id' => $_GET['ntc_id']
        ))->save($data);
        //import('@.ORG.Util.SysLog');
        SysLog::writeLog("编辑通知");
        $this->redirect("index");
    }

    public function delete()
    {
        $model = D("Notice");
        $model->where($_GET)->delete();
        //import('@.ORG.Util.SysLog');
        SysLog::writeLog("删除通知");
        $this->redirect("index");
    }

    public function view()
    {
        $model = D("Notice");
        $one = $model->where(array(
            'ntc_id' => $_GET['ntc_id']
        ))->find();
        echo json_encode($one);
    }
}

?>