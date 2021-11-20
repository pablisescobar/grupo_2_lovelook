-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: lovelook_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Buzos'),(2,'Remeras'),(3,'Remerones'),(4,'Conjuntos'),(5,'Maxibuzos'),(6,'Camperas'),(7,'Babuchas'),(8,'Jeans'),(9,'Pijamas'),(10,'Shorts'),(11,'Polleras'),(12,'Accesorios');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'gris'),(2,'blanco'),(3,'negro'),(4,'naranja'),(5,'lila'),(6,'rosa'),(7,'celeste'),(8,'marron'),(9,'natural'),(10,'verde');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=264 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (186,'1634008479488_img_merida.jpg_.jpg',62),(188,'1634008613548_img_mickey2.jpg_.jpg',64),(190,'1634008855458_img_powerGirls.jpg_.jpg',66),(191,'1634009068632_img_princess.jpg_.jpg',67),(192,'1634009122127_img_remeraBeKind.jpg_.jpg',68),(193,'1634009439465_img_simpsons.jpg_.jpg',69),(194,'1634009490332_img_smile.jpg_.jpg',70),(195,'1634009554779_img_smile2.jpg_.jpg',71),(196,'1634009624778_img_snakes.jpg_.jpg',72),(197,'1634009680926_img_stitch.jpg_.jpg',73),(198,'1634009729159_img_stitch2.jpg_.jpg',74),(199,'1634009799284_img_stitch3.jpg_.jpg',75),(200,'1634009879529_img_tigger.jpg_.jpg',76),(201,'1634009950386_img_tricolor2.jpg_.jpg',77),(202,'1634010008963_img_university.jpg_.jpg',78),(203,'1634010178772_img_university2.jpg_.jpg',79),(204,'1634010343185_img_vogue.jpg_.jpg',80),(205,'1634010427361_img_wild.jpg_.jpg',81),(209,'1634091073674_img_getALife.jpg_.jpg',58),(210,'1634091179974_img_wonderland.jpg_.jpg',82),(211,'1634180349613_img_flower.jpg_.jpg',84),(212,'1634180677217_img_harryPotter.jpg_.jpg',85),(213,'1634180903147_img_line2.jpg_.jpg',86),(219,'1634181345069_img_jean.jpg_.jpg',92),(221,'1634181636179_img_jean9.jpg_.jpg',94),(222,'1634181898795_img_jean2.jpg_.jpg',95),(223,'1634182041340_img_jean4.jpg_.jpg',96),(224,'1634182124096_img_jean6.jpg_.jpg',97),(225,'1634182228282_img_stitch.jpg_.jpg',98),(226,'1634182330034_img_powerGirls.jpg_.jpg',99),(227,'1634182562691_img_harryPotter.jpg_.jpg',100),(228,'1634182684295_img_mickey.jpg_.jpg',101),(230,'1634182887269_img_mickey2.jpg_.jpg',103),(231,'1634182898788_img_kitty.jpg_.jpg',102),(232,'1634182973337_img_selene3.jpg_.jpg',104),(233,'1634183119644_img_mom9.jpg_.jpg',105),(234,'1634183315606_img_mom5.jpg_.jpg',106),(235,'1634183685544_img_powerGirls5.jpg_.jpg',107),(236,'1634183768019_img_hunna2.jpg_.jpg',108),(237,'1634183881789_img_stitch2.jpg_.jpg',109),(238,'1634184051664_img_butterflies.jpg_.jpg',110),(240,'1634184214594_img_angels3.jpg_.jpg',112),(241,'1634184247606_img_doNot3.jpg_.jpg',111),(242,'1634184341991_img_smiles3.jpg_.jpg',113),(243,'1634184424824_img_flower2.jpg_.jpg',114),(244,'1634184495987_img_snakes4.jpg_.jpg',115),(245,'1634184682076_img_babuchaCloe.jpg_.jpg',116),(246,'1634184746031_img_babucha.jpg_.jpg',117),(247,'1634184880150_img_babucha3.jpg_.jpg',118),(248,'1634185019273_img_butterfly.jpg_.jpg',119),(249,'1634185078436_img_changes2.jpg_.jpg',120),(250,'1634185148950_img_kitty.jpg_.jpg',121),(251,'1634185198597_img_playboy3.jpg_.jpg',122),(252,'1634185235748_img_prada3.jpg_.jpg',123),(253,'1634185347648_img_university11.jpg_.jpg',124),(255,'1634507132742_img_RELOG1.webp_.webp',126);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `province` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `pc` int(11) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'------','------',-1,'------'),(2,'------','------',1234,'------'),(3,'122312321','------',0,'------'),(4,'------','------',0,'------'),(5,'------','------',0,'------'),(6,'------','------',0,'------');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `msg` text NOT NULL,
  `issue` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `cv` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `cuit` int(11) DEFAULT NULL,
  `businessName` varchar(50) DEFAULT NULL,
  `socialLocation` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (25,'Hola como estas','','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1635972691683_img_CV-EmaA-Developer.pdf_.pdf',NULL,NULL,NULL,NULL,NULL,NULL),(26,'JSDAGDHGKASJHDJKLASHDLKJHSDJKASHD','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1635973083286_img_CV-EmaA-Developer.pdf_.pdf',NULL,NULL,NULL,NULL,NULL,NULL),(44,'ghkkghjfgjhf','Consultas generales','Emanuel','Arroyo',NULL,'ema201217@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,'ghfhgjfghj','Atención al cliente','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,'jdhgfhg','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636127742569_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(47,'dasdasdasdas','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636128569795_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(48,'asdasdas','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636128595096_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(49,'asdasdasdas','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636166546190_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(50,'asdasdasd','Franquicia','dsdasdas','asdasdas',11111111,'ema201217@gmail.com',1156412335,NULL,'25 de Mayo','Letonia 279','Buenos Aires',20,'dasdasd aasdas','Carlos Tejedor');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_color`
--

DROP TABLE IF EXISTS `product_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `colorId` (`colorId`),
  CONSTRAINT `product_color_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `product_color_ibfk_2` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (47,58,10),(51,62,5),(53,64,9),(55,66,6),(56,67,5),(57,68,1),(58,69,2),(59,70,3),(60,71,2),(61,72,1),(62,73,7),(63,74,5),(64,75,1),(65,76,6),(66,77,3),(67,78,8),(68,79,3),(69,80,9),(70,81,1),(71,82,2),(73,84,3),(74,85,9),(75,86,8),(81,92,7),(83,94,3),(84,95,7),(85,96,3),(86,97,7),(87,98,7),(88,99,6),(89,100,9),(90,101,3),(91,102,6),(92,103,1),(93,104,3),(94,105,8),(95,106,1),(96,107,6),(97,108,4),(98,109,6),(99,110,5),(100,111,1),(101,112,3),(102,113,2),(103,114,9),(104,115,6),(105,116,3),(106,117,1),(107,118,9),(108,119,1),(109,120,10),(110,121,1),(111,122,2),(112,123,9),(113,124,2),(115,126,9);
/*!40000 ALTER TABLE `product_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_size`
--

DROP TABLE IF EXISTS `product_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sizeId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `sizeId` (`sizeId`),
  CONSTRAINT `product_size_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `product_size_ibfk_2` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_size`
--

LOCK TABLES `product_size` WRITE;
/*!40000 ALTER TABLE `product_size` DISABLE KEYS */;
INSERT INTO `product_size` VALUES (46,3,58),(50,4,62),(52,4,64),(54,3,66),(55,4,67),(56,3,68),(57,1,69),(58,2,70),(59,3,71),(60,3,72),(61,4,73),(62,3,74),(63,4,75),(64,1,76),(65,3,77),(66,3,78),(67,2,79),(68,4,80),(69,1,81),(70,4,82),(72,2,84),(73,3,85),(74,4,86),(75,2,92),(76,4,94),(77,3,95),(78,1,96),(79,2,97),(80,5,98),(81,4,99),(82,3,100),(83,4,101),(84,5,102),(85,3,103),(86,2,104),(87,1,105),(88,3,106),(89,4,107),(90,5,108),(91,3,109),(92,2,110),(93,5,111),(94,2,112),(95,3,113),(96,3,114),(97,2,115),(98,4,116),(99,2,117),(100,2,118),(101,4,119),(102,3,120),(103,2,121),(104,2,122),(105,1,123),(106,1,124),(108,1,126);
/*!40000 ALTER TABLE `product_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `amount` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `seasonId` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `seasonId` (`seasonId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`seasonId`) REFERENCES `seasons` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (58,'Get a Life','Remeron de algodÃƒÂ³n estampado',1200,11,3,3,0),(62,'Merida','Remeron con diseño Disney princesas estampado',1200,15,3,2,20),(64,'Mickey','Maxibuzo con diseÃƒÂ±o Disney estampado',2600,7,5,4,15),(66,'Power Girls','Remeron con diseÃƒÂ±o de dibujos estampado',1200,9,3,3,0),(67,'Princess','Buzo con diseÃƒÂ±o de Disney princesa',2400,10,1,1,15),(68,'Be kind','Remera de algodÃƒÂ³n estampado',1000,21,2,2,0),(69,'Simpsons','Remeron de algodón estampado',1200,12,3,3,0),(70,'Smile','Remera con diseÃƒÂ±o estampado',1000,15,2,2,0),(71,'Smile II','Remera con diseÃƒÂ±o estampado',1000,12,2,2,0),(72,'Snakes','Remeron de algodÃƒÂ³n con diseÃƒÂ±o estampado',1200,25,3,2,0),(73,'Stitch','Remera de algodÃƒÂ³n con diseÃƒÂ±o de Stitch estampado',1000,7,2,3,0),(74,'Stitch','Remeron de algodÃƒÂ³n con diseÃƒÂ±o de stitch estampado',1200,12,3,3,0),(75,'Stitch','Remeron de algodÃƒÂ³n con diseÃƒÂ±o de stitch estampado',1500,9,3,3,0),(76,'Tigger','Remeron de algodÃƒÂ³n estampado',1320,11,3,2,0),(77,'Tricolor','Conjunto de buzo y babucha frizado',4500,9,4,1,25),(78,'University','Buzo frizado con diseÃƒÂ±o universitario',2400,4,1,4,15),(79,'University','Buzo frizado con diseÃƒÂ±o universitario',2400,6,1,1,15),(80,'Vogue','Maxibuzo frizado con diseÃƒÂ±o estampado',2600,6,5,1,15),(81,'Wilds','Remera de algodÃƒÂ³n con detalle en las vistas',1000,7,2,2,0),(82,'Wonderland','Remeron de algodÃƒÂ³n con diseÃƒÂ±o de dibujos estampado',1200,8,3,3,0),(84,'Flower','Buzo frizado con diseÃƒÂ±o estampado',2400,15,1,1,15),(85,'Harry Potter','Buzo frizado ediciÃƒÂ³n exclusiva de Harry Potter',2400,21,1,1,15),(86,'Line II','Buzo de algodÃƒÂ³n rÃƒÂºstico con combinaciones',2300,26,1,3,0),(92,'Jean Slouchy','PantalÃƒÂ³n de jean ',1800,12,8,3,0),(94,'Jean Skinny','PantalÃƒÂ³n de jean elastizado con roturas',2000,13,8,3,0),(95,'Jean Mom','PantalÃƒÂ³n de jean',2000,11,8,3,0),(96,'Rebels','Jardinero de jean',2200,9,8,4,15),(97,'wide II','PantalÃƒÂ³n de jean amplio',2200,10,8,4,15),(98,'Stitch','Remera y short con diseÃƒÂ±o sublimado',2500,22,9,2,0),(99,'PowerPuff','Remera y short con diseÃƒÂ±o sublimado',2500,21,9,2,0),(100,'Harry Potter','Remera manga larga y pantalÃƒÂ³n babucha con diseÃƒÂ±o sublimado',2500,14,9,4,15),(101,'Mickey','Remera manga larga y pantalÃƒÂ³n babucha con diseÃƒÂ±o estampado',2500,13,9,4,15),(102,'Hello Kitty','Campera de algodÃƒÂ³n rÃƒÂºstico con diseÃƒÂ±o estampado',2800,23,6,3,0),(103,'Mickey','Campera de algodÃƒÂ³n rÃƒÂºstico con diseÃƒÂ±o estampado',2800,23,6,3,0),(104,'Selene','Campera bÃƒÂ¡sica de algodÃƒÂ³n rÃƒÂºstico',2600,16,6,3,0),(105,'Mom II','Campera larga frizada, capucha con corderito',2800,12,6,1,15),(106,'Changes','Campera larga de algodÃƒÂ³n rÃƒÂºstico',2800,12,6,3,0),(107,'Power Girls','Maxibuzo con diseÃƒÂ±o estampado',2600,13,5,3,0),(108,'Hunna','Maxibuzo con diseÃƒÂ±o bordado',2600,18,5,3,0),(109,'Stitch','Maxibuzo de algodÃƒÂ³n rÃƒÂºstico con diseÃƒÂ±o sublimado',2600,16,5,3,0),(110,'Butterflies','Conjunto de buzo y babucha con diseÃƒÂ±os estampados',4500,9,4,1,25),(111,'Do Not','Conjunto de buzo y babucha con diseÃƒÂ±os',4500,7,4,1,25),(112,'Angels','Conjunto frizado de buzo y babucha con diseÃƒÂ±o estampado',4500,6,4,1,25),(113,'Smile','Conjunto frizado de buzo y babucha',4500,8,4,1,25),(114,'Flowers','Conjunto frizado de buzo y babucha',4500,9,4,1,25),(115,'Snakes','Conjunto frizado de buzo y babucha con diseÃƒÂ±o estampado',4500,12,4,1,25),(116,'Slipper','Babucha de algodÃƒÂ³n frizado',1800,11,7,1,15),(117,'Slipper II','Babucha de algodÃƒÂ³n frizado',1800,13,7,1,15),(118,'Cloe II','Babucha de algodÃƒÂ³n rÃƒÂºstico',1800,13,7,4,0),(119,'Butterfly','RemerÃƒÂ³n de algodÃƒÂ³n con diseÃƒÂ±o de mariposa',1200,13,3,2,0),(120,'Changes','RemerÃƒÂ³n de algodÃƒÂ³n con diseÃƒÂ±o',1200,15,3,2,0),(121,'Kitty','RemerÃƒÂ³n con diseÃƒÂ±o de Hello Kitty',1200,18,3,2,0),(122,'Playboy','RemerÃƒÂ³n con diseÃƒÂ±o estampado',1200,18,3,2,0),(123,'Prada','RemerÃƒÂ³n con diseÃƒÂ±o estampado',1200,19,3,2,0),(124,'University','RemerÃƒÂ³n con diseÃƒÂ±o ',1200,16,3,2,0),(126,'Reloj Casio Mujer Ltp-1131g','Â· HORA REGULAR AnalÃ³gico: Tres manillas (Horas, minutos, segundos)\r\nÂ· PRECISION: +/- 20 Seg.. por',10000,50,12,5,25);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'USER'),(2,'ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sales_FK` (`userId`),
  KEY `sales_FK_1` (`productId`),
  CONSTRAINT `sales_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `sales_FK_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seasons`
--

DROP TABLE IF EXISTS `seasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seasons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seasons`
--

LOCK TABLES `seasons` WRITE;
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` VALUES (1,'winter'),(2,'summer'),(3,'spring'),(4,'autumn'),(5,'verano');
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shoppingcart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shopping_cart_FK` (`userId`),
  KEY `shopping_cart_FK_1` (`productId`),
  CONSTRAINT `shopping_cart_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `shopping_cart_FK_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart`
--

LOCK TABLES `shoppingcart` WRITE;
/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES (2,5,58,16,23424);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'XXL');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL,
  `rolId` int(11) DEFAULT NULL,
  `locationId` int(11) DEFAULT NULL,
  `avatar` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `locationId` (`locationId`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`),
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`rolId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'mariela','paduani',NULL,'mariela@gmail.com','$2a$12$tD5e.5Jhp/WQWMgAH8njjeREM6PBt7F9w7jlZfk6Mc1VBcHCH5V.O',2,NULL,NULL),(6,'emanuel','arroyo',NULL,'ema201217@gmail.com','$2a$12$krIl0JhqE1jclXEYocCpW.vQZMaKAPb/fPjZwnY1oNi4upqUJUqaq',1,NULL,'default-image.png'),(7,'emanuel','arroyo',NULL,'ema20117@gmail.com','$2a$12$8H3D92cS3Hl3quPg.9HAmefnqk7i5sCQtj.lIzyya9/GN7zGof5kW',1,NULL,'default-image.png'),(9,'emanuel','arroyo',NULL,'ema@gmail.com','$2a$12$thrw2M7vzC0FtWhGP3nHke9M5AKM.Ns6UkrSXxnI1mfZGAjCnmeZe',1,NULL,'default-image.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'lovelook_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-19 22:49:53
