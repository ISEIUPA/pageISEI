<?php

if (isset($_POST["contactanos"]))
{
    $nombre = $_POST['nombre'];
    $correo = $_POST["correo"];
    $comentario = $_POST["comentario"];
    
    $cuerpo = '<h2>Comentarios de: </h2>';
    $cuerpo .= '<h3>Nombre: ' .$nombre.'</h3><br>';
    $cuerpo .= '<h3> Correo:' .$correo.'</h3><br>';
    $cuerpo .= '<h4>' .$comentario.'</h4><br>';
    
    require("includes/class.phpmailer.php");
    $mail = new PHPMailer();
    $mail->From = "comentarios@isei.mx"; //Revisar direccion
    $mail->FromName = "Comentarios ISEI";
    $mail->AddAddress("luis.ernesto.anaya@upa.edu.mx");
    $mail->WordWrap = 50;
    $mail->IsHTML(true);
    $mail->Subject = "Comentario de visitante: " .$nombre;
    $mail->Body = $cuerpo;
    //$mail->AddEmbeddedImage('images/LOGO_FORO_email.png', 'logo');
    $mail->CharSet = 'UTF-8';

    //SMT Server
    $mail->IsSMTP();
    $mail->Host = 'mail.isei.mx';
    $mail->Port = 2525;
    $mail->SMTPAuth = true;
    $mail->Username = 'comentarios@isei.mx';
    $mail->Password = '$ISEIUP4$';

    echo $cuerpo;

    if($mail->Send()){
      echo "<script>";
      echo "alert('Comentarios enviados satisfactoriamente, gracias.');";
      echo "window.location = 'contactanos.html';";
      echo "</script>";}
    else
      echo 'Mailer Error: '.$mail->ErrorInfo;
}

?>