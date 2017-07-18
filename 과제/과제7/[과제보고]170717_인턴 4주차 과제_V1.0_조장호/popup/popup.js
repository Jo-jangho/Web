/* var */
var firstCategory = getLocalStorage();
var secondCategory = getLocalStorage();
var thirdCategory = getLocalStorage();

/* function */
function getLocalStorage()
{
    if (typeof localStorage === 'undefined') 
    {
        alert('your browser is not localstorage');
    }
    else 
    {
        try 
        {
            return localStorage;
        } 
        catch (e) 
        {
            if (e === QUOTA_EXCEEDED_ERR) 
            {
                alert('Quota exceeded!');
            }
        }
    }
}

function btnAdd()
{
    var selectFirst = document.getElementById('first');
    var selectSecond = document.getElementById('second');
    var selectThird = document.getElementById('third');
    var textFirst = document.getElementById('textFirst');
    var textSecond = document.getElementById('textSecond');
    var textThird = document.getElementById('textThird');
    
    if(textFirst.value != "")
    {
        firstCategory.setItem("first", textFirst.value);
        textFirst.value = null;
        var option1 = document.createElement('option');
        option1.text = firstCategory.getItem('first');
        selectFirst.appendChild(option1);
    }
    if(textSecond.value != "")
    {
        secondCategory.setItem("second", textSecond.value);
        textSecond.value = null;
        var option2 = document.createElement('option');
        option2.text = firstCategory.getItem('second');
        selectSecond.appendChild(option2);
    }
    if(textThird.value != "")
    {
        thirdCategory.setItem("third", textThird.value);
        textThird.value = null;
        var option3 = document.createElement('option');
        option3.text = firstCategory.getItem('third');
        selectThird.appendChild(option3);
    }
}

function btnClose()
{
    window.close();
}