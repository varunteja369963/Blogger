<?php
date_default_timezone_set("Asia/Kolkata"); 
include_once('../connection1.php');

$customerIdentifier = mysqli_real_escape_string($conn, htmlentities($_POST['email_or_mobile_no']));
$timeInserted = date("Y-m-d H:i:s");
$path = mysqli_real_escape_string($conn, htmlentities($_POST['path']));

$insert = $conn->prepare("INSERT INTO `simple_subscribe` (`customer_identifier`, `path`, `timeInserted`) VALUES (?, ?, ?)");
$insert->bind_param("sss", $customerIdentifier, $path, $timeInserted);
$insert->execute();
$insert->close();

$conn->close();
?>