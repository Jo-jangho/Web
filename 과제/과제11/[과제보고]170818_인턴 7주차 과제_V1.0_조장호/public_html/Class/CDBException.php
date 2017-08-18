<?php
/**
 * CDBException.php : DB 예외처리
 */

///////////////////////////////////////////////////////////
///
class CDBException extends Exception
{
    /* var */
    private $script = null;

    /* function */
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
        if($type == 1)  // 얼럿 없이 페이지 백
        {
            $this->script = "<script>history.back();</script>";
        }
        else if($type == 2) // 얼럿 보여주고 페이지 백
        {
            $this->script = "<script>alert('";
            $this->script .= $msg;
            $this->script .= "');";
            $this->script .= "history.back();</script>";
        }
        else if($type == 3) // 롤백 후 지정 URL이동
        {
            $this->script = "<script>alert('";
            $this->script .= $msg;
            $this->script .= "');";
            $this->script .= "location.href = '";
            $this->script .= $url;
            $this->script .= "';</script>";
        }

        echo $this->script;
    }
}

?>