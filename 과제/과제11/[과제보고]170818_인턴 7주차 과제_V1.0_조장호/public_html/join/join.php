<?php
/**
 * join.php : 회원가입 처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../common/common.php";

///////////////////////////////////////////////////////////
///
try
{
    /* var */
    $id = preg_replace("/[\r\n\s\t\'\;\"\=\-\/*]+/", "", $_POST['ID']);
    $pw= $_POST['PW'];
    $cellPhone = $_POST['cellPhone'];
    
    /* 예외 처리 */
    if(isset($_POST['ID']) == false)
    {
        throw new Exception('id is null');
    }
    if(isset($_POST['PW']) == false)
    {
        throw new Exception('password is null');
    }
    if(isset($_POST['cellPhone']) == false)
    {
        throw new Exception('cellPhone is null');
    }

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* 트랜잭션 시작 */
    $db->startTransaction();
    $query = "INSERT INTO user (`id`, `password`, `cellphone`) VALUES ('" . $id . "', password('" . $pw . "'), '" . $cellPhone . "')";

    /* 쿼리 전송 */
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '회원가입 양식을 확인 해 주세요.');
    }

    /* 트랜잭션 커밋 */
    $db->commit();
    $db->close();

    setUrl("../index.html");
}
catch (CDBException $e)
{
    $db->rollback();
}
catch (Exception $e)
{
    historyBack();
    echo $e->getMessage();
}

?>