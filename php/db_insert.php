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
    }

    $insertion_query = $connection->prepare("INSERT INTO imoveis (cidade, preco, categoria, imagem, descricao) VALUES (:cidade, :preco, :categoria, :imagem, :descricao);");
    $insertion_query->bindParam(':cidade', $cidade);
    $insertion_query->bindParam(':preco', $preco);
    $insertion_query->bindParam(':categoria', $categoria);
    $insertion_query->bindParam(':imagem', $imagem);
    $insertion_query->bindParam(':descricao', $descricao);
    
    $insertion_query->execute();

    $last_id = $connection->lastInsertId();

    $image_upload_validation = uploadImage($last_id);

    echo "\nÚltimo código inserido: " . $last_id;

    if (!$image_upload_validation) {
      $deletion_query = $connection->prepare("DELETE FROM imoveis WHERE codigo = :last_id;");
      $deletion_query->bindParam(':last_id', $last_id);
      $deletion_query->execute();

      echo "<h1>Erro. Algo deu errado.</h1>";
    } else {
      $img_name = $last_id . '.' . strtolower(pathinfo($_FILES['product_photo']['name'], PATHINFO_EXTENSION));

      $update_query = $connection->prepare("UPDATE imoveis SET imagem = :img_name WHERE codigo = :last_id;");
      $update_query->bindParam(':img_name', $img_name);
      $update_query->bindParam(':last_id', $last_id);
      $update_query->execute();

      echo "<h1>Novos registros criados com sucesso.</h1>";
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
}
?>
