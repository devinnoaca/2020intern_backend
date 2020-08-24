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
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `USN` int NOT NULL AUTO_INCREMENT,
  `ID` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` text NOT NULL,
  `image_url` text,
  `description` text,
  `company` text,
  `permission` int NOT NULL DEFAULT '-1',
  `noti_count` int NOT NULL DEFAULT '0',
  `type` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`USN`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'admin','관리자','admin@innovation.or.kr','admin123!',NULL,NULL,NULL,2,0,2),(3,'wlgnssla311','이지훈','wlgnssla31@gmail.com','113f21e72a86d4b5b862f9e83216502bc7f08b1c90f280dbe7bd490bf803fd3d0c423717247dd18c6d20da2d23182f7ee20c39656ba5618764c318100c452b78',NULL,'안녕하세요 국민대학교 4학년 이지훈입니다.','국민대학교 4학년',-1,0,0),(4,'dlwjdgus1','이정현','dlwjdgus1@gmail.com','eb129f2bacb91e18ed7648cbdfa104315a9c2790a7cfb6aabc1b506afc0015f5ad8852d3aebaca97c99d8070adf863fee574a6131fce0503ce529afbb2e9e965','http://10.19.247.182:3001/static/images/4.jpg','Google 데이터 센터 센터장입니다. ','Google 데이터 센터 센터장',0,0,1),(5,'dldlsvud1','이인평','dldlsvud1@google.com','7cbb00544fc72d334dc92f04415965b8864739a1c761ffbaf47096e1a39bbdff02a58814ab01d7bca8bfc5b291b2aea1dd39c3b0d5c84830219582f83d2f869b','http://10.19.247.182:3001/static/images/5.jpg','안녕하세요 이인평입니다.','Naver',0,0,1),(6,'qkrwhdals1','박종민','qkrwhdals1@gmail.com','746671c6a82fd54298b1c308d1b8cf40a8524ed439d51d094848cde17e81b4bbba8b1e84d9ceaac8a0edbe45e583b9d0db636d93470cd4bb2adcc0e7bb024e47','http://10.19.247.182:3001/static/images/6.jpg','안녕하세요 박종민입니다.','Mr.Park and Lee 대표',-1,0,1),(7,'wkdwnsdud1','장준영','wkdwnsdud1@gmail.com','a2fc7c414af81bed920019b0909bcbb1867bce1887222b0a22a28a724ed83b2b6838b944eecb20a1632a5261e7e12b4ce25aba3425550714ba359f4b54f07632','http://10.19.247.182:3001/static/images/7.jpg','안녕하세요 장준영입니다.','NHN 서버 개발자',-1,0,1),(10,'rlawjdtlr1','김정식','rlawjdtlr1@gmail.com','47321e3250c0022e55f667e71cc7b41c475fc25e29042ab410d3997089ba07dd6d047c5c5fe29158093c053f38c62a48a069e0fdc53ac17000e424fd0282fca4','http://10.19.247.182:3001/static/images/10.jpg','안녕하세요 김정식입니다.','멜론 서버 개발자 ',-1,0,1),(11,'dlwlsrn1','이진구','dlwlsrn1@gmail.com','267380a03b9bcde6dd3d20146e746fac3ebb1dd5932c8af840cb517d254d850bb3782c00aa8ec232d3b4514f2b5c5daab003932619bf87040aff4464d55de9a0','http://10.19.247.182:3001/static/images/11.jpg','안녕하세요 Google Korea 이사 이진구입니다.','Google Korea 이사 ',-1,0,1),(12,'thdtjdwo1','송성재','thdtjdwo1@gmail.com','f5aabd664da77c0bf1edc1c2a0ae9cca356583094b7270edf7f62a85b585bbea87f6f2e661780dd025495463af30856ef9da99a10b88366175ba8d407ecd3f62','http://10.19.247.182:3001/static/images/12.jpg','안녕하세요 송성재입니다.','Powersell 웹 개발자',-1,0,1),(13,'dbswnsgh1','윤준호','dbswnsgh1@gmail.com','f03fc5f04b0a8239f73f014e4bb4d96b425efc186d067d3836d662005614dc9996b1ec992c48e251ae7405e0b7f43d5d3adb9b4c25f7971360a2fd98c27f1adc','http://10.19.247.182:3001/static/images/13.jpg','안녕하세요 윤준호입니다.','쿠팡 CTO',-1,0,1),(14,'jongmin','박종멘티','show@naver.com','6daaccd65811f732caa9914ddbcf9a21454ef6bfc4414c4f7fed626c3b7ab56e8df64fa46f2fa2da84f3f28013744fc9e8c1ebc729e7505f06070a0e9a94c172','http://10.19.247.182:3001/static/images/14.jpg','웹 프론트엔드 마스터 되고싶어용','국민대학교 소프트웨어학부',-1,0,0),(15,'chlwldnjs1','최지원','chlwldnjs1@gmail.com','e8396dfcb61065d5d63f9fca8736b9c1a847e0a0789ce354ac6509985c60321e09a6f2634056ca843806148dd349f00270594cd40974d38d0fe898a2787bd2e0','http://10.19.247.182:3001/static/images/15.jpg','안녕하새요 상명대학교 소프트웨어학부 교수 최지원입니다. ','상명대학교 교수',0,0,1),(16,'dlghwns1','이호진','dlghwns1@google.com','a5eb4c87f189f464422b98b970f65c40aab00c43c5a43af1f0558ef7af062c2766dcd1e3ae33b029875a7c5cf86fcca981fc70226c40d5e09ee8ca939c56c465',NULL,'안녕하세요 이노베이션 아카데미 멘토입니다 ','이노베이션 아카데미',0,0,1),(18,'mentee','박종멘티','showppark12@naver.co','1921ca3fec19d6dde225ad91c9f15b1338152e35c673db74ac69b260cd8a16db9686ab727c32fd7987ae91eb0b68afcc0dbe756c5678323de3b5b7c5d0ec458d','http://10.19.247.182:3001/static/images/18.jpg','웹 프론트엔드의 신이 되고싶습니다.','국민대학교 2학년',-1,0,0);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-24 11:28:18
