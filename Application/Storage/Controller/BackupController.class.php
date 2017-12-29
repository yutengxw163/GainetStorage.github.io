<?php
namespace Storage\Controller;

use Org\Util\Page;
use Org\Util\SysLog;

class BackupController extends BaseController
{

    public function index()
    {
        $model = D("Backup");
        $count = $model->count();
        $Page = new Page($count, D('Setting')->where(array(
            'set_id' => 1
        ))->getField('set_list_pagesize'));
        $show = $Page->show();
        $this->assign('page', $show);
        $list = $model->limit($Page->firstRow . ',' . $Page->listRows)
            ->order('back_id desc')
            ->select();
        $this->assign("list", $list);
        $this->display();
    }

    public function backup()
    {
        $dbmanage = new DbManager();
        $result_array = $dbmanage->backup();
        $model = D("Backup");
        $data["back_name"] = $result_array["name"];
        $data["back_path"] = $result_array["path"];
        $model->add($data);
        SysLog::writeLog("备份数据库");
        $this->redirect('index');
    }

    public function resume()
    {
        $dbmanage = new DbManager();
        $model = D("Backup");
        $one = $model->where(array(
            'back_id' => $_GET['back_id']
        ))->find();
        $dbmanage->resume($one["back_path"]);
        SysLog::writeLog("恢复数据库");
        $this->redirect('index');
    }

    public function delete()
    {
        $model = D("Backup");
        $one = $model->where(array(
            'back_id' => $_GET['back_id']
        ))->find();
        unlink($one["back_path"]);
        $model->where(array(
            'back_id' => $_GET['back_id']
        ))->delete();
        SysLog::writeLog("删除数据库备份");
        $this->redirect('index');
    }
}

?>