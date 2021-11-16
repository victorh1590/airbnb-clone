<?php
  if(isset($_POST['submit_q'])) {
  try {
    require 'image_upload.php';
    require 'db_connection.php';

    // $servername = "localhost";
    // $username = "root";
    // $password = "@DMin123";
    $image_upload_validation = true;

    $connection = new PDO("mysql:host=$servername;dbname=temvaga_db" . ';charset=UTF8', $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "<h1>Conexão bem sucedida.</h1>";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      echo "<h1>" . var_dump($_POST) . var_dump($_FILES['product_photo']['name']) . "</h1>";

      $cidade = $_POST['city'];
      $preco = $_POST['price'];
      $categoria = $_POST['place_category'];
      $imagem = $_FILES['product_photo']['name'];
      $descricao = $_POST['product_description'];
      $codigo = $_POST['code'];
    }

    if(!$_FILES['product_photo']['name'] != "") {
      $update_query = $connection->prepare("UPDATE imoveis SET cidade = :cidade, preco = :preco, categoria = :categoria, descricao = :descricao WHERE codigo  = :codigo");
    } else {
      $update_query = $connection->prepare("UPDATE imoveis SET cidade = :cidade, preco = :preco, categoria = :categoria, imagem = :imagem, descricao = :descricao WHERE codigo  = :codigo");
      $update_query->bindParam(':imagem', $imagem);
    }
    $update_query->bindParam(':cidade', $cidade);
    $update_query->bindParam(':preco', $preco);
    $update_query->bindParam(':categoria', $categoria);
    $update_query->bindParam(':descricao', $descricao);
    $update_query->bindParam(':codigo', $codigo);
    
    $update_query->execute();
 
    if($_FILES['product_photo']['name'] != "") {
      
      $image_upload_validation = uploadImage($codigo);

      if (!$image_upload_validation) {
        $deletion_query = $connection->prepare("UPDATE imoveis SET imagem = '' WHERE codigo = :last_id;");
        $deletion_query->bindParam(':last_id', $codigo);
        $deletion_query->execute();

        echo "<h1>Erro. Algo deu errado.</h1>";
      } else {
        $img_name = $codigo . '.' . strtolower(pathinfo($_FILES['product_photo']['name'], PATHINFO_EXTENSION));

        $update_query = $connection->prepare("UPDATE imoveis SET imagem = :img_name WHERE codigo = :last_id;");
        $update_query->bindParam(':img_name', $img_name);
        $update_query->bindParam(':last_id', $codigo);
        $update_query->execute();

        echo "<h1>Registros atualizados com sucesso.</h1>";
        unset($_POST);
      }
    } else {
      echo "<h1>Registros atualizados com sucesso. A imagem não foi atualizada.</h1>";
      unset($_POST);
    }
  } catch(PDOException $error) {
    echo "<h1>A conexão falhou: </h1>" . $error->getMessage();
  }
  error_reporting(E_ALL);

  $connection = null;
  
  unset($_POST);
  header("Location: ../controlpanel.php");
  exit();

  } else {
    echo '<p>Não disponível.</p>';
    unset($_POST);
  }
?>
