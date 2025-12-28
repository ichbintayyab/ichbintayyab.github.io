<?php
// Only process POST requests
if($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form fields
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Email settings
    $to = "ichbintayyab@gmail.com";   // Change to your email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html\r\n";

    $email_subject = "Portfolio Contact Form: $subject";
    $email_body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    if(mail($to, $email_subject, $email_body, $headers)){
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Message could not be sent."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
?>
