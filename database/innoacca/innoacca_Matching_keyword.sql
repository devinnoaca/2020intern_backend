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
-- Table structure for table `Matching_keyword`
--

DROP TABLE IF EXISTS `Matching_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Matching_keyword` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `matching_ID` int NOT NULL,
  `keyword_name` tinytext NOT NULL,
  `category_name` tinytext NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `mk_matching_ID_idx` (`matching_ID`),
  CONSTRAINT `mk_matching_ID` FOREIGN KEY (`matching_ID`) REFERENCES `Matching` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Matching_keyword`
--

LOCK TABLES `Matching_keyword` WRITE;
/*!40000 ALTER TABLE `Matching_keyword` DISABLE KEYS */;
INSERT INTO `Matching_keyword` VALUES (1,1,'React','개발/프로그래밍'),(2,1,'Javascript','개발/프로그래밍'),(3,2,'코딩테스트','커리어'),(4,3,'Vue','개발/프로그래밍'),(5,3,'React','개발/프로그래밍'),(6,3,'Python','개발/프로그래밍'),(7,4,'React','개발/프로그래밍'),(8,4,'코딩테스트','커리어'),(9,4,'Algorithm','개발/프로그래밍'),(10,5,'React','개발/프로그래밍'),(11,6,'React','개발/프로그래밍'),(12,6,'Vue','개발/프로그래밍'),(13,7,'React','개발/프로그래밍'),(14,7,'코딩테스트','커리어'),(15,8,'React','개발/프로그래밍'),(16,8,'코딩테스트','커리어'),(17,9,'React','개발/프로그래밍'),(18,9,'코딩테스트','커리어'),(19,10,'React','개발/프로그래밍'),(20,11,'React','개발/프로그래밍'),(21,11,'HTML/CSS','개발/프로그래밍'),(22,11,'Vue','개발/프로그래밍'),(23,11,'Javascript','개발/프로그래밍');
/*!40000 ALTER TABLE `Matching_keyword` ENABLE KEYS */;
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
