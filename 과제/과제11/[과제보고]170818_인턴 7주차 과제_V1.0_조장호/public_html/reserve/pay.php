<?php
/**
 * pay.php : 예매 결제 처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../Class/CDBControl.php";
include_once "../Class/ArrayList.php";

///////////////////////////////////////////////////////////
///
try
{
    /* var */
    $id = $_POST['id'];
    $idx = $_POST['idx'];
    $adult = $_POST['adult'];
    $kid = $_POST['kid'];
    $payMileage = $_POST['payMoney'];
    $mileage = $_POST['mileage'];
    $seatNum = explode(" ", $_POST['seatNum']);
    for($i = 0 ; $i < count($seatNum) ; $i++)
    {
        $seatNum[$i] = substr($seatNum[$i], 4, 4);
    }

    $var = new ArrayList();
    $var->add($id);
    $var->add($idx);
    $var->add($adult);
    $var->add($kid);
    $var->add($payMileage);
    $var->add($mileage);
    $var->add($seatNum);

    /* 예외 처리 */
    for($i = 0 ; $i < $var->size() ; $i++)
    {
        if($var->get($i) == null)
        {
            throw new Exception( "var is null");
        }
    }
    $var = null;

    ///////////////////////////////////////////////////////////
    ///
    if($mileage < $payMileage)
    {
        throw new Exception("잔액이 부족합니다.");
    }
    $resultMileage = $mileage - $payMileage;

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

    /* 쿼리 전송 */
    $query = "SELECT * FROM `bus` where `idx`='" . $idx . "' FOR UPDATE;";
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '쿼리를 확인 해 주세요.');
    }
    $row = $result->fetch_assoc();

    ///////////////////////////////////////////////////////////
    ///
    /* 버스 남은 좌석 업데이트 */
    $seat = $row['seat'];
    $seat -= ($adult + $kid);
    busUpdate($db, $idx, $seat);
    
    /* 유저 마일리지 업데이트 */
    mileageUpdate($db, $id, $resultMileage);
    
    /* 예매 추가 */
    for($i = 0 ; $i < $adult ; $i++) // 성인
    {
        reserveInsert($db, $row['bus_num'],  $id, $row['st_time'], $row['st_location'], $row['ar_location'], 1, $seatNum[$i], $row['money'], $idx);
    }
    for($j = 0 ; $j < $kid ; $j++) // 아동
    {
        reserveInsert($db, $row['bus_num'], $id, $row['st_time'], $row['st_location'], $row['ar_location'], 2, $seatNum[$i + $j], ($row['money'] / 2), $idx);
    }
    
    /* 마일리지 로그 추가 */
    mileageLog($db, $id, $mileage, $row['bus_num'], $payMileage, $resultMileage);

    /* 트랜잭션 커밋 */
    $db->commit();
    $db->close();

    echo "<script>location.href = '../lookup/lookup.html';</script>";
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

///////////////////////////////////////////////////////////
/// function
function busUpdate($db, $idx, $seat)
{
    $query = "SELECT `seat` FROM `bus` where `idx`='" . $idx . "' FOR UPDATE;";
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '쿼리를 확인 해 주세요.');
    }

    $query = "UPDATE `bus` SET `seat`='";
    $query .= $seat;
    $query .= "' WHERE `idx`='" . $idx . "';";
    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '쿼리를 확인 해 주세요.');
    }
}

function mileageUpdate($db, $id, $resultMileage)
{
    $query = "SELECT `mileage` FROM `user` where `id`='" . $id . "' FOR UPDATE;";

    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '쿼리를 확인 해 주세요.');
    }

    $query = "UPDATE `user` SET `mileage`='";
    $query .= $resultMileage;
    $query .= "' WHERE `id`='" . $id . "';";

    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '쿼리를 확인 해 주세요.');
    }
}

function reserveInsert($db, $bus_num, $id, $st_time, $st_location, $ar_location, $person, $seat_num, $payMileage, $bus_idx)
{
    $query = "INSERT INTO `reserve` VALUES ('null', '";
    $query .= $bus_num . "', '";
    $query .= $id . "', '";
    $query .= $st_time . "', '";
    $query .= $st_location . "', '";
    $query .= $ar_location . "', '";
    $query .= $person . "', '";
    $query .= $seat_num . "', '";
    $query .= $payMileage . "', '";
    $query .= $bus_idx . "');";

    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '쿼리를 확인 해 주세요.');
    }

}

function mileageLog($db, $id, $cur_mileage, $bus_num, $pay_mileage, $rest_mileage)
{
    $query = "INSERT INTO `mileage_log` VALUES ('1', 'null', '";
    $query .= $id . "', '";
    $query .= $cur_mileage . "', '";
    $query .= $bus_num . "', '";
    $query .= $pay_mileage . "', '";
    $query .= $rest_mileage . "');";

    $result = $db->query($query);
    if($result == false)
    {
        throw new CDBException(2, "", '쿼리를 확인 해 주세요.');
    }
}

