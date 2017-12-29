<?php
namespace Storage\Controller;

use Org\Util\Page;
use Org\Util\SysLog;

class InstoreController extends BaseController
{

    public function add()
    {
        $main['ism_sn'] = 'IN-' . date('Ymd-His-') . rand(100, 999);
        $this->assign('main', $main);
        $this->assign('action', 'add');
        $this->assign('title', '入库登记');
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

    public function getProduct()
    {
        $model = D("Product");
        if ($_GET['term']) {
            $prod_name = trim($_GET['term']);
            $map["a.prod_name"] = array(
                "like",
                "%$prod_name%"
            );
        }
        $list = $model->alias("a")
            ->join("twms_prod_cate as b on a.prod_cate=b.pdca_id")
            ->where($map)
            ->order('pdca_id,prod_name')
            ->select();
        foreach ($list as $row) {
            $result[] = array(
                'label' => $row['prod_name'],
                'category' => $row['pdca_name'],
                'value' => $row['prod_name'],
                'prod_id' => $row['prod_id'],
                'prod_name' => $row['prod_name'],
                'prod_price' => $row['prod_price'],
                'prod_cate' => $row['prod_cate'],
                'pdca_name' => $row['pdca_name']
            );
        }
        echo json_encode($result);
    }

    public function getSupplier()
    {
        $model = D('Supplier');
        if ($_GET['term']) {
            $sup_name = trim($_GET['term']);
            $map['sup_name'] = array(
                'like',
                "%$sup_name%"
            );
        }
        $list = $model->where($map)
            ->order('sup_id desc')
            ->select();
        foreach ($list as $row) {
            $result[] = array(
                'id' => $row['sup_id'],
                'label' => $row['sup_name'],
                'value' => $row['sup_name']
            );
        }
        echo json_encode($result);
    }

    public function getOperator()
    {
        $model = D('Employee');
        if ($_GET['term']) {
            $emp_name = trim($_GET['term']);
            $map['emp_name'] = array(
                'like',
                "%$emp_name%"
            );
        }
        $map['emp_isleave'] = 0;
        $list = $model->where($map)
            ->order('emp_id desc')
            ->select();
        foreach ($list as $row) {
            $result[] = array(
                'id' => $row['emp_id'],
                'label' => $row['emp_name'],
                'value' => $row['emp_name']
            );
        }
        echo json_encode($result);
    }

    public function doAdd()
    {
        $model_main = D("InstoreMain");
        $model_main->create();
        $model_main->ism_datetime = date('Y-m-d H:i:s');
        $main_id = $model_main->add();
        $model_sub = D("InstoreSub");
        $model_stock = D('Stock');
        for ($i = 0; $i < count($_POST["row_count"]); $i ++) {
            $data_sub["iss_mainid"] = $main_id;
            $data_sub["iss_prod"] = $_POST["iss_prod"][$i];
            $data_sub["iss_prodname"] = $_POST["iss_prodname"][$i];
            $data_sub["iss_price"] = $_POST["iss_price"][$i];
            $data_sub["iss_count"] = $_POST["iss_count"][$i];
            $data_sub["iss_total"] = $_POST["iss_total"][$i];
            $data_sub["iss_store"] = $_POST["iss_store"][$i];
            $data_sub["iss_remark"] = $_POST["iss_remark"][$i];
            $data_sub["iss_cate"] = $_POST["iss_cate"][$i];
            $data_sub["iss_datetime"] = date('Y-m-d H:i:s');
            $model_sub->add($data_sub);
            $data_main["ism_total"] += $_POST["iss_total"][$i];
            
            $data_stock["stk_inmainid"] = $main_id;
            $data_stock["stk_prod"] = $_POST["iss_prod"][$i];
            $data_stock["stk_prodname"] = $_POST["iss_prodname"][$i];
            $data_stock["stk_cate"] = $_POST["iss_cate"][$i];
            $data_stock["stk_price"] = $_POST["iss_price"][$i];
            $data_stock["stk_count"] = $_POST["iss_count"][$i];
            $data_stock["stk_total"] = $_POST["iss_total"][$i];
            $data_stock["stk_store"] = $_POST["iss_store"][$i];
            $data_stock["stk_remark"] = $_POST["iss_remark"][$i];
            $data_stock["stk_datetime"] = date('Y-m-d H:i:s');
            $model_stock->add($data_stock);
        }
        $model_main->where(array(
            "ism_id" => $main_id
        ))->save($data_main);
        SysLog::writeLog("添加入库记录");
        $this->redirect("Instore/index");
    }

    public function getStore()
    {
        $model = D('Store');
        if ($_GET['term']) {
            $sto_name = trim($_GET['term']);
            $map['sto_name'] = array(
                'like',
                "%$sto_name%"
            );
        }
        $list = $model->where($map)
            ->order('sto_id desc')
            ->select();
        foreach ($list as $row) {
            $result[] = array(
                'id' => $row['sto_id'],
                'label' => $row['sto_name'],
                'value' => $row['sto_name'],
                'isdefault' => $row['sto_isdefault']
            );
        }
        echo json_encode($result);
    }

    public function index()
    {
        $model = D("InstoreMain");
        
        if ($_GET["searchBy"] != "")
            $map[$_GET["searchBy"]] = array(
                "like",
                "%{$_GET['keyword']}%"
            );
        if ($_GET["ism_sn"] != "")
            $map["ism_sn"] = array(
                "like",
                "%{$_GET['ism_sn']}%"
            );
        if ($_GET["ism_supplier_name"] != "")
            $map["d.sup_name"] = array(
                "like",
                "%{$_GET['ism_supplier_name']}%"
            );
        if ($_GET["ism_operator_name"] != "")
            $map["e.emp_name"] = array(
                "like",
                "%{$_GET['ism_operator_name']}%"
            );
        if ($_GET["iss_total_start"] != "" && $_GET["iss_total_end"] == "")
            $map["ism_total"] = array(
                "egt",
                "{$_GET['iss_total_start']}"
            );
        if ($_GET["iss_total_start"] == "" && $_GET["iss_total_end"] != "")
            $map["ism_total"] = array(
                "elt",
                "{$_GET['iss_total_end']}"
            );
        if ($_GET["iss_total_start"] != "" && $_GET["iss_total_end"] != "") {
            $map["ism_total"] = array(
                array(
                    "egt",
                    "{$_GET['iss_total_start']}"
                ),
                array(
                    "elt",
                    "{$_GET['iss_total_end']}"
                )
            );
        }
        if ($_GET["ism_writer_name"] != "")
            //$map["f.emp_name"] = array(
            $map["ism_writer_name"] = array(
                "like",
                "%{$_GET['ism_writer_name']}%"
            );
        if ($_GET["ism_date_start"] != "" && $_GET["ism_date_end"] == "")
            $map["ism_datetime"] = array(
                "egt",
                "{$_GET['ism_date_start']}" . ' 00:00:00'
            );
        if ($_GET["ism_date_start"] == "" && $_GET["ism_date_end"] != "")
            $map["ism_datetime"] = array(
                "elt",
                "{$_GET['ism_date_end']}" . ' 59:59:59'
            );
        if ($_GET["ism_date_start"] != "" && $_GET["ism_date_end"] != "") {
            $map["ism_datetime"] = array(
                array(
                    "egt",
                    "{$_GET['ism_date_start']}" . ' 00:00:00'
                ),
                array(
                    "elt",
                    "{$_GET['ism_date_end']}" . ' 59:59:59'
                )
            );
        }
        if ($_GET["iss_prodname"] != "") {
            $map["iss_prodname"] = array(
                "like",
                "%{$_GET['iss_prodname']}%"
            );
        }
        if ($_GET["iss_store_name"] != "") {
            $map["c.sto_name"] = array(
                "like",
                "%{$_GET['iss_store_name']}%"
            );
        }
        $list = $model->alias('a')
            ->join("twms_instore_sub as b on ism_id=iss_mainid", "left")
            ->join('twms_store as c on sto_id=iss_store', "right")
            ->join('twms_supplier as d on ism_supplier=sup_id', "left")
            ->join('twms_employee as e on ism_operator=e.emp_id', "left")
            //->join('twms_employee as f on ism_writer=f.emp_id', "left")
            ->where($map)
            ->group("iss_mainid")
            ->field('ism_id')
            ->select();
        $count = count($list);
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
        $list = $model->alias('a')
            ->join("twms_instore_sub as b on ism_id=iss_mainid", "left")
            ->join('twms_store as c on sto_id=iss_store', "right")
            ->join('twms_supplier as d on ism_supplier=sup_id', "left")
            ->join('twms_employee as e on ism_operator=e.emp_id', "left")
            //->join('twms_employee as f on ism_writer=f.emp_id', "left")
            ->where($map)
            ->group("iss_mainid")
            //->field("a.*,sum(iss_price*iss_count) as total,sum(iss_count) as `count`,sup_name,e.emp_name as operator,f.emp_name as writer")
        ->field("a.*,sum(iss_price*iss_count) as total,sum(iss_count) as `count`,sup_name,e.emp_name as operator,ism_writer as writer")
            ->order("ism_id desc")
            ->limit($Page->firstRow . ',' . $Page->listRows)
            ->select();
        $this->assign("searchBy", $_GET['searchBy']);
        $this->assign("keyword", $_GET['keyword']);
        $this->assign("list", $list);
        $this->display();
    }

    public function delete()
    {
        $model_main = D("InstoreMain");
        $model_main->where(array(
            'ism_id' => $_GET['ism_id']
        ))->delete();
        $model_sub = D("InstoreSub");
        $model_sub->where(array(
            "iss_mainid" => $_GET['ism_id']
        ))->delete();
        SysLog::writeLog("删除入库记录");
        $this->redirect("index");
    }

    public function view()
    {
        $model_main = D("InstoreMain");
        $main = $model_main->alias('a')
            ->join('twms_supplier as b on a.ism_supplier=b.sup_id')
            ->join('twms_employee as c on a.ism_operator=c.emp_id')
            //->join('twms_employee as d on a.ism_writer=d.emp_id')
            ->where(array(
            "ism_id" => $_GET['ism_id']
        ))
            //->field('a.ism_sn,c.emp_name as ism_operator_name,d.emp_name as ism_writer_name,b.sup_name as ism_supplier_name')
            ->field('a.ism_sn,c.emp_name as ism_operator_name,ism_writer,b.sup_name as ism_supplier_name')
            ->find();
        $model_sub = D("InstoreSub");
        $list_sub = $model_sub->join('twms_product on iss_prod=prod_id')
            ->join('twms_store on sto_id=iss_store')
            ->join('twms_prod_cate on pdca_id=iss_cate')
            ->where(array(
            "iss_mainid" => $_GET['ism_id']
        ))
            ->order('iss_id asc')
            ->select();
        $model_store = D('Store');
        $list_store = $model_store->select();
        $this->assign('list_store', $list_store);
        $this->assign("main", $main);
        $this->assign("list_sub", $list_sub);
        $this->assign('action', 'view');
        $this->display('add');
    }

    public function toEdit()
    {
        $model_main = D("InstoreMain");
        $main = $model_main->alias('a')
            ->join('twms_supplier as b on a.ism_supplier=b.sup_id')
            ->join('twms_employee as c on a.ism_operator=c.emp_id')
            //->join('twms_employee as d on a.ism_writer=d.emp_id')
            ->where(array(
            "ism_id" => $_GET['ism_id']
        ))
            //->field('a.*,c.emp_name as ism_operator_name,d.emp_name as ism_writer_name,b.sup_name as ism_supplier_name')
            ->field('a.*,c.emp_name as ism_operator_name,ism_writer_name,b.sup_name as ism_supplier_name')
            ->find();
        $model_sub = D('instoreSub');
        $list_sub = $model_sub->alias('a')
            ->join('twms_product on iss_prod=prod_id')
            ->join('twms_prod_cate on iss_cate=pdca_id')
            ->join('twms_store on sto_id=iss_store')
            ->where(array(
            'iss_mainid' => $_GET['ism_id']
        ))
            ->order('iss_id asc')
            ->select();
        $model_store = D('Store');
        $list_store = $model_store->select();
        $this->assign('list_store', $list_store);
        $this->assign('main', $main);
        $this->assign('list_sub', $list_sub);
        $this->assign('title', '入库编辑');
        $this->assign('action', 'update');
        $this->display('add');
    }

    public function doEdit()
    {
        $model_main = D("InstoreMain");
        $model_main->ism_datetime = date('Y-m-d H:i:s');
        $model_main->create();
        $model_sub = D("InstoreSub");
        $model_sub->where(array(
            'iss_mainid' => $_POST['ism_id']
        ))->delete();
        for ($i = 0; $i < count($_POST["iss_prodname"]); $i ++) {
            $data['iss_mainid'] = $_POST['ism_id'];
            $data['iss_prodname'] = $_POST['iss_prodname'][$i];
            $data['iss_prod'] = $_POST['iss_prod'][$i];
            $data['iss_cate'] = $_POST['iss_cate'][$i];
            $data['iss_price'] = $_POST['iss_price'][$i];
            $data['iss_count'] = $_POST['iss_count'][$i];
            $data['iss_total'] = $_POST['iss_total'][$i];
            $data['iss_store'] = $_POST['iss_store'][$i];
            $data['iss_remark'] = $_POST['iss_remark'][$i];
            $data['iss_datetime'] = date('Y-m-d H:i:s');
            $model_main->ism_total += $data['iss_total'];
            $model_sub->add($data);
        }
        $model_main->save();
        SysLog::writeLog("编辑入库记录");
        $this->redirect("index");
    }
}

?>