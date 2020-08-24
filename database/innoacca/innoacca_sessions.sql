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
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('-Mgqmm7Z9TYIYljCksumXHLW1n3PZcPM',1598316134,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-24T22:24:55.694Z\",\"httpOnly\":true,\"path\":\"/\"},\"usn\":3}'),('4TrRM17Z3k1tCqVFDW0N1U21NAtj8IJK',1598315177,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:16.796Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('8Z30ir0UROzFS7Amphu1ejd9aQPz_Ot8',1598315184,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:23.982Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('9SYqr0ipbBUY_C9JZ8aPyEBTiHp5-IY8',1598315177,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:16.774Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('BsT0mfgF4xen7Cu7kC_0FNPHCroFYPTl',1598315184,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:23.921Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('GBvt2jld4GUYV3-h7hIYSgz9J8VVGBDA',1598315177,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:16.865Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('OF3SoVXuhgO66YkRkGVyx16OdwW-qYcB',1598315891,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:38:11.228Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('PM_ZxT2cNbMmhQhtqDjbDsjEdE5fVaw2',1598315177,'{\"cookie\":{\"originalMaxAge\":86399999,\"expires\":\"2020-08-25T00:26:16.864Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('Pcz9rKhao-_cwipvRElQ_bZSLeY5Hs6P',1598315184,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:23.962Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('Pe5PhXzlsmJUVQ1AAT2eKyvwWaK-1XRS',1598307243,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-24T21:55:19.476Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('_5WFt3dkgo8_DhMq4xkTdKx2Om9bjL5L',1598315184,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:23.954Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('iT7oxBSc1nCobEzKLLnhqCq4XIEpW14U',1598315184,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:23.904Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('lwJ25nobajR1GB2_JGWeBg1Gx1K0YBtO',1598315634,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-24T21:52:14.578Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('or4jqHl4XCUMDmBnPAZJ8zABC9sKFCHa',1598315177,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:26:16.830Z\",\"httpOnly\":true,\"path\":\"/\"}}'),('yajV3Ab7wLkjddrTsvf_cyZ19p5Ewx-R',1598315891,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-08-25T00:38:11.146Z\",\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
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
