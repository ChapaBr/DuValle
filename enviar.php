<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();  
    $mail->CharSet = 'UTF-8';                                          // Set mailer to use SMTP
    $mail->Host       = 'mail.duvalle.agr.br';                  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'contato@duvalle.agr.br';               // SMTP username
    $mail->Password   = '102030@@';                             // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('contato@duvalle.agr.br', 'Teste de email'); //aqui vc coloca o email do cliente 
    $mail->addAddress('contato@duvalle.agr.br', 'Joe User');     // Add a recipient
    $mail->addReplyTo('contato@duvalle.agr.br', 'Information');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Teste de envio';
    $mail->Body    = "Nome: ".$nome."<br> Telefone: ".$telefone."<br> E-mail: ".$email."<br> Mensagem: ".$mensagem;

    $mail->send();

    //Aqui você pode dar uma header location
    echo 'Email enviado com sucesso';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
