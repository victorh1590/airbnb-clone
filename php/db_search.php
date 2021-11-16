<?php
  require 'db_connection.php';

  try {
    // $servername = "localhost";
    // $username = "root";
    // $password = "@DMin123";
    $index = 0;
    $categories = array('apartamento', 'casa', 'sobrado', 'kitnet', 'quarto');

    $connection = new PDO("mysql:host=$servername;dbname=temvaga_db" . ';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    //Verificando o tipo de pesquisa.
    //Pesquisa vazia?
    if ($_GET['search'] == '') {
      $selection_query = $connection->prepare("SELECT * FROM imoveis;");
  
      $selection_query->execute();
  
      $selection_query->setFetchMode(PDO::FETCH_ASSOC);
      if ($selection_query->rowCount() == 0) {
        $json_response = json_encode('');
        echo $json_response;
      } else {
        while ($row = $selection_query->fetch()) {
          $imoveis[$index]->codigo = $row['codigo'];
          $imoveis[$index]->cidade = $row['cidade'];
          $imoveis[$index]->preco = $row['preco'];
          $imoveis[$index]->categoria = $row['categoria'];
          $imoveis[$index]->imagem = $row['imagem'];
          $imoveis[$index]->descricao = $row['descricao'];

          $index += 1;
        }
        $json_response = json_encode($imoveis);
        echo $json_response;
      }
    }
    //É um número? (Código)
    else if (is_numeric($_GET['search'])) {
      $selection_query = $connection->prepare("SELECT * FROM imoveis WHERE codigo = :codigo;");
      $selection_query->bindParam(':codigo', $_GET['search']);
  
      $selection_query->execute();
  
      $selection_query->setFetchMode(PDO::FETCH_ASSOC);
      if ($selection_query->rowCount() == 0) {
        $json_response = json_encode('');
        echo $json_response;
      } else {
        while ($row = $selection_query->fetch()) {
          $imoveis[$index]->codigo = $row['codigo'];
          $imoveis[$index]->cidade = $row['cidade'];
          $imoveis[$index]->preco = $row['preco'];
          $imoveis[$index]->categoria = $row['categoria'];
          $imoveis[$index]->imagem = $row['imagem'];
          $imoveis[$index]->descricao = $row['descricao'];

          $index += 1;
        }
        $json_response = json_encode($imoveis);
        echo $json_response;
      }
    } 
    //É uma categoria?
    else if (in_array(strtolower($_GET['search']), $categories, TRUE)) {
      $selection_query = $connection->prepare("SELECT * FROM imoveis WHERE categoria = :categoria;");
      $selection_query->bindParam(':categoria', $_GET['search']);
  
      $selection_query->execute();
  
      $selection_query->setFetchMode(PDO::FETCH_ASSOC);
      if ($selection_query->rowCount() == 0) {
        $json_response = json_encode('');
        echo $json_response;
      } else {
        while ($row = $selection_query->fetch()) {
          $imoveis[$index]->codigo = $row['codigo'];
          $imoveis[$index]->cidade = $row['cidade'];
          $imoveis[$index]->preco = $row['preco'];
          $imoveis[$index]->categoria = $row['categoria'];
          $imoveis[$index]->imagem = $row['imagem'];
          $imoveis[$index]->descricao = $row['descricao'];

          $index += 1;
        }
        $json_response = json_encode($imoveis);
        echo $json_response;
      }
    }
    //É uma cidade?
    else {
      $search = strtolower($_GET['search']);
      $selection_query = $connection->prepare("SELECT * FROM imoveis WHERE cidade = :cidade;");
      $selection_query->bindParam(':cidade', $search);
  
      $selection_query->execute();
  
      $selection_query->setFetchMode(PDO::FETCH_ASSOC);
  
      if ($selection_query->rowCount() == 0) {
        $json_response = json_encode('');
        echo $json_response;
      } else {
        while ($row = $selection_query->fetch()) {
          $imoveis[$index]->codigo = $row['codigo'];
          $imoveis[$index]->cidade = $row['cidade'];
          $imoveis[$index]->preco = $row['preco'];
          $imoveis[$index]->categoria = $row['categoria'];
          $imoveis[$index]->imagem = $row['imagem'];
          $imoveis[$index]->descricao = $row['descricao'];

          $index += 1;
        }
        $json_response = json_encode($imoveis);
        echo $json_response;
      }
    }
  } catch(PDOException $error) {
    echo "<h1>A conexão falhou: </h1>" . $error->getMessage();
  }
  error_reporting(E_ALL);
  $connection = null;
  
?>