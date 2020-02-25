
function modalClick(idClicked)
{
    // Get the modal
    var modal = document.getElementById("myVentana");
    var modalContent = document.getElementsByClassName("ventana-contenido")[0];

    var btn = document.getElementById(idClicked);
    var span = document.getElementsByClassName("closeBtn")[0];
 
    btn.onclick = function() {
//        readTextFile(function(text){
//            var data = JSON.parse(text);
//            window.actual_JSON = data[idClicked][0];
//            console.log(window.actual_JSON);
//       });
        //var datosModal = window.actual_JSON;
        
        datosModal =
        {
            "Materia": "Inglés I",
            "cuatrimestre": "Primer Cuatrimestre",
            "NumUnidades":4,
            "Unidades": ["Introducción: Interacción en el aula" , "Descripción y ubicación de lugares y objetos", "Habilidades y acciones cotidianas", "Comunicar opiniones" ],
            "Objetivo": "El alumno será capaz de manejar, comunicar y comprender ideas y/o textos simples abordando eventos cotidianos con bajo nivel de complejidad haciendo uso de la información de su entorno" 
        };
        
        
        modalContent.innerHTML = "";
        modalContent.innerHTML += '<h3 class="modalH3">' + datosModal.Materia + '</h3>';
        modalContent.innerHTML += '<h4 class="modalH4">Objetivo: ' + datosModal.Objetivo + '</h4>';
        modalContent.innerHTML += '<h4 class="modalH4">Unidades de aprendizaje: </h4>';
        var lista = '<ol class="modalList">';
        for (var i =0; i< datosModal.Unidades.length; i++){
            lista += '<li>' + datosModal.Unidades[i] + '</li>';}
        lista += "</ol>";
        console.log(lista);
        modalContent.innerHTML += lista;
        modal.style.display = "block";
    }

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
    rawFile.open("GET", 'js/materias.json', true);
    rawFile.onreadystatechange = function(){
        if (rawFile.readyState === 4 && rawFile.status == "200"){
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


