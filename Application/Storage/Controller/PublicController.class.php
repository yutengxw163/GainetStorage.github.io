<?php
namespace Storage\Controller;

use Think\Controller;
use Org\Util\Image;
use Org\Util\SysLog;

class PublicController extends Controller
{

    public function index()
    {
        $this->display();
    }

    public function login()
    {
        $this->display('login');
    }

    public function doLogin()
    {
        header('Content-Type:text/html;charset=utf-8');
        $model = D("User");
        $user = $model->where(array(
            "user_name" => trim($_GET['user_name'])
        ))->find();
        if ($user == null) {
            exit('1');
        }
        if ($user["user_password"] != md5(trim($_GET["user_password"]))) {
            exit('2');
        }
        if ($_SESSION["verify"] != md5(trim($_GET["code"]))) {
            exit('3');
        }
        session_start();
        $_SESSION["user"] = $user;
        SysLog::writeLog('用户登录');
        $this->writeLoginInfo();
        echo '4';
    }

    private function getIP($ip)
    {
        $ipArray = explode('.', $ip);
        $ipArray[1] = '*';
        $ipArray[2] = '*';
        return implode('.', $ipArray);
    }

    private function writeLoginInfo()
    {
        $model = D("User");
        $data["user_lastlogindate"] = date("Y-m-d H:i:s");
        $data["user_lastloginip"] = $_SERVER['REMOTE_ADDR'];

        $model->where(array(
            "user_id" => $_SESSION['user']['user_id']
        ))->save($data);
    }

    public function verify()
    {
        $type = isset($_GET['type']) ? $_GET['type'] : 'gif';
        Image::buildImageVerify(4, 1, $type);
    }
}

?>