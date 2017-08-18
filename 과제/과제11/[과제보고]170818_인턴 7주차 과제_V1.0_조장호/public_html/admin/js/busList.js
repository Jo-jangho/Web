/**
 * busList.js : 관리자 버스 리스트 함수
 */

/* 버스 경로 삭제 */
function deleteBus(idx)
{
    if (confirm("정말 삭제 하시겠습니까?"))
    {
        location.href = "busProcess.php?idx=" + idx;
    }
}