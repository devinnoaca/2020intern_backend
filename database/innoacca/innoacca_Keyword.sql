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
-- Table structure for table `Keyword`
--

DROP TABLE IF EXISTS `Keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Keyword` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category_ID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `category_ID_idx` (`category_ID`),
  CONSTRAINT `fk_category_ID` FOREIGN KEY (`category_ID`) REFERENCES `Category` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Keyword`
--

LOCK TABLES `Keyword` WRITE;
/*!40000 ALTER TABLE `Keyword` DISABLE KEYS */;
INSERT INTO `Keyword` VALUES (1,'Javascript',1),(2,'HTML/CSS',1),(3,'React',1),(4,'Vue',1),(5,'Angular',1),(6,'Unitiy',1),(7,'C#',1),(9,'Python',1),(11,'C++',1),(12,'Scratch',1),(16,'Truffle',1),(18,'Algorithm',1),(21,'Java',1),(22,'Front-End',1),(23,'Android',1),(24,'React-Native',1),(25,'DevOps',2),(26,'Docker',2),(27,'Dapp',2),(28,'Ethereum',2),(30,'정보보안',2),(31,'블록체인',2),(32,'데이터분석',3),(33,'데이터시각화',3),(34,'인공지능',3),(35,'딥러닝',3),(36,'Tensorflow',3),(37,'Keras',3),(38,'머신러닝',3),(39,'웹크롤링',3),(40,'빅데이터',3),(41,'CSS',4),(42,'SCSS',4),(43,'Bootstrap',4),(44,'Material-UI',4),(45,'Photoshop',4),(46,'Sketch',4),(47,'3D모델링',4),(48,'취업',5),(49,'진로',5),(50,'면접',5),(51,'이력서',5),(52,'자기소개서',5),(53,'포트폴리오',5),(54,'코딩테스트',5),(55,'Go',1),(56,'php',1),(57,'node.js',1),(58,'express',1),(59,'Django',1),(60,'MySQL',3),(61,'NoSQL',3),(62,'MongoDB',3),(63,'MariaDB',3),(65,'Apache',2),(66,'Tomcat',2),(68,'Load balancer',2),(70,'기타',6),(71,'yarn',1);
/*!40000 ALTER TABLE `Keyword` ENABLE KEYS */;
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
