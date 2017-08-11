<?php
/**
 * BoardContentFrom : 게시판 내용
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../Class/CDBException.php";

///////////////////////////////////////////////////////////
///
try
{
    /* 예외 처리 */
    if(isset($_GET['index']) == false)
    {
        throw new CDBException(1, "", "index is null");
    }

    /* var */
    $index = $_GET['index'];

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* 트랜잭션 시작 */
    $db->startTransaction();

    /* 레코드 락 */
    $query = "SELECT * FROM board WHERE posting_num='" . $index . "'FOR UPDATE";
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", 'result is nothing(select)');
    }
    $row = $result->fetch_assoc();

    /* 조회수 증가 */
    $query = 'UPDATE board SET tic = tic + 1 WHERE posting_num=' . $index;
    $tic = $db->query($query);
    if($tic == false)
    {
        throw new CDBException(2, "", 'result is nothing(update)');
    }

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