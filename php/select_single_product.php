<?php
  require 'db_connection.php';

  try {
    // $servername = "localhost";
    // $username = "root";
    // $password = "@DMin123";

    $connection = new PDO("mysql:host=$servername;dbname=temvaga_db" . ';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $selection_query = $connection->prepare("SELECT * FROM imoveis WHERE codigo = :code;");
    $selection_query->bindParam(':code', $_GET['code']);
    $selection_query->execute();

    $selection_query->setFetchMode(PDO::FETCH_ASSOC);

    $row = $selection_query->fetch();
    $imovel->codigo = $row['codigo'];
    $imovel->cidade = $row['cidade'];
    $imovel->preco = $row['preco'];
    $imovel->categoria = $row['categoria'];
    $imovel->imagem = $row['imagem'];
    $imovel->descricao = $row['descricao'];

  } catch(PDOException $error) {
  echo "<h1>A conexão falhou: </h1>" . $error->getMessage();
  }

  $json_response = json_encode($imovel);
  echo $json_response;

  error_reporting(E_ALL);
  $connection = null;
?>