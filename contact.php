<?php>
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];

    $email_form = 'bazegie_07@yahoo.com';
    $email_subject = "New Form Submission";
    $email_body = "User Name $name.\n". 
                "User Email $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "bazegie_07@yahoo.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");


    ?>