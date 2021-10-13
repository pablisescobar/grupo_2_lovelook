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
-- Table structure for table `avatars`
--

DROP TABLE IF EXISTS `avatars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avatars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatars`
--

LOCK TABLES `avatars` WRITE;
/*!40000 ALTER TABLE `avatars` DISABLE KEYS */;
/*!40000 ALTER TABLE `avatars` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Buzos'),(2,'Remeras'),(3,'Remerones'),(4,'Conjuntos'),(5,'Maxibuzos'),(6,'Camperas'),(7,'Babuchas'),(8,'Jeans'),(9,'Pijamas'),(10,'Shorts'),(11,'Polleras');
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
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (183,'1634008068031_img_hogwarts.jpg_.jpg',59),(184,'1634008186891_img_harryPotter2.jpg_.jpg',60),(185,'1634008414203_img_looneyTunes.jpg_.jpg',61),(186,'1634008479488_img_merida.jpg_.jpg',62),(187,'1634008553426_img_mickey.jpg_.jpg',63),(188,'1634008613548_img_mickey2.jpg_.jpg',64),(189,'1634008746299_img_picapiedras.jpg_.jpg',65),(190,'1634008855458_img_powerGirls.jpg_.jpg',66),(191,'1634009068632_img_princess.jpg_.jpg',67),(192,'1634009122127_img_remeraBeKind.jpg_.jpg',68),(193,'1634009439465_img_simpsons.jpg_.jpg',69),(194,'1634009490332_img_smile.jpg_.jpg',70),(195,'1634009554779_img_smile2.jpg_.jpg',71),(196,'1634009624778_img_snakes.jpg_.jpg',72),(197,'1634009680926_img_stitch.jpg_.jpg',73),(198,'1634009729159_img_stitch2.jpg_.jpg',74),(199,'1634009799284_img_stitch3.jpg_.jpg',75),(200,'1634009879529_img_tigger.jpg_.jpg',76),(201,'1634009950386_img_tricolor2.jpg_.jpg',77),(202,'1634010008963_img_university.jpg_.jpg',78),(203,'1634010178772_img_university2.jpg_.jpg',79),(204,'1634010343185_img_vogue.jpg_.jpg',80),(205,'1634010427361_img_wild.jpg_.jpg',81),(209,'1634091073674_img_getALife.jpg_.jpg',58),(210,'1634091179974_img_wonderland.jpg_.jpg',82);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
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
  `dni` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `cv` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `cuit` int(11) DEFAULT NULL,
  `businessName` varchar(50) DEFAULT NULL,
  `socialAddress` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (6,'Hola quiero trabajar en la empresa','rrhh','Emanuel','Arroyo',0,'ema201217@gmail.com',1156412335,'1633887016554_img_CV-EmaA-Developer.pdf_.pdf','','','',0,'','');
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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (47,58,2),(48,59,3),(49,60,4),(50,61,3),(51,62,5),(52,63,3),(53,64,3),(54,65,6),(55,66,6),(56,67,5),(57,68,1),(58,69,2),(59,70,2),(60,71,3),(61,72,1),(62,73,7),(63,74,5),(64,75,1),(65,76,6),(66,77,3),(67,78,8),(68,79,3),(69,80,3),(70,81,1),(71,82,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_size`
--

LOCK TABLES `product_size` WRITE;
/*!40000 ALTER TABLE `product_size` DISABLE KEYS */;
INSERT INTO `product_size` VALUES (46,3,58),(47,2,59),(48,4,60),(49,1,61),(50,4,62),(51,1,63),(52,4,64),(53,2,65),(54,3,66),(55,4,67),(56,3,68),(57,1,69),(58,2,70),(59,3,71),(60,3,72),(61,4,73),(62,3,74),(63,4,75),(64,1,76),(65,3,77),(66,3,78),(67,2,79),(68,4,80),(69,1,81),(70,4,82);
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
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (58,'Get a Life','Remeron de algodón estampado',1200,11,3,3,0),(59,'Hogwarts','Remera edición Harry Potter con diseño estampado',1000,12,2,3,0),(60,'Harry Potter','Remera edición Harry Potter con diseño estampado',1000,13,2,3,0),(61,'Looney Tunes','Remeron de algodón estampado',1200,14,3,2,15),(62,'Merida','Remeron con diseño Disney princesas estampado',1200,15,3,2,20),(63,'Mickey','Remeron con diseño Disney estampado',1200,6,3,3,0),(64,'Mickey','Maxibuzo con diseño Disney estampado',2600,7,5,4,15),(65,'Picapiedras','Remeron con diseño de dibujos estampado',1200,8,3,2,0),(66,'Power Girls','Remeron con diseño de dibujos estampado',1200,9,3,3,0),(67,'Princess','Buzo con diseño de Disney princesa',2400,10,1,1,15),(68,'Be kind','Remera de algodón estampado',1000,21,2,2,0),(69,'Simpsons','Remeron de algodón estampado',1200,12,3,3,0),(70,'Smile','Remera con diseño estampado',1000,15,2,2,0),(71,'Smile','Remera con diseño estampado',1000,12,2,2,0),(72,'Snakes','Remeron de algodón con diseño estampado',1200,25,3,2,0),(73,'Stitch','Remera de algodón con diseño de Stitch estampado',1000,7,2,3,0),(74,'Stitch','Remeron de algodón con diseño de stitch estampado',1200,12,3,3,0),(75,'Stitch','Remeron de algodón con diseño de stitch estampado',1500,9,3,3,0),(76,'Tigger','Remeron de algodón estampado',1320,11,3,2,0),(77,'Tricolor','Conjunto de buzo y babucha frizado',4500,9,4,1,25),(78,'University','Buzo frizado con diseño universitario',2400,4,1,4,15),(79,'University','Buzo frizado con diseño universitario',2400,6,1,1,15),(80,'Vogue','Maxibuzo frizado con diseño estampado',2600,6,5,1,15),(81,'Wilds','Remera de algodón con detalle en las vistas',1000,7,2,2,0),(82,'Wonderland','Remeron de algodón con diseño de dibujos estampado',1200,8,3,3,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seasons`
--

LOCK TABLES `seasons` WRITE;
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` VALUES (1,'winter'),(2,'summer'),(3,'spring'),(4,'autumn');
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_cart`
--

DROP TABLE IF EXISTS `shopping_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shopping_cart_FK` (`userId`),
  KEY `shopping_cart_FK_1` (`productId`),
  CONSTRAINT `shopping_cart_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `shopping_cart_FK_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_cart`
--

LOCK TABLES `shopping_cart` WRITE;
/*!40000 ALTER TABLE `shopping_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_cart` ENABLE KEYS */;
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
  ` avatarId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `locationId` (`locationId`),
  KEY ` avatarId` (` avatarId`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (` avatarId`) REFERENCES `avatars` (`id`),
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`rolId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2021-10-12 23:14:08
