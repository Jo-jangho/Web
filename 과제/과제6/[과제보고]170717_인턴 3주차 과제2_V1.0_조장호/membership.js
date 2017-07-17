/* var */
var m_form = null;
var m_id = null;
var m_pwd = null;
var m_pwdCheck = null;
var m_pwdCheckQu = null;
var m_pwdCheckAw = null;
var m_email = [3];
var m_local = null;
var m_phone = [2];
var m_mobile = null;
var m_mobileNum = null;
var m_cellphone = [2];
var m_address = [3];
var m_account = null;
var m_bank = null;
var m_accountNumber = null;
var m_checkbox = true;
var m_moreInfo = false;
var m_empty = false;

/* function */
function membershipJoin() 
{
    init();
    emptyCheck();
    mixCheck();
    m_moreInfo = moreInfoCheck();
    print();
}

function init() 
{
    m_form = document.membership;
    m_id = m_form.id;
    m_pwd = m_form.pwd;
    m_pwdCheck = m_form.pwdCheck;
    m_pwdCheckQu = m_form.pwdCheckQu;
    m_pwdCheckAw = m_form.pwdCheckAw;
    m_email[0] = m_form.email1;
    m_email[1] = m_form.email2;
    m_email[2] = m_form.email3;
    m_local = m_form.local;
    m_phone[0] = m_form.phone1;
    m_phone[1] = m_form.phone2;
    m_mobile = m_form.mobile;
    m_mobileNum = m_form.mobile_num;
    m_cellphone[0] = m_form.cellphone;
    m_cellphone[1] = m_form.cellphone2;
    m_address[0] = m_form.address1;
    m_address[1] = m_form.address2;
    m_address[2] = m_form.address3;
    m_account = m_form.account;
    m_bank = m_form.bank;
    m_accountNumber = m_form.account_number;
    m_checkbox = m_form.checkbox;
}

function emptyCheck() 
{
    empty(m_id, "ID를 입력하세요");
    empty(m_pwd, "비밀번호를 입력하세요");
    empty(m_pwdCheck, "비밀번호 확인을 입력하세요");
    empty(m_pwdCheckQu, "비밀번호 찾기 질문을 선택하세요");
    empty(m_pwdCheckAw, "비밀번호 찾기 답변을 입력하세요");
    empty(m_email[0], "이메일을 입력하세요");
    empty(m_email[1], "이메일을 입력하세요");
    empty(m_phone[0], "전화번호를 입력하세요");
    empty(m_phone[1], "전화번호를 입력하세요");
    empty(m_cellphone[0], "전화번호를 입력하세요");
    empty(m_cellphone[1], "전화번호를 입력하세요");
    empty(m_address[0], "우편번호를 입력하세요");
    empty(m_address[1], "주소를 입력하세요");
    empty(m_address[2], "정확한 주소를 입력하세요");
}

function empty(object, text) 
{
    if(m_empty == true)
    {
        return;
    }
    
    if (object.value == "") 
    {
        alert(text);
        object.focus();
        m_empty = true;
    }
    
    if(object == m_pwdCheckQu && m_pwdCheckQu.options.selectedIndex == 0)
    {
        alert(text);
        object.focus();
        m_empty = true;
    }
}

function mixCheck() 
{
    /**/
    var id_check = new RegExp('\\w{4,12}');
    var pwd_check = new RegExp('^[a-zA-Z0-9!@#$%^&*()?_~]{6,15}$');
    var phone_check = new RegExp('\\d{3,4}');
    var phone_check2 = new RegExp('\\d{4}');
    var zip_check = new RegExp('\\d{5}');
    
    /**/
    mix(id_check, m_id, "ID를 다시 확인 해 주세요");
    mix(pwd_check, m_pwd, "비밀번호를 다시 확인 해 주세요");
    mix(pwd_check, m_pwdCheck, "비밀번호를 다시 확인 해 주세요");
    mix(phone_check, m_phone[0], "전화번호를 다시 확인 해 주세요");
    mix(phone_check2, m_phone[1], "전화번호를 다시 확인 해 주세요");
    mix(phone_check2, m_cellphone[0], "전화번호를 다시 확인 해 주세요");
    mix(phone_check2, m_cellphone[1], "전화번호를 다시 확인 해 주세요");
    mix(zip_check, m_address[0], "우편번호를 다시 확인 해 주세요");
}
function mix(check, object, text) 
{
    if(m_empty == true)
    {
        return;
    }
    
    var temp = check.exec(object.value);
    if (temp != object.value) 
    {
        alert(text);
        object.focus();
        m_empty = true;
    }
}


function moreInfoCheck() 
{
    if (m_account == null) 
    {
        return false;
    }
    if (m_bank.options.selectedIndex == 0) 
    {
        return false;
    }
    if (m_accountNumber == null) 
    {
        return false;
    }
    
    var accountNum_check = new RegExp('\\d*', "g");
    mix(accountNum_check, m_accountNumber, "계좌번호를 다시 확인 해 주세요");
    return true;
}

function print() 
{
    if(m_empty == true)
    {
        return;
    }
    
    /**/
    var id = "id : " + m_id.value;
    var pwd = "\npwd : " + m_pwd.value;
    var pwdQu = "\n비밀번호 찾기 질문 : " + m_pwdCheckQu.options[m_pwdCheckQu.selectedIndex].text;
    var pwdAw = "\n비밀번호 찾기 답변 : " + m_pwdCheckAw.value;
    var email = "\n이메일 : " + m_email[0].value + "@" + m_email[1].value;
    var phone = "\n연락처(자택/직장) : " + m_local.options[m_local.selectedIndex].text + "-" + m_phone[0].value + "-" + m_phone[1].value;
    var cellphone = "\n연락처(휴대폰) : " + m_mobile.options[m_mobile.selectedIndex].text + " " + m_mobileNum.options[m_mobileNum.selectedIndex].text + "-" + m_cellphone[0].value + "-" + m_cellphone[1].value;
    var address = "\n주소 : " + "( " + m_address[0].value + ") " + m_address[1].value + " " + m_address[2].value;
    var result = id + pwd + pwdQu + pwdAw + email + phone + cellphone + address;
    
    if (m_moreInfo == true) 
    {
        var account = "\n예금주 : " + m_account.value + "\n은행 : " + m_bank.options[m_bank.selectedIndex].text + "\n계좌번호 : " + m_accountNumber.value;
        result += account;
    }
    
    var checked = "\n서비스 이용기간 선택 : " + m_checkbox.checked;
    result += checked;
    
    /**/
    alert(result);
}

function emailSelect(object) 
{
    var index = object.options.selectedIndex;
    switch (index) 
    {
        case 0:
            m_email[1].value = '';
            m_email[1].disabled = false;
            break;
        case 1:
            m_email[1].value = 'naver.com';
            m_email[1].disabled = true;
            break;
        case 2:
            m_email[1].value = 'hanmail.net';
            m_email[1].disabled = true;
            break;
        case 3:
            m_email[1].value = 'gmail.com';
            m_email[1].disabled = true;
            break;
    }
}