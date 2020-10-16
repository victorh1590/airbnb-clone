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
  //A linha abaixo ativa a animação do banner.
  $("body").on('load', bannerTrapezeAnimation());
});


/*TESTING*/
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
function cardIsVisible_test(current_card, vd_indicator) {
  var viewport_height = window.innerHeight;
  var lastcard_position = current_card.getBoundingClientRect();
  var viewport_y_start = window.scrollY;
  var viewport_y_end = window.scrollY + viewport_height;
  console.log(lastcard_position.top + " : " + viewport_y_start + " : " + viewport_y_end);

  // if (lastcard_position.top > viewport_y_end && lastcard_position.bottom < viewport_y_start) {
  //   vd_indicator.innerHTML+= "Not visible";
  // } else {
  //   vd_indicator.innerHTML+= "Visible";
  // }

  if (lastcard_position.top > viewport_height) {
    // vd_indicator.innerHTML+= "Not visible";
    return false;
  } else {
    // vd_indicator.innerHTML+= "Visible";
    return true;
  }
  // if(viewport_height)
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
  document.addEventListener("scroll", onscrollNewCardAppears);
}