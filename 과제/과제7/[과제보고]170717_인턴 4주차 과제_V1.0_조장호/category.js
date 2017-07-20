/* var */

/* function */
function mainInit()
{    
    for(var i = 0 ; i < localStorage.length ; i++)
    {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        if(key.indexOf("first") == 0)
        {
            addFirstDiv(key, value);
        }
    }
    for(i = 0 ; i < localStorage.length ; i++)
    {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        if(key.indexOf("마일리지") == 0)
        {
            addSecondDiv(key, value);
        }
        if(key.indexOf("포탈서비스") == 0)
        {
            addSecondDiv(key, value);
        }
        if(key.indexOf("회원정보") == 0)
        {
            addSecondDiv(key, value);
        }
        if(key.indexOf("신용등급/보안") == 0)
        {
            addSecondDiv(key, value);
        }
    }
    for(i = 0 ; i < localStorage.length ; i++)
    {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        if(key.indexOf("내마일리지") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("입금") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("충전") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("상품권몰") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("게임몰") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("매니아옥션") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("매니아존") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("게임매니아") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("서비스이용제한") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("개인정보관리") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("회원가입") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("신용등급/인증") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("결제보안센터") == 0)
        {
            addThirdDiv(key, value);
        }
        if(key.indexOf("마일리지결제인증") == 0)
        {
            addThirdDiv(key, value);
        }
    }
}

function openPopup() 
{
    window.open("popup/popup.html", "Example", "scrollbars=no, width=550, height=230, menubar=false");
}

/**/
function addFirstDiv(_key, _value) 
{
    addCategory(_key, _value);
    addCategoryFirst(_key, _value);
    addCheckbox(_key, _value);
    addSpanFirst(_key, _value);
    addChange(_key, _value);
    addClose(_key, _value);
}

function addSecondDiv(_key, _value)
{
    addWrap(_key, _value);
    addCategorySecond(_key, _value);
    addSecondBtnUp(_key, _value);
    addSecondBtnDown(_key, _value);
    addSecondSpan(_key, _value);
}

function addThirdDiv(_key, _value)
{
    addCategoryThird(_key, _value);
    addThirdBtnUp(_key, _value);
    addThirdBtnDown(_key, _value);
    addThirdSpan(_key, _value);
}

/* 
* FIRST 
*/
function addCategory(_key, _value) 
{
    var category = document.createElement('div');
    category.className = "category";
    category.id = "category" + _value;
    document.getElementById('container').appendChild(category);
}

function addCategoryFirst(_key, _value) 
{
    var categoryFirst = document.createElement('div');
    categoryFirst.className = "categoryFirst";
    categoryFirst.id = "categoryFirst" + _value;
    document.getElementById('category' + _value).appendChild(categoryFirst);
}

function addCheckbox(_key, _value) 
{
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    document.getElementById('categoryFirst' + _value).appendChild(checkbox);
}

function addSpanFirst(_key, _value) 
{
    var span = document.createElement('span');
    span.innerHTML = localStorage.getItem(_key);
    document.getElementById('categoryFirst' + _value).appendChild(span);
}

function addChange(_key, _value) 
{
    var btnChange = document.createElement('button');
    btnChange.className = "btnChange";
    document.getElementById('categoryFirst' + _value).appendChild(btnChange);
}

function addClose(_key, _value) 
{
    var btnClose = document.createElement('button');
    btnClose.className = "btnClose";
    btnClose.id = "btnClose" + _key;
    btnClose.setAttribute('onclick', 'deleteCategory(this)');
    document.getElementById('categoryFirst' + _value).appendChild(btnClose);
}

/* 
** SECOND
*/
function addWrap(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var wrap = document.createElement('div');
    wrap.className = "clearfix";
    wrap.id = "wrap" + _value;
    document.getElementById('category' + _key).appendChild(wrap);
}

function addCategorySecond(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var categorySecond = document.createElement('div');
    categorySecond.className = "categorySecond clearfix";
    categorySecond.id = "categorySecond" + _value;
    document.getElementById('wrap' + _value).appendChild(categorySecond);
}

function addSecondBtnUp(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var btnUp = document.createElement('button');
    btnUp.className = "up";
    btnUp.id = "btnUp" + _value;
    document.getElementById('categorySecond' + _value).appendChild(btnUp);
}

function addSecondBtnDown(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var btnDown = document.createElement('button');
    btnDown.className = "down";
    btnDown.id = "btnDown" + _value;
    document.getElementById('categorySecond' + _value).appendChild(btnDown);
}

function addSecondSpan(_key, _value)
{
    var span = document.createElement('span');
    span.innerHTML = localStorage.getItem(_key);
    document.getElementById('categorySecond' + _value).appendChild(span);
}

/* 
*** THIRD
*/
function addCategoryThird(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var categoryThird = document.createElement('div');
    categoryThird.className = "categoryThird clearfix";
    categoryThird.id = "categoryThird" + _value;
    document.getElementById('wrap' + _key).appendChild(categoryThird);
}

function addThirdBtnUp(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var btnUp = document.createElement('button');
    btnUp.className = "up";
    btnUp.id = "btnUp" + _value;
    document.getElementById('categoryThird' + _value).appendChild(btnUp);
}

function addThirdBtnDown(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var btnDown = document.createElement('button');
    btnDown.className = "down";
    btnDown.id = "btnDown" + _value;
    document.getElementById('categoryThird' + _value).appendChild(btnDown);
}

function addThirdSpan(_key, _value)
{
    var span = document.createElement('span');
    span.innerHTML = localStorage.getItem(_key);
    document.getElementById('categoryThird' + _value).appendChild(span);
}

/*
**** PUBLIC
*/
function deleteCategory(obj)
{
    if(confirm("1차분류 및 하위분류 그리고, 모든 데이터가 삭제됩니다.\n정말로 삭제 하시겠습니까?"))
    {
        localStorage.removeItem("first" + obj.id.slice(obj.id.length - 1));
        window.location.reload();
    }
}