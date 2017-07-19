/* var */

/* function */
function mainInit()
{
    for(var i = 0 ; i < localStorage.length ; i++)
    {
        if(localStorage.getItem("first" + i) != null)
        {
            addDiv("first" + i, i);
        }
    }
}

function openPopup() {
    window.open("popup/popup.html", "Example", "scrollbars=no, width=550, height=230, menubar=false");
}

function addDiv(_key, _index) {
    addCategory(_index);
    addCategoryFirst(_index);
    addCheckbox(_index);
    addSpanFirst(_key, _index);
    addChange(_index);
    addClose(_index);
}

function addCategory(_index) {
    var category = document.createElement('div');
    category.className = "category";
    category.id = "category" + _index;
    document.getElementById('container').appendChild(category);
}

function addCategoryFirst(_index) {
    var categoryFirst = document.createElement('div');
    categoryFirst.className = "categoryFirst";
    categoryFirst.id = "categoryFirst" + _index;
    document.getElementById('category' + _index).appendChild(categoryFirst);
}

function addCheckbox(_index) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    document.getElementById('categoryFirst' + _index).appendChild(checkbox);
}

function addSpanFirst(_key, _index) {
    var span = document.createElement('span');
    span.innerHTML = localStorage.getItem(_key);
    document.getElementById('categoryFirst' + _index).appendChild(span);
}

function addChange(_index) {
    var btnChange = document.createElement('button');
    btnChange.className = "btnChange";
    document.getElementById('categoryFirst' + _index).appendChild(btnChange);
}

function addClose(_index) {
    var btnClose = document.createElement('button');
    btnClose.className = "btnClose";
    btnClose.id = _index;
    btnClose.setAttribute('onclick', 'deleteCategory(this)');
    document.getElementById('categoryFirst' + _index).appendChild(btnClose);
}

function deleteCategory(obj)
{
    if(confirm("1차분류 및 하위분류 그리고, 모든 데이터가 삭제됩니다.\n정말로 삭제 하시겠습니까?"))
    {
        localStorage.removeItem("first" + obj.id);
        window.location.reload();
    }
}