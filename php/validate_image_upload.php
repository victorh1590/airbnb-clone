<?php
  define('MB', 1048576);

  function isImage() {
    $image = getimagesize($_FILES["product_photo"]["tmp_name"]);
    if($image !== false) {
      return true;
    } else {
      return false;
    }
  }

  function checkIfFileExists($new_file) {
    if (file_exists($new_file)) {
      echo "\nArquivo já existe.";
      return false;
    } else {
      return true;
    }
  }

  function checkFileSize() {
    if ($_FILES["product_photo"]["size"] > 10*MB) {
      echo "\nArquivo muito grande.";
      return false;
    } else {
      return true;
    }
  }

  function validateExtension($extension) {
    if($extension != "jpg" && $extension != "png" && $extension!= "jpeg") {
      echo "\nArquivo não é jpg, jpeg ou png.";
      return false;
    } else {
      return true;
    }
  }

  function validateFileUpload($new_file, $extension) {
    $valid = true;
    $valid = isImage();
    $valid = checkIfFileExists($new_file);
    $valid = checkFileSize();
    $valid = validateExtension($extension);
    return $valid;
  }
?>