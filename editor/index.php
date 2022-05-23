<?php
session_start();
date_default_timezone_set("Asia/Kolkata"); 
include_once("../connection.php");

if (isset($_SESSION['google_id']) && isset($_SESSION['username']) && isset($_SESSION['email']) && isset($_SESSION['imagepath'])) {
  if (isset($_COOKIE['google_id']) && isset($_COOKIE['username']) && isset($_COOKIE['email']) && isset($_COOKIE['imagepath'])) {
      if ($_SESSION['google_id'] != $_COOKIE['google_id']) {
          logout();
          header('location: https://sabiduria.in/login');
      }
  }
  else {
      echo "Executing process-1 ...";
    setcookie('google_id', $_SESSION['google_id'], time() + (86400 * 30), "/");
    setcookie('username', $_SESSION['username'], time() + (86400 * 30), "/");
    setcookie('email', $_SESSION['email'], time() + (86400 * 30), "/");
    setcookie('imagepath', $_SESSION['imagepath'], time() + (86400 * 30), "/");
  }
}
else {
  if (isset($_COOKIE['google_id']) && isset($_COOKIE['username']) && isset($_COOKIE['email']) && isset($_COOKIE['imagepath'])) {
      $_SESSION['google_id'] = $_COOKIE['google_id'];
      $_SESSION['username'] = $_COOKIE['username'];
      $_SESSION['email'] = $_COOKIE['email'];
      $_SESSION['imagepath'] = $_COOKIE['imagepath'];
  }
  else {
    logout();
    header('location: https://sabiduria.in/login');
  }
}

function logout() {
  global $client;
      
  setcookie("google_id", "", time()-3600, "/");
  setcookie("username", "", time()-3600, "/"); 
  setcookie("email", "", time()-3600, "/"); 
  setcookie("imagepath", "", time()-3600, "/"); 

  try {
      if (isset($_SESSION['google_id']) || isset($_SESSION['username']) || isset($_SESSION['email']) || isset($_SESSION['imagepath'])) {
      unset($_SESSION['google_id']);
      unset($_SESSION['username']);
      unset($_SESSION['email']);
      unset($_SESSION['imagepath']);
  
      $client->revokeToken();
      session_destroy();
      }
  }
  catch(exception $e) {
  
  }
}

 $select_data = $conn->prepare("SELECT `firstname`, `lastname`, `imagepath` FROM `userslist` WHERE `google_id` = ?");
 $select_data->bind_param("s", $_SESSION['google_id']);
 $select_data->execute();
 $result_data = $select_data->get_result();
 $row_data = $result_data->fetch_assoc();
 if ($result_data->num_rows > 0) {
    $firstname = $row_data['firstname'];
    $lastname = $row_data['lastname'];
    $imagesrc = $row_data['imagepath'];
 }
 else {
  $imagesrc = NULL;
 }
 mysqli_free_result($result_data);
 $conn->close();
?>

<!DOCTYPE html>
<html lang = "en">
    <head>
        <title>sabiduria Editor</title>
<meta charset = "UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale = 1">
<meta name = "keywords" content = "articles, making money, shopping, making groups, asking doubts in group, learning, sharingknowledge, chating">
<meta name = "description" content = "Write articles to earn money and fame using your knowledge and experience.">
<meta name = "author" content = "M. Varun Teja(M.V.T)">
<!--
    ### UNWANTED JS ###
<script src = "resizable/src/ResizeSensor.js" type = "text/javascript"></script>
<script src = "resizable/src/ElementQueries.js" type = "text/javascript"></script>
-->

<!--FINGERPRINT-->
<script src = "https://sabiduria.in/fingerprintjs2/fingerprint2.js" type = "text/javascript"></script>
<!--FINGERPRINT-->

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
<link rel = "stylesheet" type = "text/css" href = "https://sabiduria.in/css/editorforarticles.css"/> 

<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> 
 <script src = "https://sabiduria.in/js/articlewysiwyg.js" type = "text/javascript"></script>
 <!--<script src = "editorforarticles.js" type = "text/javascript"></script>-->
 <link rel="shortcut icon" href="https://sabiduria.in/images/favicon.ico" type="image/x-icon">
</head>

<body>
<div class = "total_page" id = "total_page">

<?php include_once("nav.php"); ?>

<div class = "post-article-div">
<button type = "button" class = "post_article" id = "post_article">post</button>
</div>

<?php include_once('tools.php'); ?>

<div class="preloader">
	    <div class="lds-ellipsis">
	        <span></span>
	        <span></span>
	        <span></span>
	    </div>
	</div>

<div class="container">
      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
        
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-body modal-body1" style = "text-align: center">
              <p>Your article is send to hold. Your article will be published soon.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default close-popup" id = "close-popup" data-dismiss="modal">Close</button>
            </div>
          </div>  
        </div>
      </div>    
    </div>


    <div class="container mt-3">
  <!-- The Modal -->
  <div class="modal fade" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Upload banner image</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body modal-body2">
            <p class = "post-sub-heading">Do you want to upload banner image?</p>
            <div class = "image-upload-options">
            <label class="container">Yes
                    <input type = "radio" id = "yes-radio" name = "image-upload" value = "yes">
                    <span class="checkmark"></span>
                  </label>
                  <label class="container">No
                    <input type = "radio" id = "no-radio" name = "image-upload" value = "no">
                    <span class="checkmark"></span>
                  </label>
            </div>
            <div class = "upload-banner-div" id = "upload-banner-div">
            <form action = "#" method="post" enctype="multipart/form-data" id = "upload-banner-form">
                <label class="custom-upload-banner">
                <input type = "file" id = "upload-banner" class = "upload-banner"/>
                Upload Banner
                </label>
            </form>
            <img class = "preview-banner" id = "preview-banner"/>
            <p class = "upload-banner-ack" id = "upload-banner-ack"></p>
            </div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <div id = "modal2-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success" id = "save-article">Save</button>
      </div>
        </div>  
      </div>
    </div>
  </div>
</div>

<?php include_once('table_modal.php'); ?>

<?php include_once('table_context_window.php'); ?>

<?php include_once('left-section.php'); ?>

<?php include_once('center-section.php'); ?>

<?php include_once('right-section.php'); ?>

</div>
<input type = "hidden" id = "google_id" value = "<?php echo $_SESSION['google_id'];?>"/>
</body>
</html>
