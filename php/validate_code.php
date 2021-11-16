<?php
  function validateCode($code) {
    require 'db_connection.php';
    try {
      // $servername = "localhost";
      // $username = "root";
      // $password = "@DMin123";

      $connection = new PDO("mysql:host=$servername;dbname=temvaga_db" . ';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
      $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $selection_query = $connection->prepare("SELECT * FROM imoveis WHERE codigo = $code;");
      $selection_query->execute();

      $row_count = $selection_query->rowCount();
      if ($row_count >= 1) {
        return true;
      } else {
        return false;
      }
    } catch(PDOException $error) {
      echo "<h1>A conexão falhou: </h1>" . $error->getMessage();
    }
    error_reporting(E_ALL);
    $connection = null;
  }
?>