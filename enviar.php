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
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'devnathan45@gmail.com';                     // SMTP username
    $mail->Password   = 'nicolas1408';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('devnathan45@gmail.com', 'Teste de email'); //aqui vc coloca o email do cliente 
    $mail->addAddress('devnathan45@gmail.com', 'Joe User');     // Add a recipient
    $mail->addReplyTo('devnathan45@gmail.com', 'Information');

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
