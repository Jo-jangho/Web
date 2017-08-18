/**
 * busForm.js : 관리자 버스 관리 폼 체크 및 함수
 */

///////////////////////////////////////////////////////////
/// var
var m_bCheck = true;
var m_empty = false;
var m_componentText = [];
var m_componentSelect = [];
var m_form = null;
var m_busNum = null;
var m_busGrade = null;
var m_busCompany = null;
var m_stHour = null;
var m_stMin = null;
var m_stLocation = null;
var m_arLocation = null;
var m_money = null;

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
    m_form = document.form;
    m_busNum = m_form.bus_num;
    m_busGrade = m_form.grade;
    m_busCompany = m_form.company;
    m_stHour = m_form.hour;
    m_stMin = m_form.min;
    m_stLocation = m_form.st_location;
    m_arLocation = m_form.ar_location;
    m_money = m_form.money;

    /**/
    m_componentText.push(m_busNum);
    m_componentText.push(m_busCompany);
    m_componentText.push(m_money);
    m_componentSelect.push(m_busGrade);
    m_componentSelect.push(m_stHour);
    m_componentSelect.push(m_stMin);
    m_componentSelect.push(m_stLocation);
    m_componentSelect.push(m_arLocation);
    
}

//////////////////////////////////////////////////////////////////////////////////////////
///
function emptyCheck()
{
    for(var i = 0 ; i < m_componentText.length ; i++)
    {
        if (m_componentText[i].value === "")
        {
            alert("빠트리신것은 없는지 확인 해 주세요.");
            m_componentText[i].focus();
            m_empty = true;
        }
        
        if(m_empty === true)
        {
            m_empty = false;
            return false;
        }
    }
    
    for(i = 0 ; i < m_componentSelect.length ; i++)
    {
        if(m_componentSelect[i].options[m_componentSelect[i].selectedIndex].text === "")
        {
            alert("빠트리신것은 없는지 확인 해 주세요.");
            m_componentSelect[i].focus();
            m_empty = true;
        }
        
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
    if(_object.options[_object.selectedIndex].text === "")
    {
        alert(_text);
        _object.focus();
        m_empty = true;
    }
    else if (_object.value === "")
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
    var money_check = new RegExp("\\d");

    /**/
    mix(money_check, m_money, "양식에 맞춰 입력하세요");
    if(m_empty === true)
    {
        m_empty = false;
        return false;
    }
    
    return true;
}

function mix(_check, _object, _text)
{
    var temp = _check.test(_object.value);

    if (temp == false)
    {
        alert(_text);
        _object.focus();
        m_empty = true;
    }
}