<?php
namespace Storage\Controller;
use Org\Util\Page;
use Org\Util\SysLog;

class StockManageController extends BaseController
{
    public function stock()
    {
        $model = D("Stock");
        $count = $model->count();
        $Page = new Page($count, D('Setting')->where(array('set_id' => 1))->getField('set_list_pagesize'));
        
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
        ->join('twms_prod_cate as b on stk_cate=pdca_id')
        ->join('twms_store on stk_store=sto_id')
        ->order('stk_id desc')
        ->limit($Page->firstRow . ',' . $Page->listRows)
        ->select();
        $this->assign("list", $list);
        $model_store = D('Store');
        $list_store = $model_store->order('sto_id desc')->select();
        $this->assign("list_store", $list_store);
        $model_prodcate = D('ProdCate');
        $list_prodcate = $model_prodcate->order('pdca_id desc')->select();
        $this->assign("list_prodcate", $list_prodcate);
        $this->display();
    }
    
    public function export()
    {
        $model = D("Stock");
        $list = $model->alias('a')
        ->join('twms_prod_cate as b on stk_cate=pdca_id')
        ->join('twms_store on stk_store=sto_id')
        ->order('stk_id desc')
        ->select();
        $this->echoExecl($list);
        $this->assign("list", $list);
        $this->display();
    }
    
    public function stats()
    {
        $model = D("Stock");
        $list = $model->alias("a")
        ->join("twms_prod_cate as b on stk_cate=pdca_id","left")
        //->group("stk_prod")
        ->group("stk_prodname")
        ->field('stk_prodname')
        ->select();
        $count = count($list);
        $Page = new Page($count, D('Setting')->where(array(
            'set_id' => 1
        ))->getField('set_list_pagesize'));
        $show = $Page->show();
        $this->assign('page', $show);
        $list = $model->alias("a")
        ->join("twms_prod_cate as b on stk_cate=pdca_id","left")
        /*
        ->group("stk_prod")
        ->field("a.*,b.pdca_name,sum(stk_count) as `count`,sum(stk_total) as `total`")
        ->order('stk_id desc')
        */
        ->group("a.stk_cate,a.stk_prodname,a.stk_price")
        ->field("a.stk_prodname,b.pdca_name,a.stk_price,sum(stk_count) as `count`,sum(stk_total) as `total`")
        ->order('stk_prodname')
        
        ->limit($Page->firstRow . ',' . $Page->listRows)
        ->select();
        $this->assign("list", $list);
        $this->display();
    }
    
    public function getStockById()
    {
        $model = D('Stock');
        $one = $model->where(array(
            'stk_id' => $_GET['stk_id']
        ))->find();
        echo json_encode($one);
    }
    
    public function doEditStock()
    {
        $model = D("Stock");
        $model->save($_GET);
        SysLog::writeLog("编辑库存");
        echo 1;
    }
    
    public function delete()
    {
        $model_main = D("Stock");
        $map["stk_id"] = $_GET['stk_id'];
        $model_main->where($map)->delete();
        SysLog::writeLog("删除库存记录");
        $this->redirect("index");
    }
    
    private function echoExecl($records)
    {
        error_reporting(E_ALL);
        import("Org.Util.PHPExcel");
        $objPHPExcel = new \PHPExcel();
        $objPHPExcel->getProperties()
        ->setCreator($_SESSION["user"]["user_name"])
        ->setLastModifiedBy("Maarten Balliauw")
        ->setTitle("Office 2007 XLSX Test Document")
        ->setSubject("Office 2007 XLSX Test Document")
        ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
        ->setKeywords("office 2007 openxml php")
        ->setCategory("Test result file");
        $objPHPExcel->setActiveSheetIndex(0);
        $arrStyle_title = array(
            'font' => array(
                'bold' => true,
                'size' => 18,
                'color' => array(
                    'argb' => 'FF000000'
                )
            ),
            'alignment' => array(
                'horizontal' => \PHPExcel_Style_Alignment::HORIZONTAL_CENTER
            )
        );
        $arrStyle_column = array(
            'font' => array(
                'bold' => true,
                'size' => 12,
                'color' => array(
                    'argb' => 'FFFFFFFF'
                )
            ),
            'alignment' => array(
                'horizontal' => \PHPExcel_Style_Alignment::HORIZONTAL_CENTER
            ),
            'borders' => array(
                'top' => array(
                    'style' => \PHPExcel_Style_Border::BORDER_THIN
                ),
                'bottom' => array(
                    'style' => \PHPExcel_Style_Border::BORDER_THIN
                )
            ),
            'fill' => array(
                'type' => \PHPExcel_Style_Fill::FILL_SOLID,
                'color' => array(
                    'argb' => 'FF969696'
                )
            )
        );
        $arrStyle_right = array(
            'borders' => array(
                'right' => array(
                    'style' => \PHPExcel_Style_Border::BORDER_THIN
                )
            )
        );
        $arrStyle_content_column = array(
            'alignment' => array(
                'horizontal' => \PHPExcel_Style_Alignment::HORIZONTAL_CENTER
            )
        );
        $objPHPExcel->getActiveSheet()->setCellValue('A1', '库存统计');
        $objPHPExcel->getActiveSheet()->mergeCells('A1:E1');
        $objPHPExcel->getActiveSheet()
        ->getStyle('A1:E1')
        ->applyFromArray($arrStyle_title);
        $objPHPExcel->getActiveSheet()
        ->setCellValue('A2', '产品')
        ->setCellValue('B2', '单价')
        ->setCellValue('C2', '数量')
        ->setCellValue('D2', '总价')
        ->setCellValue('E2', '仓库');
        $objPHPExcel->getActiveSheet()
        ->getStyle('A2:E2')
        ->applyFromArray($arrStyle_column);
        $objPHPExcel->getActiveSheet()
        ->getStyle('A2')
        ->applyFromArray(array(
            'borders' => array(
                'left' => array(
                    'style' => \PHPExcel_Style_Border::BORDER_THIN
                )
            )
        ));
        $objPHPExcel->getActiveSheet()
        ->getStyle('E2')
        ->applyFromArray($arrStyle_right);
        $objPHPExcel->getActiveSheet()
        ->getColumnDimension('A')
        ->setWidth(15);
        $objPHPExcel->getActiveSheet()
        ->getColumnDimension('B')
        ->setWidth(10);
        $objPHPExcel->getActiveSheet()
        ->getColumnDimension('C')
        ->setWidth(16);
        $objPHPExcel->getActiveSheet()
        ->getColumnDimension('D')
        ->setWidth(10);
        $objPHPExcel->getActiveSheet()
        ->getColumnDimension('E')
        ->setWidth(10);
        
        //var_dump($records);
        //break;
        
        foreach ($records as $key => $list) {
            /*
            $A = $list['iss_name'];
            $B = $list['iss_price'];
            $C = $list['count'];
            $D = $list['total'];
            $E = $list['iss_store'];
            */
            $A = $list['stk_prodname'];
            $B = $list['stk_price'];
            $C = $list['stk_count'];
            $D = $list['stk_total'];
            $E = $list['sto_name'];
            
            $n = $key + 3;
            $objPHPExcel->getActiveSheet()
            ->getStyle('A' . $n)
            ->applyFromArray($arrStyle_content_column);
            $objPHPExcel->getActiveSheet()
            ->getStyle('B' . $n)
            ->applyFromArray($arrStyle_content_column);
            $objPHPExcel->getActiveSheet()
            ->getStyle('C' . $n)
            ->applyFromArray($arrStyle_content_column);
            $objPHPExcel->getActiveSheet()
            ->getStyle('D' . $n)
            ->applyFromArray($arrStyle_content_column);
            $objPHPExcel->getActiveSheet()
            ->getStyle('E' . $n)
            ->applyFromArray($arrStyle_content_column);
            $objPHPExcel->getActiveSheet()
            ->setCellValue('A' . $n, $A)
            ->setCellValue('B' . $n, $B)
            ->setCellValue('C' . $n, $C)
            ->setCellValue('D' . $n, $D)
            ->setCellValue('E' . $n, $E);
            //var_dump($n,$A,$B,$C,$D,$E);
            //break;
        }
        $objPHPExcel->getActiveSheet()->setTitle('库存统计');
        $objPHPExcel->setActiveSheetIndex(0);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="OA_total.xls"');
        header('Cache-Control: max-age=0');
        $objWriter = \PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
        $objWriter->save('php://output');
        exit();
    }
}

?>