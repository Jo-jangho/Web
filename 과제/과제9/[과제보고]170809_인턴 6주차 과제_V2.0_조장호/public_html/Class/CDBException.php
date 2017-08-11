<?php
/**
 * CDBException.php : DB 예외처리
 */

///////////////////////////////////////////////////////////
/// include
include_once "../common/common.php";

class CDBException extends Exception
{
    ///////////////////////////////////////////////////////////
    /// var
    private $type = null;
    private $url = null;
    private $msg = null;

    ///////////////////////////////////////////////////////////
    /// function
    /**
     * 생성자
     * @param string $type
     * @param int $url
     * @param Throwable $msg
     * @throws Exception
     */
    public function __construct($type, $url, $msg)
    {
        /**/
        $this->type = $type;
        $this->url = $url;
        $this->msg = $msg;

        /**/
        if($type == 1)
        {
            //historyBack();
            throw new Exception($msg, $type);
        }
        else if($type == 2)
        {
            alertMsg($msg);
            //historyBack();
            throw new Exception($msg, $type);
        }
        else if($type == 3)
        {
            alertMsg($msg);
            //historyBack();
        }
        else if($type == 4)
        {
            alertMsg($msg);
            //setUrl($this->url);
        }
    }

    /**
     * msg getter
     * @return $this->msg
     */
    public function getMsg()
    {
        return $this->msg;
    }

    /**
     * type getter
     * @return $this->type
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * url getter
     * @return $this->url;
     */
    public function getUrl()
    {
        return $this->url;
    }


}

?>