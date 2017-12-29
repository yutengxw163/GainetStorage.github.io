<?php
namespace Storage\Controller;
use Org\Util\Page;
use Org\Util\SysLog;

class UserManageController extends BaseController
{
    public function index()
    {
        //import("@.ORG.Util.Page");
        $model = D("User");
        $count = $model->count();
        $Page = new Page($count, D('Setting')->where(array(
            'set_id' => 1
        ))->getField('set_list_pagesize'));
        $show = $Page->show();
        $this->assign('page', $show);
        $list = $model->order("user_id desc")
        ->limit($Page->firstRow . ',' . $Page->listRows)
        ->select();
        $this->assign("list", $list);
        $this->display();
    }
    
    public function view()
    {
        $model = D("User");
        $map["user_id"] = $_GET["user_id"];
        $one = $model->where($map)->find();
        echo json_encode($one);
    }
    
    public function delete()
    {
        $model = D("User");
        $model->where(array(
            'user_id' => $_GET["user_id"]
        ))->delete();
        //import('@.ORG.Util.SysLog');
        SysLog::writeLog("删除用户");
        $this->redirect("index");
    }
    
    public function doAdd()
    {
        $model = D("User");
        $_GET['user_password'] = md5($_GET['user_password']);
        $model->add($_GET);
        //import('@.ORG.Util.SysLog');
        SysLog::writeLog("添加用户");
        $this->redirect("index");
    }
    
    public function toEdit()
    {
        $model = D("User");
        $one = $model->where(array(
            'user_id' => $_GET['user_id']
        ))->find();
        $this->assign("one", $one);
        $this->display();
    }
    
    public function doEdit()
    {
        $model = D("User");
        if ($_GET['user_password'] == '') {
            unset($_GET['user_password']);
        } else {
            $_GET['user_password'] = md5($_GET['user_password']);
        }
        $one = $model->save($_GET);
        $user = $model->where(array(
            'user_id' => $_GET['user_id']
        ))->find();
        //import('@.ORG.Util.SysLog');
        SysLog::writeLog("编辑用户");
        $this->redirect("index");
    }
}

?>