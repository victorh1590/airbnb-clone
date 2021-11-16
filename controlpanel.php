<?php session_start(); $_SESSION['authenticate']=true;?>

<!-- Author: Victor H F (5962) - 2020 -->
<!DOCTYPE html>
<html lang="pt-br">
  <meta http-equiv='cache-control' content='no-cache'>
  <meta http-equiv='expires' content='0'>
  <meta http-equiv='pragma' content='no-cache'>
  <meta charset="UTF-8">
  <meta title="Tem Vaga Aí?">
  <meta name="description" content="Painel de Controle">
  <meta name="author" content="Victor H F (5962)">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
  <script src="https://kit.fontawesome.com/50216e6b20.js" crossorigin="Secure"></script>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/panel_page.js"></script>
</head>
<body class="mid_black_bt" id="cadastro">
  <header>
    <div class="header_logo" id="visible_cont_1">
      <div class="logo" id="visible_element_1">
        Tem<span class="vaga">Vaga</span>Aí<span class="vaga">?</span>
      </div>
      <div class="palette_button_container">
       <button type='button' class="palette_button" id="palette_button" onclick="changePaletteButton();"><i class="fas fa-lightbulb"></i></button>
      </div>
      <div class="menu_button_container" >
        <button type="button" class="menu_button" id="visible_element_3"><i class="fas fa-times"></i></button>
      </div>
      <nav class="menu_container">
        <ul class="menu_side">
          <li class="menu_item"><div class="menu_logo">Menu</div></li>
          <li class="menu_item"><a href="index.html"><div><i class="fas fa-home"></i></div>Home</a></li>
          <li class="menu_item"><a href="products.html"><div><i class="fas fa-paper-plane"></i></div>Reserva</a></li>
          <li class="menu_item"><a href="cadastro.php"><div><i class="fas fa-plus-circle"></i></div>Cadastrar</a></li>
          <li class="menu_item"><a href="controlpanel.php" class="active_menu"><div><i class="fas fa-list-alt"></i></div>Gerenciar</a></li>
          <li class="menu_item"><a href="about.html"><div><i class="fas fa-info-circle"></i></div>Sobre</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="main_container">
    <div class="main_container panel_main_container" id='checkin_ext_container'>   
      <div class='text_content table_title indigo_bt'>
        <span class="text_content_main_title" style='line-height: 48px; text-align: center; margin: 0 auto;'>Painel de Controle </span><br>
      </div>
      <div class="table_content">
        <table id="table_entries">
          <tr class="table_first_row indigo_bt">
            <th>Código</th>
            <th>Cidade</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Imagem</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </table>
      </div>
    </div>
    <footer class="site_footer light_grey_bt">
      <div class="footer_elements">
        <ul class="footer_menu">
          <li><a href="index.html">HOME</a></li>
          <li><a href="products.html">RESERVA</a></li>
          <li><a href="controlpanel.php">PAINEL</a></li>
          <li><a href="about.html">SOBRE</a></li>
        </ul>
        <span class="footer_credits">TemVagaAí? (2020) - Victor Hugo Faria (5962) - Images by unsplash.com</span>
      </div>
    </footer>
  </div>
</body>
</html> 
