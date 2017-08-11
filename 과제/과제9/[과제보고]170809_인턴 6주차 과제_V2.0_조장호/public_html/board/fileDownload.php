<?php
/**
 * fileDownload.php : 파일 다운로드 처리
 */
///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBException.php";

///////////////////////////////////////////////////////////
///
try
{
    /* 예외 처리 */
    if(isset($_GET['file_name']) == false)
    {
        throw new CDBException(1, "", "file_name is null");
    }

    /* var */
    $file_name = $_GET["file_name"];

    /* 파일 경로 */
    $downloadDir = 'C:\AutoSet9\public_html\file\\';
    $downloadFile = $downloadDir . $file_name;

    /* 파일 다운로드 */
    if(file_exists($downloadFile) != null)
    {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename=' . basename($downloadFile));
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($downloadFile));
        ob_clean();
        flush();
        readfile($downloadFile);
    }
    else
    {
        throw new CDBException(2, "", "파일이 존재 하지 않습니다.\r\n관리자에게 문의해주세요.");
    }
}
catch (CDBException $e)
{
    echo $e->getMsg();
    $db->rollback();
}
catch (Exception $e)
{
    echo $e->getMessage();
}
?>