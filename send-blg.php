<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "juanmosorio1982@gmail.com"; // Cambiá por tu mail si querés
  $subject = "Nota del blog enviada desde tu sitio web";
  $message = "El visitante ha solicitado el envío de la siguiente nota: " . $_POST['title'] . "\n\nEnlace al PDF: " . $_POST['pdf'];
  $headers = "From: no-reply@dezero.com.ar";

  if (mail($to, $subject, $message, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>
