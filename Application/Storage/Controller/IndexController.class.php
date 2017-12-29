<?php
namespace Storage\Controller;

class IndexController extends BaseController
{

    public function index()
    {
        //session_start();
        //$_SESSION['user']['user_name'] = 'admin';
        //$_SESSION['user']['user_realname'] = '管理员';
        $this->display();
    }

    public function checkDataEmpty()
    {
        $model_product = D('Product');
        $count_product = $model_product->count();
        $model_prodcate = D('ProdCate');
        $count_prodcate = $model_prodcate->count();
        $model_supplier = D('Supplier');
        $count_supplier = $model_supplier->count();
        $model_customer = D('Customer');
        $count_customer = $model_customer->count();
        $model_store = D('Store');
        $count_store = $model_store->count();
        $model_employee = D('Employee');
        $count_employee = $model_employee->count();
        if ($count_product == 0) {
            $msgArray[] = '产品';
        }
        if ($count_prodcate == 0) {
            $msgArray[] = '产品类型';
        }
        if ($count_supplier == 0) {
            $msgArray[] = '供应商';
        }
        if ($count_customer == 0) {
            $msgArray[] = '客户';
        }
        if ($count_store == 0) {
            $msgArray[] = '仓库';
        }
        if ($count_employee == 0) {
            $msgArray[] = '员工';
        }
        echo implode('，', $msgArray);
    }

    public function loginOut()
    {
        session_start();
        unset($_SESSION['user']);
        $this->redirect(MODULE_PATH+"/Public/login");
    }

    public function header()
    {
        $this->assign('user_realname', $_SESSION["user"]["user_realname"]);
        $this->display();
    }

    public function menu()
    {
        $this->display();
    }

    public function about()
    {
        $this->assign('version', $this->version);
        $this->display();
    }

    public function main()
    {
        $version1 = $this->version ."&nbsp;&nbsp;&nbsp;<a href='#' target='_blank'>Gainet仓储管理系统©</a>";
        Load('extend');
        $model_insub = D("InstoreSub");
        $model_outsub = D("OutstoreSub");
        $today_start = date("Y-m-d") . " 00:00:00";
        $today_end = date("Y-m-d") . " 59:59:59";
        $this_month_start = date('Y-m-d', mktime(0, 0, 0, date('m'), 1, date('Y'))) . ' 00:00:00';
        $this_month_end = date('Y-m-d', mktime(0, 0, 0, date('m'), date('t'), date('Y'))) . ' 59:59:59';
        $instore_month = $model_insub->where("iss_datetime>'$this_month_start' and iss_datetime<'$this_month_end'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_month['count'] = $instore_month['count'] == null ? 0 : $instore_month['count'];
        $instore_month['total'] = $instore_month['total'] == null ? 0 : $instore_month['total'];
        $this->assign("instore_month", $instore_month);
        $outstore_month = $model_outsub->where("oss_datetime>'$this_month_start' and oss_datetime<'$this_month_end'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_month['count'] = $outstore_month['count'] == null ? 0 : $outstore_month['count'];
        $outstore_month['total'] = $outstore_month['total'] == null ? 0 : $outstore_month['total'];
        $this->assign("outstore_month", $outstore_month);
        $instore_count = $model_insub->field("sum(iss_count) as count,sum(iss_total) as total")->find();
        $instore_count['count'] = $instore_count['count'] == null ? 0 : $instore_count['count'];
        $instore_count['total'] = $instore_count['total'] == null ? 0 : $instore_count['total'];
        $this->assign("instore_count", $instore_count);
        $instore_toady_count = $model_insub->where("iss_datetime>'$today_start' and iss_datetime<'$today_end'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_toady_count['count'] = $instore_toady_count['count'] == null ? 0 : $instore_toady_count['count'];
        $instore_toady_count['total'] = $instore_toady_count['total'] == null ? 0 : $instore_toady_count['total'];
        $this->assign("instore_toady_count", $instore_toady_count);
        $outstore_count = $model_outsub->field("sum(oss_count) as count,sum(oss_total) as total")->find();
        $outstore_count['count'] = $outstore_count['count'] == null ? 0 : $outstore_count['count'];
        $outstore_count['total'] = $outstore_count['total'] == null ? 0 : $outstore_count['total'];
        $this->assign("outstore_count", $outstore_count);
        $outstore_today_count = $model_outsub->where("oss_datetime>'$today_start' and oss_datetime<'$today_end'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_today_count['count'] = $outstore_today_count['count'] == null ? 0 : $outstore_today_count['count'];
        $outstore_today_count['total'] = $outstore_today_count['total'] == null ? 0 : $outstore_today_count['total'];
        $this->assign("outstore_today_count", $outstore_today_count);
        $time = time();
        $date_re_1 = date('Y-m-d', $time - 3600 * 24 * 1);
        $date_re_2 = date('Y-m-d', $time - 3600 * 24 * 2);
        $date_re_3 = date('Y-m-d', $time - 3600 * 24 * 3);
        $date_re_4 = date('Y-m-d', $time - 3600 * 24 * 4);
        $date_re_5 = date('Y-m-d', $time - 3600 * 24 * 5);
        $date_re_6 = date('Y-m-d', $time - 3600 * 24 * 6);
        $date_today = date('Y-m-d');
        $instore_count_date_re_6 = $model_insub->where("iss_datetime>='$date_re_6 00:00:00' and iss_datetime<='$date_re_6 59:59:59'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_count_date_re_5 = $model_insub->where("iss_datetime>='$date_re_5 00:00:00' and iss_datetime<='$date_re_5 59:59:59'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_count_date_re_4 = $model_insub->where("iss_datetime>='$date_re_4 00:00:00' and iss_datetime<='$date_re_4 59:59:59'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_count_date_re_3 = $model_insub->where("iss_datetime>='$date_re_3 00:00:00' and iss_datetime<='$date_re_3 59:59:59'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_count_date_re_2 = $model_insub->where("iss_datetime>='$date_re_2 00:00:00' and iss_datetime<='$date_re_2 59:59:59'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_count_date_re_1 = $model_insub->where("iss_datetime>='$date_re_1 00:00:00' and iss_datetime<='$date_re_1 59:59:59'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_count_date_doday = $model_insub->where("iss_datetime>='$date_today 00:00:00' and iss_datetime<='$date_today 59:59:59'")
            ->field("sum(iss_count) as count,sum(iss_total) as total")
            ->find();
        $instore_count_date_re_6['count'] = $instore_count_date_re_6['count'] == null ? 0 : $instore_count_date_re_6['count'];
        $instore_count_date_re_5['count'] = $instore_count_date_re_5['count'] == null ? 0 : $instore_count_date_re_5['count'];
        $instore_count_date_re_4['count'] = $instore_count_date_re_4['count'] == null ? 0 : $instore_count_date_re_4['count'];
        $instore_count_date_re_3['count'] = $instore_count_date_re_3['count'] == null ? 0 : $instore_count_date_re_3['count'];
        $instore_count_date_re_2['count'] = $instore_count_date_re_2['count'] == null ? 0 : $instore_count_date_re_2['count'];
        $instore_count_date_re_1['count'] = $instore_count_date_re_1['count'] == null ? 0 : $instore_count_date_re_1['count'];
        $instore_count_date_doday['count'] = $instore_count_date_doday['count'] == null ? 0 : $instore_count_date_doday['count'];
        $this->assign("line_count_in", "[{$instore_count_date_re_6['count']},{$instore_count_date_re_5['count']},{$instore_count_date_re_4['count']},{$instore_count_date_re_3['count']},{$instore_count_date_re_2['count']},{$instore_count_date_re_1['count']},{$instore_count_date_doday['count']}]");
        $instore_count_date_re_6['total'] = $instore_count_date_re_6['total'] == null ? 0 : $instore_count_date_re_6['total'];
        $instore_count_date_re_5['total'] = $instore_count_date_re_5['total'] == null ? 0 : $instore_count_date_re_5['total'];
        $instore_count_date_re_4['total'] = $instore_count_date_re_4['total'] == null ? 0 : $instore_count_date_re_4['total'];
        $instore_count_date_re_3['total'] = $instore_count_date_re_3['total'] == null ? 0 : $instore_count_date_re_3['total'];
        $instore_count_date_re_2['total'] = $instore_count_date_re_2['total'] == null ? 0 : $instore_count_date_re_2['total'];
        $instore_count_date_re_1['total'] = $instore_count_date_re_1['total'] == null ? 0 : $instore_count_date_re_1['total'];
        $instore_count_date_doday['total'] = $instore_count_date_doday['total'] == null ? 0 : $instore_count_date_doday['total'];
        $this->assign("line_total_in", "[{$instore_count_date_re_6['total']},{$instore_count_date_re_5['total']},{$instore_count_date_re_4['total']},{$instore_count_date_re_3['total']},{$instore_count_date_re_2['total']},{$instore_count_date_re_1['total']},{$instore_count_date_doday['total']}]");
        $outstore_count_date_re_6 = $model_outsub->where("oss_datetime>='$date_re_6 00:00:00' and oss_datetime<='$date_re_6 59:59:59'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_count_date_re_5 = $model_outsub->where("oss_datetime>='$date_re_5 00:00:00' and oss_datetime<='$date_re_5 59:59:59'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_count_date_re_4 = $model_outsub->where("oss_datetime>='$date_re_4 00:00:00' and oss_datetime<='$date_re_4 59:59:59'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_count_date_re_3 = $model_outsub->where("oss_datetime>='$date_re_3 00:00:00' and oss_datetime<='$date_re_3 59:59:59'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_count_date_re_2 = $model_outsub->where("oss_datetime>='$date_re_2 00:00:00' and oss_datetime<='$date_re_2 59:59:59'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_count_date_re_1 = $model_outsub->where("oss_datetime>='$date_re_1 00:00:00' and oss_datetime<='$date_re_1 59:59:59'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_count_date_today = $model_outsub->where("oss_datetime>='$date_today 00:00:00' and oss_datetime<='$date_today 59:59:59'")
            ->field("sum(oss_count) as count,sum(oss_total) as total")
            ->find();
        $outstore_count_date_re_6['count'] = $outstore_count_date_re_6['count'] == null ? 0 : $outstore_count_date_re_6['count'];
        $outstore_count_date_re_5['count'] = $outstore_count_date_re_5['count'] == null ? 0 : $outstore_count_date_re_5['count'];
        $outstore_count_date_re_4['count'] = $outstore_count_date_re_4['count'] == null ? 0 : $outstore_count_date_re_4['count'];
        $outstore_count_date_re_3['count'] = $outstore_count_date_re_3['count'] == null ? 0 : $outstore_count_date_re_3['count'];
        $outstore_count_date_re_2['count'] = $outstore_count_date_re_2['count'] == null ? 0 : $outstore_count_date_re_2['count'];
        $outstore_count_date_re_1['count'] = $outstore_count_date_re_1['count'] == null ? 0 : $outstore_count_date_re_1['count'];
        $outstore_count_date_today['count'] = $outstore_count_date_today['count'] == null ? 0 : $outstore_count_date_today['count'];
        $this->assign("line_count_out", "[{$outstore_count_date_re_6['count']},{$outstore_count_date_re_5['count']},{$outstore_count_date_re_4['count']},{$outstore_count_date_re_3['count']},{$outstore_count_date_re_2['count']},{$outstore_count_date_re_1['count']},{$outstore_count_date_today['count']}]");
        $outstore_count_date_re_6['total'] = $outstore_count_date_re_6['total'] == null ? 0 : $outstore_count_date_re_6['total'];
        $outstore_count_date_re_5['total'] = $outstore_count_date_re_5['total'] == null ? 0 : $outstore_count_date_re_5['total'];
        $outstore_count_date_re_4['total'] = $outstore_count_date_re_4['total'] == null ? 0 : $outstore_count_date_re_4['total'];
        $outstore_count_date_re_3['total'] = $outstore_count_date_re_3['total'] == null ? 0 : $outstore_count_date_re_3['total'];
        $outstore_count_date_re_2['total'] = $outstore_count_date_re_2['total'] == null ? 0 : $outstore_count_date_re_2['total'];
        $outstore_count_date_re_1['total'] = $outstore_count_date_re_1['total'] == null ? 0 : $outstore_count_date_re_1['total'];
        $outstore_count_date_today['total'] = $outstore_count_date_today['total'] == null ? 0 : $outstore_count_date_today['total'];
        $this->assign("line_total_out", "[{$outstore_count_date_re_6['total']},{$outstore_count_date_re_5['total']},{$outstore_count_date_re_4['total']},{$outstore_count_date_re_3['total']},{$outstore_count_date_re_2['total']},{$outstore_count_date_re_1['total']},{$outstore_count_date_today['total']}]");
        $date_re_6 = date('m-d', strtotime($date_re_6));
        $date_re_5 = date('m-d', strtotime($date_re_5));
        $date_re_4 = date('m-d', strtotime($date_re_4));
        $date_re_3 = date('m-d', strtotime($date_re_3));
        $date_re_2 = date('m-d', strtotime($date_re_2));
        $date_re_1 = date('m-d', strtotime($date_re_1));
        $date_today = date('m-d', strtotime($date_today));
        $this->assign("line_cate", "['$date_re_6','$date_re_5','$date_re_4','$date_re_3','$date_re_2','$date_re_1','$date_today']");
        $list_notice = D("Notice")->order("ntc_id desc")
            ->limit(D('Setting')->where(array(
            'set_id' => 1
        ))
            ->getField('set_index_notice_pagesize'))
            ->select();
        $this->assign("list_notice", $list_notice);
        $this->assign("version1", $version1);
        $trialEndDate = date("Y-m-d", $this->endStamp);
        $this->display('main');
    }

    public function noticeView()
    {
        $model = D("Notice");
        $one = $model->where(array(
            'ntc_id' => $_GET['ntc_id']
        ))->find();
        echo json_encode($one);
    }
}

?>