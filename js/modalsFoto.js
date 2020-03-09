$(document).ready(function(){
    readTextFile(function(text){
            var data = JSON.parse(text);
            window.actual_JSON = data;
       });
});


function modalClickFoto(idClicked)
{
    // Get the modal
    var modal = document.getElementById("ventanaFoto");
    var modalContent = document.getElementsByClassName("ventana-contenido")[0];

    var btn = document.getElementById(idClicked);
    var span = document.getElementsByClassName("closeBtn")[0];
    var datosModal = window.actual_JSON[idClicked][0];
    
    
    modalContent.innerHTML = "";
    modalContent.innerHTML = '<h3 class="modalH3">' + datosModal.titulo + '</h3>';
    modalContent.innerHTML += '<img src=' + datosModal.imagen + ' alt=""></a>'
    modalContent.innerHTML += '<h4 class="modalH4">' + datosModal.texto + '</h4>';
        
    modal.style.display = "block";
    //When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}    

function readTextFile(callback){
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", 'js/fotos.json', true);
    rawFile.onreadystatechange = function(){
        if (rawFile.readyState === 4 && rawFile.status == "200"){
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}