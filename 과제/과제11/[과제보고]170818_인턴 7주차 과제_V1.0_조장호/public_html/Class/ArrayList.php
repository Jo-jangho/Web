<?php
/**
 * ArrayList.php : 배열리스트 클래스
 */

class ArrayList
{
    private $arr = array();
    private $index;

    function __construct()
    {
        $this->index = 0;
    }

    function __destruct()
    {
        $arr = null;
        $index = null;
    }

    function add($element)
    {
        $this->arr[$this->index++] = $element;
    }

    function indexOf($element)
    {
        for ($i = 0; $i < sizeof($this->arr); $i++)
        {
            if (is_object($this->arr[$i]))
            {
                if (get_class($this->arr[$i]) == get_class($element))
                {
                    return $i;
                }
            }
            else
            {
                if ($this->arr[$i] == $element)
                {
                    return $i;
                }
            }
        }
    }

    function remove($index)
    {
        unset($this->arr[$index]);

        $f = array();
        $z = 0;

        for ($i = 0; $i < $this->size() + 1; $i++)
        {
            if (isset($this->arr[$i]))
            {
                $f[$z++] = $this->arr[$i];
            }
            else
            {
                continue;
            }
        }
        $this->arr = $f;
    }

    function size()
    {
        return sizeof($this->arr);
    }

    function get($index)
    {
        return $this->arr[$index];
    }
}