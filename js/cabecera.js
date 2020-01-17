$(document).ready(function(){
    
    $.ajax({  
        url: 'cabecera.html',
        success: function(data) {
            $('#headerDinamico').html(data); 
        }  
    }); 
    
});