<?php
  function compareImageName($code) {
    try {
      $servername = "localhost";
      $username = "root";
      $password = "@DMin123";

      $connection = new PDO("mysql:host=$servername;dbname=temvaga_db" . ';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
      // set the PDO error mode to exception
      $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $selection_query = $connection->prepare("SELECT * FROM imoveis WHERE codigo = $code;");
      $selection_query->execute();

      $selection_query->setFetchMode(PDO::FETCH_ASSOC);
      $row = $selection_query->fetchAll();
      if ($row['codigo'] == strval($code)) {
        return true;
      } else {
        return false;
      }
    } catch(PDOException $error) {
      echo "<h1>Connection failed: </h1>" . $error->getMessage();
    }
    error_reporting(E_ALL);
    $connection = null;
  }
?>