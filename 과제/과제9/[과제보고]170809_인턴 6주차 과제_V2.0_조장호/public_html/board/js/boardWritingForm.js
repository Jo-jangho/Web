/**
 * boardWritingForm.js : 글쓰기 폼 체크 처리
 */

function check(_row, _session)
{
    var title = document.getElementById("title");
    var content = document.getElementById("content");

    if(title.value === "")
    {
        alert("제목을 입력하세요");
        return false;
    }
    if(content.value === "")
    {
        alert("내용을 입력하세요");
        return false;
    }

    if(_row !== _session)
    {
        alert("수정 권한이 없습니다.");
        return false;
    }

    return true;
}

function cancel()
{
    history.back();
}