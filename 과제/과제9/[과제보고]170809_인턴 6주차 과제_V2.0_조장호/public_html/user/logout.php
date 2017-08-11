<?php
/**
 * logout.php : 로그아웃 기능
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBException.php";
include_once "../common/common.php";

///////////////////////////////////////////////////////////
///
try
{
    /* session */
    session_start();

    if(isset($_SESSION["login_user"]) == false)
    {
        throw new CDBException(2, "", "you are not login");
    }
    unset($_SESSION["login_user"]);

    session_destroy();
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