<?php
session_start();
$liczba = rand(1000,9999);
$_SESSION['cap']=$liczba;
header("Content-type: image/png"); //ustawienie nagłówka strony
$im = imagecreate(50, 25); //utworzenie canvasa 
$black = imagecolorallocate($im, 0, 0, 0); //alokacja koloru r,g,b
$white = imagecolorallocate($im, 255, 255, 255); //alokacja koloru r,g,b

imagestring($im, 114, 5, 5,  $liczba, $white); //wypisanie tekstu
//rysowanie linii przerywanej
$style = array($white, $black, $white,$black); //tablica kolejnych pixeli stylu
imagesetstyle($im, $style); //ustawienie stylu
for($i=0;$i<100;$i+=5){
    imageline($im, $i, 0, $i, 100, IMG_COLOR_STYLED); 
    //imageline($im, 0, $i, 100, $i, IMG_COLOR_STYLED); 
}
for($i=0;$i<50;$i+=5){
    //imageline($im, $i, 0, $i, 100, IMG_COLOR_STYLED); 
    imageline($im, 0, $i, 100, $i, IMG_COLOR_STYLED); 
}
imagepng($im); //generowanie png
imagedestroy($im); //zwolnienie pamięci
?>