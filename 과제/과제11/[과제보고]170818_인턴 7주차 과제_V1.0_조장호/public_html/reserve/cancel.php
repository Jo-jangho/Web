<?php
/**
 * cancel.php : 예매 취소 처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";

///////////////////////////////////////////////////////////
///
try
{
    /* var */
    $idx = $_GET['idx'];
    if($idx == null)
    {
        throw new Exception("idx is null");
    }

    ///////////////////////////////////////////////////////////
    ///
    /* DB 연결 */
    $db = new CDBControl();
    if($db == null)
    {
        throw new CDBException(1, "", 'Could not connect to database server');
    }


    /* 트랜잭션 시작 */
    $db->startTransaction();

    ///////////////////////////////////////////////////////////
    ///
    /* 예매 테이블 */
    $query = "SELECT * FROM `reserve` WHERE `reserve_seq`='" . $idx . "' FOR UPDATE;";
    $result = $db->query($query);
    if ($result == null)
    {
        throw new CDBException(2, "../index.html", "예매 쿼리를 정보를 다시 확인 하세요.");
    }
    $reserveRow = $result->fetch_assoc();

    /* 버스 테이블 */
    $query = "SELECT * FROM `bus` WHERE `idx`='" . $reserveRow['bus_idx'] . "';";
    $result = $db->query($query);
    if ($result == null)
    {
        throw new CDBException(2, "../index.html", "버스 쿼리를 정보를 다시 확인 하세요.");
    }
    $busRow = $result->fetch_assoc();

    /* 유저 테이블 */
    $query = "SELECT * FROM `user` WHERE `id`='" . $reserveRow['id'] . "' FOR UPDATE;";
    $result = $db->query($query);
    if ($result == null)
    {
        throw new CDBException(2, "../index.html", "유저 쿼리를 정보를 다시 확인 하세요.");
    }
    $userRow = $result->fetch_assoc();

    ///////////////////////////////////////////////////////////
    ///
    /* 환불 */
    $st_time = new DateTime($reserveRow['st_time']);
    $cur_time = new DateTime(date("Y-m-d H:i:s", time()));
    $diff_time = date_diff($st_time, $cur_time);
    $backMoney = $reserveRow['money'];
    $resultSeat = intval($busRow['seat']) + 1;

    if($diff_time->format("%i") < 30 && $diff_time->format("%h") < 1)
    {
        //취소불가
        throw new CDBException(2, "", "취소가 불가능 합니다.");
    }
    else if($diff_time->format("%i") >= 30 && $diff_time->format("%h") < 1)
    {
        //수수료 50
        $backMoney *= 0.5;
    }
    else if ($diff_time->format("%h") < 2)
    {
        //수수료 30
        $backMoney *= 0.3;
    }
    else
    {
        //전액
        $backMoney = $reserveRow['money'];
    }

    $user_mileage = $userRow['mileage'];
    $result_mileage = $user_mileage + $backMoney;

    ///////////////////////////////////////////////////////////
    /// 예매 취소
    /* 유저 마일리지 돌려주기 */
    $query = "UPDATE `user` SET `mileage`='" . $result_mileage;
    $query .= "' WHERE `id`='" . $userRow['id'] . "';";
    $result = $db->query($query);
    if ($result == null)
    {
        throw new CDBException(2, "../index.html", "UPDATE 쿼리를 정보를 다시 확인 하세요.");
    }

    /* 버스 남은 좌석 업데이트 */
    $query = "UPDATE `bus` SET `seat`='" . $resultSeat . "' WHERE `bus_num`='" . $reserveRow['bus_num'] . "';";
    $result = $db->query($query);
    if ($result == null)
    {
        throw new CDBException(2, "../index.html", "UPDATE 쿼리를 정보를 다시 확인 하세요.");
    }

    /* 예매 정보 삭제 */
    $query = "DELETE FROM `reserve` WHERE `reserve_seq`='" . $idx . "';";
    var_dump($query);
    $result = $db->query($query);
    if ($result == null)
    {
        throw new CDBException(2, "../index.html", "DELETE 쿼리를 정보를 다시 확인 하세요.");
    }

    /* 마일리지 로그 기록 */
    $query = "INSERT INTO `mileage_log` VALUES (2, NULL, '" . $userRow['id'] . "', '";
    $query .= $user_mileage . "', '";
    $query .= $busRow['bus_num'] . "', '";
    $query .= $backMoney . "', '";
    $query .= $result_mileage . "')";
    $result = $db->query($query);
    if ($result == null)
    {
        throw new CDBException(2, "../index.html", "INSERT 쿼리를 정보를 다시 확인 하세요.");
    }

    /* 트랜잭션 커밋 */
    $db->commit();
    $db->close();

    echo "<script>history.back();</script>";
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