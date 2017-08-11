<?php
/**
 * join.php : 회원가입 처리
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
    /* 예외 처리 */
    if(isset($_POST['ID']) == false)
    {
        throw new CDBException(1, "", 'id is null');
    }
    if(isset($_POST['PW']) == false)
    {
        throw new CDBException(1, "", 'password is null');
    }
    if(isset($_POST['nick_name']) == false)
    {
        throw new CDBException(1, "", 'nick_name is null');
    }
    if(isset($_POST['birth']) == false)
    {
        throw new CDBException(1, "", 'birth is null');
    }

    /* var */
    $id = $_POST['ID'];
    $pw= $_POST['PW'];
    $nick_name = $_POST['nick_name'];
    $birth = $_POST['birth'];

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* 트랜잭션 시작 */
    $db->startTransaction();
    $query = "INSERT INTO user (`id`, `password`, `nick_name`, `birth`) VALUES ('" . $id . "', password('" . $pw . "'), '" . $nick_name . "', " . $birth . ")";

    /* 쿼리 전송 */
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(1, "", '회원가입 양식을 확인 해 주세요.');
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