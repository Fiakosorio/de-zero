<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "juanmosorio@hotmail.com";
  $asunto = "Mensaje desde tu sitio web";

  $contenido = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
  $headers = "From: $email";

  mail($destinatario, $asunto, $contenido, $headers);
  echo "Mensaje enviado con éxito.";
} else {
  echo "Error al enviar el mensaje.";
}
?>
