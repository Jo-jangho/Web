/* var */
var firstList = null;
var secondList = null;
var thirdList = null;

var selectFirst = null;
var selectSecond = null;
var selectThird = null;
var textFirst = null;
var textSecond = null;
var textThird = null;

var firstKey = null;
var secondKey = null;
var thirdKey = null;

/* function */
function init()
{
    selectFirst = document.getElementById('first');
    selectSecond = document.getElementById('second');
    selectThird = document.getElementById('third');
    textFirst = document.getElementById('textFirst');
    textSecond = document.getElementById('textSecond');
    textThird = document.getElementById('textThird');
    
    if(localStorage.countFirst == null)
    {
        localStorage.countFirst = 0;
        localStorage.countSecond = 0;
        localStorage.countThird = 0;
    }
    
    selectUpdate("first", selectFirst);
}

function btnAdd()
{
    if(textFirst.value != "")
    {
        localStorage.countFirst = Number(localStorage.countFirst) + 1;
		localStorage.setItem("first" + localStorage.countFirst, textFirst.value);
        selectUpdate("first", selectFirst);        
        
        textFirst.value = null;
    }
    if(textSecond.value != "" && firstKey != null)
    {
        localStorage.countSecond = Number(localStorage.countSecond) + 1;
        localStorage.setItem(firstKey + localStorage.countSecond, "Second"+textSecond.value);
        selectUpdate(firstKey, selectSecond);        
        
        textSecond.value = null;
    }
    if(textThird.value != "")
    {
        localStorage.countThird = Number(localStorage.countThird) + 1;
        localStorage.setItem("Second"+secondKey + localStorage.countThird, textThird.value);
        selectUpdate("Second"+secondKey, selectThird);        
        
        textThird.value = null;   
    }
}

function selectUpdate(_key, _selectbox)
{
    _selectbox.options.length = 0;
    
    for(var i = 0 ; i < localStorage.length ; i++)
    {
        if(localStorage.getItem(_key + i) != null)
        {
            var option = document.createElement('option');
            option.id = _key + i;
			var val = localStorage.getItem(_key + i);
            option.text = val.replace(/Second/, "");
            _selectbox.appendChild(option);
        }
    }
}

function selectReset(select)
{
    select.options.length = 0;
}

function selectChange(_obj)
{
    var value = _obj.options[_obj.selectedIndex].value;
    
    if(_obj.id == "first")
    {
        firstKey = value;
        selectUpdate(firstKey, selectSecond);
        selectReset(selectThird);
    }
    if(_obj.id == "second")
    {
        secondKey = "Second"+value;
		console.log("secondKey:"+secondKey);  
        selectUpdate(secondKey, selectThird);
    }
    if(_obj.id == "thrid")
    {
        thirdKey = value;
    }
}

function btnClose()
{
    window.opener.document.location.href = window.opener.document.URL;
    window.close();
}