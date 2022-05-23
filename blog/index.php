<?php
session_start();
date_default_timezone_set("Asia/Kolkata");
require_once('../connection.php');
require_once "../config.php";

function validate() {
if (!isset($_SESSION['google_id']) || !isset($_SESSION['username']) || !isset($_SESSION['email']) || !isset($_SESSION['imagepath'])) {
    if (isset($_COOKIE['google_id']) && isset($_COOKIE['username']) && isset($_COOKIE['email']) && isset($_COOKIE['imagepath'])) {
        $_SESSION['google_id'] = $_COOKIE['google_id'];
        $_SESSION['username'] = $_COOKIE['username'];
        $_SESSION['email'] = $_COOKIE['email'];
        $_SESSION['imagepath'] = $_COOKIE['imagepath'];
    }
    else {
        logout();
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
    $path = mysqli_real_escape_string($conn, urldecode("https://sabiduria.in/blog/index.php"));
    $gotdate = date("Y/m/d h:i:s");
    
    $insert_error = $conn->prepare("INSERT INTO `errorlogs` (errormessage, errorpath, gotdate) VALUES (?, ?, ?)");
    $insert_error->bind_param("sss", $message, $path, $gotdate);
    $insert_error->execute();
    $insert_error->close();
      $conn = new mysqli('localhost', 'u596252984_varunteja' , 'Nancy3690#');
    mysqli_select_db($conn, "u596252984_sabiduria");

    return true;
}

validate();
if (isset($_SESSION['google_id']) && isset($_SESSION['username']) && isset($_SESSION['email']) && isset($_SESSION['imagepath'])) {
    try {
        $select_data = $conn->prepare("SELECT `google_id`, `firstname`, `lastname`, `email`, `imagepath`, `access_token`, `refresh_token` FROM `userslist` WHERE `google_id` = ?");
        $select_data->bind_param("s", $_SESSION['google_id']);
        if ($select_data->execute()) { 
        $result_data = $select_data->get_result();
            if ($result_data->num_rows > 0) {
                $row = $result_data->fetch_assoc();
                $firstname = $row['firstname'];
                $lastname = $row['lastname'];
                $username = $firstname . ' ' . $lastname; 
                $email = $row['email'];
                $user_image_path = $row['imagepath'];
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
?>

<?php
      $conn = new mysqli('localhost', 'u596252984_articles' , 'Nancy3690#');
    mysqli_select_db($conn, "u596252984_articles");

    $path = $_SERVER['REQUEST_URI'];
    $folders = explode('/', $path);
    $get_last_index = sizeof($folders)-1;
    while (strlen($folders[$get_last_index]) < 5 || empty($folders[$get_last_index]) || is_null($folders[$get_last_index])) {
        if ($get_last_index > 0) {
            $get_last_index = $get_last_index-1;
        }
        else {
            header("location: https://sabiduria.in/404.php"); 
        }
    }
    $identifier = $folders[$get_last_index];
    try {
    $select = $conn->prepare("SELECT `uid`, `articletitle`, `description`, `articlecontent`, `imagepath`, `google_id`,`publisheddate`, `youtube`, `linkedin`, `twitter`, `instagram`, `facebook` FROM `published_articles` WHERE `identifier`= ?");
    $select->bind_param("s", $identifier);
    if ($select->execute()) {
        $result = $select->get_result();
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $title = stripslashes($row['articletitle']);
            $content = $row['articlecontent'];
            $imageUrl = stripslashes($row['imagepath']);
            $description = stripslashes($row['description']);
            $google_id = trim($row['google_id']);
            $publisheddate = $row['publisheddate'];
            $updateddate = $row['publisheddate'];
            $dateAndTime = strtotime($row['publisheddate']);
            $month = date("M",$dateAndTime);
            $year=date("Y",$dateAndTime);
            //$updatedDate = strtotime($row['updateddate']);
            //$month = date("M",$updatedDate);
            //$year=date("y",$updatedDate);
            $youtube = stripslashes($row['youtube']);
            $linkedin = stripslashes($row['linkedin']);
            $twitter = stripslashes($row['twitter']);
            $instagram = stripslashes($row['instagram']);
            $facebook = stripslashes($row['facebook']);

            if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
            $site_url = "https://";   
            else  
            $site_url = "http://";   
            $site_url.= $_SERVER['HTTP_HOST'];   
            $site_url.= $_SERVER['REQUEST_URI']; 
            $meta_title = $title;
            $meta_tags = "sabiduria,developebusiness,blogs,articles";
            $meta_description = $description;
           }
            else {
            $error = 'Unable to get details of article(1). Identifier: '. $identifier . 'Error: '. $e->getMessage();
            sendError($error);
            header("location: https://sabiduria.in/404.php");
            }
        }
        else {
            $error = 'Unable to get details of article(2). Identifier: '. $identifier . 'Error: '. $e->getMessage();
            sendError($error);
            header("location: https://sabiduria.in/404.php");
        }
    }
    catch(Exception $e) {
        $error = 'Unable to get details of article(catch). Identifier: '. $identifier . 'Error: '. $e->getMessage();
        sendError($error);
        header("location: https://sabiduria.in/404.php");
    }
?>
<!DOCTYPE html>
<html>
<head>
    <title><?php echo $title.' - sabiduria'; ?></title>
    <meta charset="utf-8">
<meta name = "viewport" content = "width=device-width, initial-scale = 1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

<meta name = "title" content = "<?php echo $meta_title; ?>" />
<meta name = "keywords" content = "<?php echo $meta_tags; ?>"/>
<meta name = "description" content = "<?php echo $meta_description; ?>" />
<link rel="prefetch" href="https://sabiduria.in/blog/">
<link rel="prerender" href="https://www.sabiduria.in/blog/">
<meta itemprop="name" content="sabiduria | Blogs | Article | Blogger">
<meta itemprop="url" content="https://www.sabiduria.in/blog">
<meta itemprop="image" content="<?php echo $imageUrl; ?>">
<meta itemprop="creator accountablePerson" content="Varun Teja">

<meta property="og:title" content="<?php echo $meta_title; ?>">
<meta property="og:type" content="article">
<meta property="og:url" content="<?php echo $site_url; ?>">
<meta property="article:published_time" content="<?php echo $publisheddate; ?>">
<meta property="article:modified_time" content="<?php echo $updateddate; ?>">
<meta property="og:site_name" content="sabiduria | Blog | Article | Blogger">
<meta property="og:description" content="<?php echo $meta_description; ?>">
<meta property="og:image" content="<?php echo $imageUrl; ?>">
<meta property="og:image:type" content="image/jpg">
<meta property="og:image:alt" content="<?php echo $meta_title; ?>">
<meta property="og:locale" content="en_US">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@sabiduria">
<meta name="twitter:creator" content="@sabiduria">
<meta name="twitter:domain" content="sabiduria.in">
<meta name="twitter:url" content="https://sabiduria.in/blogger/">
<meta name="twitter:title" content="<?php echo $meta_title; ?>">
<meta name="twitter:text:title" content="<?php echo $meta_title; ?>">
<meta name="twitter:description" content="<?php echo $meta_description; ?>">
<meta name="twitter:image:src" content="<?php echo $imageUrl; ?>">
<meta name="twitter:image" content="<?php echo $imageUrl; ?>">

<link rel="shortcut icon" href="https://res.cloudinary.com/sabiduria-in/image/upload/v1558370137/favicon/favicon.ico" type="image/x-icon">
<link rel="icon" href="https://res.cloudinary.com/sabiduria-in/image/upload/v1558370137/favicon/favicon.ico">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src = "https://sabiduria.in/js/blog.min.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel = "stylesheet" type = "text/css" href = "https://sabiduria.in/css/blog.min.css"/>
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
                            echo '<a href = "adminpanel.php">Admin&nbsp;Panel&nbsp;<i class = "fa fa-external-link"></i></a>';
                            echo '</div>';
                            echo '<div class = "user-popup-footer">';
                            echo '<div class = "logout-button">';
                            echo '<a href = "https://sabiduria.in/logout.php">logout</a>';
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
</header>

<div itemprop = "share" class = "social_media_icons">
<div class = "share-heading"><p>share</p></div>
<div>
<?php 
if(preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"])){
    echo '<a href="whatsapp://send?text='.urldecode($site_url).'" rel="dofollow" target="_blank" class="fa fa-whatsapp share-whatsapp" title="share on whatsapp"></a>';
}
else{
    echo '<a href="https://web.whatsapp.com/send?text='.urldecode($site_url).'" rel="dofollow" target="_blank" class="fa fa-whatsapp share-whatsapp" title="share on whatsapp"></a>';
}
?>
</div>
<div>
<a href="https://twitter.com/share?url=<?php echo urldecode($site_url); ?>&amp;text=<?php echo urldecode($meta_title); ?>&amp;hashtags=<?php echo $meta_tags; ?>&amp;via=sabiduira" rel="dofollow" target = "_blank" class="fa fa-twitter share-twitter" title = "tweet"></a>
</div>
<div>
<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo urldecode($site_url); ?>&amp;title=<?php echo urldecode($meta_title); ?>" target="_blank" rel="dofollow" class="fa fa-linkedin share-linkedin" title = "post on linkedin"></a>
</div>
<div>
   <a href="https://www.facebook.com/sharer.php?u=<?php echo urldecode($site_url); ?>&amp;t=<?php echo urldecode($meta_title); ?>" target = "_blank" title = "post on facebook" rel="dofollow" class="fa fa-facebook share-facebook" ></a>
</div>
<div>
<a href="https://www.pinterest.com/pin/create/button/?url=<?php echo urldecode($site_url); ?>&amp;media=<?php echo urldecode($imageUrl); ?>&amp;description=<?php echo urldecode($meta_description); ?>" rel="dofollow" title = "pin on pinterest" data-pin-do="buttonPin" target = "_blank" class="fa fa-pinterest share-pinterest"></a>
</div>
</div>

<section class = "articles-subscribe-sabiduria-panel">
    <div class = "articles-subscribe-sabiduria-div">
        <div class = "articles-div" id = "articles-div">
            <?php
                echo '<div class = "article-title-div">';
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
                echo '<h1 class = "article-title-h1">';
                echo $title;
                echo '</h1>';
                echo '</div>';
                try {
                     $conn = new mysqli('localhost', 'u596252984_varunteja' , 'Nancy3690#');
                    mysqli_select_db($conn, "u596252984_sabiduria");

                    $select_user = $conn->prepare("SELECT `firstname`, `lastname`, `imagepath` FROM `userslist` WHERE `google_id`= ?");
                    $select_user->bind_param("s", $google_id);
                    if ($select_user->execute()) {
                        $result_user = $select_user->get_result();
                        if ($result_user->num_rows > 0) {
                            $row_user = $result_user->fetch_assoc();
                            $firstname = $row_user['firstname'];
                            $username = $row_user['firstname'].' '.$row_user['lastname'];
                            $authorImage = $row_user['imagepath'];
                            echo '<div class = "author-section">';
                            echo '<div class = "author-left-panel">';
                            echo '<div class = "author-image-div">';
                            echo '<svg class = "author-circle-svg" width="60" height="60" viewBox="0 0 144 144"><path fill-rule="evenodd" clip-rule="evenodd" d="M72 1.7c-27.28 0-50.93 16.1-62.47 39.61L8 40.56C19.8 16.51 44.02 0 72 0c27.98 0 52.2 16.5 64 40.56l-1.53.75C122.93 17.8 99.27 1.71 72 1.71zM9.53 102.7c11.54 23.51 35.2 39.6 62.47 39.6 27.28 0 50.93-16.09 62.47-39.6l1.53.75C124.2 127.49 99.98 144 72 144c-27.98 0-52.2-16.5-64-40.56l1.53-.75z"></path></svg>';
                            echo "<img src = '".$authorImage."' alt = '".$username."' title = '".$username."' class = 'author-image'/>";
                            echo '</div>';
                            echo '<div class = "author-info-div">';
                            echo '<div class = "author-name">';
                            if (strlen($username) > 10) {
                                $username = $firstname;
                            }
                            else {
                                $username = $username;
                            }
                            echo '<span class = "author-name-span">'.$username.'</span>';
                            echo '<span class = "published-date"><i class = "dot"></i>'.$month.' '.$year.'</span>';
                            echo '</div>';
                            echo '<div class = "updated-date">';
                            echo 'Updated: '.$month.' '.$year;
                            echo '</div>';
                            echo '</div>';
                            echo '</div>';
                            echo '<div class = "author-right-panel">';
                            echo '<div class = "author-follow-icons">';
                            $count = 0;
                            if (strlen($youtube) > 3  && !is_null($youtube)) {
                            echo '<a href = "https://www.youtube.com/channel/'.$youtube.'" class = "author-social-media-follow-a" rel="dofollow" itemprop = "follow" target="_blank"><i class = "fa fa-youtube-play"></i></a>';
                            $count++;
                            }
                            if (strlen($linkedin) > 3 && !is_null($linkedin)) {
                            echo '<a href = "https://www.linkedin.com/in/'.$linkedin.'" class = "author-social-media-follow-a" rel="dofollow" itemprop = "follow" target="_blank"><i class = "fa fa-twitter"></i></a>';
                            $count++;
                            }
                            if (strlen($twitter) > 3 && !is_null($twitter)) {
                            echo '<a href = "https://twitter.com/'.$twitter.'" class = "author-social-media-follow-a" rel="dofollow" itemprop = "follow" target="_blank"><i class = "fa fa-linkedin-square"></i></a>';
                            $count++;
                            }
                            if (strlen($instagram) > 3 && !is_null($instagram)) {
                            echo '<a href = "https://www.instagram.com/'.$instagram.'" class = "author-social-media-follow-a" rel="dofollow" itemprop = "follow" target="_blank"><i class = "fa fa-instagram"></i></a>';
                            $count++;
                            }
                            if (strlen($facebook) > 3 && !is_null($facebook)) {
                            echo '<a href = "https://www.facebook.com/'.$facebook.'" class = "author-social-media-follow-a" rel="dofollow" itemprop = "follow" target="_blank"><i class = "fa fa-facebook-f"></i></a>'; 
                            $count++;
                            }
                            if ($count > 0) {
                                echo '<div class = "follow-tag">follow</div>';
                            }
                            echo '</div>';
                            echo '</div>';
                            echo '</div>';
                        }
                        else {
                            $error = 'Unable to get details of author(1). Error: '. $conn->error;
                            sendError($error);
                        }
                    }
                    else {
                        $error = 'Unable to get details of author(2). Error: '. $conn->error;
                        sendError($error);
                    }
                }
                catch(Exception $e) {
                    $error = 'Unable to get details of author. Error '. $e->getMessage();
                    sendError($error);
                }
        
                echo '<div class = "multimedia" id = "multimedia">';
                echo "<img src = '".$imageUrl."' class='embbed-image-url' id='embbed-image-url' alt = '".$title."-sabiduria'/>";
                echo '</div>';
                echo html_entity_decode(stripslashes($content));     
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
                            <a href = "https://www.youtube.com/channel/UCordEI9LiEes54uvZ-MFaYA" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-youtube-play social-media-share-icons"></i></a>
                            <a href = "https://twitter.com/sabiduria_in" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-twitter social-media-share-icons"></i></a>
                            <a href = "https://www.linkedin.com/in/sabiduria-in-34aa22185/" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-linkedin social-media-share-icons"></i></a>
                            <a href = "https://www.instagram.com/sabiduria_bda/" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-instagram"></i></a>
                            <a href = "https://www.facebook.com/sabiduria.SABI" class = "social-media-share-a" itemprop = "follow" target="_blank" rel = "dofollow"><i class = "fa fa-facebook-f social-media-share-icons"></i></a>
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
</body>
</html>