List = function()
{
    var key = [];
    var value = [];

    this.add = function(_obj)
    {
        key.push(_obj.key);
        value.push(_obj.value);
        this.count = value.length;
    };
    this.setKey = function(_i, _obj)
    {
        key[_i] = _obj;
        this.count = value.length;
    };
    this.getKey = function(_i)
    {
        return key[_i];
    };
    this.setValue = function(_i, _obj)
    {
        value[_i] = _obj;
        this.count = value.length;
    };
    this.getValue = function(_i)
    {
        return value[_i];
    };
    this.getCount = function()
    {
        return this.count.length - 1;  
    };
    this.remove = function(_obj)
    {
        var i = this.indexOf(_obj);
        if(i >= 0) 
        {
            key.splice(i, 1);
            value.splice(i, 1);
        }
        this.count = value.length;
    };
    this.removeAt = function(_i)
    {  
        key.splice(_i, 1);
        value.splice(_i, 1);
        this.count = value.length;
    };
    this.clear = function()
    {
        key.splice(0, key.length);
        value.splice(0, value.length);
        this.count = value.length;
    };
    this.indexOf = function(_obj)
    {
        for(var i = 0; i < key.length; i++)
        {
            if(key[i] == _obj) 
            {
                return i; 
            }
        }
        return -1;
    };
};