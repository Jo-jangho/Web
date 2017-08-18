/**
 * common.js : 공통 JavaScript
 */

/* function */
/**
 * 페이지 이동
 * @param $url
 */
function setUrl(_url)
{
    location.href = _url;
}

function deleteItem(/* url */ _get)
{
    if(confirm("정말 삭제 할 생각이신가요?"))
    {
        setUrl("boardDelete.php?nick_name=" + _get);
    }
}

function updateForm(/* url */ _get)
{
    setUrl("boardWritingForm.html?nick_name=" + _get);
}

function updateItem(/* url */ _get)
{
    setUrl("boardContentForm.html?index=" + _get);
}