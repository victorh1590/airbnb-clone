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