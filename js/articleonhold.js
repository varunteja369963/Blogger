//start: getting of the parameters from url in javascript;
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//end: getting of the parameters from url in javascript;

$(document).ready(function() {
$(".non-frame").css("opacity", "1");
$("#upload-banner-div").css("display", "block");
});

$(document).ready(function() {
 $("#reject_article").click(function() {
     $("#rejected_reason_box").css("display", "block");
     $("#display_article_and_ads").css("opacity", "0.2");
     $("#options_for_editor").css("opacity", "0.2");
 });
});

$(document).ready(function() {
    $("#cancel_rejecting").click(function() {
        $("#rejected_reason_box").css("display", "none");
        $("#display_article_and_ads").css("opacity", "1");
        $("#options_for_editor").css("opacity", "1");
    });
});

$(document).ready(function() {
    var uid = getParameterByName('q');
    $.ajax ({
        type: 'POST',
        url: 'get_title_from_hold.php',
        data: {
            'uid': uid
        },
        success: function(bef_data) {
            var data = $.trim(bef_data);
            if (data === '1') {
                window.location = 'https://sabiduria.in/login'; 
            }
            else if (data === '2') {
                alert('There is something problem. Please contact us for futher details');
                var idata = 'no rows.';
                var errormessage = encodeURIComponent(idata);
                var path = encodeURIComponent('articleonhold.js/(sub)getarticletitle.php/error=2');
                $.post("https://sabiduria.in/senderror.php", 
                {
                 'errormessage': errormessage,
                 'path': path  
            });
              window.location = "https://sabiduria.in/holded_articles.php";
            }
            else if (data === '3') {
                alert('There is something problem. Please contact us for futher details');
                var idata = 'There is something in executing select.';
                var errormessage = encodeURIComponent(idata);
                var path = encodeURIComponent('articleonhold.js/(sub)getarticletitle.php/error=3');
                $.post("https://sabiduria.in/senderror.php", 
                {
                 'errormessage': errormessage,
                 'path': path  
            });
           window.location = "https://sabiduria.in/holded_articles.php";
            }
            else {
                $("#article_title").val(data);
                $.ajax ({
                    type: 'POST',
                    url: 'get_content_from_hold.php',
                    data: {
                        'uid': uid
                    },
                    success: function(bef_data) {
                        var data = $.trim(bef_data);
                        if (data === '1') {
                            window.location = 'https://sabiduria.in/login'; 
                        }
                        else if (data === '2') {
                            alert('There is something problem. Please contact us for futher details');
                            var idata = 'no rows.';
                            var errormessage = encodeURIComponent(idata);
                            var path = encodeURIComponent('articleonhold.js/(sub)getarticle.php/error=2'); 
                            $.post("https://sabiduria.in/senderror.php", 
                            {
                             'errormessage': errormessage,
                             'path': path  
                        });
                          window.location = "https://sabiduria.in/holded_articles.php";
                        }
                        else if (data === '3') {
                            alert('There is something problem. Please contact us for futher details');
                            var idata = 'There is something in executing select.';
                            var errormessage = encodeURIComponent(idata);
                            var path = encodeURIComponent('articleonhold.js/(sub)getarticle.php/error=3');
                            $.post("https://sabiduria.in/senderror.php", 
                            {
                             'errormessage': errormessage,
                             'path': path  
                        });
                          window.location = "https://sabiduria.in/holded_articles.php";
                        }
                        else {
                            $("#article_display").html(data);
                        }
                    }
                }).done(function() {
                    $(document).find('.article-frame').each(function(){
                        let code = $(this).attr('id');
                        let frameNumber = code - 500000;
                        var frameCode = '<div class = "frame-container-outer-div" id = "container-'+code+'">';
                        frameCode += '<div class = "frame-container-div">';
                        frameCode += '<button type = "button" class = "frame-container" data-di3ico = "'+code+'" id = "frame'+ code +'">';
                        frameCode += '<p class = "frame-number">#FRAME'+frameNumber+'</p>';
                        frameCode += '</button>';
                        frameCode += '<div class = "close-frame-container" id = "close-'+code+'" data-di3ico = "'+code+'"><i class = "fas fa-times"></i></div>';
                        frameCode += '</div>';
                        frameCode += '<div class = "frames-editing">';
                        frameCode += '<button type = "button" class = "delete-frame" data-di3ico = "'+code+'">';
                        frameCode += '<i class = "far fa-trash-alt"></i>';
                        frameCode += '</button>';
                        frameCode += '</div>';
                        frameCode += '</div>';
                        $("#cms-content").find("#frames-carrier").append(frameCode);
                     });
                   
                    for (let i = 1; i <= 5; i++) {
                        if ($("#article_display").find('#videoDiv-'+i).length>0) {
                            let video_val = i;
                            var $appendVideoFrame = "<div id = 'videoFrame"+video_val+"' data-videoFrameVal = "+video_val+" class = 'videoFrame'>";
                            $appendVideoFrame += '<div class= "video-no"><p>video'+video_val+'</p></div>';
                            $appendVideoFrame += '<div class = "videoDimensions">'; 
                            $appendVideoFrame += "<select id = 'dimension-select-box' data-video-no = '"+video_val+"' class = 'dimension-select-box'>";
                            $appendVideoFrame += "<option value = 'rectangle'>16:9</option>";
                            $appendVideoFrame += "<option value = 'square'><i class = 'far fa-square' style='font-size:24px'></i>1:1</option>"
                            $appendVideoFrame += "</select>";
                            $appendVideoFrame += '</div>';  
                            $appendVideoFrame += '<div class ="delete-save">';
                            $appendVideoFrame += "<button type = 'button' id = 'delete-video"+video_val+"' data-video-no = '"+video_val+"' class = 'delete-video'><i class = 'far fa-trash-alt'></i></button>";
                            $appendVideoFrame += '</div>';
                            $appendVideoFrame += '</div>';
                            $("#videos-carrier").find("#video-container-"+video_val).html($appendVideoFrame);
                        }
                        else {
                            continue;
                        }
                    }
                });
            }
        }
    });
});

$(document).ready(function() {
    $("#publish-article").on("click", function(e) {
      e.preventDefault();
      $("#article_title_ack").css("display", "none");
      $("#myModal2").modal('hide');
      var bef_title = $.trim($("#article_title").val());
      var article_content_bef = $.trim($("#article_display").html());
      var video1 = null;
      var video2 = null;
      var video3 = null;
      var video4 = null;
      var video5 = null;
      var youtube = null;
      var linkedin = null;
      var twitter = null;
      var instagram = null;
      var facebook = null;
      var imagepath = null;
      var uid = $("#article-id").val();
      video1 = $.trim($("#title-content").find("#videoDiv-1").data('url'));
      video2 = $.trim($("#title-content").find("#videoDiv-2").data('url'));
      video3 = $.trim($("#title-content").find("#videoDiv-3").data('url'));
      video4 = $.trim($("#title-content").find("#videoDiv-4").data('url'));
      video5 = $.trim($("#title-content").find("#videoDiv-5").data('url'));
      youtube = $.trim($("#youtube-input").val());
      linkedin = $.trim($("#linkedin-input").val());
      twitter = $.trim($("#twitter-input").val());
      instagram = $.trim($("#instagram-input").val());
      facebook = $.trim($("#facebook-input").val());
  
        if ($('#preview-banner').length>0) {
            imagepath = $("#preview-banner").attr('src');
        }

      if($('#no-radio').is(':checked')) { 
        imagepath = null;
      }

      if (bef_title.length < 1) {
          $("#article_title_ack").css("display", "block");
          $("#article_title_ack").html("Please title your article.");
          $("html, body").animate({
             'scrollTop': $("#article_title").position().top 
          });
          return false;
     }
     else {
      if (bef_title.length > 100) {
          alert("please do not change any html code");
          var data = 'changing title length';
          var errormessage = encodeURIComponent(data);
          var path = encodeURIComponent('articlewysiwyg.js/changing the html code(title_length)');
          $.post("senderror.php", 
          {
            'errormessage': errormessage,
            'path': path  
          });
       return false;
     }
     else if (bef_title.length <= 10 || bef_title.length > 100) {
          $("#article_title_ack").css("display", "block");
          $("#article_title_ack").html("Title length has to be atleast in between 10 to 150 characters.");
          $("html, body").animate({
             'scrollTop': $("#article_title").position().top 
          });
          return false;
     }
     else if (article_content_bef.length < 15) {
          alert("Your article is very small. Please add more content to this article.");
          return false;
     }
     else {
          article_title = encodeURIComponent(bef_title);
          article_content = encodeURIComponent(article_content_bef);
          var formdata = new FormData();
          formdata.append('uid', uid);
          formdata.append('article_title', article_title);
          formdata.append('article_content', article_content);
          formdata.append('imagepath', imagepath);
          formdata.append('video1', video1);
          formdata.append('video2', video2);
          formdata.append('video3', video3);
          formdata.append('video4', video4);
          formdata.append('video5', video5);
          formdata.append('youtube', youtube);
          formdata.append('linkedin', linkedin);
          formdata.append('twitter', twitter);
          formdata.append('instagram', instagram);
          formdata.append('facebook', facebook);
          $(".preloader").css('display', 'block');  
          $.ajax({
              type: 'POST',
              url: 'publishArticleInHold.php',
              data: formdata,
              cache:false,
              processData: false,
              contentType: false,
              success: function(bef_data) {
                  $(".preloader").css('display', 'none');
                  var data = $.trim(bef_data);
                  if (data === 'success') {
                      $('#myModal').modal({
                          backdrop: 'static',
                          keyboard: false
                      });
                      $("#close-popup").click(function(){
                          location.reload();
                      });
                  } else {
                      var w = $("#article_display").width();
                      w = w*(90/100);
                      var f_h = (w/16)*9;
                      $(document).find(".vedioembbed").css("width", w);
                      $(document).find(".vedioembbed").css("height", f_h);
                      
                      if (data === 'login') {
                          window.location = "https://sabiduria.in/login";
                       }
                      else if (data === '404') {
                          window.location = "https://sabiduria.in/holded_articles.php";                        
                      }
                      else if (data === 'unauthorized') {
                        var idata = 'Unauthorized user accessed articleonhold.php.';
                        var errormessage = encodeURIComponent(idata);
                        var path = encodeURIComponent('articleonhold.js/(sub)publishArticleInHold.php/error=unauthorized');
                        $.post("https://sabiduria.in/senderror.php", 
                        {
                         'errormessage': errormessage,
                         'path': path  
                        });
                        alert("There is something problem please try again later.");
                        window.location = "https://sabiduria.in/login";
                    }
                    else if (data === 'codechanged') {
                        var idata = 'Code changed by the user.';
                        var errormessage = encodeURIComponent(idata);
                        var path = encodeURIComponent('articleonhold.js/(sub)publishArticleInHold.php/error=codechanged');
                        $.post("https://sabiduria.in/senderror.php", 
                        {
                         'errormessage': errormessage,
                         'path': path  
                        });
                        alert("Please do not change any html, javascript or any code");
                        window.location = "https://sabiduria.in/blogger/";
                    }
                    else if (data === 'titleexists') {
                        $("#article_title_ack").css("display", "block");
                        $("#article_title_ack").html("There is some article exists with the same title.");
                        $("html, body").animate({
                           'scrollTop': $("#article_title").position().top 
                        });
                    }
                      else {
                          alert("There is something problem. Please try again later.");
                          var errormessage = encodeURIComponent(data);
                          var path = encodeURIComponent('articlewysiwyg.js/(sub)articlesendtohold.php/error=else');
                          $.post("https://sabiduria.in/senderror.php", 
                          {
                           'errormessage': errormessage,
                           'path': path  
                          });
                      } 
                  }
              }
          });
         }
      }   
    });
 });

$(document).ready(function() {
    $("#rejected-reason-popup").click(function() {
        $("#myModal2").modal('hide');
        $("#myModal4").modal();
    });
});

 $(document).ready(function() {
    $("#reject-article").on("click", function(e) {
      e.preventDefault();
      $("#article_title_ack").css("display", "none");
      $("#myModal2").modal('hide');
      var bef_title = $.trim($("#article_title").val());
      var article_content_bef = $.trim($("#article_display").html());
      var video1 = null;
      var video2 = null;
      var video3 = null;
      var video4 = null;
      var video5 = null;
      var youtube = null;
      var linkedin = null;
      var twitter = null;
      var instagram = null;
      var facebook = null;
      var imagepath = null;
      var uid = $("#article-id").val();
      var rejected_reason = $("#rejected-reason").val();
      video1 = $.trim($("#title-content").find("#videoDiv-1").data('url'));
      video2 = $.trim($("#title-content").find("#videoDiv-2").data('url'));
      video3 = $.trim($("#title-content").find("#videoDiv-3").data('url'));
      video4 = $.trim($("#title-content").find("#videoDiv-4").data('url'));
      video5 = $.trim($("#title-content").find("#videoDiv-5").data('url'));
      youtube = $.trim($("#youtube-input").val());
      linkedin = $.trim($("#linkedin-input").val());
      twitter = $.trim($("#twitter-input").val());
      instagram = $.trim($("#instagram-input").val());
      facebook = $.trim($("#facebook-input").val());
  
      if ($('#preview-banner').length>0) {
        imagepath = $("#preview-banner").attr('src');
      }
      if($('#no-radio').is(':checked')) { 
        imagepath = null;
      }
      if (rejected_reason.length <= 15) {
        $("#rejected-reason-ack").html("Rejected reason should be more than 15 letters long.");
        return false;
      }
      if (bef_title.length < 1) {
          $("#article_title_ack").css("display", "block");
          $("#article_title_ack").html("Please title your article.");
          $("html, body").animate({
             'scrollTop': $("#article_title").position().top 
          });
          return false;
     }
     else {
      if (bef_title.length > 100) {
          alert("please do not change any html code");
          var data = 'changing title length';
          var errormessage = encodeURIComponent(data);
          var path = encodeURIComponent('articlewysiwyg.js/changing the html code(title_length)');
          $.post("senderror.php", 
          {
            'errormessage': errormessage,
            'path': path  
          });
       return false;
     }
     else if (bef_title.length <= 10 || bef_title.length > 100) {
          $("#article_title_ack").css("display", "block");
          $("#article_title_ack").html("Title length has to be atleast in between 10 to 150 characters.");
          $("html, body").animate({
             'scrollTop': $("#article_title").position().top 
          });
          return false;
     }
     else if (article_content_bef.length < 15) {
          alert("Your article is very small. Please add more content to this article.");
          return false;
     }
     else {
          article_title = encodeURIComponent(bef_title);
          article_content = encodeURIComponent(article_content_bef);
          var formdata = new FormData();
          formdata.append('uid', uid);
          formdata.append('article_title', article_title);
          formdata.append('article_content', article_content);
          formdata.append('imagepath', imagepath);
          formdata.append('video1', video1);
          formdata.append('video2', video2);
          formdata.append('video3', video3);
          formdata.append('video4', video4);
          formdata.append('video5', video5);
          formdata.append('youtube', youtube);
          formdata.append('linkedin', linkedin);
          formdata.append('twitter', twitter);
          formdata.append('instagram', instagram);
          formdata.append('facebook', facebook);
          formdata.append('rejected_reason', rejected_reason);
          $(".preloader").css('display', 'block');  
          $.ajax({
              type: 'POST',
              url: 'rejectArticleInHold.php',
              data: formdata,
              cache:false,
              processData: false,
              contentType: false,
              success: function(bef_data) {
                  $(".preloader").css('display', 'none');
                  $("#myModal4").modal('hide');
                  var data = $.trim(bef_data);
                  if (data === 'success') {
                      $('#myModal1').modal({
                          backdrop: 'static',
                          keyboard: false
                      });
                      $("#close-popup1").click(function(){
                          location.reload();
                      });
                  } else {                      
                      if (data === 'login') {
                          window.location = "https://sabiduria.in/login";
                       }
                      else if (data === '404') {
                          window.location = "https://sabiduria.in/holded_articles.php";                        
                      }
                      else if (data === 'unauthorized') {
                        var idata = 'Unauthorized user accessed articleonhold.php.';
                        var errormessage = encodeURIComponent(idata);
                        var path = encodeURIComponent('articleonhold.js/(sub)publishArticleInHold.php/error=unauthorized');
                        $.post("https://sabiduria.in/senderror.php", 
                        {
                         'errormessage': errormessage,
                         'path': path  
                        });
                        alert("There is something problem please try again later.");
                        window.location = "https://sabiduria.in/login";
                    }
                    else if (data === 'codechanged') {
                        var idata = 'Code changed by the user.';
                        var errormessage = encodeURIComponent(idata);
                        var path = encodeURIComponent('articleonhold.js/(sub)publishArticleInHold.php/error=codechanged');
                        $.post("https://sabiduria.in/senderror.php", 
                        {
                         'errormessage': errormessage,
                         'path': path  
                        });
                        alert("Please do not change any html, javascript or any code");
                        window.location = "https://sabiduria.in/blogger";
                    }
                    else if (data === 'titleexists') {
                        $("#article_title_ack").css("display", "block");
                        $("#article_title_ack").html("There is some article exists with the same title.");
                        $("html, body").animate({
                           'scrollTop': $("#article_title").position().top 
                        });
                    }
                      else {
                          alert("There is something problem. Please try again later.");
                          var errormessage = encodeURIComponent(data);
                          var path = encodeURIComponent('articlewysiwyg.js/(sub)articlesendtohold.php/error=else');
                          $.post("https://sabiduria.in/senderror.php", 
                          {
                           'errormessage': errormessage,
                           'path': path  
                          });
                      } 
                  }
              }
          });
         }
      }   
    });
 });
 /*
$(document).ready(function() {
    $("#reject_this_article").click(function() {
        var reason_bef = $.trim($("#textarea_box").val());
        var reason = encodeURIComponent(reason_bef);
        if (reason_bef.length < 30) {
            alert("There must be atleast 30 characters in the reject reason.");
            return false;
        }
        else {
     var article_hash = getParameterByName('q');
    $.ajax({
        type: 'POST',
        url: 'rejectarticleinhold.php',
        data: {
            'article_hash': article_hash,
            'rejected_reason': reason
        },
        success: function(bef_data) {
            var data = $.trim(bef_data);
            $i = 0;
            if (data === '1') {
                alert('Please do not change any html code');
                var idata = 'Changing html and js code.';
                     var errormessage = encodeURIComponent(idata);
                     var path = encodeURIComponent('articleonhold.js/(sub)rejectarticleinhold.php/error=1');
                     //$.post("https://www.sabiduria.in/index.php/senderror.php", 
                     $.post("https://sabiduria.in/senderror.php", 
                     {
                      'errormessage': errormessage,
                      'path': path  
                 });
                    location.reload(true);
             }
             else if (data === '2'){
                alert('There is something problem. please contact us for more details');
                var idata = data;
                     var errormessage = encodeURIComponent(idata);
                     var path = encodeURIComponent('articleonhold.js/(sub)rejectarticleinhold.php/error=2');
                     //$.post("https://www.sabiduria.in/index.php/senderror.php", 
                     $.post("https://sabiduria.in/senderror.php", 
                     {
                      'errormessage': errormessage,
                      'path': path  
                 });

                //window.location = "https://www.sabiduria.in/index.php/loginform.html";
                window.location = 'https://sabiduria.in/login';
             }
             else if (data === 'loginform') {
                //window.location = "https://www.sabiduria.in/index.php/loginform.html";
                window.location = 'https://sabiduria.in/login';   
             }
             else if (data === 'success') {
                //window.location = "https://www.sabiduria.in/index.php/.../articleonholdlisttopublish.php";
                window.location = "http://localhost/dashboard/sabiduria/articles/articleonholdlisttopublish.php";
             }
             else if (data === 'norows') {
                var idata = 'There are no rows in articleonhold(db:holdedarticles) with this hashed_title';
                var errormessage = encodeURIComponent(idata);
                var path = encodeURIComponent('articleonhold.js/(sub)rejectarticleinhold.php/error=norows');
                //$.post("https://www.sabiduria.in/index.php/senderror.php", 
                $.post("https://sabiduria.in/senderror.php", 
                {
                 'errormessage': errormessage,
                 'path': path  
            });
            //window.location = 'https://www.sabiduria.in/index.php/.../articleonholdlisttopublish.php';
            window.location = 'articleonholdlisttopublish.php';

        }
             else {
                var idata = data;
                     var errormessage = encodeURIComponent(idata);
                     var path = encodeURIComponent('articleonhold.js/(sub)rejectarticleinhold.php/error=else');
                     //$.post("https://www.sabiduria.in/index.php/senderror.php", 
                     $.post("https://sabiduria.in/senderror.php", 
                     {
                      'errormessage': errormessage,
                      'path': path  
                 });
                    alert('Please paste your article somewhere and try again');
                    $i++;
                    if ($i == 5) {
                        location.reload(true);
                    }
             }
        }
    });
        }
    });
});
*/