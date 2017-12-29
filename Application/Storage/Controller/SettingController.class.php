<?php
namespace Storage\Controller;

class SettingController extends BaseController
{
    public function personal()
    {
        $model = D('User');
        $one = $model->where(array(
            'user_id' => $_SESSION['user']['user_id']
        ))->find();
        $this->assign('one', $one);
        $this->display();
    }
    
    public function doEditPersonal()
    {
        $model = D('User');
        $data['user_id'] = $_POST['user_id'];
        $data['user_name'] = $_POST['user_name'];
        $data['user_realname'] = $_POST['user_realname'];
        if ($_POST['user_password'] != '') {
            $data['user_password'] = md5($_POST['user_password']);
        }
        $model->save($data);
        $user = $model->where(array(
            'user_id' => $_SESSION['user']['user_id']
        ))->find();
        session_start();
        $_SESSION['user'] = $user;
        echo json_encode($user);
    }
    
    public function show()
    {
        Load('extend');
        $model = D('Setting');
        $one = $model->where(array(
            'set_id' => 1
        ))->find();
        $this->assign('one', $one);
        $this->display();
    }
    
    public function doSaveShow()
    {
        $model = D('Setting');
        $one = $model->where(array(
            'set_id' => 1
        ))->find();
        if ($one != null) {
            $model->where(array(
                'set_id' => 1
            ))->save($_POST);
        } else {
            $model->where(array(
                'set_id' => 1
            ))->add($_POST);
        }
        echo 1;
    }
}

?>