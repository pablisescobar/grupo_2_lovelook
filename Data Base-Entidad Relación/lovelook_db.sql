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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'gris'),(2,'blanco'),(3,'negro'),(4,'naranja'),(5,'lila'),(6,'rosa'),(7,'celeste'),(8,'marron'),(9,'natural'),(10,'verde'),(11,'violeta');
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
) ENGINE=InnoDB AUTO_INCREMENT=438 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (186,'1634008479488_img_merida.jpg_.jpg',62),(195,'1634009554779_img_smile2.jpg_.jpg',71),(197,'1634009680926_img_stitch.jpg_.jpg',73),(200,'1634009879529_img_tigger.jpg_.jpg',76),(201,'1634009950386_img_tricolor2.jpg_.jpg',77),(205,'1634010427361_img_wild.jpg_.jpg',81),(209,'1634091073674_img_getALife.jpg_.jpg',58),(210,'1634091179974_img_wonderland.jpg_.jpg',82),(211,'1634180349613_img_flower.jpg_.jpg',84),(212,'1634180677217_img_harryPotter.jpg_.jpg',85),(219,'1634181345069_img_jean.jpg_.jpg',92),(221,'1634181636179_img_jean9.jpg_.jpg',94),(223,'1634182041340_img_jean4.jpg_.jpg',96),(224,'1634182124096_img_jean6.jpg_.jpg',97),(225,'1634182228282_img_stitch.jpg_.jpg',98),(226,'1634182330034_img_powerGirls.jpg_.jpg',99),(227,'1634182562691_img_harryPotter.jpg_.jpg',100),(228,'1634182684295_img_mickey.jpg_.jpg',101),(245,'1634184682076_img_babuchaCloe.jpg_.jpg',116),(246,'1634184746031_img_babucha.jpg_.jpg',117),(247,'1634184880150_img_babucha3.jpg_.jpg',118),(250,'1634185148950_img_kitty.jpg_.jpg',121),(271,'1638329242875_img_1638245161420_img_mickey.jpg_.jpg_.jpg',64),(272,'1638329242878_img_1638245161420_img_mickey2.jpg_.jpg_.jpg',64),(273,'1638329242880_img_1638245161421_img_mickey3.jpg_.jpg_.jpg',64),(274,'1638329242882_img_1638245161422_img_mickey4.jpg_.jpg_.jpg',64),(275,'1638329283144_img_1638245212907_img_powerGirls.jpg_.jpg_.jpg',66),(276,'1638329319066_img_1638245928084_img_princess.jpg_.jpg_.jpg',67),(277,'1638329319069_img_1638245928086_img_princess2.jpg_.jpg_.jpg',67),(278,'1638329319075_img_1638245928088_img_princess3.jpg_.jpg_.jpg',67),(279,'1638329319076_img_1638245928089_img_princess4.jpg_.jpg_.jpg',67),(280,'1638329358009_img_1638247362169_img_life.jpg_.jpg_.jpg',68),(281,'1638329358014_img_1638247362173_img_lime.jpg_.jpg_.jpg',68),(282,'1638329358021_img_1638247362174_img_remeraBeKind.jpg_.jpg_.jpg',68),(283,'1638329376773_img_1638245235979_img_simpsons.jpg_.jpg_.jpg',69),(284,'1638329376776_img_1638245235982_img_simpsons2.jpg_.jpg_.jpg',69),(285,'1638329411169_img_1638247399390_img_slime.jpg_.jpg_.jpg',70),(286,'1638329411171_img_1638247399390_img_smile2.jpg_.jpg_.jpg',70),(287,'1638329443422_img_1638245955579_img_university8.jpg_.jpg_.jpg',78),(288,'1638329443423_img_1638245955580_img_university9.jpg_.jpg_.jpg',78),(289,'1638329468446_img_1638246059345_img_university4.jpg_.jpg_.jpg',79),(290,'1638329468450_img_1638246059348_img_university5.jpg_.jpg_.jpg',79),(291,'1638329468455_img_1638246059350_img_university6.jpg_.jpg_.jpg',79),(292,'1638329542212_img_1638246148166_img_vogue.jpg_.jpg_.jpg',80),(293,'1638329542218_img_1638246148168_img_vogue2.jpg_.jpg_.jpg',80),(294,'1638329587402_img_1638246000549_img_line.jpg_.jpg_.jpg',86),(295,'1638329587405_img_1638246000552_img_line2.jpg_.jpg_.jpg',86),(296,'1638329627556_img_1638318465022_img_mickey.jpg_.jpg_.jpg',103),(297,'1638329648525_img_1638245354290_img_kitty.jpg_.jpg_.jpg',102),(298,'1638329648526_img_1638245354291_img_kitty2.jpg_.jpg_.jpg',102),(299,'1638329648527_img_1638245354291_img_kitty3.jpg_.jpg_.jpg',102),(300,'1638329680031_img_1638245463669_img_playboy.jpg_.jpg_.jpg',122),(301,'1638329680032_img_1638245463670_img_playboy2.jpg_.jpg_.jpg',122),(302,'1638329680034_img_1638245463671_img_playboy3.jpg_.jpg_.jpg',122),(303,'1638329680036_img_1638245463671_img_playboy4.jpg_.jpg_.jpg',122),(304,'1638329726969_img_1638245490231_img_prada.jpg_.jpg_.jpg',123),(305,'1638329726970_img_1638245490232_img_prada2.jpg_.jpg_.jpg',123),(306,'1638329726971_img_1638245490233_img_prada3.jpg_.jpg_.jpg',123),(307,'1638329803107_img_1638246111823_img_university11.jpg_.jpg_.jpg',124),(308,'1638329803107_img_1638246111827_img_university13.jpg_.jpg_.jpg',124),(309,'1638329835407_img_1638245402163_img_selene.jpg_.jpg_.jpg',104),(310,'1638329835408_img_1638245402164_img_selene2.jpg_.jpg_.jpg',104),(311,'1638329835409_img_1638245402165_img_selene3.jpg_.jpg_.jpg',104),(312,'1638329871066_img_1638245330559_img_butterfly.jpg_.jpg_.jpg',119),(313,'1638329871068_img_1638245330560_img_butterfly2.jpg_.jpg_.jpg',119),(314,'1638329910340_img_1638246217572_img_mom2.jpg_.jpg_.jpg',105),(315,'1638329910341_img_1638246217573_img_mom7.jpg_.jpg_.jpg',105),(316,'1638329910342_img_1638246217573_img_mom8.jpg_.jpg_.jpg',105),(317,'1638329910344_img_1638246217574_img_mom9.jpg_.jpg_.jpg',105),(318,'1638329933484_img_1638245439676_img_changes.jpg_.jpg_.jpg',106),(319,'1638329933485_img_1638245439677_img_changes2.jpg_.jpg_.jpg',106),(320,'1638329964828_img_1638245766807_img_powerGirls.jpg_.jpg_.jpg',107),(321,'1638329964829_img_1638245766808_img_powerGirls2.jpg_.jpg_.jpg',107),(322,'1638329964830_img_1638245766808_img_powerGirls5.jpg_.jpg_.jpg',107),(323,'1638329964831_img_1638245766808_img_powerGirls6.jpg_.jpg_.jpg',107),(324,'1638330045663_img_1638246247969_img_hunna.jpg_.jpg_.jpg',108),(325,'1638330045664_img_1638246247970_img_hunna2.jpg_.jpg_.jpg',108),(326,'1638330045666_img_1638246247971_img_hunna3.jpg_.jpg_.jpg',108),(327,'1638330092592_img_1638245889995_img_stitch.jpg_.jpg_.jpg',109),(328,'1638330092593_img_1638245889995_img_stitch2.jpg_.jpg_.jpg',109),(329,'1638330125758_img_1638245813436_img_butterflies.jpg_.jpg_.jpg',110),(330,'1638330125759_img_1638245813436_img_butterflies3.jpg_.jpg_.jpg',110),(331,'1638330150218_img_1638245686927_img_angels.jpg_.jpg_.jpg',112),(332,'1638330150219_img_1638245686928_img_angels2.jpg_.jpg_.jpg',112),(333,'1638330150224_img_1638245686928_img_angels3.jpg_.jpg_.jpg',112),(334,'1638330180291_img_1638245795107_img_doNot.jpg_.jpg_.jpg',111),(335,'1638330180294_img_1638245795112_img_doNot2.jpg_.jpg_.jpg',111),(336,'1638330180296_img_1638245795114_img_doNot3.jpg_.jpg_.jpg',111),(337,'1638330202469_img_1638245613331_img_smiles.jpg_.jpg_.jpg',113),(338,'1638330202470_img_1638245613331_img_smiles3.jpg_.jpg_.jpg',113),(339,'1638330243903_img_1638245649063_img_flower.jpg_.jpg_.jpg',114),(340,'1638330243904_img_1638245649064_img_flower2.jpg_.jpg_.jpg',114),(341,'1638330243904_img_1638245649065_img_flower3.jpg_.jpg_.jpg',114),(342,'1638330243905_img_1638245649067_img_flower4.jpg_.jpg_.jpg',114),(343,'1638330301097_img_1638245553880_img_snakes.jpg_.jpg_.jpg',115),(344,'1638330301097_img_1638245553880_img_snakes3.jpg_.jpg_.jpg',115),(345,'1638330301099_img_1638245553881_img_snakes4.jpg_.jpg_.jpg',115),(346,'1638330301100_img_1638245553881_img_snakes5.jpg_.jpg_.jpg',115),(347,'1638330325785_img_1638245439676_img_changes.jpg_.jpg_.jpg',120),(348,'1638330325786_img_1638245439677_img_changes2.jpg_.jpg_.jpg',120),(349,'1638330378837_img_1638245268197_img_snakes.jpg_.jpg_.jpg',72),(350,'1638330378838_img_1638245268199_img_snakes2.jpg_.jpg_.jpg',72),(351,'1638330417154_img_1638240353568_img_r.jpg_.jpg_.jpg',129),(352,'1638330464300_img_1638240664025_img_bor.jpg_.jpg_.jpg',131),(353,'1638330464302_img_1638240664031_img_bor2.jpg_.jpg_.jpg',131),(354,'1638330464305_img_1638240664033_img_bor3.jpg_.jpg_.jpg',131),(355,'1638330513656_img_1638240837379_img_moc7.jpg_.jpg_.jpg',133),(356,'1638330513657_img_1638240837380_img_moc8.jpg_.jpg_.jpg',133),(357,'1638330513658_img_1638240837381_img_moc4.jpg_.jpg_.jpg',133),(358,'1638330513660_img_1638240837383_img_moc6.jpg_.jpg_.jpg',133),(359,'1638330530191_img_1638240974898_img_ter.jpg_.jpg_.jpg',134),(360,'1638330530194_img_1638240974900_img_ter3.jpg_.jpg_.jpg',134),(361,'1638330530197_img_1638240974903_img_ter4.jpg_.jpg_.jpg',134),(362,'1638330530199_img_1638240974906_img_ter5.jpg_.jpg_.jpg',134),(363,'1638330563880_img_1638241163408_img_tac.jpg_.jpg_.jpg',135),(364,'1638330563881_img_1638241163410_img_tac2.jpg_.jpg_.jpg',135),(365,'1638330563884_img_1638241163414_img_tac3.jpg_.jpg_.jpg',135),(366,'1638330563886_img_1638241163415_img_tac5.jpg_.jpg_.jpg',135),(367,'1638330580528_img_1638241335090_img_heb.jpg_.jpg_.jpg',136),(368,'1638330580529_img_1638241335091_img_heb2.jpg_.jpg_.jpg',136),(369,'1638330580531_img_1638241335093_img_heb3.jpg_.jpg_.jpg',136),(370,'1638330603952_img_1638241953035_img_cin.jpg_.jpg_.jpg',137),(371,'1638330603955_img_1638241953036_img_cin2.jpg_.jpg_.jpg',137),(372,'1638330603957_img_1638241953038_img_cin3.jpg_.jpg_.jpg',137),(373,'1638330603959_img_1638241953039_img_cin5.jpg_.jpg_.jpg',137),(374,'1638330621930_img_1638242454829_img_tor.jpg_.jpg_.jpg',139),(375,'1638330621934_img_1638242454832_img_tor2.jpg_.jpg_.jpg',139),(376,'1638330621938_img_1638242454837_img_tor3.jpg_.jpg_.jpg',139),(377,'1638330621941_img_1638242454840_img_tor4.jpg_.jpg_.jpg',139),(378,'1638330639571_img_1638242298260_img_tor5.jpg_.jpg_.jpg',138),(379,'1638330639575_img_1638242298266_img_tor6.jpg_.jpg_.jpg',138),(380,'1638330639577_img_1638242298270_img_tor7.jpg_.jpg_.jpg',138),(381,'1638330639581_img_1638242298273_img_tor8.jpg_.jpg_.jpg',138),(382,'1638330677262_img_1638242676866_img_star.jpg_.jpg_.jpg',141),(383,'1638330677267_img_1638242676869_img_star2.jpg_.jpg_.jpg',141),(384,'1638330698192_img_1638242767535_img_pel.jpg_.jpg_.jpg',142),(385,'1638330698194_img_1638242767539_img_pel2.jpg_.jpg_.jpg',142),(386,'1638330724839_img_1638242899059_img_gli.jpg_.jpg_.jpg',143),(387,'1638330724843_img_1638242899063_img_gli3.jpg_.jpg_.jpg',143),(388,'1638330724846_img_1638242899067_img_gli4.jpg_.jpg_.jpg',143),(389,'1638330724851_img_1638242899070_img_gli6.jpg_.jpg_.jpg',143),(390,'1638330749012_img_1638242767532_img_len.jpg_.jpg_.jpg',144),(391,'1638330749017_img_1638243137292_img_bri.jpg_.jpg_.jpg',144),(392,'1638330788619_img_1638243774706_img_ser.jpg_.jpg_.jpg',146),(393,'1638330788621_img_1638243774709_img_ser2.jpg_.jpg_.jpg',146),(394,'1638330788626_img_1638243774712_img_ser3.jpg_.jpg_.jpg',146),(395,'1638330805350_img_1638243888004_img_pri.jpg_.jpg_.jpg',147),(396,'1638330805350_img_1638243888005_img_pri2.jpg_.jpg_.jpg',147),(397,'1638330805353_img_1638243888007_img_pri3.jpg_.jpg_.jpg',147),(398,'1638330829440_img_1638244063235_img_fle.jpg_.jpg_.jpg',148),(399,'1638330829442_img_1638244063238_img_fle2.jpg_.jpg_.jpg',148),(400,'1638330866665_img_1638244212524_img_mor.jpg_.jpg_.jpg',149),(401,'1638330866666_img_1638244212525_img_mor2.jpg_.jpg_.jpg',149),(402,'1638330866667_img_1638244212527_img_mor3.jpg_.jpg_.jpg',149),(403,'1638330866669_img_1638244212529_img_myc2.jpg_.jpg_.jpg',149),(404,'1638330889094_img_1638244308781_img_cor.jpg_.jpg_.jpg',150),(405,'1638330889096_img_1638244308781_img_cor2.jpg_.jpg_.jpg',150),(406,'1638330889099_img_1638244308783_img_cor3.jpg_.jpg_.jpg',150),(407,'1638330889100_img_1638244308784_img_cor4.jpg_.jpg_.jpg',150),(408,'1638330935117_img_1638317348273_img_jean2.jpg_.jpg_.jpg',164),(409,'1638330935118_img_1638317348275_img_jean7.jpg_.jpg_.jpg',164),(410,'1638330935119_img_1638317348277_img_jean8.jpg_.jpg_.jpg',164),(411,'1638330960186_img_1638247176553_img_university7.jpg_.jpg_.jpg',163),(412,'1638330960189_img_1638247176555_img_university9.jpg_.jpg_.jpg',163),(413,'1638330960190_img_1638247176556_img_university10.jpg_.jpg_.jpg',163),(414,'1638330960192_img_1638247176557_img_university12.jpg_.jpg_.jpg',163),(415,'1638330985896_img_1638247018556_img_stitch2.jpg_.jpg_.jpg',162),(416,'1638330985897_img_1638247018557_img_stitch3.jpg_.jpg_.jpg',162),(417,'1638330985898_img_1638247018557_img_Stitch4.jpg_.jpg_.jpg',162),(418,'1638330985900_img_1638247018559_img_stitch6.jpg_.jpg_.jpg',162),(419,'1638331008502_img_1638246687848_img_bobSponja.jpg_.jpg_.jpg',158),(420,'1638331029312_img_1638246790405_img_burbuja.jpg_.jpg_.jpg',159),(421,'1638331061631_img_1638246522062_img_harryPotter.jpg_.jpg_.jpg',157),(422,'1638331061631_img_1638246522063_img_hogwarts.jpg_.jpg_.jpg',157),(423,'1638331061632_img_1638246522063_img_hogwarts2.jpg_.jpg_.jpg',157),(424,'1638331124559_img_1638245023687_img_port.jpg_.jpg_.jpg',155),(425,'1638331124559_img_1638245023689_img_port2.jpg_.jpg_.jpg',155),(426,'1638331124562_img_1638245023690_img_port3.jpg_.jpg_.jpg',155),(427,'1638331148104_img_1638244878902_img_fyc.jpg_.jpg_.jpg',154),(428,'1638331148105_img_1638244878902_img_fyc2.jpg_.jpg_.jpg',154),(429,'1638331148108_img_1638244878904_img_fyc3.jpg_.jpg_.jpg',154),(430,'1638331148110_img_1638244878906_img_fyc4.jpg_.jpg_.jpg',154),(431,'1638331168597_img_1638245101212_img_mb.jpg_.jpg_.jpg',156),(432,'1638331168597_img_1638245101213_img_mb2.jpg_.jpg_.jpg',156),(433,'1638331188318_img_1638244712711_img_car3.jpg_.jpg_.jpg',153),(434,'1638331188319_img_1638244712712_img_car4.jpg_.jpg_.jpg',153),(435,'1638331217349_img_1638246942985_img_harryPotter.jpg_.jpg_.jpg',161),(436,'1638331217350_img_1638246942986_img_harryPotter2.jpg_.jpg_.jpg',161),(437,'1638331217355_img_1638246942990_img_harryPotter3.jpg_.jpg_.jpg',161);
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
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `locations_FK` (`userId`),
  CONSTRAINT `locations_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,NULL,NULL,NULL,NULL,5),(2,'Buenos Aires','San Miguel',1663,'letonia 279',33),(104,NULL,NULL,NULL,NULL,106),(105,NULL,NULL,NULL,NULL,107),(106,NULL,NULL,NULL,NULL,108),(107,NULL,NULL,NULL,NULL,109),(108,'buenos aires','san miguel',987,'calle987',110);
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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (25,'Hola como estas','','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1635972691683_img_CV-EmaA-Developer.pdf_.pdf',NULL,NULL,NULL,NULL,NULL,NULL),(26,'JSDAGDHGKASJHDJKLASHDLKJHSDJKASHD','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1635973083286_img_CV-EmaA-Developer.pdf_.pdf',NULL,NULL,NULL,NULL,NULL,NULL),(44,'ghkkghjfgjhf','Consultas generales','Emanuel','Arroyo',NULL,'ema201217@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,'ghfhgjfghj','Atención al cliente','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,'jdhgfhg','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636127742569_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(47,'dasdasdasdas','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636128569795_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(48,'asdasdas','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636128595096_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(49,'asdasdasdas','RRHH','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,'1636166546190_img_CV-EmaA-Developerdasdsadasdasijkdhasjidbhiasbdasibdaspibdpjioasbdpiasbdiasbpidbasd',NULL,NULL,NULL,NULL,NULL,NULL),(50,'asdasdasd','Franquicia','dsdasdas','asdasdas',11111111,'ema201217@gmail.com',1156412335,NULL,'25 de Mayo','Letonia 279','Buenos Aires',20,'dasdasd aasdas','Carlos Tejedor'),(51,'asdasdasdasdsadas','Franquicia','asdsadas','asdasdas',36940637,'ema201217@gmail.com',1156412335,NULL,'Calingasta','Letonia 279','San Juan',20,'ASDASSD','25 de Mayo'),(52,'ADSDLKSADJASLKDSAFAS','Consultas generales','eMANUEL','ARROYO',NULL,'EMA2012@GMAIL.COM',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,'asdadasdasdsad','Atención al cliente','Emanuel','Arroyo',NULL,'ema201217@gmail.com',1156412335,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(54,'dasdasdasdas','Atención al cliente','Emanuel','Arroyo',NULL,'ema@gmail.com',1156412335,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (47,58,10),(53,64,9),(55,66,6),(56,67,5),(57,68,1),(58,69,2),(59,70,3),(61,72,1),(66,77,3),(67,78,8),(68,79,3),(69,80,9),(70,81,1),(71,82,2),(73,84,3),(74,85,9),(75,86,8),(81,92,7),(83,94,3),(85,96,3),(86,97,7),(87,98,7),(88,99,6),(89,100,9),(90,101,3),(91,102,6),(92,103,1),(93,104,3),(94,105,8),(95,106,1),(96,107,6),(97,108,4),(98,109,6),(99,110,5),(100,111,1),(101,112,3),(102,113,2),(103,114,9),(104,115,6),(105,116,3),(107,118,9),(108,119,1),(109,120,10),(110,121,1),(111,122,2),(112,123,9),(113,124,2),(118,129,5),(120,131,3),(122,133,1),(123,134,3),(124,135,3),(125,136,8),(126,137,8),(127,138,6),(128,139,6),(130,141,1),(131,142,6),(132,143,1),(133,144,2),(134,145,6),(135,146,8),(136,147,8),(137,148,8),(138,149,3),(139,150,3),(140,151,3),(141,152,6),(142,153,9),(143,154,9),(144,155,9),(145,156,6),(146,157,8),(147,158,3),(148,159,10),(150,161,9),(151,162,2),(152,163,10),(153,164,7);
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
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_size`
--

LOCK TABLES `product_size` WRITE;
/*!40000 ALTER TABLE `product_size` DISABLE KEYS */;
INSERT INTO `product_size` VALUES (46,3,58),(52,4,64),(54,3,66),(55,4,67),(56,3,68),(57,1,69),(58,2,70),(60,3,72),(65,3,77),(66,3,78),(67,2,79),(68,4,80),(69,1,81),(70,4,82),(72,2,84),(73,3,85),(74,4,86),(75,2,92),(76,4,94),(78,1,96),(79,2,97),(80,5,98),(81,4,99),(82,3,100),(83,4,101),(84,5,102),(85,3,103),(86,2,104),(87,1,105),(88,3,106),(89,4,107),(90,5,108),(91,3,109),(92,2,110),(93,5,111),(94,2,112),(95,3,113),(96,3,114),(97,2,115),(98,4,116),(100,2,118),(101,4,119),(102,3,120),(103,2,121),(104,2,122),(105,1,123),(106,1,124),(111,1,129),(113,1,131),(115,1,133),(116,1,134),(117,1,135),(118,1,136),(119,1,137),(120,1,138),(121,1,139),(123,1,141),(124,1,142),(125,1,143),(126,1,144),(127,1,145),(128,1,146),(129,1,147),(130,1,148),(131,1,149),(132,1,150),(133,1,151),(134,1,152),(135,1,153),(136,1,154),(137,1,155),(138,1,156),(139,2,157),(140,4,158),(141,2,159),(143,5,161),(144,3,162),(145,4,163),(146,3,164);
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
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (58,'Get a Life','Remeron de algodón estampado',1200,11,3,3,0),(64,'Mickey','Maxibuzo con diseño Disney estampado',2600,7,5,4,15),(66,'Power Girls','Remerón con diseño de dibujos estampado',1200,9,3,3,0),(67,'Princess','Buzo con diseño de Disney princesa',2400,10,1,1,15),(68,'Be kind','Remera de algodón estampado',1000,21,2,2,0),(69,'Simpsons','Remeron de algodón estampado',1200,12,3,3,0),(70,'Smile','Remera con diseño estampado',1000,15,2,2,0),(72,'Snakes','Remerón de algodón con diseño estampado',1200,25,3,2,0),(77,'Tricolor','Conjunto de buzo y babucha frizado',4500,9,4,1,25),(78,'University','Buzo frizado con diseño universitario',2400,4,1,4,15),(79,'University','Buzo frizado con diseño universitario',2400,6,1,1,15),(80,'Vogue','Maxibuzo frizado con diseño estampado',2600,6,5,1,15),(81,'Wilds','Remera de algodón con detalle en las vistas',1000,7,2,2,0),(82,'Wonderland','Remeron de algodón con diseño de dibujos estampado',1200,8,3,3,0),(84,'Flower','Buzo frizado con diseño estampado',2400,15,1,1,15),(85,'Harry Potter','Buzo frizado edición exclusiva de Harry Potter',2400,21,1,1,15),(86,'Line II','Buzo de algodón rústico con combinaciones',2300,26,1,3,0),(92,'Jean Slouchy','Pantalón de jean con puño',1800,12,8,3,0),(94,'Jean Skinny','Pantalón de jean elastizado con roturas',2000,13,8,3,0),(96,'Rebels','Jardinero de jean',2200,9,8,4,15),(97,'wide II','Pantalón de jean amplio',2200,10,8,4,15),(98,'Stitch','Remera y short con diseño sublimado',2500,22,9,2,0),(99,'PowerPuff','Remera y short con diseño sublimado',2500,21,9,2,0),(100,'Harry Potter','Remera manga larga y pantalón babucha con diseño sublimado',2500,14,9,4,15),(101,'Mickey','Remera manga larga y pantalón babucha con diseño estampado',2500,13,9,4,15),(102,'Hello Kitty','Campera de algodón rústico con diseño estampado',2800,23,6,3,0),(103,'Mickey','Campera de algodón rústico con diseño estampado',2800,23,6,3,0),(104,'Selene','Campera básica de algodón rústico',2600,16,6,3,0),(105,'Mom II','Campera larga frizada, capucha con corderito',2800,12,6,1,15),(106,'Changes','Campera larga de algodón rústico',2800,12,6,3,0),(107,'Power Girls','Maxibuzo con diseño estampado',2600,13,5,3,0),(108,'Hunna','Maxibuzo con diseño bordado',2600,18,5,3,0),(109,'Stitch','Maxibuzo de algodón rústico con diseño sublimado',2600,16,5,3,0),(110,'Butterflies','Conjunto de buzo y babucha con diseños estampados',4500,9,4,1,25),(111,'Do Not','Conjunto de buzo y babucha con diseños',4500,7,4,1,25),(112,'Angels','Conjunto frizado de buzo y babucha con diseño estampado',4500,6,4,1,25),(113,'Smile','Conjunto frizado de buzo y babucha',4500,8,4,1,25),(114,'Flowers','Conjunto frizado de buzo y babucha',4500,9,4,1,25),(115,'Snakes','Conjunto frizado de buzo y babucha con diseño estampado',4500,12,4,1,25),(116,'Slipper','Babucha de algodón frizado',1800,11,7,1,15),(118,'Cloe II','Babucha de algodón rústico',1800,13,7,4,0),(119,'Butterfly','Remerón de algodón con diseño de mariposa',1200,13,3,2,0),(120,'Changes','Remerón de algodón con diseño',1200,15,3,2,0),(121,'Kitty','Remerón con diseño de Hello Kitty',1200,18,3,2,0),(122,'Playboy','Remeron con diseño estampado',1200,18,3,2,0),(123,'Prada','Remeron con diseño estampado',1200,19,3,2,0),(124,'University','Remeron con diseño exclusivo',1200,16,3,2,0),(129,'Riñonera','Riñonera con doble cierre varios colores',900,16,12,2,0),(131,'Palms','Mochila de cuero con diseño bordado',2500,22,12,2,0),(133,'windwalker','Mochila con manijas y correas',2500,21,12,3,0),(134,'Flowers','Mochila de peluche con correas desmontables',2400,25,12,2,0),(135,'Skinny','Cinto de cuero con tachas',1100,15,12,2,5),(136,'Stars','Cinto con hebillas diseñadas',800,20,12,2,0),(137,'skinny II','Cinto de cuero con hebilla labrada',900,14,12,3,5),(138,'Shiny Draped','Billetera tornasola con cierre',1200,15,12,2,0),(139,'Heart','Billetera tornasolada con diseño',1100,13,12,2,0),(141,'Shinny Star','Billetera con glitter y decoración de estrellas',1200,18,12,2,0),(142,'Heart Love','Billetera de peluche y lentejuelas',1100,18,12,2,0),(143,'Glitters','Billetera con glitters',1100,21,12,2,0),(144,'Shiny Studs II','Billetera con brillos y lentejuelas',1000,12,12,3,5),(145,'Zaphir','Cartera de colores con tachas',2800,21,12,2,0),(146,'Snake','Morral con correa de cadena',1400,14,12,3,10),(147,'Print','Morral con fleco y doble cierre',1400,18,12,3,10),(148,'Arrow','Morral de cuero con flecos',1600,26,12,2,0),(149,'Rebels','Morral de cuero con correa expandible y doble cierre',2100,22,12,2,0),(150,'Rebels II','Cartera de cuero con correa expandible',2800,18,12,2,0),(151,'Glamorous','Sobre con correa de cadena',2500,20,12,2,0),(152,'Glamorous II','Sobre con correa de cadena',2800,21,12,2,0),(153,'Satchel','Cartera amplia con cierres internos',2900,23,12,3,15),(154,'Structured','Cartera con diseño bordado',2900,27,12,4,10),(155,'Mulberry','Portafolio con manijas, correas y doble cierres',3200,15,12,3,0),(156,'Celine','Morral con detalles dorados',1600,15,12,2,0),(157,'Harry Potter','Remera edición Harry Potter',1300,16,2,2,0),(158,'Bob Esponja','Remerón de personajes',1300,12,3,3,0),(159,'Power Girls','Remerón de personajes',1300,10,3,3,0),(161,'Harry Potter','Remerón edición Harry Potter',1500,18,3,2,0),(162,'Stitch','Remerón de personajes',1500,19,3,2,0),(163,'University II','Remerón con diseños estampado',1300,16,3,3,0),(164,'Mom II','Jean estilo mom sin roturas',1500,12,8,3,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'USER'),(2,'ADMIN'),(3,'SUPERUSER');
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
  `password` varchar(60) DEFAULT NULL,
  `rolId` int(11) DEFAULT NULL,
  `avatar` varchar(150) DEFAULT NULL,
  `id_social` varchar(50) DEFAULT NULL,
  `social_provider` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`rolId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'mariela','paduani',NULL,'mariela@gmail.com','$2a$12$tD5e.5Jhp/WQWMgAH8njjeREM6PBt7F9w7jlZfk6Mc1VBcHCH5V.O',3,'default-image.png',NULL,NULL),(33,'Emanuel','Arroyo',1156412335,'ema@gmail.com','$2a$12$8X3Qg0yuTXq46wnZvKxVpuV1y4aEjDk4E0rONldveuQ/t954IrJrG',1,'default-image.png',NULL,NULL),(106,'Emanuel Arroyo','Emanuel Arroyo',NULL,'invitado@facebook.com',NULL,1,'default-image.png','4661626900549942','facebook'),(107,'Emanuel','Arroyo',NULL,'ema201217@gmail.com',NULL,1,'https://lh3.googleusercontent.com/a-/AOh14GiMMMmhX7NLOR6ZGbz159Y5I4dq5hzvY9PEmIKMuZY=s96-c','106550057593249282383','google'),(108,'vasquiefBby','arroyo',NULL,'vasquief46674150@gmail.com',NULL,1,'https://lh3.googleusercontent.com/a/AATXAJzKgGxPRI7JntskQZiCLmi8m6uAd71ckkynx-_f=s96-c','105035452051628456896','google'),(109,'mariela','paduani',NULL,'marielapaduani@gmail.com',NULL,1,'https://lh3.googleusercontent.com/a/AATXAJzvFFhqaZ1d4YBF67eBJqgH_9u4ievwpAKizEHV=s96-c','108647887783759760857','google'),(110,'marye','pad',0,'marye@gmail.com','$2a$12$Z8Pr75IPwFVX8pWlYRvqWec1WPZo59DWAdASydMw9wsNlajPJQp6a',2,'1638332409709_img_.jpg','0','local');
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

-- Dump completed on 2021-12-01  1:57:56
