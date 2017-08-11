<?php
/**
 * boardWritingForm.html : 글쓰기 폼 페이지
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../Class/CDBException.php";
include_once "../common/header.html";

///////////////////////////////////////////////////////////
///
try
{
    /* 로그인 확인 */
    if(isset($_SESSION['login_user']) == false)
    {
        throw new CDBException(1, "", "you are not login");
    }

    /* 글 수정일 경우 index 설정 */
    $index = null;
    if(isset($_GET['index']) == false)
    {
        return;
    }
    else
    {
        $index = $_GET['index'];
    }

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* 트랜잭션 시작 */
    $db->startTransaction();
    $query = "SELECT * FROM board WHERE posting_num=". $index;

    /* 쿼리 전송 */
    $result = $db->query($query);
    if ($result == false)
    {
        throw new CDBException(3, "", "result is nothing");
    }
    $row = $result->fetch_assoc();

    /* 트랜잭션 커밋 */
    $db->commit();
    $db->close();
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