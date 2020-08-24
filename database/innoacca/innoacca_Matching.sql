-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: innoacca
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Matching`
--

DROP TABLE IF EXISTS `Matching`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Matching` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `mentee_USN` int DEFAULT NULL,
  `mentor_USN` int DEFAULT NULL,
  `request_message` text NOT NULL,
  `response_message` text,
  `is_checked` tinyint NOT NULL DEFAULT '0',
  `state` int NOT NULL DEFAULT '0',
  `request_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `response_time` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `mentee_USN_idx` (`mentee_USN`),
  KEY `mentor_USN_idx` (`mentor_USN`),
  CONSTRAINT `mentee_USN` FOREIGN KEY (`mentee_USN`) REFERENCES `User` (`USN`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `mentor_USN` FOREIGN KEY (`mentor_USN`) REFERENCES `User` (`USN`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Matching`
--

LOCK TABLES `Matching` WRITE;
/*!40000 ALTER TABLE `Matching` DISABLE KEYS */;
INSERT INTO `Matching` VALUES (1,14,10,'리액트랑 자바스크립트 뿌셔뿌셔 찢어찢어 하고싶습니다.','말투 똑바로 하세요',0,2,'2020-08-20 14:51:51','2020-08-20 14:51:51'),(2,3,6,'코딩테스트에 어떤 언어가 적합할까요???','메일로 연락처 남길게요.',0,1,'2020-08-20 15:50:50','2020-08-20 17:58:58'),(3,14,10,'풀스택 개발자가 되고싶습니다 어떻게 해야될지 잘모르겠어요','',0,0,'2020-08-20 17:28:28',NULL),(4,3,15,'nj','',0,0,'2020-08-20 17:29:29',NULL),(5,3,6,'리액트가 궁금합니다!','제이메일로 연락주세요',0,1,'2020-08-20 17:31:31','2020-08-20 17:37:37'),(6,14,10,'프론트의 신이 되고싶습니다...',' 네 제 이메일로 자세하게 어디서 만날지 연락해봅시다.',0,1,'2020-08-20 17:51:51','2020-08-20 17:55:55'),(7,3,6,'다시 멘토링 부탁드립니다.','네 메일로 연락주세요.',0,1,'2020-08-20 17:51:51','2020-08-20 17:59:59'),(8,3,6,'계속 사진이 날라가요...ㅠㅠ','',0,0,'2020-08-20 17:54:54',NULL),(9,3,6,'아니왜 날라가지?','',0,0,'2020-08-20 17:55:55',NULL),(10,14,10,'asdf','ㅇㅊㄴㅁㅍㅇㄴㅁㅍ',0,0,'2020-08-21 00:00:00',NULL),(11,18,16,'저는 웹의 신이되고싶습니다.',' 네 좋습니다 1--1-11203얀릭',0,1,'2020-08-21 11:13:13','2020-08-21 11:14:14');
/*!40000 ALTER TABLE `Matching` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-24 11:28:19
