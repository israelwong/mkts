<?php
$nombre=$_GET['nombre'];
$email=$_GET['email'];
$empresa=$_GET['empresa'];
$telefono=$_GET['telefono'];
$msg=$_GET['mensaje'];


if($email=="") {
    echo 2;
    return;
} else{

    $asunto = "Mensaje web";
    
    //para el envío en formato HTML
    $headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    
    //dirección del remitente
    $headers .= "From: MKT Solutions <".$email.">\r\n";
    
    //direcci—n de respuesta, si queremos que sea distinta que la del remitente
    $headers .= "Reply-To: ".$email." \r\n";
    
    $salida='';
    $salida.= '<p>Nombre: '.$nombre.'<p>';
    $salida.= '<p>Empresa: '.$empresa.'<p>';
    $salida.= '<p>Tel.: '.$telefono.'<p>';
    $salida.= '<p>Mensaje: '.$msg.'<br>';
    
    mail('comercializadora_mkt@hotmail.com',$asunto,$salida,$headers);
    // mail('ing.israel.wong@gmail.com',$asunto,utf8_encode($salida),$headers);
    
    echo 1;
}

?>
