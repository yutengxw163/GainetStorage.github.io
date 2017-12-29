<?php
namespace Storage\Controller;

use Think\Controller;

class BaseController extends Controller
{
    
    public $version = 'v1.0.0 Build 170812';
    
    public $endStamp;
    
    function __construct()
    {
        parent::__construct();
        //session_start();
        if ($_SESSION["user"] == null) {
            exit("<script>window.parent.location='" . U('Public/login') . "'</script>");
        }
    }
}

?>