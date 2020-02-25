
function modalClick(idClicked)
{

    // Get the modal
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementsByClassName("modal-content")[0];

    var btn = document.getElementById(idClicked);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        materiaArray = modalText(idClicked);
        console.log(materiaArray);
        modalContent.innerHTML = "<h3>" + materiaArray.materia + "</h3>";
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
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

function modalText(idClicked){
    //Crear JSON con los datos y direccionarlos por el idClicked
    fetch("js/materias.json")
            .then(function(resp){
                return resp.json();
            })
            .then(function(data){
                console.log(data[idClicked][0]);
            return data;
            });
}