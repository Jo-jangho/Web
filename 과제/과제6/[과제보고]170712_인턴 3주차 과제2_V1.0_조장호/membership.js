var id_check = "/\w{3,11}/";
var pwd_check = "/\S{10,16}/";

var m_form = null;
var m_id = null;

function membershipJoin()
{
  m_form = document.membership;
  if(m_form.id.value.test(id_check))
  {
      m_id = m_form.id.value;
  }
  else
  {
      alert('id를 꼭 입력하세요');
      document.membership.id.focus();
      return;
  }

  if(document.membership.pwd.value == "")
  {
      alert('비밀번호를 꼭 입력하세요');
      document.membership.pwd.focus();
      return;
  }
  if(document.membership.pwdcheck.value == "")
  {
      alert('비밀번호를 꼭 입력하세요');
      document.membership.pwdcheck.focus();
      return;
  }

  alert(m_id);
}
