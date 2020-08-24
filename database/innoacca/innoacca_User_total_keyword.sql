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
-- Table structure for table `User_total_keyword`
--

DROP TABLE IF EXISTS `User_total_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User_total_keyword` (
  `user_USN` int NOT NULL,
  `keyword_ID` int NOT NULL,
  PRIMARY KEY (`user_USN`,`keyword_ID`),
  KEY `utk_keyword_ID_idx` (`keyword_ID`),
  CONSTRAINT `utk_keyword_ID` FOREIGN KEY (`keyword_ID`) REFERENCES `Keyword` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `utk_USN` FOREIGN KEY (`user_USN`) REFERENCES `User` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User_total_keyword`
--

LOCK TABLES `User_total_keyword` WRITE;
/*!40000 ALTER TABLE `User_total_keyword` DISABLE KEYS */;
INSERT INTO `User_total_keyword` VALUES (6,1),(7,1),(10,1),(11,1),(12,1),(13,1),(15,1),(16,1),(11,2),(13,2),(15,2),(16,2),(6,3),(10,3),(11,3),(12,3),(13,3),(15,3),(16,3),(6,4),(10,4),(11,4),(12,4),(13,4),(10,5),(11,5),(12,5),(15,5),(11,6),(12,6),(15,6),(7,7),(10,7),(11,7),(5,9),(6,9),(7,9),(10,9),(11,9),(12,9),(15,9),(5,11),(7,11),(10,11),(11,11),(12,11),(15,11),(10,12),(11,12),(12,12),(6,16),(10,16),(11,16),(12,16),(15,16),(7,18),(10,18),(11,18),(13,18),(15,18),(5,21),(7,21),(11,21),(13,21),(5,22),(11,22),(13,22),(15,22),(6,23),(7,23),(10,23),(11,23),(13,23),(15,23),(6,24),(10,24),(11,24),(12,24),(13,24),(15,24),(5,25),(11,25),(15,25),(16,25),(10,26),(11,26),(15,26),(10,27),(11,27),(15,27),(4,28),(5,28),(11,28),(15,28),(5,30),(10,30),(11,30),(4,31),(5,31),(3,32),(4,32),(7,32),(10,32),(11,32),(12,32),(13,32),(15,32),(3,33),(4,33),(7,33),(10,33),(11,33),(12,33),(13,33),(15,33),(3,34),(4,34),(10,34),(11,34),(12,34),(15,34),(4,35),(11,35),(12,35),(15,35),(4,36),(10,36),(11,36),(12,36),(15,36),(16,36),(4,37),(11,37),(15,37),(4,38),(10,38),(11,38),(15,38),(3,39),(4,39),(11,39),(15,39),(16,39),(3,40),(4,40),(7,40),(10,40),(11,40),(15,40),(3,41),(6,41),(12,41),(13,41),(6,42),(10,42),(12,42),(13,42),(3,43),(6,43),(10,43),(12,43),(13,43),(3,44),(6,44),(12,44),(13,44),(6,45),(12,45),(13,45),(6,46),(13,46),(6,47),(12,47),(13,47),(3,48),(4,48),(6,48),(13,48),(3,49),(5,49),(6,49),(13,49),(15,49),(3,50),(6,50),(13,50),(15,50),(3,51),(6,51),(13,51),(3,52),(5,52),(6,52),(13,52),(15,52),(3,53),(5,53),(6,53),(3,54),(6,54),(15,54),(5,55),(6,55),(7,55),(10,55),(11,55);
/*!40000 ALTER TABLE `User_total_keyword` ENABLE KEYS */;
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
