<?php
/**
 * BoardWriting.php : 글쓰기 처리
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
    /* 세션 시작 */
    session_start();

    /* 예외 처리 */
    if(isset($_SESSION['login_user']) == false)
    {
        setUrl("../user/loginForm.html");
    }
    if(isset($_GET['index']))
    {
        $index = $_GET['index'];
    }
    if(isset($_POST['title']) == false)
    {
        throw new CDBException(1, "", "title is  null");
    }
    if(isset($_SESSION['nick_name']) == false)
    {
        throw new CDBException(1, "", "nick_name is  null");
    }
    if(isset($_POST['content']) == false)
    {
        throw new CDBException(1, "", "content is  null");
    }
    if(isset($_FILES['file_name']) == false)
    {
        throw new CDBException(1, "", "content is  null");
    }

    /* var */
    $result = null;
    $title = $_POST['title'];
    $nick_name = $_SESSION['nick_name'];
    $date = time();
    $content = $_POST['content'];

    /* 첨부 파일 처리 */
    $file = $_FILES['file_name'];
    $file_name = null;
    if($file['size'] != 0)
    {
        $file_name = basename($_FILES['file_name']['name']);
        $uploadDir = 'C:\AutoSet9\public_html\file\\';

        $uploadFile = $uploadDir . $file_name;

        if (move_uploaded_file($_FILES['file_name']['tmp_name'], $uploadFile))
        {
            echo "파일이 유효하고, 성공적으로 업로드 되었습니다.\n";
        }
        else
        {
            throw new CDBException(1, "", "파일 업로드 공격의 가능성이 있습니다!");
        }
    }

    /* 등록 */
    if(isset($_POST['reg']))
    {
        /* DB 연결 */
        $db = new CDBControl();
        if($db == null)
        {
            throw new CDBException(1, "", 'Could not connect to database server');
        }

        /* 트랜잭션 시작 */
        $db->startTransaction();
        $query = "INSERT INTO board (`title`, `nick_name`, `content`, `file_name`) VALUES ('" . $title . "', '" . $nick_name . "', '" . $content . "', '" . $file_name . "')";

        /* 쿼리 전송 */
        $result = $db->query($query);
        if($result == false)
        {
            throw new CDBException(3, "", 'result is nothing');
        }
    }
    /* 수정 */
    else if(isset($_POST['edit']))
    {
        /* DB 연결 */
        $db = new CDBControl();
        if($db == null)
        {
            throw new CDBException(1, "", 'Could not connect to database server');
        }

        /* 트랜잭션 시작 */
        $db->startTransaction();
        $query = "UPDATE `board` SET `title`='" . $title . "', `date`=current_time(), `content`='" . $content . "', `file_name`='" . $file_name . "' where posting_num=" . $index;

        /* 쿼리 전송 */
        $result = $db->query($query);
        if($result == false)
        {
            throw new CDBException(3, "", 'result is nothing');
        }
    }

    /* 트랜잭션 커밋 */
    $db->commit();
    $db->close();

    historyGo(-2);
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