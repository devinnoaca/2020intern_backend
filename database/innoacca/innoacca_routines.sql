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
-- Temporary view structure for view `get_matching_mentor`
--

DROP TABLE IF EXISTS `get_matching_mentor`;
/*!50001 DROP VIEW IF EXISTS `get_matching_mentor`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_matching_mentor` AS SELECT 
 1 AS `USN`,
 1 AS `user_name`,
 1 AS `matching_ID`,
 1 AS `request_message`,
 1 AS `response_message`,
 1 AS `mentee_USN`,
 1 AS `matching_state`,
 1 AS `is_checked`,
 1 AS `matching_request_time`,
 1 AS `matching_response_time`,
 1 AS `matching_keyword_name`,
 1 AS `matching_category_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_recommend_keyword`
--

DROP TABLE IF EXISTS `get_recommend_keyword`;
/*!50001 DROP VIEW IF EXISTS `get_recommend_keyword`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_recommend_keyword` AS SELECT 
 1 AS `category_ID`,
 1 AS `category_name`,
 1 AS `keyword_ID`,
 1 AS `keyword_name`,
 1 AS `mentee_USN`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_all_keyword`
--

DROP TABLE IF EXISTS `get_all_keyword`;
/*!50001 DROP VIEW IF EXISTS `get_all_keyword`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_all_keyword` AS SELECT 
 1 AS `keyword_name`,
 1 AS `keyword_ID`,
 1 AS `category_ID`,
 1 AS `category_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_matching_mentee`
--

DROP TABLE IF EXISTS `get_matching_mentee`;
/*!50001 DROP VIEW IF EXISTS `get_matching_mentee`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_matching_mentee` AS SELECT 
 1 AS `USN`,
 1 AS `user_name`,
 1 AS `matching_ID`,
 1 AS `request_message`,
 1 AS `response_message`,
 1 AS `mentor_USN`,
 1 AS `matching_state`,
 1 AS `is_checked`,
 1 AS `matching_request_time`,
 1 AS `matching_response_time`,
 1 AS `matching_keyword_name`,
 1 AS `matching_category_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_mentor_list`
--

DROP TABLE IF EXISTS `get_mentor_list`;
/*!50001 DROP VIEW IF EXISTS `get_mentor_list`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_mentor_list` AS SELECT 
 1 AS `total`,
 1 AS `mentor_USN`,
 1 AS `name`,
 1 AS `email`,
 1 AS `image_url`,
 1 AS `description`,
 1 AS `company`,
 1 AS `keyword_ID`,
 1 AS `keyword_name`,
 1 AS `category_ID`,
 1 AS `category_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_notification`
--

DROP TABLE IF EXISTS `get_notification`;
/*!50001 DROP VIEW IF EXISTS `get_notification`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_notification` AS SELECT 
 1 AS `user_noti_ID`,
 1 AS `noti_ID`,
 1 AS `receiver_ID`,
 1 AS `sender_ID`,
 1 AS `message`,
 1 AS `is_checked`,
 1 AS `time`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_total_keyword`
--

DROP TABLE IF EXISTS `get_total_keyword`;
/*!50001 DROP VIEW IF EXISTS `get_total_keyword`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_total_keyword` AS SELECT 
 1 AS `category_name`,
 1 AS `keyword_name`,
 1 AS `keyword_ID`,
 1 AS `user_USN`,
 1 AS `category_ID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `get_user_notification`
--

DROP TABLE IF EXISTS `get_user_notification`;
/*!50001 DROP VIEW IF EXISTS `get_user_notification`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `get_user_notification` AS SELECT 
 1 AS `user_noti_ID`,
 1 AS `noti_ID`,
 1 AS `noti_message`,
 1 AS `noti_time`,
 1 AS `is_checked`,
 1 AS `matching_ID`,
 1 AS `matching_state`,
 1 AS `sender`,
 1 AS `receiver`,
 1 AS `sender_USN`,
 1 AS `receiver_USN`,
 1 AS `noti_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `get_matching_mentor`
--

/*!50001 DROP VIEW IF EXISTS `get_matching_mentor`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_matching_mentor` AS select `U`.`USN` AS `USN`,`U`.`name` AS `user_name`,`M`.`ID` AS `matching_ID`,`M`.`request_message` AS `request_message`,`M`.`response_message` AS `response_message`,`M`.`mentee_USN` AS `mentee_USN`,`M`.`state` AS `matching_state`,`M`.`is_checked` AS `is_checked`,`M`.`request_time` AS `matching_request_time`,`M`.`response_time` AS `matching_response_time`,`K`.`keyword_name` AS `matching_keyword_name`,`K`.`category_name` AS `matching_category_name` from ((`user` `U` join `matching` `M`) join `matching_keyword` `K`) where ((`U`.`USN` = `M`.`mentor_USN`) and (`M`.`ID` = `K`.`matching_ID`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_recommend_keyword`
--

/*!50001 DROP VIEW IF EXISTS `get_recommend_keyword`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_recommend_keyword` AS select `c`.`ID` AS `category_ID`,`c`.`name` AS `category_name`,`b`.`ID` AS `keyword_ID`,`b`.`name` AS `keyword_name`,`a`.`user_USN` AS `mentee_USN` from ((`recommend_keyword` `a` join `keyword` `b`) join `category` `c`) where ((`a`.`keyword_ID` = `b`.`ID`) and (`b`.`category_ID` = `c`.`ID`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_all_keyword`
--

/*!50001 DROP VIEW IF EXISTS `get_all_keyword`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_all_keyword` AS select `a`.`name` AS `keyword_name`,`a`.`ID` AS `keyword_ID`,`b`.`ID` AS `category_ID`,`b`.`name` AS `category_name` from (`keyword` `a` join `category` `b`) where (`a`.`category_ID` = `b`.`ID`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_matching_mentee`
--

/*!50001 DROP VIEW IF EXISTS `get_matching_mentee`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_matching_mentee` AS select `U`.`USN` AS `USN`,`U`.`name` AS `user_name`,`M`.`ID` AS `matching_ID`,`M`.`request_message` AS `request_message`,`M`.`response_message` AS `response_message`,`M`.`mentor_USN` AS `mentor_USN`,`M`.`state` AS `matching_state`,`M`.`is_checked` AS `is_checked`,`M`.`request_time` AS `matching_request_time`,`M`.`response_time` AS `matching_response_time`,`K`.`keyword_name` AS `matching_keyword_name`,`K`.`category_name` AS `matching_category_name` from ((`user` `U` join `matching` `M`) join `matching_keyword` `K`) where ((`U`.`USN` = `M`.`mentee_USN`) and (`M`.`ID` = `K`.`matching_ID`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_mentor_list`
--

/*!50001 DROP VIEW IF EXISTS `get_mentor_list`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_mentor_list` AS select distinct found_rows() AS `total`,`u`.`USN` AS `mentor_USN`,`u`.`name` AS `name`,`u`.`email` AS `email`,`u`.`image_url` AS `image_url`,`u`.`description` AS `description`,`u`.`company` AS `company`,`utk`.`keyword_ID` AS `keyword_ID`,`k`.`name` AS `keyword_name`,`cat`.`ID` AS `category_ID`,`cat`.`name` AS `category_name` from ((((`category` `cat` join `keyword` `k`) join `user_total_keyword` `utk`) join `user` `u`) join `career` `car`) where ((`cat`.`ID` = `k`.`category_ID`) and (`k`.`ID` = `utk`.`keyword_ID`) and (`utk`.`user_USN` = `u`.`USN`) and (`u`.`USN` = `car`.`user_USN`) and (`u`.`type` = 1)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_notification`
--

/*!50001 DROP VIEW IF EXISTS `get_notification`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_notification` AS select `un`.`ID` AS `user_noti_ID`,`n`.`ID` AS `noti_ID`,`ur`.`ID` AS `receiver_ID`,`u`.`ID` AS `sender_ID`,`n`.`message` AS `message`,`un`.`is_checked` AS `is_checked`,date_format(`un`.`time`,'%Y-%m-%d %T') AS `time` from (((`user_notification` `un` left join `user` `u` on((`un`.`sender_USN` = `u`.`USN`))) left join `user` `ur` on((`un`.`receiver_USN` = `ur`.`USN`))) join `notification` `n` on((`un`.`noti_ID` = `n`.`ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_total_keyword`
--

/*!50001 DROP VIEW IF EXISTS `get_total_keyword`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_total_keyword` AS select `c`.`name` AS `category_name`,`b`.`name` AS `keyword_name`,`b`.`ID` AS `keyword_ID`,`a`.`user_USN` AS `user_USN`,`c`.`ID` AS `category_ID` from ((`user_total_keyword` `a` join `keyword` `b`) join `category` `c`) where ((`a`.`keyword_ID` = `b`.`ID`) and (`b`.`category_ID` = `c`.`ID`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `get_user_notification`
--

/*!50001 DROP VIEW IF EXISTS `get_user_notification`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `get_user_notification` AS select `un`.`ID` AS `user_noti_ID`,`n`.`ID` AS `noti_ID`,`n`.`message` AS `noti_message`,`un`.`time` AS `noti_time`,`un`.`is_checked` AS `is_checked`,`m`.`ID` AS `matching_ID`,`m`.`state` AS `matching_state`,`u`.`name` AS `sender`,`ur`.`name` AS `receiver`,`u`.`USN` AS `sender_USN`,`ur`.`USN` AS `receiver_USN`,`ur`.`noti_count` AS `noti_count` from ((((`user_notification` `un` left join `user` `u` on((`un`.`sender_USN` = `u`.`USN`))) left join `user` `ur` on((`un`.`receiver_USN` = `ur`.`USN`))) left join `matching` `m` on((`m`.`ID` = `un`.`matching_ID`))) left join `notification` `n` on((`n`.`ID` = `un`.`noti_ID`))) where ((`un`.`noti_ID` is not null) or (`un`.`matching_ID` is not null)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-24 11:28:19
