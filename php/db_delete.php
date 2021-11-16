<?php
  require 'image_upload.php';
  require 'db_connection.php';
  try {
    // $servername = "localhost";
    // $username = "root";
    // $password = "@DMin123";

    $connection = new PDO("mysql:host=$servername;dbname=temvaga_db" . ';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $selection_query = $connection->prepare("SELECT * FROM imoveis WHERE codigo = :code;");
    $selection_query->bindParam(':code', $_POST['code']);
    $selection_query->execute();

    $selection_query->setFetchMode(PDO::FETCH_ASSOC);

    $row = $selection_query->fetch();

    $new_file = '..//images_product/' . $row['imagem'];
    $proto_file = '..//images_product/' . $_POST['code'] . '.';
    deleteOldImage($new_file, $proto_file);

    $deletion_query = $connection->prepare("DELETE FROM imoveis WHERE codigo = :code;");
    $deletion_query->bindParam(':code', $_POST['code']);
    $deletion_query->execute();

  } catch(PDOException $error) {
  echo "<h1>A conexão falhou: </h1>" . $error->getMessage();
  }

  error_reporting(E_ALL);
  $connection = null;
?>