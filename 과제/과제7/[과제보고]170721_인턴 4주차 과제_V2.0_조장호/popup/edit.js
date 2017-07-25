/* var */
var FirstKeyList = null;
var SecondKeyList = null;
var ThirdKeyList = null;
var FirstValueList = [];

/* function */
function getCategory()
{    
    FirstKeyList = FindKeyFullNameList("first");
	if(FirstKeyList.length <= 0)
		return;
    
    for(var i = 0 ; i < FirstKeyList.length ; i++)
    {
		var key = FirstKeyList[i];
        var value = localStorage.getItem(key);
        FirstValueList.push(value);
        
        addComponent(i, value);
    }
    
    addBtnWrap();
    addButton("btnWrap", "", "", "btnCheck", "btnCheck()");
    addButton("btnWrap", "", "", "btnClose", "btnClose()");
}

//////////////////////////////////////////////////////////////////////////
////////
/*function GET()
{
    id = decodeURIComponent(location.search);
    for(var i = 0 ; i < id.length ; i++)
    {
        if(id[i] == "=")
        {
            id = id.slice(i + 1);
        }
    }
}*/

//////////////////////////////////////////////////////////////////////////
////////
function addComponent(_index, _value)
{
    var id = "item" + _index;
    addItem(id);
    addButton(id, _index, _value, "up", "btnEditUp(this)");
    addButton(id, _index, _value, "down", "btnEditDown(this)");
    addText(id, _index, _value);
    addButton(id, _index, _value, "edit", "btnEdit(this)");  
}

//////////////////////////////////////////////////////////////////////////
////////
function addItem(_id)
{
    var div = document.createElement("div");
    div.className = "item";
    div.id = _id;
    document.getElementById("container").appendChild(div);
}

function addButton(_parent, _index, _value, _type, _onclick)
{
    var button = document.createElement("button");
    button.className = _type;
    button.id = "btn" + _type + _index;
    button.name = _value;
    button.setAttribute('onclick', _onclick);
    document.getElementById(_parent).appendChild(button);
}

function addText(_parent, _index, _value)
{
    var text = document.createElement("input");
    text.type = "text";
    text.id = _index;
    text.value = _value;
    document.getElementById(_parent).appendChild(text);
}

function addBtnWrap()
{
    var div = document.createElement("div");
    div.className = "btnWrap";
    div.id = "btnWrap";
    document.getElementById('container').appendChild(div);
}

//////////////////////////////////////////////////////////////////////////
////////
function textUpdate()
{
    for(var i = 0 ; i < FirstValueList.length ; i++)
    {
        document.getElementById(i).value = FirstValueList[i];
    }
}

function btnEditUp(/*button*/ _obj)
{
    var btnIndex = _obj.id.replace(/btnup/, "");
    if(btnIndex == 0)   
        return;
    
    var temp = FirstValueList[btnIndex];
    FirstValueList[btnIndex] = FirstValueList[btnIndex - 1];
    FirstValueList[btnIndex - 1] = temp;
    
    textUpdate();
}

function btnEditDown(/*button*/ _obj)
{
    var btnIndex = _obj.id.replace(/btndown/, "");
    if(btnIndex == FirstValueList.length - 1)   
        return;
    
    var temp = FirstValueList[btnIndex];
    FirstValueList[btnIndex] = FirstValueList[Number(btnIndex) + 1];
    FirstValueList[Number(btnIndex) + 1] = temp;
    
    textUpdate();
}

function btnEdit(/*button*/ _obj)
{
    var btnIndex = _obj.id.replace(/btnedit/, "");
    
    var key = FirstKeyList[btnIndex];
    var value = localStorage.getItem(key);
    FirstValueList[btnIndex] = document.getElementById(btnIndex).value;
    
    if(value == FirstValueList[btnIndex])
        return;
    /*if(key != FirstValueList[btnIndex])
        return;*/
    
    localStorage.setItem(key, FirstValueList[btnIndex]);
    console.log("Key:" + key + " val:" + value + " newVal : " + FirstValueList[btnIndex]); 
    /**/
    key = value;
    SecondKeyList = FindKeyFullNameList(key);
    if(SecondKeyList.length <= 0)
        return;
    
    for(var i = 0 ; i < SecondKeyList.length ; i++)
    {
        key = SecondKeyList[i];
        value = localStorage.getItem(key);
        
        localStorage.setItem(FirstValueList[btnIndex], value);
        localStorage.removeItem(key);
    }
    
    window.opener.top.location.href = "../category.html";
}

//////////////////////////////////////////////////////////////////////////
////////
function btnCheck()
{
    for(var i = 0 ; i < FirstKeyList.length ; i++)
    {
        var key = FirstKeyList[i];
        localStorage.setItem(key, FirstValueList[i]);
    }
    
    btnClose();
}

function btnClose()
{
    window.opener.top.location.href = "../category.html";
    window.close();
}