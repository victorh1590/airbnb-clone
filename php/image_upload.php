<?php
  require 'validate_image_upload.php';

  function unlinkEverything($proto_file) {
    $extension_array = array('jpg', 'jpeg', 'png');
    $i = 0;

    for ($i = 0; $i < count($extension_array); $i++){
      $current_file = $proto_file . $extension_array[$i];

      $valid = checkIfFileExists($current_file);
      if(!$valid) {
        unlink($current_file);
        echo "<p>Unlinked: " . $current_file . "</p>";
        echo "<p>Unlinked: " . $proto_file . $extension_array[$i] . "</p>";
      }
    }
    return true;
  }

  function deleteOldImage($new_file, $proto_file) {
    $valid = checkIfFileExists($new_file);
    
    if (!$valid) {
      unlink($new_file);
      echo "<p>Unlinked: " . $new_file . "</p>";
      unlinkEverything($proto_file);
      return true;
    } else {
      unlinkEverything($proto_file);
      return false;
    }
  }

  function uploadImage($last_id) {    
    $valid = true;
    $extension = strtolower(pathinfo($_FILES['product_photo']['name'], PATHINFO_EXTENSION));
    $new_file = '..//images_product/' . $last_id . '.' . $extension;
    $proto_file = '..//images_product/' . $last_id . '.';

    var_dump($_FILES['product_photo']);
    var_dump($extension);
    
    deleteOldImage($new_file, $proto_file, $extension);
    $valid = validateFileUpload($new_file, $extension);

    if ($valid) {
      echo '<pre>';
      if (move_uploaded_file($_FILES['product_photo']['tmp_name'], $new_file)) {
        echo "Arquivo válido e enviado com sucesso.\n";
        $valid = true;
      } else {
        echo "Erro: Não foi possível mover o arquivo no servidor!\n";
        $valid = false;
      }
      echo '</pre>';
      return $valid;

    } else {
      echo "\nErro: Arquivo inválido.";
      return $valid;
    }
  }
?>