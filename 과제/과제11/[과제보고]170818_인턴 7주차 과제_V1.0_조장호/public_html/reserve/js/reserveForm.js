/**
 * reserveForm.js : 예매 결제 페이지 폼 체크 및 함수
 */

function seatCheck(/*button*/ obj)
{
    var dom_person = document.getElementById("person");

    if(obj.className == "pos")
    {
        if(dom_person.value <= 0)
        {
            alert("더이상 선택 할 수 없습니다.");
            return;
        }
        obj.className = "select";
        dom_person.value = (Number(dom_person.value) - 1);
    }
    else if(obj.className == "select")
    {
        obj.className = "pos";
        dom_person.value =  Number(dom_person.value) + 1;
    }
}

function check()
{
    var dom_person = document.getElementById("person");
    var pay_pos = document.getElementById("payPos");

    if(dom_person.value != 0)
    {
        alert("좌석을 선택해 주세요.");
        return false;
    }

    if(pay_pos.value != "가능")
    {
        alert("마일리지가 충분하지 않습니다.");
        return false;
    }

    var child = document.createElement("input");
    child.type = "hidden";
    child.name = "seatNum";
    child.value = seatNum();
    document.getElementById("kid").appendChild(child);

    return true;
}

function seatNum()
{
    var seatNum = document.getElementsByClassName("select");
    var str = null;
    for(var i = 0 ; i < seatNum.length ; i++)
    {
        if(i === 0)
        {
            str = seatNum[i].id + " ";
            continue;
        }
        if(i === seatNum.length - 1)
        {
            str += seatNum[i].id;
            break;
        }
        str += seatNum[i].id + " ";
    }
    return str;
}

function seatBlock(id)
{
    document.getElementById(id).className = "impos";
}