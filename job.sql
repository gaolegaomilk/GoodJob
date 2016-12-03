-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-03 07:12:00
-- 服务器版本： 5.7.9
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job`
--

-- --------------------------------------------------------

--
-- 表的结构 `job_business`
--

DROP TABLE IF EXISTS `job_business`;
CREATE TABLE IF NOT EXISTS `job_business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `category_cid` int(11) DEFAULT NULL COMMENT '板块id',
  `name` varchar(100) NOT NULL COMMENT '公司名称',
  `address` varchar(500) NOT NULL COMMENT '公司地址',
  `phone` int(11) NOT NULL COMMENT '联系电话',
  `position` varchar(50) DEFAULT NULL COMMENT '职位',
  `post_time` varchar(50) DEFAULT NULL COMMENT '发布时间',
  `area` varchar(50) DEFAULT NULL COMMENT '招聘区域',
  `workplace` int(50) DEFAULT NULL COMMENT '工作地点',
  `nature` varchar(50) NOT NULL COMMENT '工作性质',
  `num` int(5) NOT NULL COMMENT '招聘人数',
  `over_time` varchar(30) NOT NULL COMMENT '招聘结束时间',
  `job_duty` text NOT NULL COMMENT '要求',
  `quanlification` text NOT NULL COMMENT '任职资格',
  `hot _work` varchar(200) DEFAULT '0' COMMENT '热门职业',
  `aline_work` varchar(200) DEFAULT '0' COMMENT '长期招聘职业',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企业表';

-- --------------------------------------------------------

--
-- 表的结构 `job_callme`
--

DROP TABLE IF EXISTS `job_callme`;
CREATE TABLE IF NOT EXISTS `job_callme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `map` varchar(100) NOT NULL,
  `phone` int(15) NOT NULL,
  `tel` int(15) NOT NULL,
  `address` varchar(200) NOT NULL,
  `weibo` varchar(200) NOT NULL,
  `wechat` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='官网联系方式及详情';

-- --------------------------------------------------------

--
-- 表的结构 `job_category`
--

DROP TABLE IF EXISTS `job_category`;
CREATE TABLE IF NOT EXISTS `job_category` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT '0',
  `classname` int(11) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='板块表';

-- --------------------------------------------------------

--
-- 表的结构 `job_personinfo`
--

DROP TABLE IF EXISTS `job_personinfo`;
CREATE TABLE IF NOT EXISTS `job_personinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `realname` varchar(100) NOT NULL COMMENT '用户真实姓名',
  `sex` tinyint(1) NOT NULL COMMENT '用户性别',
  `birthday` varchar(50) NOT NULL COMMENT '出生日期',
  `e_mail` varchar(30) NOT NULL COMMENT '邮箱',
  `tel` int(11) NOT NULL COMMENT '联系方式',
  `work_year` int(2) NOT NULL COMMENT '工作时间',
  `picture` varchar(50) NOT NULL COMMENT '用户头像',
  `now_industry` varchar(100) DEFAULT NULL COMMENT '现从事行业',
  `now_work` varchar(100) DEFAULT NULL COMMENT '现在从事工作',
  `now_money` int(11) DEFAULT NULL COMMENT '期望薪资',
  `wash_industry` varchar(100) NOT NULL COMMENT '现在从事行业',
  `wash_work` varchar(100) NOT NULL COMMENT '期望工作',
  `wash_city` varchar(100) NOT NULL COMMENT '期望城市',
  `wash_money` int(10) DEFAULT NULL COMMENT '期望薪资',
  `duty_time` int(3) DEFAULT NULL COMMENT '到岗时间',
  `ed_ground` varchar(500) DEFAULT NULL COMMENT '教育背景',
  `language` varchar(100) DEFAULT NULL COMMENT '语言',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户简历简历表';

-- --------------------------------------------------------

--
-- 表的结构 `job_user`
--

DROP TABLE IF EXISTS `job_user`;
CREATE TABLE IF NOT EXISTS `job_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` char(32) NOT NULL,
  `user_type` int(11) NOT NULL DEFAULT '0',
  `reg_time` timestamp NOT NULL,
  `last_time` timestamp NOT NULL,
  `ip` int(11) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
