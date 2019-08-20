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
$cep = $_POST['cep'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$endereco = $_POST['endereco'];
$numero = $_POST['numero'];
$semente1 = $_POST['semente1'];
$area1 = $_POST['area1'];
$quant1 = $_POST['quant1'];
$semente2 = $_POST['semente2'];
$area2 = $_POST['area2'];
$quant2 = $_POST['quant2'];
$rural = $_POST['rural'];

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';   // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'website@duvalle.agr.br';                     // SMTP username
    $mail->Password   = 'X3lo84Cq8m';                               // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('website@duvalle.agr.br', 'Contato - ' . $nome); //aqui vc coloca o email do cliente 
    $mail->addAddress('website@duvalle.agr.br', 'Duvalle');     // Add a recipient
    // $mail->addReplyTo('devnathan45@gmail.com', 'Information');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contato - Home';
    $mail->Body    = "Nome: ".$nome."<br> Telefone: ".$telefone."<br> E-mail: ".$email."<br> Estado: ".$estado."<br> Endereço: ".$endereco."<br> Numero: ".$numero."<br> Semente 1: ".$semente1."<br> Area Semente 1: ".$area1."<br> Quantidade Semente 1: ".$quant1."<br> Semente 2: ".$semente2."<br> Area Semente 2: ".$area2."<br> Quantidade Semente 2: ".$quant2."<br> Produtor Rural? ".$rural;

    $mail->send();

    //Aqui você pode dar uma header location
    header('location: index.html?email=success');
} catch (Exception $e) {
    header('location: index.html?email=error');
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
