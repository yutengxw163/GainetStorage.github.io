<?php
namespace Storage\Controller;

use Org\Util\Page;
use Org\Util\SysLog;

class BaseDataController extends BaseController
{
    public function index()
    {
        if ($_GET['selectNum'] != null) {
            $this->assign("selectNum", $_GET['selectNum']);
        }
        $this->display();
    }
    
    public function product()
    {
        $model = D("Product");
        if ($_GET["prod_cate"]) {
            $map["a.prod_cate"] = $_GET["prod_cate"];
        }
        $count = $model->alias("a")
        ->join("twms_prod_cate as b on a.prod_cate=b.pdca_id")
        ->where($map)
        ->count();
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
        $list = $model->alias("a")
        ->join("twms_prod_cate as b on a.prod_cate=b.pdca_id")
        ->order("prod_id desc")
        ->limit($Page->firstRow . ',' . $Page->listRows)
        ->where($map)
        ->select();
        
        //解决新版本中类别不显示问题
        $one = $model->where(array(
            "prod_id" => $_GET['prod_id']
        ))->find();
        $this->assign("one", $one);
        $model = D("ProdCate");
        $list_cate = $model->order("pdca_id desc")->select();
        $this->assign("list_cate", $list_cate);
        //解决新版本中类别不显示问题
        
        $this->assign("list", $list);
        $this->assign("action", "index");
        $this->display();
    }
    
    public function cate()
    {
        $model = D("ProdCate");
        $count = $model->count();
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
        $list = $model->limit($Page->firstRow . ',' . $Page->listRows)
        ->order("pdca_id desc")
        ->select();
        $this->assign("list", $list);
        $this->assign("action", "cate");
        $this->display();
    }
    
    public function supplier()
    {
        $model = D("Supplier");
        $count = $model->count();
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
        $list = $model->limit($Page->firstRow . ',' . $Page->listRows)
        ->order("sup_id desc")
        ->select();
        $this->assign("list", $list);
        $this->assign("action", "supplier");
        $this->display();
    }
    
    public function store()
    {
        $model = D("Store");
        $count = $model->count();
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
        $list = $model->limit($Page->firstRow . ',' . $Page->listRows)
        ->order("sto_id desc")
        ->select();
        $this->assign("list", $list);
        $this->assign("action", "store");
        $this->display();
    }
    
    public function employee()
    {
        $model = D("Employee");
        $count = $model->count();
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
        $list = $model->limit($Page->firstRow . ',' . $Page->listRows)
        ->order("emp_id desc")
        ->select();
        $this->assign("list", $list);
        $this->assign("action", "employee");
        $this->display();
    }
    
    public function doAddEmployee()
    {
        $model = D("Employee");
        $model->create();
        $model->add($_GET);
        SysLog::writeLog("增加员工");
        echo 1;
    }
    
    public function doEditEmployee()
    {
        $model = D("Employee");
        $model->save($_GET);
        SysLog::writeLog("编辑员工");
        echo 1;
    }
    
    public function getEmployeeById()
    {
        $model = D("Employee");
        $one = $model->where(array(
            "emp_id" => $_GET['emp_id']
        ))->find();
        echo json_encode($one);
    }
    
    public function deleteEmployee()
    {
        $model = D("Employee");
        $model->where(array(
            "emp_id" => $_GET['emp_id']
        ))->delete();
        SysLog::writeLog("删除员工");
        echo 1;
    }
    
    public function doAddSupplier()
    {
        $model = D("Supplier");
        $model->create();
        $model->add($_GET);
        SysLog::writeLog("增加供应商");
        echo 1;
    }
    
    public function doEditSupplier()
    {
        $model = D("Supplier");
        $model->save($_GET);
        SysLog::writeLog("编辑供应商");
        echo 1;
    }
    
    public function getSupplierById()
    {
        $model = D("Supplier");
        $one = $model->where(array(
            "sup_id" => $_GET['sup_id']
        ))->find();
        echo json_encode($one);
    }
    
    public function deleteSupplier()
    {
        $model = D("Supplier");
        $model->where($_GET)->delete();
        SysLog::writeLog("删除供应商");
        echo 1;
    }
    
    public function customer()
    {
        $model = D("Customer");
        $count = $model->count();
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
        $list = $model->limit($Page->firstRow . ',' . $Page->listRows)
        ->order("cust_id desc")
        ->select();
        $this->assign("list", $list);
        $this->assign("action", "customer");
        $this->display();
    }
    
    public function doAddCustomer()
    {
        $model = D("Customer");
        $model->add($_GET);
        echo 1;
        SysLog::writeLog("增加客户");
    }
    
    public function toEditCustomer()
    {
        $model = D("Customer");
        $one = $model->where($_GET)->find();
        $this->assign("one", $one);
        $this->display();
    }
    
    public function doEditCustomer()
    {
        $model = D("Customer");
        $model->save($_GET);
        echo 1;
        SysLog::writeLog("编辑客户");
    }
    
    public function deleteCustomer()
    {
        $model = D("Customer");
        $model->where($_GET)->delete();
        echo 1;
        SysLog::writeLog("删除客户");
    }
    
    public function doAddCate()
    {
        $model = D("ProdCate");
        $data["pdca_name"] = $_GET["pdca_name"];
        $model->add($data);
        echo 1;
        SysLog::writeLog("增加产品类别");
    }
    
    public function toAddProduct()
    {
        $model = D("ProdCate");
        $list = $model->order("pdca_id desc")->select();
        $this->assign("list", $list);
        $this->display();
    }
    
    public function doAddProduct()
    {
        $model = D("Product");
        $model->add($_GET);
        echo 1;
        SysLog::writeLog("添加产品");
    }
    
    public function doAddStore()
    {
        $model = D("Store");
        $data["sto_name"] = $_GET["sto_name"];
        $data["sto_address"] = $_GET["sto_address"];
        $data["sto_storer"] = $_GET["sto_storer"];
        $data["sto_phone"] = $_GET["sto_phone"];
        $model->add($data);
        echo 1;
        SysLog::writeLog("增加仓库");
    }
    
    public function toEditStore()
    {
        $model = D("Store");
        $one = $model->where(array(
            "sto_id" => $_GET['sto_id']
        ))->find();
        $this->assign("one", $one);
        $this->display();
    }
    
    public function doEditCate()
    {
        $model = D("ProdCate");
        $model->save($_GET);
        echo 1;
        SysLog::writeLog("编辑产品类别");
    }
    
    public function doEditStore()
    {
        $model = D("Store");
        $model->save($_GET);
        echo 1;
        SysLog::writeLog("编辑仓库");
    }
    
    public function deleteProduct()
    {
        $model = D("Product");
        $model->where(array(
            "prod_id" => $_GET['prod_id']
        ))->delete();
        echo 1;
        SysLog::writeLog("删除产品");
        $this->redirect("Product");
    }
    
    public function deleteStore()
    {
        $model = D("Store");
        $model->where($_GET)->delete();
        echo 1;
        SysLog::writeLog("删除仓库");
    }
    
    public function deleteCate()
    {
        $model = D("ProdCate");
        $model->where($_GET)->delete();
        SysLog::writeLog("删除产品类别");
        echo 1;
    }
    
    public function toEditProduct()
    {
        $model = D("Product");
        $one = $model->where(array(
            "prod_id" => $_GET['prod_id']
        ))->find();
        $this->assign("one", $one);
        $model = D("ProdCate");
        $list_cate = $model->order("pdca_id desc")->select();
        $this->assign("list_cate", $list_cate);
        $this->display();
    }
    
    public function getProdCateById()
    {
        $model = D("ProdCate");
        $one = $model->where(array(
            "pdca_id" => $_GET['pdca_id']
        ))->find();
        echo json_encode($one);
    }
    
    public function getProdById()
    {
        $model = D("Product");
        $one = $model->where(array(
            "prod_id" => $_GET['prod_id']
        ))->find();
        echo json_encode($one);
    }
    
    public function getStoreById()
    {
        $model = D("Store");
        $one = $model->where(array(
            "sto_id" => $_GET['sto_id']
        ))->find();
        echo json_encode($one);
    }
    
    public function getCustomerById()
    {
        $model = D("Customer");
        $one = $model->where(array(
            "cust_id" => $_GET['cust_id']
        ))->find();
        echo json_encode($one);
    }
    
    public function toEditCate()
    {
        $model = D("ProdCate");
        $one = $model->where(array(
            "pdca_id" => $_GET['pdca_id']
        ))->find();
        $this->assign("one", $one);
        $this->display();
    }
    
    public function doEditProduct()
    {
        $model = D("Product");
        $data["prod_name"] = $_GET["prod_name"];
        $data["prod_price"] = $_GET["prod_price"];
        $data["prod_count"] = $_GET["prod_count"];
        $data["prod_cate"] = $_GET["prod_cate"];
        $model->where(array(
            "prod_id" => $_GET['prod_id']
        ))->save($data);
        echo 1;
        SysLog::writeLog("编辑产品");
    }
}

?>