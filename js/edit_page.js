const controlPanelPageAJAX = function() {
  var xhttp, json_response;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json_response = JSON.parse(this.responseText);
      buildForm(json_response);
    }
  };
  xhttp.open("POST", "php/select_single_product.php", true);
  xhttp.send();
}

//Faz a inserção no HTML dos dados recebidos do servidor.
const buildForm = function(json_response) {
  var form = document.getElementsByClassName("form_content");
  // var index = 0;

  var city_form = `
  <label for="city" id="city_label">Cidade*: (Somente letras)</label><br>
  <input type="text" id="city" name="city" placeholder="São Paulo" value="${json_response.cidade}" required>
  <br><br>`;

  var price_form = `
  <label for="price" id="price_label">Preço* (Ex: 80.00):<br></label>R$ 
  <input 
  type="number" 
  id="price" 
  placeholder="0.00" 
  required name="price" 
  min="0" max="10000" value="${json_response.preco}" 
  step="0.01" 
  title="price" 
  pattern="^\d+(?:\.\d{1,2})?$" 
  pattern="^\d*(\.\d{0,2})?$"
  ><br><br> `;

  var category_form = `
  <label for="place_category" id="place_category_label">Categoria de Imóvel*<br></label>
  <select name ="place_category" id="place_category" class="place_category" required>
    <option value="${json_response.categoria}" selected>${json_response.categoria}</option>
    <option value="Apartamento">Apartamento</option>
    <option value="Casa">Casa</option>
    <option value="Sobrado">Sobrado</option>
    <option value="Kitnet">Kitnet</option>
    <option value="Quarto">Quarto</option>
  </select><br><br>
  `;

  var image_form = `
  <label for="product_photo" id="product_photo_label">Selecione uma foto* (jpg, png, jpeg)(Deixe em branco para manter):<br></label>
  <input type="file" id="product_photo" name="product_photo">
  <br><br>
  `;

  var description_form = `
  <label for="product_description" id="product_description_label">Descrição (Max. 500 caractéres)<br></label>
  <textarea 
    id="product_description"
    name="product_description" 
    class="textarea_form" 
    rows="5" columns="20" 
    placeholder="Digite aqui a descrição."
    maxlength="500"
  >${json_response.descricao}</textarea>
  <br><br>
  `;
  
  var code_form = `
  <input id='code' name='code' value="${json_response.codigo}" type="hidden"/>
  `;

  var authq_form = '<input type="hidden" value="submit_q" name="submit_q" id="submit_q"/>';

  var submit_form = `
  <a href='#' onclick='productRegistrationValidator(this);' 
  class="button_link indigo_bt" 
  id="cadastro_submit"
  style="margin-left: auto; margin-right: auto;"
  >
  SUBMIT
  </a>
  `;

  form.item(0).innerHTML +=  city_form;
  form.item(0).innerHTML +=  price_form;
  form.item(0).innerHTML +=  category_form;
  form.item(0).innerHTML +=  image_form;
  form.item(0).innerHTML +=  description_form;
  form.item(0).innerHTML +=  code_form;
  form.item(0).innerHTML += authq_form;
  form.item(0).innerHTML +=  submit_form;
  
  // while (index < json_response.length) {
  //   // Codigo, cidade, preco, categoria, descrição, editar, remover.
  //   var table_entry = `
  //         <tr>
  //           <td>${json_response[index].codigo}</td>
  //           <td>${json_response[index].cidade}</td>
  //           <td>${json_response[index].preco}</td>
  //           <td>${json_response[index].categoria}</td>
  //           <td>${json_response[index].imagem}</td>
  //           <td>${json_response[index].descricao}</td>
  //           <td class="table_option">
  //           <a 
  //           style='display: block; width: 100%; height: auto;' 
  //           href='/signup_system.php?type=editar&code=${json_response[index].codigo}'>
  //           <i class="fas fa-pencil-alt"></i></a></td>
  //           <td class="table_option"><a><i class="fas fa-times"></i></a></td>
  //         </tr>`;

    // table_element.innerHTML += table_entry;
    
    // if (index !== 0) {
    //   card_row.item(0).innerHTML += card_element;
    // } else {
    //   card_row.item(0).innerHTML = card_element;
    // }

    // $('.card_row').append(card_element);

  //   index += 1;
  // }
  // $('.card_row').html(card_row.innerHTML);
  return;
}

$(document).ready(function(){
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const url_code = urlParams.get('code');
  console.log(url_code);
  //Perform Ajax request.
  $.ajax({
      url: `php/select_single_product.php?code=${url_code}`,
      type: 'post',
      success: function(data){
        json_response = JSON.parse(data);
        // alert(json_response.toString());
        buildForm(json_response);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        var errorMsg = 'Ajax request failed: ' + xhr.responseText;
        $('.form_content').html(errorMsg);
      }
  });
  $.getScript('js/script.js');
});

