<?php
/**
 * login.php : 로그인 처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../Class/CDBException.php";

///////////////////////////////////////////////////////////
///
try
{
    /* session */
    session_start();

    /* 예외 처리 */
    if(isset($_POST['ID']) == false)
    {
        throw new CDBException(1, "", "id is null");
    }
    if(isset($_POST['PW']) == false)
    {
        throw new CDBException(1, "", 'password is null');
    }

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* var */
    $id = $db->real_escape_string($_POST['ID']);
    $pw = $db->real_escape_string($_POST['PW']);

    /* 쿼리 전송 */
    $query = "SELECT * FROM user WHERE id='" . $id . "' AND password=password('" . $pw . "' )";
    $result = $db->query($query);
    $row = $result->fetch_assoc();
    if ($row == null)
    {
        throw new CDBException(3, "", "로그인 정보를 다시 확인 하세요.");
    }

    /* 로그인 세션 설정 */
    $_SESSION['nick_name'] = $row['nick_name'];
    $_SESSION['login_user'] = $id;

    setUrl("../index.html");
}
catch (CDBException $e)
{
    echo $e->getMsg();
}
catch (Exception $e)
{
    echo $e->getMessage();
}
?>