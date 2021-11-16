//Função para preencher página de produtos.
//Esta função envia um request para o servidor pedindo uma
//consulta ao banco de dados.
const productPageAJAX = function() {
  var xhttp, json_response;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json_response = JSON.parse(this.responseText);
      insertProducts(json_response);
    }
  };
  xhttp.open("POST", "php/select_products.php", true);
  xhttp.send();
}

//Faz a inserção no HTML dos dados recebidos do servidor.
const insertProductInfo = function(json_response) {
  var page_title = document.getElementById("checkin_title");
  var page_subtitle = document.getElementById("checkin_location");
  var page_description = document.getElementById("checkin_description");
  var page_price = document.getElementById("checkin_price");

  var title = `${json_response.codigo + ' - '}${json_response.categoria + ' em ' + json_response.cidade}`;
  var price = `${json_response.preco}`;
  var description = `${json_response.descricao}`;
  var subtitle = `${json_response.cidade}`;

  page_title.innerHTML += title;
  page_subtitle.innerHTML += subtitle;
  page_description.innerHTML += description;
  page_price.innerHTML += price;

  return;
}

$(document).ready(function(){
  //$.getScript('js/script.js');
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const url_code = urlParams.get('code');
  console.log(url_code);
  
  if (url_code == '') {
    window.location.replace("index.html");
  } else {
    $.when(
      $.getScript('js/script.js'),
      $.Deferred(function( deferred ){
          $( deferred.resolve );
      })
    ).done(function(){
      // if(!window.location.hash) {
      // window.location = window.location + '#loaded';
      // window.location.reload();
      // }
      onLoadSetCheckInDateToCurrent();
      //Perform Ajax request.
      $.ajax({
        url: `php/select_single_product.php?code=${url_code}`,
        type: 'post',
        success: function(data){
          var json_response = JSON.parse(data);
          insertProductInfo(json_response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
          var errorMsg = 'Ajax request failed: ' + xhr.responseText;
          $('.card_row').html(errorMsg);
        }
      });
    });
  }
});
