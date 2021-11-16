const controlPanelPageAJAX = function() {
  var xhttp, json_response;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json_response = JSON.parse(this.responseText);
      buildTable(json_response);
    }
  };
  xhttp.open("POST", "php/select_products.php", true);
  xhttp.send();
}

//Faz a inserção no HTML dos dados recebidos do servidor.
const buildTable = function(json_response) {
  var table_element = document.getElementById("table_entries");
  var index = 0;

  while (index < json_response.length) {
    // Codigo, cidade, preco, categoria, descrição, editar, remover.
    var table_entry = `
          <tr>
            <td>${json_response[index].codigo}</td>
            <td>${json_response[index].cidade}</td>
            <td>${json_response[index].preco}</td>
            <td>${json_response[index].categoria}</td>
            <td>${json_response[index].imagem}</td>
            <td>${json_response[index].descricao}</td>
            <td class="table_option">
            <a 
            style='display: block; width: 100%; height: auto;' 
            href='/signup_system.php?type=editar&code=${json_response[index].codigo}'>
            <i class="fas fa-pencil-alt"></i></a></td>
            <td class="table_option">
            <a
            style='display: block; width: 100%; height: auto;'
            href=''
            onclick="deleteThisData(${json_response[index].codigo});"
            ><i class="fas fa-times"></i></a></td>
          </tr>`;

    table_element.innerHTML += table_entry;
    
    // if (index !== 0) {
    //   card_row.item(0).innerHTML += card_element;
    // } else {
    //   card_row.item(0).innerHTML = card_element;
    // }

    // $('.card_row').append(card_element);

    index += 1;
  }
  // $('.card_row').html(card_row.innerHTML);
  return;
}

$(document).ready(function(){
   
  $.when(
    $.getScript('js/script.js'),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
  ).done(function(){
    // if(!window.location.hash) {
    //  window.location = window.location + '#loaded';
    //  window.location.reload();
    // }
    $.ajax({
        url: 'php/select_products.php',
        type: 'post',
        success: function(data){
          var json_response = JSON.parse(data);
          // alert(json_response.toString());
          buildTable(json_response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
          var errorMsg = 'Ajax request failed: ' + xhr.responseText;
          $('#table_entries').html(errorMsg);
        }
    });
  });
});

 //Perform Ajax request.
/*
  $.ajax({
    url: 'php/select_products.php',
    type: 'post',
    success: function(data){
      json_response = JSON.parse(data);
      // alert(json_response.toString());
      buildTable(json_response);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      var errorMsg = 'Ajax request failed: ' + xhr.responseText;
      $('#table_entries').html(errorMsg);
    }
  });
*/
  //$.getScript('js/script.js');
