
  <header class = "header">
            <div class = "header-body">
                <div class = "logo"><img src = "https://sabiduria.in/images/icon.jpg"  itemprop = "logo" alt = "sabiduria logo" title = "sabiduria logo" class = "sabiduria-icon"/></div>
                <div class = "menu-items">
                    <ul class = "menu-ul">
                    <?php
                        $conn = new mysqli('localhost', 'u596252984_articles' , 'Nancy3690#');
                        mysqli_select_db($conn, "u596252984_articles");
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
                            echo '<a href = "logout.php">logout</a>';
                            echo '</div>';
                            echo '</div>';
                            echo '</div>';
                            echo '<li class = "write-article-li"><a href="editorforarticle.php" rel = "dofollow" target = "_blank" class = "write-articles"><i class = "fa fa-edit header-icons"></i>Write</a></li>';
                        }
                        else {
                            header("location: https://sabiduria.in/blogger/");
                        }
                    ?>
                    </ul>
                </div>
            </div>
</header>