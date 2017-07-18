/* var */
var localStorage = getLocalStorage();

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

function openPopup() {
    window.open("popup/popup.html", "Example", "scrollbars=no, width=530, height=220, menubar=false");
}

function addDiv() {
    addCategory();
    addCategoryFirst();
    addCheckbox();
    addSpanFirst();
    addChange();
    addClose();
}

function addCategory() {
    var category = document.createElement('div');
    category.className = "category";
    category.id = "category" + 1;
    document.getElementById('container').appendChild(category);
}

function addCategoryFirst() {
    var categoryFirst = document.createElement('div');
    categoryFirst.className = "categoryFirst";
    categoryFirst.id = "categoryFirst" + 1;
    document.getElementById('category1').appendChild(categoryFirst);
}

function addCheckbox() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    document.getElementById('categoryFirst1').appendChild(checkbox);
}

function addSpanFirst() {
    var span = document.createElement('span');
    document.getElementById('categoryFirst1').appendChild(span);
}

function addChange() {
    var btnChange = document.createElement('button');
    btnChange.className = "btnChange";
    document.getElementById('categoryFirst1').appendChild(btnChange);
}

function addClose() {
    var btnClose = document.createElement('button');
    btnClose.className = "btnClose";
    document.getElementById('categoryFirst1').appendChild(btnClose);
}