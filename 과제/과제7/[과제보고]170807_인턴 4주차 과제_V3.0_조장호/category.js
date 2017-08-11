/* function */
function btnSecondUp(/* button */ btn)
{
    var category = document.getElementById('category');
    var child = document.getElementsByClassName('wrap');
    var selectDiv = btn.parentElement.parentElement;
    
    for(var i = 0 ; i < child.length ; i++)
    {
        if(child[i] === selectDiv)
        {
            if(i === 0)
                break;
            
            category.insertBefore(child[i], child[i - 1]);
            break;
        }
    }
}

function btnSecondDown(/* button */ btn)
{
    var child = document.getElementsByClassName('wrap');
    var selectDiv = btn.parentElement.parentElement;
    
    for(var i = 0 ; i < child.length ; i++)
    {
        if(child[i] === selectDiv)
        {
            if(i == child.length - 1)
                break;
            
            insertAfter(child[i], child[i + 1]);
            break;
        }
    }
}

function btnThirdUp(/* button */ btn)
{
    var category = document.getElementsByClassName('wrap2');
    var child = document.getElementsByClassName('categoryThird');
    var selectDiv = btn.parentElement;
    
    for(var i = 0 ; i < category.length ; i++)
    {
        for(var j = 0 ; j < child.length ; j++)
        {
            if(category[i] === child[j].parentElement && child[j] === selectDiv)
            {
                if(category[i].firstElementChild === selectDiv)
                    break;

                category[i].insertBefore(child[j], child[j - 1]);
                break;
            }
        }
    }
}

function btnThirdDown(/* button */ btn)
{
    var category = document.getElementsByClassName('wrap2');
    var child = document.getElementsByClassName('categoryThird');
    var selectDiv = btn.parentElement;
    
    for(var i = 0 ; i < category.length ; i++)
    {
        for(var j = 0 ; j < child.length ; j++)
        {
            if(category[i] === child[j].parentElement && child[j] === selectDiv)
            {
                if(category[i].lastElementChild === selectDiv)
                        break;

                insertAfter(child[j], child[j + 1]);
                break;
            }
        }        
    }
}

function insertAfter(newNode, referenceNode) 
{
    var refParentNode = referenceNode.parentNode;
    
    if (referenceNode != refParentNode.lastChild)
        refParentNode.insertBefore(newNode, referenceNode.nextSibling);
    else
        refParentNode.appendChild(newNode);
}