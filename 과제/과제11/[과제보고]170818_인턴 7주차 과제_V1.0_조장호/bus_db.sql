-- phpMyAdmin SQL Dump
-- version 4.2.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 17-08-18 15:30
-- 서버 버전: 5.6.20
-- PHP 버전: 5.6.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 데이터베이스: `bus_db`
--
CREATE DATABASE IF NOT EXISTS `bus_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bus_db`;

-- --------------------------------------------------------

--
-- 테이블 구조 `bus`
--

CREATE TABLE IF NOT EXISTS `bus` (
`idx` int(10) unsigned NOT NULL,
  `bus_num` int(10) unsigned DEFAULT '0',
  `st_time` timestamp NULL DEFAULT NULL,
  `grade` char(8) DEFAULT NULL,
  `company` varchar(20) DEFAULT NULL,
  `seat` smallint(5) unsigned DEFAULT '45',
  `st_location` varchar(10) NOT NULL,
  `ar_location` varchar(10) NOT NULL,
  `money` int(10) DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 삽입 전에 테이블 비우기 `bus`
--

TRUNCATE TABLE `bus`;
--
-- 테이블의 덤프 데이터 `bus`
--

INSERT INTO `bus` (`idx`, `bus_num`, `st_time`, `grade`, `company`, `seat`, `st_location`, `ar_location`, `money`) VALUES
(1, 1000, '2017-08-18 05:00:00', '우등고속', '서울고속', 45, '서울', '전주', 20000),
(2, 1001, '2017-08-18 05:30:00', '일반고속', '서울관광', 45, '서울', '전주', 14000),
(3, 4000, '2017-08-18 09:00:00', '우등고속', '전주고속', 42, '전주', '서울', 20000);

-- --------------------------------------------------------

--
-- 테이블 구조 `mileage_log`
--

CREATE TABLE IF NOT EXISTS `mileage_log` (
  `type` smallint(6) DEFAULT '0',
`seq` int(10) unsigned NOT NULL,
  `id` varchar(10) NOT NULL,
  `cur_mileage` int(10) unsigned DEFAULT '0',
  `bus_num` int(10) unsigned DEFAULT '0',
  `pay_mileage` int(10) unsigned DEFAULT '0',
  `rest_mileage` int(10) unsigned DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 삽입 전에 테이블 비우기 `mileage_log`
--

TRUNCATE TABLE `mileage_log`;
--
-- 테이블의 덤프 데이터 `mileage_log`
--

INSERT INTO `mileage_log` (`type`, `seq`, `id`, `cur_mileage`, `bus_num`, `pay_mileage`, `rest_mileage`) VALUES
(1, 1, 'user1', 10000000, 4000, 60000, 9940000),
(2, 2, 'user1', 9940000, 4000, 10000, 9950000);

-- --------------------------------------------------------

--
-- 테이블 구조 `reserve`
--

CREATE TABLE IF NOT EXISTS `reserve` (
`reserve_seq` int(10) unsigned NOT NULL,
  `bus_num` int(10) unsigned DEFAULT '0',
  `id` varchar(10) NOT NULL,
  `st_time` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `st_location` varchar(10) NOT NULL,
  `ar_location` varchar(10) NOT NULL,
  `person` smallint(5) unsigned DEFAULT '0',
  `seat_num` smallint(5) unsigned DEFAULT '0',
  `money` int(10) unsigned NOT NULL,
  `bus_idx` int(10) unsigned NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 삽입 전에 테이블 비우기 `reserve`
--

TRUNCATE TABLE `reserve`;
--
-- 테이블의 덤프 데이터 `reserve`
--

INSERT INTO `reserve` (`reserve_seq`, `bus_num`, `id`, `st_time`, `st_location`, `ar_location`, `person`, `seat_num`, `money`, `bus_idx`) VALUES
(1, 4000, 'user1', '2017-08-18 09:00:00', '전주', '서울', 1, 1, 20000, 3),
(2, 4000, 'user1', '2017-08-18 09:00:00', '전주', '서울', 1, 5, 20000, 3),
(3, 4000, 'user1', '2017-08-18 09:00:00', '전주', '서울', 2, 2, 10000, 3);

-- --------------------------------------------------------

--
-- 테이블 구조 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`idx` int(10) unsigned NOT NULL,
  `id` varchar(10) NOT NULL,
  `password` varchar(41) NOT NULL,
  `mileage` int(10) unsigned DEFAULT '10000000',
  `cellphone` varchar(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 삽입 전에 테이블 비우기 `user`
--

TRUNCATE TABLE `user`;
--
-- 테이블의 덤프 데이터 `user`
--

INSERT INTO `user` (`idx`, `id`, `password`, `mileage`, `cellphone`) VALUES
(1, 'root', '*765D9087DF96466338C33D7A3F2C262946DEA0F8', 10000000, '01074723540'),
(2, 'user1', '*765D9087DF96466338C33D7A3F2C262946DEA0F8', 9950000, '010-7472-35');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `bus`
--
ALTER TABLE `bus`
 ADD PRIMARY KEY (`idx`), ADD KEY `bus_num` (`bus_num`), ADD KEY `st_time` (`st_time`), ADD KEY `grade` (`grade`), ADD KEY `st_location` (`st_location`), ADD KEY `ar_location` (`ar_location`);

--
-- 테이블의 인덱스 `mileage_log`
--
ALTER TABLE `mileage_log`
 ADD PRIMARY KEY (`seq`), ADD KEY `type` (`type`), ADD KEY `id` (`id`), ADD KEY `bus_seq` (`bus_num`);

--
-- 테이블의 인덱스 `reserve`
--
ALTER TABLE `reserve`
 ADD PRIMARY KEY (`reserve_seq`), ADD KEY `id` (`id`);

--
-- 테이블의 인덱스 `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`idx`), ADD UNIQUE KEY `id` (`id`), ADD KEY `cellphone` (`cellphone`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `bus`
--
ALTER TABLE `bus`
MODIFY `idx` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- 테이블의 AUTO_INCREMENT `mileage_log`
--
ALTER TABLE `mileage_log`
MODIFY `seq` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- 테이블의 AUTO_INCREMENT `reserve`
--
ALTER TABLE `reserve`
MODIFY `reserve_seq` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- 테이블의 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
MODIFY `idx` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
