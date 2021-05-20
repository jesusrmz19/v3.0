<?php 
if(isset($_POST['submit'])){
    $to = "jesusrm@jesusrmz.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Personal Web Page Form Submission";
    $subject2 = "Thank you for contacting Jesus!";
    $message = "Name: ". $name . "\n" .  " Message:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "<script>
             alert('Your message was sent succesfully!!'); 
             document.getElementById('contactus').reset();
             window.history.go(-1);
     </script>";

    }
?>