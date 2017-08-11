<?php
/**
 * BoardList.php : 게시판 목록 페이지
 */

///////////////////////////////////////////////////////////
///
try
{
    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* 검색유무에 따른 query */
    if (isset($_POST['query']))
    {
        $query = $_POST['query'];
    }
    else
    {
        $query = "SELECT * FROM board ORDER BY posting_num DESC";
    }

    /* 쿼리 전송 */
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", "result is null");
    }
    $db->close();

    /* 게시판 리스트 */
    while ($row = $result->fetch_assoc())
    {
        include "boardList.html";
    }
}
catch (Exception $e)
{
    echo $e->getMessage();
}
?>


