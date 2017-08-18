/**
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
var m_cellPhone = null;

///////////////////////////////////////////////////////////
/// function
function check()
{
    init();

    m_bCheck = emptyCheck();

    if(m_bCheck === false)
        return m_bCheck;

    m_bCheck = mixCheck();

    return m_bCheck;
}

function init()
{
    m_bCheck = true;
    m_empty = false;
    m_form = document.getElementById("form");
    m_ID = document.getElementById("ID");
    m_PW = document.getElementById("PW");
    m_cellPhone = document.getElementById("cellPhone");

    /**/
    m_component.push(m_ID);
    m_component.push(m_PW);
    m_component.push(m_cellPhone);
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
    var cellPhone_check = new RegExp('01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})');
    var checkList = [];

    /**/
    checkList.push(id_check);
    checkList.push(pwd_check);
    checkList.push(cellPhone_check);

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
    console.log(_check);
    console.log(_object.value);
    var temp = _check.test(_object.value);

    console.log(temp);
    if (temp == false)
    {
        alert(_text);
        _object.focus();
        m_empty = true;
    }
}