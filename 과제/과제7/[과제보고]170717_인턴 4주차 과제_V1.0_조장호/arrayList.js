ArrayList = function()
{
    var items = {};

    this.add = function(_key, _value)
    {
        items.key = _key;
        items.value = _value;
    };
    this.set = function(_i, _obj)
    {
        items[_i] = _obj;
    };
    this.get = function(_i)
    {
        return items[_i];
    };
    this.getLast = function()
    {
        return items[items.length - 1];  
    };
    this.getAll = function()
    {
        return items;
    };
    this.getCount = function()
    {
        return items.length - 1;  
    };
    this.remove = function(_obj)
    {
        var i = this.indexOf(_obj);
        if(i >= 0) 
        {
            items.splice(i, 1);
        }
        this.count = items.length;
    };
    this.removeAt = function(_i)
    {  
      items.splice(_i, 1);
      this.count = items.length;
    };
    this.clear = function()
    {
        items.splice(0, items.length);
    };
    this.length = function()
    {
        return items.length;
    };
    this.indexOf = function(_obj)
    {
        for(var i = 0; i < items.length; i++)
        {
            if(items[i] == _obj) 
            {
                return i; 
            }
        }
        return -1;
    };
    this.sort = function(_a, _b)
    {
        var temp = items[_a];
        items[_a] = items[_b];
        items[_b] = temp;
    };
};