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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(60) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `userRole` varchar(7) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'alison','wade','aw@gmail.com','alisonw','alw123','client'),(2,'john','hudson','jh@gmail.com','johnh','joh123','client'),(3,'chris','harris','ch@gmail.com','chrish','chr123','client'),(4,'lydia','tate','lt@gmail.com','lydiat','lyt123','admin'),(5,'chris','rufus','chrisrufus@gmail.com','chris00','abcd12','client'),(6,'alexa','ferdison','af@gmail.com','alexaf','af2497','client'),(7,'james','smith','jm@gmail.com','jamessm','js1234','client'),(8,'emma','stone','em@gmail.com','emmas','em1234','client'),(9,'noah','brown','nb@gmail.com','noahb','nb1234','client'),(10,'michelle','davis','md@gmail.com','michelled','md1234','client'),(11,'sara','sherman','ss@gmail.com','saras','ss1234','client'),(12,'dylan','brien','db@gmail.com','dylanb','db123','client'),(13,'amber','clark','ac@gmail.com','amberc','ac1234','client'),(14,'vicki','reynolds','vr@gmail.com','vickir','vr1234','client'),(15,'daisy','hall','dh@gmail.com','daisyh','dh1234','client'),(16,'dale','taylor','dt@gmail.com','dalet','dt123','client'),(17,'dylan','thomas','dt@gmail.com','dylant','dt123','client'),(18,'helen','walker','hw@gmail.com','helenw','hw1234','client'),(19,'karen','scott','ks@gmail.com','karens','ks1234','client'),(20,'laura','smith','ls@gmail.com','lauras','ls123','client'),(21,'lily','clarke','lc@gmail.com','lilyc','lc123','client'),(22,'chris','rufus','cr@gmail.com','chrisr','cr123','client'),(23,'james','rhodes','jr@gmail.com','jamesr','jr1234','client'),(24,'jason','wade','jw@gmail.com','jasonw','jw123','client'),(25,'dylan','wade','dw@gmail.com','dylanw','dw123','client'),(26,'dylan','rhodes','dr@gmail.com','dylanr','dr123','client'),(27,'shane','rhodes','sr@gmail.com','shaner','sr1234','client'),(28,'emma','wade','ew@gmail.com','emmaw','ew1234','client'),(29,'kylie','rhodes','kr@gmail.com','kylier','kr1234','client'),(30,'shaley','wade','sw@gmail.com','shaleyw','sw123','client'),(31,'aaron','wade','aw@gmail.com','aaronw','aw123','client'),(32,'sara','rhodes','sr@gmail.com','saraw','sw123','client'),(33,'emma','rhodes','er@gmail.com','emmar','er123','client');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
