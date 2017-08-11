<?php
/**
 * common.php : JavaScript From PHP
 */

///////////////////////////////////////////////////////////
/// include
echo '<script type="text/javascript" src="../js/common.js"></script>';

///////////////////////////////////////////////////////////
/// function
/**
 * 페이지 이동
 * @param $url
 */
function setUrl($url)
{
?>
    <script language=JavaScript>setUrl('<?= $url ?>');</script>
<?php
}

/**
 * 뒤로가기
 */
function historyBack()
{
?>
    <script language=JavaScript>history.back();</script>
<?php
}

/**
 * 뒤로가기 + a
 */
function historyGo($num)
{
    ?>
    <script language=JavaScript>history.go('<?= intval($num) ?>');</script>
    <?php
}

/**
 * alert
 * @param $msg
 */
function alertMsg($msg)
{
?>
    <script language=JavaScript>alert('<?= $msg ?>');</script>
<?php
}

?>