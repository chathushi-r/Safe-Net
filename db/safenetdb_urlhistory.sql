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
-- Table structure for table `urlhistory`
--

DROP TABLE IF EXISTS `urlhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `urlhistory` (
  `urlID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `url` varchar(2083) NOT NULL,
  `scanDate` varchar(15) NOT NULL,
  `scanResult` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`urlID`),
  KEY `userID` (`userID`),
  CONSTRAINT `urlhistory_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `urlhistory`
--

LOCK TABLES `urlhistory` WRITE;
/*!40000 ALTER TABLE `urlhistory` DISABLE KEYS */;
INSERT INTO `urlhistory` VALUES (1,2,'https://www.ecu.edu.au/','16/10/2023','Benign'),(2,6,'https://www.kaggle.com/datasets/siddharthkumar25/malicious-and-benign-urls/versions/1?resource=download','16/10/2023','Benign'),(3,6,'mp3raid.com/music/krizz_kaliko.html','16/10/2023','Benign'),(4,6,'http://www.garage-pirenne.be/index.php?option=com_content&view=article&id=70&vsig70_0=15','16/10/2023','Malicious'),(5,6,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','16/10/2023','Malicious'),(6,6,'https://www.ecu.edu.au/','16/10/2023','Benign'),(7,8,'https://www.youtube.com/watch?v=PogM1ox6Es4&ab_channel=WisdomML','16/10/2023','Benign'),(8,8,'https://instagantt.com/app','16/10/2023','Malicious'),(9,8,'https://en.wikipedia.org/wiki/Sigiriya','16/10/2023','Benign'),(10,8,'https://instagantt.com/','16/10/2023','Malicious'),(11,8,'https://web.whatsapp.com/','16/10/2023','Benign'),(12,8,'https://instagantt.com','16/10/2023','Malicious'),(13,8,'https://www.instagantt.com/','16/10/2023','Benign'),(14,8,'https://en.wikipedia.org/wiki/Sigiriya','16/10/2023','Benign'),(15,2,'https://www.ecu.edu.au/','17/10/2023','Benign'),(16,2,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','17/10/2023','Malicious'),(17,2,'https://www.youtube.com/watch?v=bY4kEuki5hM&list=RDbY4kEuki5hM&start_radio=1&ab_channel=DanMusic','17/10/2023','Benign'),(18,4,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','17/10/2023','Malicious'),(19,2,'imetrica.net/css/','17/10/2023','Benign'),(20,2,'https://www.ecu.edu.au/','19/10/2023','Benign'),(21,2,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','19/10/2023','Malicious'),(22,2,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','19/10/2023','Malicious'),(23,2,'https://www.ecu.edu.au/','19/10/2023','Benign'),(24,2,'https://www.kaggle.com/datasets/siddharthkumar25/malicious-and-benign-urls/versions/1?resource=download','19/10/2023','Benign'),(25,2,'https://www.ecu.edu.au/','19/10/2023','Benign'),(26,2,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','19/10/2023','Malicious'),(27,2,'https://www.ecu.edu.au/','20/10/2023','Benign'),(28,2,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(29,2,'https://www.ecu.edu.au/','20/10/2023','Benign'),(30,2,'https://www.kaggle.com/datasets/siddharthkumar25/malicious-and-benign-urls/versions/1?resource=download','20/10/2023','Benign'),(31,2,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(32,2,'mp3raid.com/music/krizz_kaliko.html','20/10/2023','Benign'),(33,26,'https://www.ecu.edu.au/','20/10/2023','Benign'),(34,26,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(35,27,'https://www.ecu.edu.au/','20/10/2023','Benign'),(36,27,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(37,28,'https://www.ecu.edu.au/','20/10/2023','Benign'),(38,28,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(39,30,'https://www.ecu.edu.au/','20/10/2023','Benign'),(40,30,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(41,33,'https://www.ecu.edu.au/','20/10/2023','Benign'),(42,33,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(43,2,'http://4000simin.or.kr/plus/html/bookmark/ii.php?.rand=13InboxLight.aspx?n=1774256418&amp','20/10/2023','Malicious'),(44,2,'https://www.ecu.edu.au/','20/10/2023','Benign'),(45,2,'https://www.ecu.edu.au/','21/10/2023','Benign');
/*!40000 ALTER TABLE `urlhistory` ENABLE KEYS */;
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
