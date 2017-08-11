<?php
/**
 * CDBControl.php : DB 처리
 */

Class CDBControl
{
    /* private */
    private $mysql;

    ///////////////////////////////////////////////////////////
    /// function
    /* 생성자 */
    public function __construct()
    {
        $this->mysql = $this->connect();
    }

    /* 소멸자 */
    public function __destruct()
    {
        $this->mysql = null;
    }

    ///////////////////////////////////////////////////////////
    ///
    /**
     * getter
     * @return $mysql
     */
    public function getSql()
    {
        return $this->mysql;
    }

    /**
     * DB 연결
     * @return $mysql
     */
    public function connect()
    {
        $this->mysql = new mysqli('127.0.0.1', 'root', 'autoset', 'board_db');
        $this->mysql->autocommit(false);

        return $this->mysql;
    }

    /**
     * 트랜잭션 시작
     */
    public function startTransaction()
    {
        $this->mysql->query("START TRANSACTION");
    }

    /**
     * 쿼리 전송
     * @param $query
     * @return bool|mysqli_result
     */
    public function query($query)
    {
        return $this->mysql->query($query);
    }

    /**
     * 트랜잭션 커밋
     */
    public function commit()
    {
        $this->mysql->commit();
    }

    /**
     * 트랜잭션 롤백
     */
    public function rollback()
    {
        $this->mysql->rollback();
    }

    /**
     * 특수문자 회피
     * @param $val
     * @return string
     */
    public function real_escape_string($val)
    {
        return $this->mysql->real_escape_string($val);
    }

    /**
     * DB 연결 끊기
     */
    public function close()
    {
        $this->mysql->close();
    }
}