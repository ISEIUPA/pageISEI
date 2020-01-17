
function alertSize(){
    var myWidth = 0;
    var myHeigth = 0;
    if(typeof(window.innerWidth) == 'number'){
        //NO - IE
        myWidth = window.innerWidth;
    }
    else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)){
        //IE 6+
        myWidth = document.documentElement.clientWidth;
    }
    else if(document.body && (document.body.clientWidth || document.body.clientHeight)){
        // IE 4 compatible
        myHeigth = Document.body.clientHeight;
    }
    var desplegar;
    var menu = document.getElementsByClassName("menuTarjeta")[0];
    desplegar = menu.style.display;
    menu.style.display = "none";
    menu.classList += " quitarFade";
    if(myWidth < 767){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}

function desplegarMenu(){
    var desplegar;
    var menu = document.getElementsByClassName("menuTarjeta")[0];
    desplegar = menu.style.display;
    if (desplegar == "none"){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}
alertSize();