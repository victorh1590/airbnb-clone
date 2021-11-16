<?php
  require 'db_connection.php';

  try {
    // $servername = "localhost";
    // $username = "root";
    // $password = "@DMin123";
    $index = 0;

    $connection = new PDO("mysql:host=$servername;dbname=temvaga_db" . ';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $selection_query = $connection->prepare("SELECT * FROM imoveis;");
    $selection_query->execute();

    $selection_query->setFetchMode(PDO::FETCH_ASSOC);

    while ($row = $selection_query->fetch()) {
      $imoveis[$index]->codigo = $row['codigo'];
      $imoveis[$index]->cidade = $row['cidade'];
      $imoveis[$index]->preco = $row['preco'];
      $imoveis[$index]->categoria = $row['categoria'];
      $imoveis[$index]->imagem = $row['imagem'];
      $imoveis[$index]->descricao = $row['descricao'];

      $index += 1;
    }
  } catch(PDOException $error) {
    echo "<h1>A conexão falhou: </h1>" . $error->getMessage();
  }
  error_reporting(E_ALL);
  $connection = null;

  $json_response = json_encode($imoveis);
  echo $json_response;
?>