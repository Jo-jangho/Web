/**
 * lookup.js : 예매 조회 페이지 함수
 */

/* 예매 취소 */
function cancel(idx)
{
    if (confirm("정말 취소 하시겠습니까?"))
    {
        location.href = "../reserve/cancel.php?idx=" + idx;
    }
}