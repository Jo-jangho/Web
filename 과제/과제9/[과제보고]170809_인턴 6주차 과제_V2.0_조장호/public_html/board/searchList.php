<?php
/**
 * searchList.php : 검색 처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../Class/CDBException.php";

///////////////////////////////////////////////////////////
///
try
{
    /* 예외처리 */
    if(isset($_POST['search']) == false)
    {
        throw new CDBException(1, "", "검색어를 입력하세요");
    }
    if(isset($_POST['searchValue']) == false)
    {
        throw new CDBException(1, "", "검색어를 입력하세요");
    }

    /* var */
    $search = $_POST['search'];
    $searchValue = $_POST['searchValue'];
    $where = null;
    if($search != null)
    {
        $where = "where $search like '%$searchValue%'";
    }

    $query = 'select * from board ' . $where . 'ORDER BY posting_num DESC';
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

<!-- 쿼리문 POST로 전송-->
<form action="../index.html" method="post" name="queryForm">
    <input type="hidden" name="query" value="<?=$query?>">
</form>
<script>
    document.queryForm.submit();
</script>
