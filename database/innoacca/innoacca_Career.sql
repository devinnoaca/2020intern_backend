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
-- Table structure for table `Career`
--

DROP TABLE IF EXISTS `Career`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Career` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `content` varchar(45) NOT NULL,
  `user_USN` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `career_USN_idx` (`user_USN`),
  CONSTRAINT `user_USN` FOREIGN KEY (`user_USN`) REFERENCES `User` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Career`
--

LOCK TABLES `Career` WRITE;
/*!40000 ALTER TABLE `Career` DISABLE KEYS */;
INSERT INTO `Career` VALUES (2,'멘토링 시스템 개발',3),(4,'개발자들을 위한 검색엔진 개발',3),(5,'네이버 웹툰 CTO - 현재',5),(6,'이노베이션 아카데미 인턴 - 2019',5),(7,'Google 데이터 센터 센터장 - 현재',4),(8,'aws 본사에서 근무 - 2016 ',4),(9,'이노베이션 아카데미 (42 Seoul) : Front-end 개발자',6),(10,'국민대학교 소프트웨어학부 졸업',6),(11,'상명대학교 졸업',7),(12,'이노베이션 아카데미 - 로그분석기 개발',7),(14,'이노베이션 아카데미 (42 Seoul) : Service - View',10),(15,'국민대학교 졸업',10),(16,'카카오 서버 개발자',11),(17,'테스코 말레이시아 이사',11),(18,'이노베이션 아카데미 (42 Seoul) : 운영페이지 제작',12),(19,'네오위즈 CTO',12),(20,'티몬 앱 개발',13),(21,'GS25 웹 개발',13),(22,'멋쟁이 사자처럼 8기',14),(23,'상명대학교 학사 석사 졸업',15),(24,'네오위즈 서버 개발자',16),(25,'팟프리카 CTO',16),(26,'멋쟁이 사자처럼 8기',18);
/*!40000 ALTER TABLE `Career` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-24 11:28:17
