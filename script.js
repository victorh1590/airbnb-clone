/* Author: Victor Hugo Faria (5962)- 2020 */

// $(document).ready(function() {
//   $(window).on('load', function() {
//     $(".image_banner_trapeze").addClass("image_banner_trapeze_animation");   
//   });
// });  

const hideWarning = function () {
  $(".warning").css("display", "none"); 
}

const bannerTrapezeAnimation = function() {
  $(".image_banner_trapeze").addClass("image_banner_trapeze_animation");
  $(".image_banner_text").addClass("image_banner_text_animation");
}

const button_swap = function (button_selector) {
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

const menu_callback = function(button_selector) {
  button_selector.css({"transform": "rotate(0deg)"}).
  attr("disabled", false);
  button_swap(button_selector.children("i"));
  return;
}

const menu_width = function(menu_selector) {
  if(menu_selector.width() == 0){ return 301; }
  else { return 0; }
}

const menu_fx = function(animation_duration) {
  let button_selector = $(".menu_button");
  let menu_selector = $(".menu_container");
  let animation_width;
  if (animation_duration == undefined) {animation_duration = 200;}
  //Desativa o botão até a conclusão do evento.
  $(".main_container").css({ "opacity" : "0.5" })
  button_selector.
    css({"transform": "rotate(180deg)"}).
    attr("disabled", true);
  animation_width = menu_width(menu_selector);
  menu_selector.animate({
    'padding-left': 'toggle',
    width: animation_width
  }, animation_duration,
  //Callback function: Reativa botão após conclusão.
  function(){
    menu_callback(button_selector);
    // $(".main_container").css({ "opacity" : "0.5" });
    // $(".main_container").css({ "opacity" : "1" });
  });
}

$(document).ready(function(){
  let button_selector = $(".menu_button");
  let menu_selector = $(".menu_container");
  menu_selector.show();
  menu_fx(1);
  button_selector.click(function() {menu_fx();});
});
