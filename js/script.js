// Author: Victor H F (5962) - 2020
//Fecha aviso.
const hideWarning = function () {
  $(".warning").css("display", "none"); 
}

//Aciona animação do banner.
const bannerTrapezeAnimation = function() {
  $(".image_banner_trapeze").addClass("image_banner_trapeze_animation");
  $(".image_banner_text").addClass("image_banner_text_animation");
}

//Altera ícone do botão de abre/fecha do menu.
const buttonSwap = function (button_selector) {
  if (button_selector.attr("class") == 'fas fa-bars'){
    button_selector.attr("class", "fas fa-times");
    button_selector.parent().css("color","white");
    button_selector.parents(".menu_button_container").css("background-color", "#6d6d6d");
  } else {
    $(".main_container").css({ "opacity" : "1" })
    button_selector.attr("class", "fas fa-bars");
    button_selector.parent().css("color","black");
    button_selector.parents(".menu_button_container").css("background-color", "transparent");
  }
}

//Reativa botão após animação do menu.
const menuCallback = function(button_selector) {
  button_selector.css({"transform": "rotate(0deg)"}).
  attr("disabled", false);
  buttonSwap(button_selector.children("i"));
  return;
}

//Verifica se menu está ocupando espaço na tela. (Ativado)
const menuWidth = function(menu_selector) {
  if(menu_selector.width() == 0){ return 301; }
  else { return 0; }
}

//Animação do menu.
const menuFX = function(animation_duration) {
  let button_selector = $(".menu_button");
  let menu_selector = $(".menu_container");
  let animation_width;
  //Duração padrão caso a chamada seja menuFX() [Sem parâmetro]
  if (animation_duration == undefined) {animation_duration = 200;}
  //Animação de tela.
  $(".main_container").css({ "opacity" : "0.5" })
  //Desativa o botão até a conclusão do evento.
  button_selector.
    css({"transform": "rotate(180deg)"}).
    attr("disabled", true);
  animation_width = menuWidth(menu_selector);
  //Animação do contêiner do menu.
  menu_selector.animate({
    'padding-left': 'toggle',
    width: animation_width
  }, animation_duration,
  //Callback function: Reativa botão após conclusão.
  function(){
    menuCallback(button_selector);
  });
}

//Encontra último card_content
function lastCardContent() {
  let vd_indicator = document.querySelector(".vd_textbox");
  let last_row = document.querySelector(".card_column").lastElementChild;
  console.log(document.querySelector(".card_column").lastElementChild.innerHTML);
  let current_card = last_row.lastElementChild;
  let current_card_content = current_card.querySelector(".card_text").textContent;
  console.log(vd_indicator.innerHTML + " and " + current_card.innerHTML);
  positionalData(current_card, vd_indicator);
  // vd_indicator.textContent = current_card_content;
  return;
};

//Verifica coordenadas do elemento.
function positionalData(current_card, vd_indicator){
  var current_card_position = current_card.getBoundingClientRect();
  var result_string = '';
  for(var key in current_card_position){
    console.log("%s : %s", key, current_card_position[key]);
    result_string += key.toString() + " : " + current_card_position[key].toString() + "<br>";
  }
  console.log(window.innerHeight);
  console.log(window.scrollY);
  vd_indicator.innerHTML+= "<br>";
  cardIsVisible_test(current_card, vd_indicator);
  vd_indicator.innerHTML+= "<br>" + result_string;
  return;
}

//Verifica se o card está visível.
function cardIsVisible(current_card) {
  var viewport_height = window.innerHeight;
  var lastcard_position = current_card.getBoundingClientRect();
  // var viewport_y_start = window.scrollY;
  // var viewport_y_end = window.scrollY + viewport_height;
  // console.log(lastcard_position.top + " : " + viewport_y_start + " : " + viewport_y_end);
  if (lastcard_position.top > viewport_height) {
    return false;
  } else {
    return true;
  }
}

function onloadCardPositionCategorization() {
  var test_card = document.querySelector(".card_column > .card_row > .card_content");
  console.log(test_card.innerHTML);
  var all_cards = document.querySelectorAll(".card_content");

  for(let i = 0; i < all_cards.length; i++) {
    if(cardIsVisible(all_cards.item(i))){
      all_cards.item(i).classList.add("already_shown");
    }
  }
  add_scroll_event_listener();
}

function onscrollNewCardAppears() {
  var test_card = document.querySelector(".card_column > .card_row > .card_content");
  var all_cards = document.querySelectorAll(".card_content");

  for(let i = 0; i < all_cards.length; i++) {
    if(cardIsVisible(all_cards.item(i)) && !(all_cards.item(i).classList.contains("already_shown"))){
      all_cards.item(i).classList.add("come-in");
      all_cards.item(i).classList.add("already_shown"); 
    }
  }
  return;
}

function add_scroll_event_listener() {
  window.addEventListener("scroll", onscrollNewCardAppears);
}

/*Carousel Functions*/
//Este objeto será utilizados nas próximas etapas do projeto.
const photo_list = {
  size: 3,
  images: [
    "images/carousel/3.jpg",
    "images/carousel/2.jpg",
    "images/carousel/1.jpg"
  ]
}

//Encontra qual ponto (imagem) está ativa no momento.
const findActiveDot = function (dots) {
  for (let i = 0; i < dots.length; i++) {
    if (dots.item(i).classList.contains('active_dot')) {
      return i;
    }
  }
} 

//Reseta todos os pontos ativos.
const resetActiveDot = function (active_dot, dots) {
  dots.item(active_dot).classList.remove('active_dot');
  return;
}

//Ativa um novo ponto com a mudança de imagens.
const newActiveDot = function (active_dot, dots, action) {
  if (action === 0) {
    active_dot = active_dot - 1;
    dots.item(active_dot).classList.add('active_dot');
    return active_dot;
  } else if (action === 1) {
    active_dot = active_dot + 1;
    dots.item(active_dot).classList.add('active_dot');
    return active_dot;
  }
}

//Remove o atributo "disabled" de todos os botões (last e next).
const resetInactiveButtons = function (buttons) {
  for (let i = 0; i < buttons.length; i++) {
    if(buttons.item(i).hasAttribute('disabled')) {
      buttons.item(i).removeAttribute('disabled');
      // console.log(buttons.item(i));
      return;
    }
  }
}

//Desativa algum botão (adiciona tag disabled).
const deactivateButtons = function (active_dot) {
  if (active_dot === 2) {
    document.getElementById('carousel_next').setAttribute('disabled', true);
    return;
  } else if (active_dot === 0) {
    document.getElementById('carousel_last').setAttribute('disabled', true);
    return;
  } else {
    return;
  }
}

//Muda imagem do carrossel.
const changeImage = function (active_dot) {
  var carousel_frame = document.getElementsByClassName('carousel_frame').item(0);
  carousel_frame.style.backgroundImage = `url('${photo_list.images[active_dot]}')`;
  // console.log(photo_list.images[active_dot]);
  // console.log(carousel_frame);
  return;
}

/*
  Muda imagem, ponto ativo e botões quando Last ou Next são clickados.
  @param action:
    0 = Last ( < )
    1 = Next ( > )
*/
const clickCarousel = function (action) {
  var buttons = document.getElementsByClassName('carousel_button');
  var dots = document.getElementsByClassName('carousel_dot');
  var active_dot = findActiveDot(dots);
  resetActiveDot(active_dot, dots);
  active_dot = newActiveDot(active_dot, dots, action);
  resetInactiveButtons(buttons);
  deactivateButtons(active_dot);
  changeImage(active_dot);
  return;
}

/*Muda imagem do banner de 8 em 8 segundos*/
//Contador.
const imageBannerCounter = (function () {
  var counter = -1;
  function resetCounter() { 
    if (counter === (photo_list.size - 1)) {
      return -1;
    } else {
      return counter;
    }
  }
  function addCounter() {
    counter = counter + 1;
    return counter;
  }

  return function () {
    counter = resetCounter(); 
    counter = addCounter(); 
    return counter};
})();

//Muda imagem do banner.
const imageBannerChanger = function () {
  var index;
  index = imageBannerCounter();
  try {
    var image_banner = document.getElementsByClassName("image_banner_imgdiv").item(0);
    image_banner.style.backgroundImage = `url('${photo_list.images[index]}')`;
    return; 
  } catch(TypeError) {
    return;
  } finally {
    return;
  }
}

//Ativa mudança do banner num intervalo definido em ms.
const imageBannerInterval = function () {
  setInterval(imageBannerChanger, 8000);
}

/*Form functions*/
/*
  Seleciona data atual no formato YYYY-MM-DD (String).
  Retorna um objeto chamado 'date' com:
  String checkin_date: Ano atual, mês e dia + 24 horas.
  String checkout_date: checkin_date + 24 horas.
*/
const currentDate = function () {
  let date = new Date();
  let dd = `${date.getDate() + 1}`;
  let mm = `${date.getMonth() + 1}`;
  let yyyy = `${date.getFullYear()}`;
  
  let date_obj;
  date_obj = {
    checkin_date: `${yyyy}-${mm}-${dd}`,
    checkout_date: `${yyyy}-${mm}-${String(parseInt(dd)+1)}`
  }
  
  return date_obj;
}

//Faz checkin_date começar na data atual + 24 horas.
const onLoadSetCheckInDateToCurrent = function () {
  let checkin_date_form;
  let date;
  
  date = currentDate();
  checkin_date_form = document.getElementById("checkin_date");
  
  checkin_date_form.setAttribute("min", date.checkin_date);
  document.getElementById("checkin_date").setAttribute("onchange", "checkinOnChangeActivateCheckout();");
  return;
}

//Ativa checkout_date.
const activateCheckoutDate = function (checkout_date_form) {
  checkout_date_form.removeAttribute("disabled");
  return;
}

//Desativa checkout_date.
const deactivateCheckoutDate = function (checkout_date_form) {
  checkout_date_form.value = "";
  checkout_date_form.removeAttribute("disabled");
  return;
}

//Atribui a checkout_date a data atual +2 dias.
const setCheckOutDateToCurrentPlus2Days = function (date, checkout_date_form) {
  checkout_date_form.setAttribute("min", date.checkout_date);
  return;
}

//Atualiza o objeto date com a nova data de checkin quando o usuário alterá-la.
const updateCheckinDate = function (date, checkin_date_form) {
  date.checkin_date = checkin_date_form.value;
  return date;
}

//Atualiza a data de checkout quando o usuário mudar a data de checkin.
const updateCheckoutDate = function (date, checkin_date_form) {
  let user_checkin_date = new Date(checkin_date_form.value);
  let new_checkout_date = new Date(user_checkin_date);
  new_checkout_date.setDate(user_checkin_date.getDate() + 2);

  let string_new_checkout_date;
  string_new_checkout_date = `${new_checkout_date.getFullYear()}` + `-${new_checkout_date.getMonth() + 1}` + `-${new_checkout_date.getDate()}`;
  
  date.checkout_date = string_new_checkout_date;
  return date;
}

/*
  Quando o usuário alterar o formulário checkin_date,
  checkout_date será ativado.
*/
const checkinOnChangeActivateCheckout = function () {
  let date;
  let checkout_date_form;
  let checkin_date_form;

  date = currentDate();

  checkout_date_form = document.getElementById("checkout_date");
  checkin_date_form = document.getElementById("checkin_date");
  
  date = updateCheckinDate(date, checkin_date_form);
  date = updateCheckoutDate(date, checkin_date_form);
  
  console.log(date);

  deactivateCheckoutDate(checkout_date_form);
  activateCheckoutDate(checkout_date_form);
  setCheckOutDateToCurrentPlus2Days(date, checkout_date_form);
  return;
}

//Chama funções necessárias após carregamento da página.
$(document).ready(function(){
  let button_selector = $(".menu_button");
  let menu_selector = $(".menu_container");
  //No momento do carregamento o menu está escondido.
  // As três linhas abaixo fazem o menu visível e
  // corrigem alguns comportamentos inesperados no
  // carregamento.
  menu_selector.show();
  menuFX(1);
  button_selector.click(function() {menuFX();});
  if (window.localStorage.getItem('light-mode') === 'off') {
    setDarkMode();
  }
  return;
});

//Reseta as cors dos campos no formulário de cadastro
//(caso onde o usuário continua errando nos inputs).
const resetFormLabelsColor = function() {
  document.getElementById("city_label").setAttribute("style", "color: #212121");
  document.getElementById("price_label").setAttribute("style", "color: #212121");
  document.getElementById("place_category_label").setAttribute("style", "color: #212121");
  document.getElementById("product_photo_label").setAttribute("style", "color: #212121");
  return;
}

//Valida inputs do form de cadastro.
const productRegistrationValidator = function(form_node) {
  var city = document.querySelector("#city");
  var price = document.querySelector("#price");
  var place_category = document.querySelector("#place_category");
  var product_photo = document.querySelector("#product_photo");
  var description = document.querySelector("#product_description");
  var error_msg = "O formulário não foi enviado.\n\
Preencha o(s) campo(s) em vermelho corretamente."
  var error = false;

  resetFormLabelsColor();

  validateCityName(city);
  validatePrice(price);
  validatePhotoExt(product_photo);
  validateDescription(description);

  if (!city.checkValidity()) {
    document.getElementById("city_label").setAttribute("style", "color: red");
    error = true;
  }
  if (!price.checkValidity()) {
    document.getElementById("price_label").setAttribute("style", "color: red");
    error = true;
  }
  if (!place_category.checkValidity()) {
    document.getElementById("place_category_label").setAttribute("style", "color: red");
    error = true;
  }
  if (!product_photo.checkValidity()) {
    document.getElementById("product_photo_label").setAttribute("style", "color: red");
    error = true;
  }
  if (!description.checkValidity()) {
    document.getElementById("product_description_label").setAttribute("style", "color: red");
    error = true;
  }

  if (error === true) {
    alert(error_msg);
    return;
  } else {
    submitNewProductForm(form_node);
    return;
  }
}

//Cadastro: Limpa as entradas {texto} do usuário, removendo
//tabs, espaços duplos e outros erros de digitação desse tipo.
const textInputCleaner = function(data) {
  return data.trim();
}

//Cadastro: Validando nome da cidade.
const validateCityName = function(city) {
  var pattern = new RegExp(/^[a-zA-Z-À-ž ]*$/);
  city.value = textInputCleaner(city.value);
  if(!pattern.test(city.value) || city.value.length > 50) {
    city.setCustomValidity("Invalid Data.");
    return;
  } else {
    city.setCustomValidity("");
    return;
  }
}

//Cadastro: Validando preço.
const validatePrice = function(price) {
  var pattern = new RegExp(/(^[1]?[0]{4}[.][0]{2}$)|(^[0-9]{1,4}[.][0-9]{2}$)/);
  var string_price = price.value.toString();
  if(!pattern.test(string_price) || string_price.length > 8) {
    price.setCustomValidity("Invalid Data.");
    return;
  } else {
    price.setCustomValidity("");
    return;
  }
}

//Função para dividir strings no caracter ponto.
const splitTextDot = function(text) {
  var splitted_text_array = text.split(".");
  return splitted_text_array;
}

//Cadastro: Validando o tipo do arquivo (.jpg, .jpeg ou .png)
const validatePhotoExt = function(product_photo) {
  var pattern = new RegExp(/^jpg$|^jpeg$|^png$/);
  var photo_ext = splitTextDot(product_photo.value.toString());
  photo_ext = photo_ext[photo_ext.length - 1];
  if(!pattern.test(photo_ext) || photo_ext > 4) {
    product_photo.setCustomValidity("Invalid Data.");
    return;
  } else {
    product_photo.setCustomValidity("");
    return;
  }
}

//Cadastro: Validando a descrição.
const validateDescription = function(description) {
  if(description.value!="" && description.value > 500) {
    product_photo.setCustomValidity("Invalid Data.");
    return;
  } else {
    product_photo.setCustomValidity("");
    return;
  }
}

//Cadastro: Submit Form.
const submitNewProductForm = function(form_node) {
  alert("Sucesso!\n\
Formulário enviado:\
As informações foram enviadas para o servidor.");
  form_node.parentNode.submit();
}

//Exclui um registro do banco de dados.
const deleteThisData = function(codigo) {
  $.ajax({
    url: 'php/db_delete.php',
    type: 'post',
    data: { code: codigo },
    error: function (xhr, ajaxOptions, thrownError) {
      var errorMsg = 'Ajax request failed: ' + xhr.responseText;
      $('#table_entries').html(errorMsg);
    }
  });
  alert('Registro ' + codigo + ' deletado com sucesso.');
}


//Muda formato do botão da mudança de palheta.
const changePaletteButton = function() {
  var p_button = document.getElementById("palette_button");
  if (p_button.innerHTML === '<i class="fas fa-lightbulb" aria-hidden="true"></i>') {
    p_button.innerHTML = '<i class="far fa-lightbulb" aria-hidden="true"></i>';
    darkMode();
    window.localStorage.setItem('light-mode', 'off');
  } else {
    p_button.innerHTML = '<i class="fas fa-lightbulb" aria-hidden="true"></i>';
    lightMode();
    window.localStorage.setItem('light-mode', 'on');
  }
  return;
}

//Ativa Dark Mode caso o usuário o tenha selecionado anteriormente.
const setDarkMode = function () {
  var p_button = document.getElementById("palette_button");
  p_button.innerHTML = '<i class="far fa-lightbulb" aria-hidden="true"></i>';
  darkMode();
  return;
}

//Esquema de cores do modo aceso.
const lightMode = function () {
  var visible_cont_1 = document.getElementById('visible_cont_1');
  var visible_element_1 =  document.getElementById('visible_element_1');
  var palette_button =  document.getElementById('palette_button');
  var visible_element_3 = document.getElementById('visible_element_3');
  var visible_cont_2 = document.getElementById('visible_cont_2');
  var visible_cont_3 = document.getElementById('visible_cont_3');
  var visible_cont_4 = document.getElementById('visible_cont_4');
  var checkin_ext_container = document.getElementById('checkin_ext_container');
  
  if (visible_cont_1 != null) {
    visible_cont_1.style.cssText = '';
  }
  if (visible_element_1 != null) {
    visible_element_1.style.cssText = '';
  }
  if (palette_button != null) {
    palette_button.style.cssText = '';
  }
  if (visible_element_3 != null) {
    visible_element_3.style.cssText = '';
  }
  if (visible_cont_2 != null) {
    visible_cont_2.style.cssText = '';
  }
  if (visible_cont_3 != null) {
    visible_cont_3.style.cssText = '';
  }
  if (visible_cont_4 != null) {
    visible_cont_4.style.cssText = '';
  }
  if (checkin_ext_container != null) {
    checkin_ext_container.style.cssText = '';
  }
  return;
}

//Esquema de cores do modo escuro.
const darkMode = function () {
  var visible_cont_1 = document.getElementById('visible_cont_1');
  var visible_element_1 =  document.getElementById('visible_element_1');
  var palette_button =  document.getElementById('palette_button');
  var visible_element_3 = document.getElementById('visible_element_3');
  var visible_cont_2 = document.getElementById('visible_cont_2');
  var visible_cont_3 = document.getElementById('visible_cont_3');
  var visible_cont_4 = document.getElementById('visible_cont_4');
  var checkin_ext_container = document.getElementById('checkin_ext_container');
  
  if (visible_cont_1 != null) {
    visible_cont_1.style.cssText = 'background-color: #212121;';
  }
  if (visible_element_1 != null) {
    visible_element_1.style.cssText = 'color: #FFFFFF;';
  }
  if (palette_button != null) {
    palette_button.style.cssText = 'color: #FFFFFF;';
  }
  if (visible_element_3 != null) {
    visible_element_3.style.cssText = 'background-color: #f44336; color: white !important;';
  }
  if (visible_cont_2 != null) {
    visible_cont_2.style.cssText = 'background-color: #212121;';
  }
  if (visible_cont_3 != null) {
    visible_cont_3.style.cssText = 'background-color: #212121;';
  }
  if (visible_cont_4 != null) {
    visible_cont_4.style.cssText = 'background-color: #484848;';
  }
  if (checkin_ext_container != null) {
    checkin_ext_container.style.cssText = 'background-color: #BDBDBD !important';
  }
  return;
}

// Redireciona para a busca na página produtos.
const redirectSearch = function () {
  window.location.href = "products.html?find=" + document.getElementById('search_box').value.toString();
  return;
}