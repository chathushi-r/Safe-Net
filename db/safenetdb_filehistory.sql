-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: safenetdb
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `filehistory`
--

DROP TABLE IF EXISTS `filehistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filehistory` (
  `fileID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `fileName` varchar(255) NOT NULL,
  `scanDate` varchar(15) NOT NULL,
  `scanResult` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`fileID`),
  KEY `userID` (`userID`),
  CONSTRAINT `filehistory_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filehistory`
--

LOCK TABLES `filehistory` WRITE;
/*!40000 ALTER TABLE `filehistory` DISABLE KEYS */;
INSERT INTO `filehistory` VALUES (1,2,'exefile.exe','19/10/2023','benign'),(2,2,'exefile2.exe','19/10/2023','benign'),(3,2,'exefile.exe','19/10/2023','benign'),(4,2,'exefile.exe','19/10/2023','benign'),(5,2,'exefile2.exe','19/10/2023','benign'),(6,2,'exefile.exe','20/10/2023','malware'),(7,2,'exefile2.exe','20/10/2023','malware'),(8,6,'exefile.exe','20/10/2023','benign'),(9,6,'exefile2.exe','20/10/2023','malware'),(10,6,'exefile2.exe','20/10/2023','benign'),(11,2,'exefile2.exe','20/10/2023','benign'),(12,2,'exefile2.exe','20/10/2023','benign'),(13,2,'exefile.exe','20/10/2023','benign'),(14,2,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(15,26,'0111bddac92a792c7b2ee3ab77642c33df0e01afe737b0d1fa0cbbf331d9572c.exe','20/10/2023','benign'),(16,26,'0111bddac92a792c7b2ee3ab77642c33df0e01afe737b0d1fa0cbbf331d9572c.exe','20/10/2023','benign'),(17,26,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(18,27,'exefile.exe','20/10/2023','benign'),(19,27,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(20,28,'exefile2.exe','20/10/2023','benign'),(21,28,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(22,30,'exefile.exe','20/10/2023','benign'),(23,30,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(24,33,'exefile.exe','20/10/2023','benign'),(25,33,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(26,2,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(27,2,'29c7e87350cb03428fc108b03856095b','20/10/2023','malware'),(28,2,'0111bddac92a792c7b2ee3ab77642c33df0e01afe737b0d1fa0cbbf331d9572c.exe','20/10/2023','benign'),(29,2,'exefile.exe','21/10/2023','benign');
/*!40000 ALTER TABLE `filehistory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-21  8:38:34
