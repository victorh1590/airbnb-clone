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
const insertProducts = function(json_response) {
  if (json_response.length == 0) {
    clearCardRow();
    window.sessionStorage.setItem('search_response',  JSON.stringify(json_response));
    return;
  } else {
    var card_row = document.getElementsByClassName("card_row");
    var index = 0;

    while (index < json_response.length) {
      var card_element = `
      <div class="card_content">
        <div class="card_image_frame">
          <div class="card_image">
            <img src="${'images_product/' + json_response[index].imagem}">
          </div>
        </div>
        <div class="card_text">
          <span class="card_text_content">${json_response[index].codigo + ' - '}${json_response[index].categoria + ' em ' + json_response[index].cidade}</span>
          <span class="card_text_prize">${json_response[index].preco}<span>/Noite</span></span>
        </div>
        <div class="card_button">
          <a href="checkin.html?code=${json_response[index].codigo}" class="card_button_link indigo_bt">
            <span class="card_button_text">VISUALIZAR</span>
            <span class="card_button_text"><i class="fas fa-eye"></i></span>
          </a>
        </div>
      </div>`;

      card_row.item(0).innerHTML += card_element;
      
      // if (index !== 0) {
      //   card_row.item(0).innerHTML += card_element;
      // } else {
      //   card_row.item(0).innerHTML = card_element;
      // }

      // $('.card_row').append(card_element);

      index += 1;
    }
    // $('.card_row').html(card_row.innerHTML);
    window.sessionStorage.setItem('search_response',  JSON.stringify(json_response));
    onloadCardPositionCategorization();
    return;
  }
}

//Clear card_row.
const clearCardRow = function() {
  var card_row = document.getElementsByClassName("card_row");
  card_row.item(0).innerHTML = "";
  return;
}

//Search function.
const searchQuery = function(search_param) {
  // $('#search_form').submit();
  //Perform Ajax request.
  $.ajax({
    url: `php/db_search.php?search=${search_param}`,
    type: 'get',
    success: function(data){
      var json_response = JSON.parse(data);
      if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
       }
      clearCardRow();
      insertProducts(json_response);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      var errorMsg = 'Ajax request failed: ' + xhr.responseText;
      $('.card_row').html(errorMsg);
    }
  }); 
  return;
}

//Search submit.
const searchSubmit = function() {
  searchQuery(document.getElementById('search_box').value);
  return;
}

$(document).ready(function(){
  //$.getScript('js/script.js');

  $.when(
    $.getScript('js/script.js'),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
  ).done(function(){
    bannerTrapezeAnimation();
    imageBannerInterval();
    
    $("#search_box").on("keypress", function(e) {
      if(e.which == 13) {
        searchSubmit();
      }
    });
    
    if(!window.location.hash) {
     window.location = window.location + '#loaded';
     window.location.reload();
    }
    window.sessionStorage.clear();
    //Perform Ajax request.
    $.ajax({
      url: 'php/select_products.php',
      type: 'post',
      success: function(data){
        var json_response = JSON.parse(data);
        window.sessionStorage.setItem('base-response', JSON.stringify(json_response));
        insertProducts(json_response);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        var errorMsg = 'Ajax request failed: ' + xhr.responseText;
        $('.card_row').html(errorMsg);
      }
    });
    const queryString = window.location.search;
    console.log(queryString);
    const urlParamss = new URLSearchParams(queryString);
    const url_find = urlParamss.get('find');
    console.log(url_find);
    if (url_find != null && url_find != '' && url_find != undefined) {
      searchQuery(url_find);
    }
  });

});

//Ordena JSON em ordem alfabética por cidade.
const azSortCity = function () {
  var sorted_json = window.sessionStorage.getItem('search_response');
  sorted_json = JSON.parse(sorted_json);
  
  if(sorted_json.length > 0){
    sorted_json.sort((a,b) => (a.cidade > b.cidade) ? 1 : ((b.cidade > a.cidade) ? -1 : 0)); 
    clearCardRow();
    insertProducts(sorted_json);
    return sorted_json;
  }
  return;
}

//Ordena JSON em ordem reversa por cidade.
const zaSortCity = function () {
  var sorted_json = window.sessionStorage.getItem('search_response');
  sorted_json = JSON.parse(sorted_json);
  
  if(sorted_json.length > 0){
    sorted_json.sort((a,b) => (a.cidade > b.cidade) ? -1 : ((b.cidade > a.cidade) ? 1 : 0)); 
    clearCardRow();
    insertProducts(sorted_json);
    return sorted_json;
  }
  return;
}

//Agrupa JSON por Categoria em ordem alfabética.
const azGroupCategory = function () {
  var sorted_json = window.sessionStorage.getItem('search_response');
  sorted_json = JSON.parse(sorted_json);
  
  if(sorted_json.length > 0){
    sorted_json.sort((a,b) => (a.categoria > b.categoria) ? 1 : ((b.categoria > a.categoria) ? -1 : 0)); 
    clearCardRow();
    insertProducts(sorted_json);
    return sorted_json;
  }
  return;
}

//Ordena JSON em ordem ascendente (preço mais baixo 1º).
const minSortPrice = function () {
  var sorted_json = window.sessionStorage.getItem('search_response');
  sorted_json = JSON.parse(sorted_json);
  
  if(sorted_json.length > 0){
    sorted_json.sort((a,b) => { return parseFloat(a.preco) - parseFloat(b.preco);}); 
    clearCardRow();
    insertProducts(sorted_json);
    return sorted_json;
  }
  return;
}


//Ordena JSON em ordem descendente (preço mais alto 1º).
const maxSortPrice = function () {
  var sorted_json = window.sessionStorage.getItem('search_response');
  sorted_json = JSON.parse(sorted_json);
  
  if(sorted_json.length > 0){
    sorted_json.sort((a,b) => { return parseFloat(b.preco) - parseFloat(a.preco);}); 
    clearCardRow();
    insertProducts(sorted_json);
    return sorted_json;
  }
  return;
}

//Retorna ao estado inicial.
const noFilter = function () {
  var sorted_json = window.sessionStorage.getItem('base-response');
  sorted_json = JSON.parse(sorted_json);
  clearCardRow();
  insertProducts(sorted_json);
  return sorted_json;
}

//Seleciona filtro.
const selectFilter = function (selected_filter) {
  if (selected_filter === "cidade-az") {
    azSortCity();
  } else if (selected_filter === "cidade-za") {
    zaSortCity();
  }
  else if (selected_filter === "preco-min") {
    minSortPrice();
  }
  else if (selected_filter === "preco-max") {
    maxSortPrice();
  }
  else if (selected_filter === "categoria-az") {
    azGroupCategory();
  } 
  else if (selected_filter === "no-filter") {
    noFilter();
  }
  return;
}
