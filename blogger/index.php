<?php
session_start();
date_default_timezone_set("Asia/Kolkata"); 
include_once("vendor/config.php");
include_once('../connection.php');

if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
$site_url = "https://";   
else  
$site_url = "http://";   
$site_url.= $_SERVER['HTTP_HOST'];   
$site_url.= $_SERVER['REQUEST_URI']; 

function validate() {
if (isset($_SESSION['google_id']) && isset($_SESSION['username']) && isset($_SESSION['email']) && isset($_SESSION['imagepath'])) {
    if (isset($_COOKIE['goole_id'])) {
        if ($_SESSION['google_id'] != $_COOKIE['google_id']) {
            logout();
            header('location: https://sabiduria.in/blogger/');
        }
    }
}
else {
    if (isset($_COOKIE['google_id']) && isset($_COOKIE['username']) && isset($_COOKIE['email']) && isset($_COOKIE['imagepath'])) {
        $_SESSION['google_id'] = $_COOKIE['google_id'];
        $_SESSION['username'] = $_COOKIE['username'];
        $_SESSION['email'] = $_COOKIE['email'];
        $_SESSION['imagepath'] = $_COOKIE['imagepath'];
    }
}
return true;
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

function sendError($error) {
    global $conn;
    $conn = new mysqli('localhost', 'u596252984_articles' , 'Nancy3690#');
    mysqli_select_db($conn, "u596252984_articles");
    $message = mysqli_real_escape_string($conn, $error);
    $path = mysqli_real_escape_string($conn, urldecode("https://sabiduria.in/blogger/index.php"));
    $gotdate = date("Y/m/d h:i:s");
    
    $insert_error = $conn->prepare("INSERT INTO `errorlogs` (errormessage, errorpath, gotdate) VALUES (?, ?, ?)");
    $insert_error->bind_param("sss", $message, $path, $gotdate);
    $insert_error->execute();
    $insert_error->close();
    $conn = new mysqli('localhost', 'u596252984_varunteja' , 'Nancy3690#');
    mysqli_select_db($conn, 'u596252984_sabiduria');
    return true;
}

validate();
if (isset($_SESSION['google_id']) && isset($_SESSION['username']) && isset($_SESSION['email']) && isset($_SESSION['imagepath'])) {
    try {
        $select_data = $conn->prepare("SELECT `google_id`, `firstname`, `lastname`, `email`, `imagepath`, `access_token`,    `refresh_token` FROM `userslist` WHERE `google_id` = ?");
        $select_data->bind_param("s", $_SESSION['google_id']);
        if ($select_data->execute()) { 
        $result_data = $select_data->get_result();
            if ($result_data->num_rows > 0) {
                $row = $result_data->fetch_assoc();
                $firstname = $row['firstname'];
                $lastname = $row['lastname'];
                $username = $firstname . ' ' . $lastname; 
                $email = $row['email'];
                $imagepath = $row['imagepath'];
            }
        else {
            sendError("Unable to get data. Reason:" . $conn->error);
            logout();
        }
        mysqli_free_result($result_data);
    }
    else {
        sendError("Unable to get data. Reason:" . $conn->error);
        logout();  
    }
    }
    catch(exception $e) {
        sendError("Unable to get data(catch). Reason:" . $e->getMessage());
        logout();
    }
} else {
    logout();
}


/*
#### Saved for future use for refreshing access_token ####
$access_token = $row['access_token'];
$refresh_token = $row['refresh_token'];
$client->setAccessToken($access_token);
if ($client->isAccessTokenExpired()) {    
    $token = $client->getAccessToken();
    $access_token = $token['access_token'
    try {
        $update_data = $conn->prepare("UPDATE `userslist` SET `access_token` = ? WHERE `google_id` = ?");
        $update_data->bind_param("ss", $access_token, $google_id);
        if ($update_data->execute()) {
        echo 'updated successfully';
        }
        else {
            sendError("Unable to update data. Reason:" . $conn->error);
        }
        $update_data->close();
    }
    catch(Exception $e) {
        sendError("Unable to update data. Reason:" . $e->getMessage());
    }
*/
?>

<!DOCTYPE html>
<html>
<head>
    <title>Sabiduria Articles - Home</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale = 1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

<meta name="title" content="Sabiduria Articles - Home">
<meta name="author" content="Varun Teja">
<meta name="keywords" content="sabiduria, developebusiness, blogs, articles">
<meta name="description" content="Sabiduria Blogger helps in developing business and personal branding with quality blogs and helps the people to improves their knowledge.">

<link rel="prefetch" href="https://sabiduria.in/blogger/">
<link rel="prerender" href="https://www.sabiduria.in/">

<meta property="og:title" content="Sabiduria Articles - Home">
<meta property="og:type" content="website">
<meta property="og:url" content="https://sabiduria.in/blogger/">
<meta property="og:site_name" content="sabiduria">
<meta property="og:description" content="Sabiduria Blogger helps in developing business and personal branding with quality blogs and helps the people to improves their knowledge.">
<meta property="og:image" content="https://res.cloudinary.com/djshady-online/image/upload/v1567446842/business/sabiduriaIcon_ctsn1m.jpg">
<meta property="og:image:type" content="image/jpg">
<meta property="og:image:alt" content="sabiduria">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@sabiduria">
<meta name="twitter:creator" content="@sabiduria">
<meta name="twitter:domain" content="sabiduria.in">
<meta name="twitter:url" content="https://sabiduria.in/blogger/">
<meta name="twitter:title" content="Sabiduria Articles - Home">
<meta name="twitter:description" content="Sabiduria Blogger helps in developing business and personal branding with quality blogs and helps the people to improves their knowledge.">
<meta name="twitter:image:src" content="https://res.cloudinary.com/djshady-online/image/upload/v1567446842/business/sabiduriaIcon_ctsn1m.jpg">
<meta name="twitter:image" content="https://res.cloudinary.com/djshady-online/image/upload/v1567446842/business/sabiduriaIcon_ctsn1m.jpg">

<meta itemprop="image" content="https://res.cloudinary.com/djshady-online/image/upload/v1567446842/business/sabiduriaIcon_ctsn1m.jpg">

<link rel="shortcut icon" href="https://res.cloudinary.com/sabiduria-in/image/upload/v1558370137/favicon/favicon.ico" type="image/x-icon">
<link rel="icon" href="https://res.cloudinary.com/sabiduria-in/image/upload/v1558370137/favicon/favicon.ico">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="https://accounts.google.com/gsi/client"></script>
<script src = "https://sabiduria.in/js/home.min.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel = "stylesheet" type = "text/css" href = "https://sabiduria.in/css/home.min.css"/> 
</head>
<body>
    <div class = "total_page">
        <header class = "header">
            <div class = "header-body">
                <div class = "logo"><img src = "https://sabiduria.in/images/icon.jpg"  itemprop = "logo" alt = "sabiduria logo" title = "sabiduria logo" class = "sabiduria-icon"/></div>
                <div class = "menu-items">
                    <ul class = "menu-ul">
                    <?php
                        if (isset($_SESSION['google_id']) && isset($_SESSION['username']) && isset($_SESSION['email']) && isset($_SESSION['imagepath'])) { 
                            echo '<li class = "user-profile" id = "user-profile">';
                            echo '<div class = "profile-pic"><img src = '.$_SESSION['imagepath'].' alt = '.$firstname.$lastname.'></img></div>';
                            echo '<div class = "caret-down-div"><i class = "fa fa-caret-down" id = "caret-down-icon"></i></div>';
                            echo '</li>';
                            echo '<div class = "user-popup-panel hide" id = "user-popup-panel">';
                            echo '<div class = "user-details">';
                            echo '<div class = "user-image">';
                            echo '<img src = '.$_SESSION['imagepath'].' alt = '.$firstname.$lastname.'></img>';
                            echo '</div>';
                            echo '<div class = "user-name-email">';
                            echo '<div class = "user-name">';
                            echo '<span><i class = "fa fa-at at-user"></i></span><span>'.$_SESSION["username"].'</span>';
                            echo '</div>';
                            echo '<div class = "user-email">';
                            echo $_SESSION['email'];
                            echo '</div>';
                            echo '</div>';
                            echo '</div>';
                            echo '<div class = "admin-panel-button">';
                            echo '<a href = "https://sabiduria.in/blogger/">Admin&nbsp;Panel&nbsp;<i class = "fa fa-external-link"></i></a>';
                            echo '</div>';
                            echo '<div class = "user-popup-footer">';
                            echo '<div class = "logout-button">';
                            echo '<a href = "logout.php">logout</a>';
                            echo '</div>';
                            echo '</div>';
                            echo '</div>';

                            echo '<li class = "write-article-li"><a href="https://sabiduria.in/editor" rel = "dofollow" target = "_blank" class = "write-articles"><i class = "fa fa-edit header-icons"></i>Write</a></li>';
                        }
                        else {
                            echo '<li class = "get-started-li"><a href="#" rel = "dofollow" id = "get-started" class = "get-started orange-bg">Get Started</a>';
                            $_SESSION['referrer'] = urldecode($site_url);   
                            echo '<li class = "write-article-li"><a href="https://sabiduria.in/login" class = "write-articles"><i class = "fa fa-edit header-icons"></i>Write</a></li>';
                        }
                    ?>
                    </ul>
                </div>
            </div>
            <div id="g_id_onload"
            data-client_id="331503202638-i10076bvvb03k350l8ai5mgqengne25m.apps.googleusercontent.com"
            data-login_uri="https://sabiduria.in/one-tap-authentication.php"
            data-your_own_param_1_to_login="This is the parameter 1"
            data-your_own_param_2_to_login="any_value" 
            data-skip_prompt_cookie="google_id"
            data-context="use">
    </div>
</header>

    <div class="container">
      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-body modal-body1" style = "text-align: center">
              <p class = "text-success">Thank you for being part of Sabiduria.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default close-popup bg-danger" id = "close-popup" data-dismiss="modal">Close</button>
            </div>
          </div>  
        </div>
      </div>    
    </div>

        <section class = "articles-subscribe-sabiduria-panel">
            <div class = "articles-subscribe-sabiduria-div">
                <div class = "articles-div">
                <?php 
                echo '<div class = "messages">';
                if (isset($_SESSION['error'])) {
                    echo '<div class="alert alert-danger alert-dismissible">';
                    echo '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
                    echo $_SESSION['error'];
                    unset($_SESSION['error']);
                    echo '</div>';
                }
                if (isset($_SESSION['success'])) {
                    echo '<div class="alert alert-success alert-dismissible">';
                    echo '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
                    echo $_SESSION['success'];
                    unset($_SESSION['success']);
                    echo '</div>';
                }
                echo '</div>';
                
                    $conn = new mysqli('localhost', 'u596252984_articles' , 'Nancy3690#');
                    mysqli_select_db($conn, 'u596252984_articles');
                    $select = "SELECT * FROM `published_articles` ORDER BY `id` DESC";
                    //$select = "SELECT * FROM `published_articles`";
                    $result = $conn->query($select);
                        if ($result->num_rows > 0) {
                            while($row = $result->fetch_assoc()) {
                                $uid = $row['uid'];
                                $author_name = $row['username'];
                                $identifier = $row['identifier'];
                                $imagepath = $row['imagepath'];
                                $article_title = $row['articletitle'];
                                $article_content = $row['description'];
                                $dateAndTime = strtotime($row['publisheddate']);
                                $day = date("j",$dateAndTime);
                                $month = date("M",$dateAndTime);
                                $year=date("Y",$dateAndTime);

                                echo '<div class = "article-container">';
                                echo '<div class = "container">';
                                echo '<div class = "row">';
                                if(strlen($imagepath) > 5) { 
                                    echo '<div class = "col-sm-4 article-right-column small-screen-multimedia">';
                                    echo '<div class = "multimedia">';
                                    ?>
                                   <img src = "<?php echo $imagepath;?>" class='embbed-image-url' alt = '<?php echo $article_title; ?>'/>
                                 
                                    <?php
                                    echo '</div>';
                                    echo '</div>';
                                }
                                if (strlen($imagepath) < 5) {
                                echo '<div class = "col-12">';
                                }
                                else { 
                                echo '<div class = "col-sm-8 article-left-column">';
                                }
                                echo '<div class = "description">';
                                echo '<div class = "article-title">';
                                echo '<a href = "https://sabiduria.in/blog/'.$identifier.'">';
                                echo $article_title;
                                echo '</a>';
                                echo '</div>';
                                echo '<div class = "article-content">';
                                echo '<a href = "https://sabiduria.in/blog/'.$identifier.'">';
                                $article_content = preg_replace("/\s+/", ' ', str_replace(array("<br>"),"", html_entity_decode(stripslashes($article_content))));
                                echo $article_content;
                                echo '</a>';
                                echo '</div>';

                                    echo '<div class = "authors-div">';
                                echo '<div class = "authors-left-div">';
                                echo '<div class = "authors-name">';
                                echo '<span>';
                                echo $author_name;
                                echo '</span>';
                                echo '</div>';
                                echo '<div class = "published-date">';
                                echo '<span><i class = "dot"></i></span>';
                                echo '<span>'.$month.'&nbsp;</span>';
                                echo '<span>'.$day.',&nbsp;</span>';
                                echo '<span>'.$year.'</span>';
                                echo '</div>';
                                echo '</div>';
                                echo '<div class = "authors-right-div">';
                                if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
                                $url = "https://";   
                                else  
                                $url = "http://";   
                                $url.= $_SERVER['HTTP_HOST'];   
                                $url.= $_SERVER['REQUEST_URI']; 
                                $title = "Sabiduria Blogger helps in developing business and personal branding with quality blogs and helps the people to improves their knowledge.";
                                $tags = "sabiduria,developebusiness,blogs,articles";

                                echo '<a href="https://twitter.com/share?url='.urldecode($url).'&amp;text='.urldecode($title).'&amp;hashtags='.$tags.'&amp;via=sabiduira" rel="nofollow" target = "_blank" title = "tweet" class = "share-this-article"><i class = "fa fa-twitter"></i></a>
                                ';
                                echo '</div>';
                                echo '</div>';

                                echo '</div>';
                                echo '</div>';
                                if(strlen($imagepath) > 5) { 
                                echo '<div class = "col-sm-4 article-right-column non-small-screen-multimedia">';
                                echo '<div class = "multimedia">';
                                echo '<a href = "https://sabiduria.in/blog/'.$identifier.'">';
                                ?>
                                <img src = "<?php echo $imagepath;?>" class='embbed-image-url' alt = '<?php echo $article_title; ?>'/>
                                <?php
                                echo '</a>';
                                echo '</div>';
                                echo '</div>';
                                }
                                echo '</div>';
                                echo '</div>';
                                echo '</div>';                                
                            } 
                        } else {
                            echo '<h1>';
                            echo 'No articles yet';
                            echo '</h1>';
                        }
                    $conn->close();
                ?>
                </div>
                <div class = "left-panel">
                <div class = "start-writing-article-panel">
                    <div class = "start-writing-article-label">Start writing article and build your personal branding with us.</div>
                    <div class = "start-writing-article-div">
                           <?php
                    if (isset($_SESSION['google_id']) && isset($_SESSION['username']) && isset($_SESSION['email']) && isset($_SESSION['imagepath'])) { 
                        echo '<a href = "https://sabiduria.in/editor" class = "start-writing-article">Write Article</a>';
                    }
                    else {
                        $_SESSION['referrer'] = urldecode($site_url);
                        echo '<a href = "https://sabiduria.in/login" class = "start-writing-article">Write Article</a>';
                    }
                    ?>
                    </div>
                </div>
                
                <?php
                if (!isset($_SESSION['google_id'])) {
                 echo '<div class = "subscribe-sabiduria-panel">
                    <div class = "subscribe-sabiduria-label">Don\'t want to register.</div>
                    <div class = "subscribe-sabiduria-label1">Then subscribe with email or mobile number</div>                    <div class = "subscribe-sabiduria-sub-label">We don\'t embarrass you by sending lot of mails or messages. We only send either important or related articles to you.</div>
                    <div class = "subscribe-sabiduria-div">
                        <div class = "mobile-no-div">
                        <input type = "text" placeholder = "Mobile or Email" class = "mobile-no" id = "email-or-mobile-no"/>
                        <div class = "email-or-mobile-no-ack" id = "email-or-mobile-no-ack"></div>
                        </div>
                        <div class = "submit">
                            <input type = "submit" class = "submit-subscribe-sabiduria" id = "submit-subscribe-sabiduria" value = "submit"/>
                        </div>
                    </div>
                </div>';
                }
                ?>

             <div id = "stick-here"></div>
                <div class = "share-panel stickThis" id = "stickThis">
                    <div class = "share-label">Spread on social media</div>
                        <div class = "sharing-options">
                            <a href = "https://www.youtube.com/channel/UCordEI9LiEes54uvZ-MFaYA" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "nofollow"><i class = "fa fa-youtube-play social-media-share-icons"></i></a>
                            <a href = "https://twitter.com/sabiduria_in" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "nofollow"><i class = "fa fa-twitter social-media-share-icons"></i></a>
                            <a href = "https://www.linkedin.com/in/sabiduria-in-34aa22185/" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "nofollow"><i class = "fa fa-linkedin social-media-share-icons"></i></a>
                            <a href = "https://www.instagram.com/sabiduria_bda/" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-instagram"></i></a>
                            <a href = "https://www.facebook.com/sabiduria.SABI" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "nofollow"><i class = "fa fa-facebook-f social-media-share-icons"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class = "register-section" id = "register-section">
            <div class = "register-box-outer">
                <div class = "register-box">
                <button type = "button" id = "close-register" class = "close-register"><i class = "fa fa-close"></i></button>
                    <div class = "register-box-inner">
                    <div class = "register-label">Join Or Start Sabiduria With</div>
                    <div class = "register-sub-label"><p>We strongly believe everyone deserves to lead properous and quality life which is only possible by minding your own business. Join sabiduria and we help you to grow in life.</p></div>
                    <div class = "register-with-social-media">
                        <?php echo '<a href = "'.$client->createAuthUrl().'" class = "joining-options join-with-google">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                    <span class = "company-name">Google</span>
                    </a>'; 
                    ?>
                    </div>
                    <div class = "register-footer-label"><p>By joining sabiduria, You agree to our <a href = "#">Terms And Conditions</a> and that you have read <a href="#">Data Use Policy</a>, including our <a href = "#">Cookie Use.</a></p></div>
                </div>
                </div>
            </div>
        </section>
<!--
        <section class = "popular-in-sabiduria-section">
            <div class = "popular-in-sabiduria">
                <div class = "popular-in-sabiduria-label"><label>Popular in Sabiduia</label></div>
                <div class = "popular-in-sabiduria-video">
                <iframe class = 'popular-in-sabiduria-iframe' id = 'popular-in-sabiduria-iframe' src='' frameborder= '0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
                </div>
                <div class = "popular-in-sabiduria-title"><p></p></div>
                <div class = "popular-in-sabiduria-social"></div>
                <div class = "popular-in-sabiduria-content"></div>
            </div>
        </section>
        -->

        <footer>
            <div class = "copyrights">Copyrights &#9400; 2020 Sabiduria</div>
            <div class = "horizontal-rule"></div>
            <div class = "author-div">
                <div class = "container-fluid">
                    <div class = "row">
                        <div class = "col-md-9">
                            <div class = "sabiduria-highlight-social-links">
                                <div class = "sabiduria-highlight"><p><span class = "author-icon"><img alt = "sabiduria" class = "sabiduria-icon" src="images/icon.jpg" itemprop="sabiduria icon"/></span>Website designed and developed by <span>&#34;<a href = "https://sabiduria.tech"  itemprop = "author" target="_blank" rel = "dofollow">Sabiduria Business Development Agency</a></span>&#34;</p></div>
                            </div>
                        </div>
                        <div class = "col-md-3">
                            <div class = "sabiduria-social-links">
                                <span><a href = "" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-youtube-play"></i></a></span>
                                <span><a href = "" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-instagram"></i></a></span>
                                <span><a href = "" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-linkedin-square"></i></a></span>
                                <span><a href = "" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-twitter"></i></a></span>                       
                                <span><a href = "" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-facebook-f"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "report"><a href="#"><span class = "fa fa-times-circle-o"></span><span>Report fraud</span></a></div>
            </div>            
        </footer>
    </div>
</body>
</html>	