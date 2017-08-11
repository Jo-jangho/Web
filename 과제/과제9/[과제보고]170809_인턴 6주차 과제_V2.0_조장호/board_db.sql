-- phpMyAdmin SQL Dump
-- version 4.2.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 17-08-09 15:36
-- 서버 버전: 5.6.20
-- PHP 버전: 5.6.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 데이터베이스: `board_db`
--
CREATE DATABASE IF NOT EXISTS `board_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `board_db`;

-- --------------------------------------------------------

--
-- 테이블 구조 `board`
--

CREATE TABLE IF NOT EXISTS `board` (
`posting_num` int(10) unsigned NOT NULL,
  `title` varchar(50) NOT NULL,
  `tic` int(10) unsigned DEFAULT '0',
  `nick_name` varchar(10) NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `content` text NOT NULL,
  `file_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- 삽입 전에 테이블 비우기 `board`
--

TRUNCATE TABLE `board`;
--
-- 테이블의 덤프 데이터 `board`
--

INSERT INTO `board` (`posting_num`, `title`, `tic`, `nick_name`, `date`, `content`, `file_name`) VALUES
(1, '조장호 개인 게시판', 3, 'root', '2017-08-04 05:14:07', '조장호의 첫 개인 게시판 입니다.\r\n\r\n짝짝짝~!', ''),
(5, '중간 레코드가 잘 빠질까요?', 2, 'root', '2017-08-04 05:15:46', '중간 레코드가 잘 빠질까요?', ''),
(6, '다른이름으로 글 저장을 해볼까요?', 8, '마나퐁', '2017-08-04 05:20:43', '다른이름으로 글 저장을 해볼까요?', ''),
(7, '[수정]수정 테스트를 해보겠습니다.', 4, 'root', '2017-08-04 05:21:23', '수정 테스트를 해보겠습니다.', ''),
(8, '파일 업로드를 해볼거예요', 10, 'root', '2017-08-04 05:22:32', '파일 업로드를 해볼거예요', 'banner_01.jpg'),
(9, '페이지를 나누기 위해 도배합니다', 3, '마나퐁', '2017-08-04 07:16:06', '페이지를 나누기 위해 도배합니다', ''),
(12, '페이지를 나누기 위해 도배합니다4', 22, 'root', '2017-08-09 00:41:25', '페이지를 나누기 위해 도배합니다4', ''),
(13, '테스트', 27, 'root', '2017-08-09 00:53:24', '테스트', ''),
(17, '이미지 첨부', 8, 'root', '2017-08-09 06:31:41', '이미지 첨부', 'banner_03.jpg');

-- --------------------------------------------------------

--
-- 테이블 구조 `reply`
--

CREATE TABLE IF NOT EXISTS `reply` (
`reply_num` int(10) unsigned NOT NULL,
  `posting_num` int(10) unsigned NOT NULL,
  `content` varchar(255) NOT NULL,
  `nick_name` varchar(10) NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 삽입 전에 테이블 비우기 `reply`
--

TRUNCATE TABLE `reply`;
-- --------------------------------------------------------

--
-- 테이블 구조 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`seq` int(10) unsigned NOT NULL,
  `id` varchar(10) NOT NULL,
  `password` varchar(41) NOT NULL,
  `nick_name` varchar(10) NOT NULL,
  `birth` mediumint(6) DEFAULT '0',
  `created_datetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 삽입 전에 테이블 비우기 `user`
--

TRUNCATE TABLE `user`;
--
-- 테이블의 덤프 데이터 `user`
--

INSERT INTO `user` (`seq`, `id`, `password`, `nick_name`, `birth`, `created_datetime`) VALUES
(1, 'root', '*765D9087DF96466338C33D7A3F2C262946DEA0F8', 'root', 920624, '2017-08-02 00:29:23'),
(2, 'root1', '*765D9087DF96466338C33D7A3F2C262946DEA0F8', '마나퐁', 920624, '2017-08-02 00:29:30'),
(3, 'jgunho0', '*765D9087DF96466338C33D7A3F2C262946DEA0F8', '조장호', 920624, '2017-08-07 08:04:38'),
(4, 'PHPMySQL', '*1E1AD36149E19A828883A81C573B1F0C0B792C77', 'PHP', 920624, '2017-08-09 06:13:39');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `board`
--
ALTER TABLE `board`
 ADD PRIMARY KEY (`posting_num`), ADD KEY `title` (`title`), ADD KEY `nick_name` (`nick_name`);

--
-- 테이블의 인덱스 `reply`
--
ALTER TABLE `reply`
 ADD PRIMARY KEY (`reply_num`), ADD KEY `posting_num` (`posting_num`);

--
-- 테이블의 인덱스 `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`seq`), ADD UNIQUE KEY `id` (`id`), ADD UNIQUE KEY `nick_name` (`nick_name`), ADD KEY `password` (`password`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `board`
--
ALTER TABLE `board`
MODIFY `posting_num` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- 테이블의 AUTO_INCREMENT `reply`
--
ALTER TABLE `reply`
MODIFY `reply_num` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- 테이블의 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
MODIFY `seq` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
