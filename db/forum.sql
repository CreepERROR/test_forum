-- Adminer 4.8.1 MySQL 8.3.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `forum`;
CREATE DATABASE `forum` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `forum`;

DROP TABLE IF EXISTS `Discussion`;
CREATE TABLE `Discussion` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Forum` int NOT NULL,
  `User` int NOT NULL,
  `Titre` varchar(256) NOT NULL,
  `Description` text NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Forum` (`Forum`),
  KEY `User` (`User`),
  CONSTRAINT `discussion_ibfk_1` FOREIGN KEY (`Forum`) REFERENCES `Forum` (`ID`),
  CONSTRAINT `discussion_ibfk_2` FOREIGN KEY (`User`) REFERENCES `User` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `Forum`;
CREATE TABLE `Forum` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Titre` varchar(256) NOT NULL,
  `Description` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `Reponse`;
CREATE TABLE `Reponse` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Discussion` int NOT NULL,
  `User` int NOT NULL,
  `Contenu` text NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Discussion` (`Discussion`),
  KEY `User` (`User`),
  CONSTRAINT `reponse_ibfk_1` FOREIGN KEY (`Discussion`) REFERENCES `Discussion` (`ID`),
  CONSTRAINT `reponse_ibfk_2` FOREIGN KEY (`User`) REFERENCES `User` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(256) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `Admin` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2024-03-27 14:27:34
