/* var */

/* function */
function mainInit()
{    
	var FirstKeyList = [];
	var SecondKeyList = [];
	var ThirdKeyList = [];
	FirstKeyList = FindKeyFullNameList("first");
	if(FirstKeyList.length <= 0)
		return;
	
	for(i = 0 ; i < FirstKeyList.length ; i++)
    {
		var key = FirstKeyList[i];
        var value = localStorage.getItem(key);
		
		//
		console.log("Key:"+key+" val:"+value);  
		CreateDiv(key,value);
		
	
		key = value;
		SecondKeyList = FindKeyFullNameList(key);
		if(SecondKeyList.length <= 0)
			continue;
	
		for(j = 0 ; j < SecondKeyList.length ; j++)
		{
			key = SecondKeyList[j];
			value = localStorage.getItem(key);
			
			//
			console.log("Key:"+key+" val:"+value);  
			addSecondDiv(key, value);
			/**/
			//
			key = value;
			ThirdKeyList = FindKeyFullNameList(key);
			if(ThirdKeyList.length <= 0)
				continue;
			for(k = 0 ;  k < ThirdKeyList.length ; k++)
			{
				key = ThirdKeyList[k];
				value = localStorage.getItem(key);
				
				console.log("Key:"+key+" val:"+value);  
				addThirdDiv(key, value);
			}
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////
function CreateDiv(_key, _value) 
{
	NewCategory(_value);
	NewCategoryforName("First", _value);//addCategoryFirst(_key, _value);
    addCheckbox(_key, _value);
	NewSpan(_value,_value);
    addChange(_key, _value);
    addClose(_key, _value);
}

//////////////////////////////////////////////////////////////////////////////////
function NewCategoryforName(_name, _id) 
{
    var categoryFirst = document.createElement('div');
    categoryFirst.className = "category"+ _name;
    categoryFirst.id = "categoryFirst" + _id;
    document.getElementById('category' + _id).appendChild(categoryFirst);
}

function NewCategory(_id) 
{
    var category = document.createElement('div');
    category.className = "category";
    category.id = "category" + _id;
    document.getElementById('container').appendChild(category);
}

function NewSpan(_parentID, _value) 
{
	var span = document.createElement('span');
    span.innerHTML = _value;
	
	if(document.getElementById('categoryFirst' + _parentID) == null)
		return;
	
    document.getElementById('categoryFirst' + _parentID).appendChild(span);
	
}

//////////////////////////////////////////////////////////////////////////////////
function FindKeyFullNameList(_Key)
{
	console.log("FindKey is "+_Key);  
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
    //addSecondSpan(_key, _value);
	addSecondSpan(_value, _value);
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
	if(document.getElementById('category' + _key) == null)
	{
		//console.log(_key);  
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
		//console.log(_key);  
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
	//_key = _key.replace(/\d+/, "");
	_value = _key.replace(/Second/, "");
    var span = document.createElement('span');
    span.innerHTML = _value;//localStorage.getItem(_key);
    document.getElementById('categorySecond' + _key).appendChild(span);
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