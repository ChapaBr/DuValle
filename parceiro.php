<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

$tipo = $_POST['tipo'];
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$cpf = $_POST['cpf'];
$cnpj = $_POST['cnpj'];
$email = $_POST['email'];
$cep = $_POST['cep'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$endereco = $_POST['endereco'];
$numero = $_POST['numero'];
$mensagem = $_POST['mensagem'];

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
    $mail->Subject = 'Parceiro';
    if(isset($cpf)){
        $mail->Body    = "Pessoa: ".$tipo."<br> Nome: ".$nome."<br> Telefone: ".$telefone."<br> CPF: ".$cpf."<br> E-mail: ".$email."<br> Estado: ".$estado."<br> Endereço: ".$endereco."<br> Numero: ".$numero."<br> Mensagem: ".$mensagem."<br> Cidade: ".$cidade;
    } else {
        $mail->Body    = "Pessoa: ".$tipo."<br> Nome: ".$nome."<br> Telefone: ".$telefone."<br> CNPJ: ".$cnpj."<br> E-mail: ".$email."<br> Estado: ".$estado."<br> Endereço: ".$endereco."<br> Numero: ".$numero."<br> Mensagem: ".$mensagem."<br> Cidade: ".$cidade;
    }

    $mail->send();

    //Aqui você pode dar uma header location
    header('location: index.html?email=success');
} catch (Exception $e) {
    header('location: index.html?email=error');
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
