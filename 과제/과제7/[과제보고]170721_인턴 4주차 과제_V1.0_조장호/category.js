/* var */
var FirstKeyList = [];
var SecondKeyList = [];
var ThirdKeyList = [];

/* function */
function mainInit()
{    
    /* var */
    
    /**/
	FirstKeyList = FindKeyFullNameList("first");
	if(FirstKeyList.length <= 0)
		return;
	
	for(var i = 0 ; i < FirstKeyList.length ; i++)
    {
		var key = FirstKeyList[i];
        var value = localStorage.getItem(key);
		
		//console.log("Key:" + key + " val:" + value);  
		addFirstDiv(key, value);
		
        /**/
		key = value;
		SecondKeyList = FindKeyFullNameList(key);
		if(SecondKeyList.length <= 0)
			continue;
	
		for(var j = 0 ; j < SecondKeyList.length ; j++)
		{
			key = SecondKeyList[j];
			value = localStorage.getItem(key);
			
			//console.log("Key:" + key + " val:" + value);  
			addSecondDiv(key, value);
            
			/**/
			key = value;
			ThirdKeyList = FindKeyFullNameList("Second" + key);
			if(ThirdKeyList.length <= 0)
				continue;
            
			for(var k = 0 ;  k < ThirdKeyList.length ; k++)
			{
				key = ThirdKeyList[k];
				value = localStorage.getItem(key);
				
				//console.log("Key:" + key + " val:" + value);  
				addThirdDiv(key, value);
			}
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////
function FindKeyFullNameList(_Key)
{
	//console.log("FindKey is " + _Key);  
	var KeyList = [];
	for(var i = 0 ; i < localStorage.length ; i++)
    {
		var key = localStorage.key(i);
		if(key.indexOf(_Key) == 0)
		{
			KeyList.push(key);
		}
	}
	
	return KeyList;
}

//////////////////////////////////////////////////////////////////////////////////
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
	addSecondSpan(_value, _value);
}

function addThirdDiv(_key, _value)
{
    addCategoryThird(_key, _value);
    addThirdBtnUp(_key, _value);
    addThirdBtnDown(_key, _value);
    addThirdSpan(_key, _value);
}

//////////////////////////////////////////////////////////////////////////
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
    btnChange.name = localStorage.getItem(_key);
    btnChange.setAttribute("onclick", "openPopupEdit(this)");
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

//////////////////////////////////////////////////////////////////////////
/* 
** SECOND
*/
function addWrap(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var wrap = document.createElement('div');
    wrap.className = "clearfix";
    wrap.id = "wrap" + _value;
	if(document.getElementById('category' + _key) == null)
	{
		return;
	}
	
    document.getElementById('category' + _key).appendChild(wrap);
}

function addCategorySecond(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var categorySecond = document.createElement('div');
    categorySecond.className = "categorySecond clearfix";
    categorySecond.id = "categorySecond" + _value;
	if(document.getElementById('wrap' + _value) == null)
	{
		return;
	}
    document.getElementById('wrap' + _value).appendChild(categorySecond);
}

function addSecondBtnUp(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var btnUp = document.createElement('button');
    btnUp.className = "up";
    btnUp.id = "btnUp" + _value;
    btnUp.name = _value;
    btnUp.setAttribute('onclick', 'btnUp(this)');
    document.getElementById('categorySecond' + _value).appendChild(btnUp);
}

function addSecondBtnDown(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var btnDown = document.createElement('button');
    btnDown.className = "down";
    btnDown.id = "btnDown" + _value;
    btnDown.name = _value;
    btnDown.setAttribute('onclick', 'btnDown(this)');
    document.getElementById('categorySecond' + _value).appendChild(btnDown);
}

function addSecondSpan(_key, _value)
{
	_value = _key.replace(/Second/, "");
    var span = document.createElement('span');
    span.innerHTML = _value;
    document.getElementById('categorySecond' + _key).appendChild(span);
}

//////////////////////////////////////////////////////////////////////////
/* 
*** THIRD
*/
function addCategoryThird(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
	_key = _key.replace(/Second/, "");
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
    btnUp.id = _key;
    btnUp.name = _value;
    btnUp.setAttribute('onclick', 'btnUp(this)');
    document.getElementById('categoryThird' + _value).appendChild(btnUp);
}

function addThirdBtnDown(_key, _value) 
{
    _key = _key.replace(/\d+/, "");
    var btnDown = document.createElement('button');
    btnDown.className = "down";
    btnDown.id = _key;
    btnDown.name = _value;
    btnDown.setAttribute('onclick', 'btnDown(this)');
    document.getElementById('categoryThird' + _value).appendChild(btnDown);
}

function addThirdSpan(_key, _value)
{
    var span = document.createElement('span');
    span.innerHTML = _value;
    document.getElementById('categoryThird' + _value).appendChild(span);
}

//////////////////////////////////////////////////////////////////////////
/*
**** POPUP
*/
function openPopupAdd()
{
    openPopup("add.html", 550, 230);
}

function openPopupEdit(/*button*/ obj)
{
    openPopup("edit.html?id=", 265, 200);
}

//////////////////////////////////////////////////////////////////////////
/*
***** PUBLIC
*/
function openPopup(_url, _width, _height) 
{
    var option = "scrollbars=no, menubar=false, height=" + _height + ", width=" + _width;
    /*_url = encodeURIComponent(_url);*/
    window.open("popup/" + _url, "", option);
}

function deleteCategory(/*button*/ _obj)
{
    if(confirm("1차분류 및 하위분류 그리고, 모든 데이터가 삭제됩니다.\n정말로 삭제 하시겠습니까?"))
    {
        /*localStorage.removeItem("first" + _obj.id.slice(_obj.id.length - 2));
        localStorage.countFirst = Number(localStorage.countFirst) - 1;
        window.location.reload();*/
        var btnIndex = Number(_obj.id.replace(/btnClosefirst/, "")) - 1;
        var key = FirstKeyList[btnIndex];
        var value = localStorage.getItem(key);
        
        localStorage.countFirst = Number(localStorage.countFirst) - 1;
        localStorage.removeItem(key);
        
        key = value;
        SecondKeyList = FindKeyFullNameList(key);
        if(SecondKeyList.length <= 0)
            return;

        for(var j = 0 ; j < SecondKeyList.length ; j++)
        {
            key = SecondKeyList[j];
            value = localStorage.getItem(key);

            localStorage.countSecond = Number(localStorage.countSecond) - 1;
            localStorage.removeItem(key);

            /**/
            key = value;
            ThirdKeyList = FindKeyFullNameList("Second" + key);
            if(ThirdKeyList.length <= 0)
                continue;

            for(var k = 0 ;  k < ThirdKeyList.length ; k++)
            {
                key = ThirdKeyList[k];
                value = localStorage.getItem(key);

                localStorage.countThird = Number(localStorage.countThird) - 1;
                localStorage.removeItem(key);
            }
        }
        window.location.reload();
    }
}

function btnUp(/*button*/ _obj)
{
    FirstKeyList = FindKeyFullNameList("first");
	if(FirstKeyList.length <= 0)
		return;
    
    for(var i = 0 ; i < FirstKeyList.length ; i++)
    {
        var key = FirstKeyList[i];
        var value = localStorage.getItem(key);

        //console.log("Key:" + key + " val:" + value);
        /**/ 
		key = value;
		SecondKeyList = FindKeyFullNameList(key);
		if(SecondKeyList.length <= 0)
			continue;
	
		for(var j = 0 ; j < SecondKeyList.length ; j++)
		{
			key = SecondKeyList[j];
			value = localStorage.getItem(key);
            
            //console.log("Second!!! Key:" + key + " val:" + value + " name:" + _obj.name);
            if(value == _obj.name)
            {
                if(j == 0)  return;
                var keyNext = SecondKeyList[j - 1];
                localStorage.setItem("temp", localStorage.getItem(key));
                localStorage.setItem(key, localStorage.getItem(keyNext));
                localStorage.setItem(keyNext, localStorage.getItem("temp"));
                localStorage.removeItem("temp");
                
                window.location.reload();
                return;
            }
            else if("Second" + value == _obj.id)
            {
                /**/
                key = value;
                //console.log("Key:" + key + " val:" + value + " name:" + _obj.name);
                ThirdKeyList = FindKeyFullNameList("Second" + key);
                if(ThirdKeyList.length <= 0)
                    continue;
            }
            
			for(var k = 1 ;  k < ThirdKeyList.length ; k++)
			{
				key = ThirdKeyList[k];
				value = localStorage.getItem(key);
                
                //console.log("Third!!! Key:" + key + " val:" + value + " name:" + _obj.name);
                if(value == _obj.name)
                {
                    var keyNext = ThirdKeyList[k - 1];
                    localStorage.setItem("temp", localStorage.getItem(key));
                    localStorage.setItem(key, localStorage.getItem(keyNext));
                    localStorage.setItem(keyNext, localStorage.getItem("temp"));
                    localStorage.removeItem("temp");

                    window.location.reload();
                    return;
                }
            }
        }
    }
}

function btnDown(/*button*/ _obj)
{
    FirstKeyList = FindKeyFullNameList("first");
	if(FirstKeyList.length <= 0)
		return;
    
    for(var i = 0 ; i < FirstKeyList.length ; i++)
    {
        var key = FirstKeyList[i];
        var value = localStorage.getItem(key);

        /**/ 
		key = value;
		SecondKeyList = FindKeyFullNameList(key);
		if(SecondKeyList.length <= 0)
			continue;
	
		for(var j = 0 ; j < SecondKeyList.length ; j++)
		{
			key = SecondKeyList[j];
			value = localStorage.getItem(key);
            
            console.log("Second!!! Key:" + key + " val:" + value + " name:" + _obj.name + " id:" + _obj.id);
            if(value == _obj.name)
            {
                if(j == SecondKeyList.length - 1)   return;
                
                var keyNext = SecondKeyList[j + 1];
                localStorage.setItem("temp", localStorage.getItem(key));
                localStorage.setItem(key, localStorage.getItem(keyNext));
                localStorage.setItem(keyNext, localStorage.getItem("temp"));
                localStorage.removeItem("temp");
                
                window.location.reload();
                return;
            }
            else if("Second" + value == _obj.id)
            {
                /**/
                key = value;
                console.log("Key:" + key + " val:" + value + " name:" + _obj.name);
                ThirdKeyList = FindKeyFullNameList("Second" + key);
                if(ThirdKeyList.length <= 0)
                    continue;
                
                for(var k = 0 ;  k < ThirdKeyList.length - 1 ; k++)
			{
				key = ThirdKeyList[k];
				value = localStorage.getItem(key);
                
                console.log("Third!!! Key:" + key + " val:" + value + " name:" + _obj.name);
                if(value == _obj.name)
                {
                    var keyNext = ThirdKeyList[k + 1];
                    localStorage.setItem("temp", localStorage.getItem(key));
                    localStorage.setItem(key, localStorage.getItem(keyNext));
                    localStorage.setItem(keyNext, localStorage.getItem("temp"));
                    localStorage.removeItem("temp");

                    window.location.reload();
                    return;
                }
            }
            }
        }
    }
}