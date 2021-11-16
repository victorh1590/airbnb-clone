<!-- Author: Victor H F (5962) - 2020 -->
<!DOCTYPE html>
<html lang="pt-br">
  <meta http-equiv='cache-control' content='no-cache'>
  <meta http-equiv='expires' content='0'>
  <meta http-equiv='pragma' content='no-cache'>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta title="Tem Vaga Aí?">
  <meta name="description" content="Home Page">
  <meta name="author" content="Victor H F (5962)">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
  <script src="https://kit.fontawesome.com/50216e6b20.js" crossorigin="Secure"></script>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
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
          <li class="menu_item"><a href="cadastro.php" class="active_menu"><div><i class="fas fa-plus-circle"></i></div>Cadastrar</a></li>
          <li class="menu_item"><a href="controlpanel.php"><div><i class="fas fa-list-alt"></i></div>Gerenciar</a></li>
          <li class="menu_item"><a href="about.html"><div><i class="fas fa-info-circle"></i></div>Sobre</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="main_container">
    <div class="main_container material_mid_red_bt"  style="max-width: 100%; margin: 0 auto;">
      <div class="column">
        <form class="form_content"
        enctype="multipart/form-data"
        style="margin-top: 30px; margin-left: auto; margin-right: auto;"
        action="php/db_insert.php"
        method="POST"
        >
          <span class="text_content_main_title">Cadastro de Reservas</span>
          <hr><br>
          <label for="city" id="city_label">Cidade* (Somente letras):</label><br>
          <input type="text" id="city" name="city" placeholder="São Paulo" required>
          <br><br>
          
          <label for="price" id="price_label">Preço* (Ex: 80.00):<br></label>R$ 
          <input type="number" id="price" placeholder="0.00" required name="price" min="0" max="10000" value="" step="0.01" title="price" pattern="^\d+(?:\.\d{1,2})?$" pattern="^\d*(\.\d{0,2})?$">
          <br><br>  

          <label for="place_category" id="place_category_label">Categoria de Imóvel*<br></label>
          <select name ="place_category" id="place_category" class="place_category" required>
            <option value="" hidden selected disabled>Escolha uma opção:</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
            <option value="Sobrado">Sobrado</option>
            <option value="Kitnet">Kitnet</option>
            <option value="Quarto">Quarto</option>
          </select> 
          <br><br>

          <label for="product_photo" id="product_photo_label">Selecione uma foto* (Somente jpeg, jpg e png):<br></label>
          <input type="file" id="product_photo" name="product_photo" required>
          <br><br>

          <label for="product_description" id="product_description_label">Descrição (Max. 500 caractéres)<br></label>
          <textarea 
            id="product_description"
            name="product_description" 
            class="textarea_form" 
            rows="5" columns="20" 
            placeholder="Digite aqui a descrição."
            maxlength="500"
          ></textarea>
          <br><br>

          <input type="hidden" value="submit_q" name="submit_q" id="submit_q"/>
          <a href='#'
          onclick='productRegistrationValidator(this);' 
          class="button_link indigo_bt" 
          id="cadastro_submit"
          style="margin-left: auto; margin-right: auto;"
          >
          SUBMIT
          </a>
        </form>
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
