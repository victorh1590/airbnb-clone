<?php
require 'php/validate_code.php';

session_start();
if(isset($_SESSION['authenticate']))
{
  if ($_SERVER["REQUEST_METHOD"] == "GET" && $_GET['type'] == 'editar' && $_GET['code'] != "") {
    $id_adv = $_GET['code'];
    if (validateCode($id_adv)) {
      header("Location: /editar.php?code=" . strval($_GET['code']));
      exit();
    }
    else {
      $_SESSION['authenticate']=false;
      header("Location: /cadastro.php"); 
      exit();
    }
  } else {
    $_SESSION['authenticate']=false;
    header("Location: /cadastro.php"); 
    exit();
  }
} else {
  $_SESSION['authenticate']=false;
  header("Location: /cadastro.php"); 
  exit();
}
?>