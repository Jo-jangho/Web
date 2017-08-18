<?php
/**
 * busProcess.php : 버스 관리 처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../Class/ArrayList.php";

///////////////////////////////////////////////////////////
///
try
{
    /* 버스 노선 삭제 */
    if(isset($_GET['idx']) == true)
    {
        $idx = $_GET['idx'];
        if ($idx == null)
        {
            throw new Exception("idx is null");
        }

        /* DB 연결 */
        $db = new CDBControl();
        if ($db == null)
        {
            throw new CDBException(1, "", 'Could not connect to database server');
        }

        /* 트랜잭션 시작 */
        $db->startTransaction();

        /* 쿼리 전송 */
        $query = "SELECT * FROM `bus` WHERE `idx`='" . $idx . "' FOR UPDATE;";
        $result = $db->query($query);
        if ($result == false)
        {
            throw new CDBException(2, "", 'SELECT 쿼리를 확인 해 주세요.');
        }
        $busRow = $result->fetch_assoc();

        /* 쿼리 전송 */
        $query = "SELECT `bus_idx` FROM `reserve` FOR UPDATE;";
        $result = $db->query($query);
        if ($result == false)
        {
            throw new CDBException(2, "", 'SELECT 쿼리를 확인 해 주세요.');
        }
        while ($reserveRow = $result->fetch_assoc())
        {
            if($busRow['idx'] == $reserveRow['bus_idx'])
            {
                throw new CDBException(2, "", '이미 예약된 노선입니다.');
            }
        }

        $query = "DELETE FROM `bus` WHERE `idx`='" . $idx . "';";
        /* 쿼리 전송 */
        $result = $db->query($query);
        if($result == false)
        {
            throw new CDBException(2, "", 'DELETE 쿼리를 확인 해 주세요.');
        }

        /* 트랜잭션 커밋 */
        $db->commit();
        $db->close();

        echo "<script>history.back();</script>";
    }

    ///////////////////////////////////////////////////////////
    /// 버스 노선 등록
    /* var */
    $busNum = $_POST['bus_num'];
    $busGrade = $_POST['grade'];
    $busCompany = $_POST['company'];
    $time = mktime(intval($_POST['hour']), intval($_POST['min']), 0, intval($_POST['month']), intval($_POST['day']), intval($_POST['year']));
    $time = date("Y-m-d H:i:s", $time);
    $stLocation = $_POST['st_location'];
    $arLocation = $_POST['ar_location'];
    $money = $_POST['money'];

    $var = new ArrayList();
    $var->add($busNum);
    $var->add($busGrade);
    $var->add($busCompany);
    $var->add($time);
    $var->add($stLocation);
    $var->add($arLocation);
    $var->add($money);

    /* 예외 처리 */
    for($i = 0 ; $i < $var->size() ; $i++)
    {
        if($var->get($i) == null)
        {
            throw new Exception( "var is null");
        }
    }
    $var = null;

    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }

    /* 트랜잭션 시작 */
    $db->startTransaction();

    $week = strtotime($time . " +" . $i . "DAY");
    $week = date("Y-m-d H:i:s", $week);

    /* 쿼리 전송 */
    $query = "INSERT INTO `bus` VALUES (NULL, '".$busNum."', '";
    $query .= $week;
    $query .= "', '".$busGrade."', '".$busCompany."', '45', '".$stLocation."', '".$arLocation."', '".$money."');";
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '양식을 확인 해 주세요.');
    }

    /* 트랜잭션 커밋 */
    $db->commit();
    $db->close();

    echo "<script>location.href = 'busList.html';</script>";
}
catch (CDBException $e)
{
    $db->rollback();
}
catch (Exception $e)
{
    echo "<script>history.back();</script>";
    echo $e->getMessage();
}