/*
 * join.js : 회원가입 폼 체크
 */

///////////////////////////////////////////////////////////
/// var
var m_bCheck = true;
var m_empty = false;
var m_component = [];
var m_form = null;
var m_ID = null;
var m_PW = null;
var m_nickName = null;
var m_birth = null;

///////////////////////////////////////////////////////////
/// function
function check()
{
    init();

    console.log(m_bCheck + "1");
    m_bCheck = emptyCheck();

    console.log(m_bCheck + "2");
    if(m_bCheck === false)
        return m_bCheck;

    console.log(m_bCheck + "3");
    m_bCheck = mixCheck();

    console.log(m_bCheck + "4");
    console.log("ID : " + m_ID.value);
    return m_bCheck;
}

function init()
{
    m_bCheck = true;
    m_empty = false;
    m_form = document.getElementById("form");
    m_ID = document.getElementById("ID");
    m_PW = document.getElementById("PW");
    m_nickName = document.getElementById("nick_name");
    m_birth = document.getElementById("birth");

    /**/
    m_component.push(m_ID);
    m_component.push(m_PW);
    m_component.push(m_nickName);
    m_component.push(m_birth);
}

//////////////////////////////////////////////////////////////////////////////////////////
///////////
function emptyCheck()
{
    for(var i = 0 ; i < m_component.length ; i++)
    {
        empty(m_component[i], "빠트리신것은 없는지 확인 해 주세요.");
        if(m_empty === true)
        {
            m_empty = false;
            return false;
        }
    }
    return true;
}

function empty(_object, _text)
{
    if (_object.value === "")
    {
        alert(_text);
        _object.focus();
        m_empty = true;
    }
}

///////////////////////////////////////////////////////////
///
function mixCheck()
{
    /* var */
    var id_check = new RegExp('\\w{4,10}');
    var pwd_check = new RegExp('^[a-zA-Z0-9!@#$%^&*()?_~]{8,16}$');
    var nickName_check = new RegExp('\\S{3,5}');
    var birth_check = new RegExp('\\d{6}');
    var checkList = [];

    /**/
    checkList.push(id_check);
    checkList.push(pwd_check);
    checkList.push(nickName_check);
    checkList.push(birth_check);

    /**/
    for(var i = 0 ; i < checkList.length ; i++)
    {
        mix(checkList[i], m_component[i], "양식에 맞춰 입력하세요");
        if(m_empty === true)
        {
            m_empty = false;
            return false;
        }
    }
    return true;
}

function mix(_check, _object, _text)
{
    var temp = _check.exec(_object.value);

    if (temp != _object.value)
    {
        alert(_text);
        _object.focus();
        m_empty = true;
    }
}