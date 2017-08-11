<?php
/**
 * boardDelete.php : 게시글 삭제 처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../Class/CDBException.php";
include_once "../common/common.php";

///////////////////////////////////////////////////////////
///
try
{
    /* session */
    session_start();

    if($_SESSION['nick_name'] != $_GET['nick_name'])
    {
        throw new CDBException(2, "", "글 삭제 권한이 없습니다.");
    }

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* 트랜잭션 시작 */
    $db->startTransaction();

    /* 레코드 락 */
    $query = "SELECT * FROM `board` WHERE posting_num='" . $_GET['index'] . "' FOR UPDATE";
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(1, "", 'result is nothing(select)');
    }

    /* 쿼리 전송 */
    $query = "DELETE FROM board WHERE posting_num=" . $_GET['index'];
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(1, "", 'result is nothing(delete)');
    }

    /* 트랜잭션 커밋 */
    $db->commit();
    $db->close();

    setUrl("../index.html");
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