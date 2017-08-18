<?php
/**
 * login.php : 로그인 처리
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
    $pw = $_POST['PW'];

    /* 예외 처리 */
    if(isset($_POST['ID']) == false)
    {
        throw new Exception("id is null");
    }
    if(isset($_POST['PW']) == false)
    {
        throw new Exception('password is null');
    }

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* var */
    $id = $db->real_escape_string($id);
    $pw = $db->real_escape_string($pw);

    /* 쿼리 전송 */
    $query = "SELECT * FROM user WHERE id='" . $id . "' AND password=password('" . $pw . "' )";
    $result = $db->query($query);
    $row = $result->fetch_assoc();
    if ($row == null)
    {
        throw new CDBException(2, "../index.html", "로그인 정보를 다시 확인 하세요.");
    }

    /* 로그인 세션 설정 */
    session_start();
    $_SESSION['login_user'] = $id;

    setUrl("../reserve/reserve.html");
}
catch (CDBException $e)
{

}
catch (Exception $e)
{
    echo $e->getMessage();
}

?>