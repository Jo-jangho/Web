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

var firstI = 0;
var secondI = 0;
var thirdI = 0;

/* function */
function init()
{
    firstList = new ArrayList();
    secondList = new ArrayList();
    thirdList = new ArrayList();

    selectFirst = document.getElementById('first');
    selectSecond = document.getElementById('second');
    selectThird = document.getElementById('third');
    textFirst = document.getElementById('textFirst');
    textSecond = document.getElementById('textSecond');
    textThird = document.getElementById('textThird');
    
    selectUpdate("first", selectFirst);
}

function btnAdd()
{
    if(textFirst.value != "")
    {
        selectAdd("first", textFirst, firstI);
        selectUpdate("first", selectFirst);        
    }
    if(textSecond.value != "" && firstKey != null)
    {
        selectAdd(firstKey, textSecond, secondI);
        selectUpdate("second", selectSecond);        
    }
    if(textThird.value != "")
    {
        selectAdd("third", textThird, thirdI);
        selectUpdate("third", selectThird);        
    }
}

function selectAdd(_key, _textbox, _i)
{
    localStorage.setItem(_key + _i++, _textbox.value);
    
    _textbox.value = null;
}

function selectUpdate(_key, _selectbox)
{
    for(var i = 0 ; i < _selectbox.options.length ; i++)
    {
        _selectbox.options.length = 0;
    }
    
    for(i = 0 ; i < localStorage.length ; i++)
    {
        if(localStorage.getItem(_key + i) != null)
        {
            var option = document.createElement('option');
            option.id = _key + i;
            option.text = localStorage.getItem(_key + i);
            _selectbox.appendChild(option);
        }
    }
}

function selectChange(_obj)
{
    var value = _obj.options[selectFirst.selectedIndex].value;
    
    if(_obj.id == "first")
    {
        firstKey = value;
    }
    if(_obj.id == "second")
    {
        secondKey = value;
    }
    if(_obj.id == "third")
    {
        thirdKey = value;
    }
}

function btnClose()
{
    window.opener.document.location.href = window.opener.document.URL;
    window.close();
}

