
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
        
        datosModal = {"materias" : "Ingles J", "competencias" : ["Competencia 1", "Competencia 2"]};
        modalContent.innerHTML = "";
        modalContent.innerHTML += "<h3>" + datosModal.materias + "</h3>";
        modalContent.innerHTML += "<p>" + datosModal.competencias + "</p>";
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


