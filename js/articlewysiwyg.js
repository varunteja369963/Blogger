$(document).ready(function() {
    $(".preloader").css('display', 'none');
});

//################## NAVIGATION BAR #################
$(document).click(function() {
  $(document).click(function(e) {
    if (e.target.id != 'user-popup-panel' && !$('#user-popup-panel').find(e.target).length) {
      $("#user-popup-panel").addClass('hide');
      $("#caret-down-icon").removeClass('fa-caret-up');
      $("#caret-down-icon").addClass('fa-caret-down');
    }
  });
});


//############### MENU ITEMS CODE ###############
$(document).ready(function() {
    if ($(window).width() < 539) { 
        $("#menu").removeClass('container').addClass('span_to_specific_width');
     $(".format_1, .format_2, .format_3, .format_4, .format_5, .format_6, .format_7, .format_8, .format_9").removeClass('col col-md-2 col-lg col-lg-1');
     $(".format_1, .format_2, .format_3, .format_4, .format_5, .format_6, .format_7, .format_8, .format_9").addClass('menu_items');   
    }
    $(window).resize(function() { 
    if ($(window).width() < 539) { 
        $("#menu").removeClass('container').addClass('span_to_specific_width');
     $(".format_1, .format_2, .format_3, .format_4, .format_5, .format_6, .format_7, .format_8, .format_9").removeClass('col col-md-2 col-lg col-lg-1');
     $(".format_1, .format_2, .format_3, .format_4, .format_5, .format_6, .format_7, .format_8, .format_9").addClass('menu_items');   
    }
    else {
        $("#menu").removeClass('span_to_specific_width').addClass('container');
        $(".format_1, .format_2, .format_3, .format_4, .format_5, .format_6, .format_7, .format_8, .format_9").addClass('col');
        $(".format_1, .format_2, .format_3, .format_4, .format_5, .format_6, .format_7, .format_8, .format_9").removeClass('menu_items');      
    }
  });
});

window.addEventListener("load", function(){
    var status1 = false; 
    var status2 = false; 
    var status3 = false; 
    var status4 = false; 
    var status5 = false; 
    var status6 = false;  
    var status7 = false;
    var status8 = false;

     Bold.addEventListener("click", function(){ 
        $(document).ready(function() {
            if ($(document).find(".article-frame").length <= 0) {
                $(document).find(".non-frame").css("opacity", "0.3");
                return false;
            }
            else {
                $(document).find(".non-frame").css("opacity", "1.0");
            }        
        });

        if (document.execCommand("Bold", false, null)) { 
            if (!status1) {
                document.getElementById("Bold").style.border = "1px solid #000000";
                status1 = true;
        }
        else {
                document.getElementById("Bold").style.border = "none";                       
                status1 = false;
        }
    }   
        var div = document.getElementById('article_display');
setTimeout(function() {
    div.focus();
}, 0);
},false);

Italic.addEventListener("click", function(){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

    if (document.execCommand("Italic", false, null)) { 
        if (!status2) {
                document.getElementById("Italic").style.border = "1px solid #000000";
                status2 = true;
        }
        else {
                document.getElementById("Italic").style.border = "none"                                  
                status2 = false;
        }
        var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
    }
},false);
  
Underline.addEventListener("click", function(){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

    if (document.execCommand("Underline", false, null)) { 
        if (!status3) {
                document.getElementById("Underline").style.border = "1px solid #000000";
                status3 = true;
        }
        else {
            document.getElementById("Underline").style.border = "none";                                     
                status3 = false;
        }
    }
        var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
},false);

 Strike.addEventListener("click", function(){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

    if (document.execCommand("Strikethrough", false, null)) { 
         if (!status4) {
            document.getElementById("Strike").style.border = "1px solid #000000";                
                status4 = true;
        }
        else {
                document.getElementById("Strike").style.border = "none";                     
                status4 = false;
        }
    }
        var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
},false);

orderedList.addEventListener("click", function(){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

    if (document.execCommand("InsertOrderedList", false, "newOL" + Math.round(Math.random() * 1000))) { 
         if (!status5) {
            document.getElementById("orderedList").style.border = "1px solid #000000";
                status5 = true;
        }
        else {
                document.getElementById("orderedList").style.border = "none";                     
                status5 = false;
        }
    }
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
},false);

    unorderedList.addEventListener("click", function(){
        $(document).ready(function() {
            if ($(document).find(".article-frame").length <= 0) {
                $(document).find(".non-frame").css("opacity", "0.3");
                return false;
            }
            else {
                $(document).find(".non-frame").css("opacity", "1.0");
            }        
        });

       if (document.execCommand("InsertUnorderedList", false, "newOL" + Math.round(Math.random() * 1000))) { 
         if (!status6) {
            document.getElementById("unorderedList").style.border = "1px solid #000000";
                status6 = true;
        }
        else {
                document.getElementById("unorderedList").style.border = "none";                    
                status6 = false;
        }
    }
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
},false);

sup.addEventListener("click", function(){
        $(document).ready(function() {
            if ($(document).find(".article-frame").length <= 0) {
                $(document).find(".non-frame").css("opacity", "0.3");
                return false;
            }
            else {
                $(document).find(".non-frame").css("opacity", "1.0");
            }        
        });

    if (document.execCommand("Superscript", false, null)) { 
        if (!status7) {
           document.getElementById("sup").style.border = "1px solid #000000";
               status7 = true;
       }
       else {
               document.getElementById("sup").style.border = "none";                    
               status7 = false;
       }
   }
   var div = document.getElementById('article_display');
   setTimeout(function() {
       div.focus();
   }, 0);
},false);

sub.addEventListener("click", function(){
        $(document).ready(function() {
            if ($(document).find(".article-frame").length <= 0) {
                $(document).find(".non-frame").css("opacity", "0.3");
                return false;
            }
            else {
                $(document).find(".non-frame").css("opacity", "1.0");
            }        
        });

    if (document.execCommand("Subscript", false, null)) { 
    if (!status8) {
        document.getElementById("sub").style.border = "1px solid #000000";           
           status8 = true;
   }
   else {
           document.getElementById("sub").style.border = "none";                       
           status8 = false;
   }
}
   var div = document.getElementById('article_display');
   setTimeout(function() {
       div.focus();
   }, 0);
},false);

alignleft.addEventListener("click", function(){
        $(document).ready(function() {
            if ($(document).find(".article-frame").length <= 0) {
                $(document).find(".non-frame").css("opacity", "0.3");
                return false;
            }
            else {
                $(document).find(".non-frame").css("opacity", "1.0");
            }        
        });

        if (document.execCommand("justifyleft", false, null)) { 
                document.getElementById("alignleft").style.border = "1px solid #000000";
            document.getElementById("aligncenter").style.border = "none";      
        document.getElementById("alignright").style.border = "none";                                     
    }
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
},false);

aligncenter.addEventListener("click", function(){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

        if (document.execCommand("justifycenter", false, null)) { 
            document.getElementById("alignleft").style.border = "none";
            document.getElementById("aligncenter").style.border = "1px solid #000000";      
        document.getElementById("alignright").style.border = "none";  
        }
        var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
},false);

     alignright.addEventListener("click", function(){
        $(document).ready(function() {
            if ($(document).find(".article-frame").length <= 0) {
                $(document).find(".non-frame").css("opacity", "0.3");
                return false;
            }
            else {
                $(document).find(".non-frame").css("opacity", "1.0");
            }        
        });

        if (document.execCommand("justifyright", false, null)) { 
            document.getElementById("alignleft").style.border = "none";
            document.getElementById("aligncenter").style.border = "none";      
        document.getElementById("alignright").style.border = "1px solid #000000";
        }
        var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
},false);

textcolor.addEventListener("change",function(event){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

    document.execCommand("ForeColor", false, event.target.value); 
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
},false);

backcolor.addEventListener("change",function(event){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

    document.execCommand("BackColor", false, event.target.value); 
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);  
},false);

/*
auto.addEventListener("click", function(){
        document.execCommand("FontSize", false, "3");
        var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
},false);

font_size.addEventListener("change", function(){
    var get_size = document.getElementById("font_size");
    var size = get_size.options[get_size.selectedIndex].value;
     if (size === "h1") {
        document.execCommand("FontSize", false, "7");
    }
    else if (size === "h2") {
        document.execCommand("FontSize", false, "6");
    }
    else if (size === "h3") {
        document.execCommand("FontSize", false, "5");
    }
    else if (size === "h4") {
        document.execCommand("FontSize", false, "4");
    }
    else if (size === "h5") {
        document.execCommand("FontSize", false, "2");
    }
    else {
        var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
        return false;
    }
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
}, false);*/

Link.addEventListener("click", function(){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });

    var url = prompt("Enter a URL", "http://");
    document.execCommand("CreateLink", false, url);
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
},false);

Unlink.addEventListener("click", function(){
    $(document).ready(function() {
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    });
        
    document.execCommand("UnLink", false, null);
    var div = document.getElementById('article_display');
    setTimeout(function() {
        div.focus();
    }, 0);
},false);
 });

 //START: insert new line into article editor
$(document).ready(function(){
    $("#new_line").click(function(){
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        }        
    
      var html = "<div><br/></div>";
      insertAtCaret(html);
      var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
    });
  });
//END: insert new line into article editor

//START: insert horizontal rule
$(document).ready(function(){
    $("#horizontal_rule").click(function(){
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        } 

        var html = "<div class = 'horizontal_rule_line'></div>";
        html += "<div><br/></div>";
        insertAtCaret(html);
        var div = document.getElementById('article_display');
        setTimeout(function() {
            div.focus();
        }, 0);
    });
  });
//END: insert horizontal rule

//START: insert background for code
$(document).ready(function(){
    $("#code").click(function(){
        if ($(document).find(".article-frame").length <= 0) {
            $(document).find(".non-frame").css("opacity", "0.3");
            return false;
        }
        else {
            $(document).find(".non-frame").css("opacity", "1.0");
        } 

        var html = "<pre id = 'code_goes_here'></pre>";
        insertAtCaret(html);
        setTimeout(function() {
            div.focus();
        }, 0);
    });
  });
//END: insert code background for code

//START: insert table into article editor
$(document).ready(function(){
    $("#table").click(function(){
        $("#myModal3").modal();
    });
});

    var no_of_tables = 1;
var no_of_frames = 1;
$(document).ready(function(){ 
        $("#create_table").click(function() {
        $("#myModal3").modal('hide');
            var no_of_rows = $("#no_of_rows").val();
            var no_of_columns = $("#no_of_columns").val();
        if ($.isNumeric(no_of_rows) && $.isNumeric(no_of_columns)) {
            if (no_of_rows > 100) {
               $("#column_ack").html("");
               $("#row_ack").html("You cannot make table with more than 250 rows for user better experience.");
               return false;
            }  
            else {
               if (no_of_columns > 250) {
                  $("#row_ack").html("");
                  $("#column_ack").html("You cannot make table with more than 100 coumns for user better experience.");
                  return false;
               }
               else if (no_of_rows < 1) {
                $("#column_ack").html("");
                $("#row_ack").html("You cannot make table with less than one row.");
                return false;
               } 
               else if (no_of_columns < 1) {
                $("#row_ack").html("");
                $("#column_ack").html("You cannot make table with less than one column.");
                return false; 
               }
               else {
                  var table_id = "table" + no_of_tables;
                  var final_table = '';
                  final_table += "<div class = 'table_in_editor' id = " + table_id + " data-rows = " + no_of_rows + " data-columns = " + no_of_columns +">";
                  final_table += "<table cellspacing = '0' class = 'table_border'>";
                  for (var i = 0; i < no_of_rows; i++) {
                      if (i == 0) {
                          final_table += "<thead><tr>";
                          for (var j = 0; j < no_of_columns; j++) {
                              final_table += "<th></th>";
                          }
                          final_table += "</tr></thead>";
                      }
                      else {
                      final_table += "<tr>";
                      for (var j = 0; j < no_of_columns; j++) {
                          final_table += "<td></td>";
                      }
                      final_table += "</tr>";
                      }
                  }
                  final_table += '</table>';
                  final_table += '</div>';
                  no_of_tables++;
                  insertAtCaret(final_table);
               }
            }
        }
        else {
            if (!$.isNumeric(no_of_rows)) {
               $("#column_ack").html("");
            $("#row_ack").html("please enter only integer between 1 - 250");              
            }
            else if (!$.isNumeric(no_of_columns)) {
               $("#row_ack").html("");
                $("#column_ack").html("please enter only integer between 1 - 100");
            }
            else {
            $("#row_ack").html("please enter only integer between 1 - 250");  
            $("#column_ack").html("please enter only integer between 1 - 100");
            }
            return false;
        }
        });

var this_id;
  $(document).on("contextmenu", ".table_in_editor", function(e){
      e.preventDefault();
      this_id = $(this).attr('id');
     $(".context_window").finish().toggle(100).
     css({
         top: e.pageY + "px",
         left: e.pageX + "px"
     });
  });

  $("#add_row").click(function(){
    var column_count = $("#"+this_id).data('columns');
    var inner_html = '';
    inner_html += "<tr class = 'table_row'>";
    for (var j = 0; j < column_count; j++) {
        inner_html += "<td class = 'data'></td>";
    }
    inner_html += "</tr>";
 $("#"+this_id).find("table").append(inner_html); 
 $("#context_window").css("display", "none");
});

$("#add_column").click(function() {
    $("#"+this_id).find("table").find('thead').find('tr').append("<th></th>");
    var t_body = $("#"+this_id).find("table").find('tbody').find('tr');
    t_body.append("<td></td>");
 $("#context_window").css("display", "none");
});

$("#delete_table").click(function(){
    $("#"+this_id).remove();
    $("#context_window").css("display", "none");
   });

   $(document).bind("mousedown", function (e) {
    if (!$(e.target).parents("#context_window").length > 0) {
        $("#context_window").hide(100);
    }
  });
});
//END: inserting table into article editor


//START: create frame when insert-para is clicked
var code = 500000;
var frameNumber = 0;
$(document).ready(function() {
   $("#insert-para").click(function() {
    code = code+1;
    frameNumber = frameNumber+1;
  
    if ($("#article_display").find('#'+code).length>0) {
        return false;
    }
    
   if ($("#article_display").css("display") !== "block") {
       $("#article_display").css("display", "block");
       $("#fake_article_display").css("display", "none");
   }

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
   $("#article_display").append('<div class = "article-frame" id = "'+code+'"><p><br/></p></div>');
   $("#cms-content").find("#frames-carrier").append(frameCode);
   $("#article_display").focus();

   $("#cms-right-heading").html("<span class = 'header-message'>Manage Frames</span><i class = 'fab fa-buromobelexperte header-icon'></i>");
     
   $("#settings-carrier").css("display", "none");
   $("#frames-carrier").css("display", "block");
   $("#images-carrier").css("display", "none");
   $("#videos-carrier").css("display", "none");
   $("#social-meida-carrier").css("display", "none");
   $("#frames-in-article-button").css("opacity", "0.4"); 
   $("#settings-button").css("opacity", "1.0"); 
   $(document).find(".non-frame").css("opacity", "1.0");
  });
});
//END: create frame when insert-para is clicked

//############### MENU ITEMS CODE ###############


//START: make fixed left and right containers to move below the sticky-top options
$(document).ready(function() {
    var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#options_for_editor').offset().top,
    distance      = (elementOffset - scrollTop);
    var height = $("#options_for_editor").innerHeight();
    total_height = distance + height;
    if ($(window).width() < 800 && $(window).width() > 709) { 
        $("#left-menu-box").css("top", "auto");
        $("#cms-right").css("top", (total_height + 30) + 'px');
    } else if ($(window).width() < 710) {
            $("#left-menu-box").css("top", "auto");
        $("#cms-right").css("top", (total_height) + 'px');   
    }
    else {
        $("#left-menu-box").css("top", (total_height + 0)+ 'px');
        $("#cms-right").css("top", (total_height + 30) + 'px');
    }

    $(window).on('scroll resize', function(){
        var scrollTop     = $(window).scrollTop(),
        elementOffset = $('#options_for_editor').offset().top,
        distance      = (elementOffset - scrollTop);
        var height = $("#options_for_editor").innerHeight();
        total_height = distance + height;

        if ($(window).width() < 800) { 
            $("#left-menu-box").css("top", "auto");
            $("#cms-right").css("top", (total_height + 30) + 'px');
        } else {
            $("#left-menu-box").css("top", (total_height + 0)+ 'px');
            $("#cms-right").css("top", (total_height + 30) + 'px');
        }
     });
}) 
 //END: make fixed left and right containers to move below the sticky-top options

 
  //############### TITLE BOX CODE ###############

//START: Expand title textbox as text increases and counting the length of title
$(document).ready(function() { 
    $("#article_title").on('keyup', function(e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);

        var title_text = $("#article_title").val();
        if (keycode == "32") {
            if (/\s{2,}/.test(title_text)) { 
            title_text = title_text.replace(/\s\s+/g, ' ');
            $("#article_title").val(title_text);
            return false;
            }
        }
        count = 100;
        length = title_text.length;
        count = count - length;
     $("#count").text(count + " characters left");
});
});

$(document).ready(function() { 
    $("#article_title").on('keypress', function(e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13' && !e.shiftKey) { 
            e.preventDefault(); 
            return false;
        }
    });
});

$(document).ready(function() { 
    $('#article_title').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px');
    }).on('input', function () {
    if ($("#article_title").val().length > 0 && $("#article_title").val().length < 3) {
    if ($(window).width() < 1000) { 
        this.style.height = '75px';
    } else {
        this.style.height = '100px';
    }
    }
    else if ($("#article_title").val().length < 1) {
        if ($(window).width() <= 1000) { 
            this.style.height = '80px';
        } else {
            this.style.height = '105px';
        }
    }
    else { 
    this.style.height = (this.scrollHeight) + 'px';
    }
  });
 });
//END: Expand title textbox as text increases and counting the length of title

 //############### TITLE BOX CODE ###############


 //############### OPERATIONS IN ARTICLE EDITOR COMES HERE ###############
 function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
    }
}

function insertAtCaret(html) {
document.getElementById('article_display').focus();
pasteHtmlAtCaret(html);
return false;
}
//END: include code into article editor

//START: preventing the unwanted css when content is pasted and prevents from image pasting into editor
$(document).ready(function(){ 
    $('.article_display').on("paste" ,function(e) {
           var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
           e.preventDefault();
           document.execCommand('insertText', false, bufferText);  
   });
       });
   //END: preventing the unwanted css when content is pasted and prevents from image pasting into editor

 //############### OPERATIONS IN ARTICLE EDITOR COMES HERE ###############



//############## LEFT PANEL CONTROL CODE ################

//START: show icon text when hovered on it
/*
$(document).ready(function() {
    $("#frames-icon, #frames-icon-name").on('mouseover', function() {
      $("#frames-icon-name").css({"display": "block", "width": "auto"});
    });                                                                                 
    $("#manage-frames").on('mouseout', function() {
      $("#frames-icon-name").css("display", "none");
    });
  
    $("#social-icons, #social-icons-name").on('mouseover', function() {
      $('#social-icons-name').css("display", "block");
    });
    $("#manage-social-icons").on('mouseout', function() {
      $('#social-icons-name').css("display", "none");
    });
  
    $("#image-icon, #image-icon-name").on('mouseover', function() {
      $('#image-icon-name').css("display", "block");
    });
    $("#manage-images").on('mouseout', function() {
      $('#image-icon-name').css("display", "none");
    });
  
    $("#video-icon, #video-icon-name").on('mouseover', function() {
      $('#video-icon-name').css("display", "block");
    });
    $("#manage-videos").on('mouseout', function() {
      $('#video-icon-name').css("display", "none");
    });
  });
  */
//END: show icon text when hovered on it
  
//START: implementing operation on cms content when left buttons are clicked
$(document).ready(function() {
    $("#cms-right-heading").html("<span class = 'header-message'>Manage Frames</span><i class = 'fab fa-buromobelexperte header-icon'></i>");

    $("#close-cms-right").click(function() {
        if ($(window).width() < 710) {
            $('#cms-right-small-devices').hide();
        }
    });

    $("#manage-frames").click(function() {
        if ($(window).width() < 710) {
            $('#cms-right-small-devices').show();
        }
        $("#cms-right-heading").html("<span class = 'header-message'>Manage Frames</span><i class = 'fab fa-buromobelexperte header-icon'></i>");
     
        $("#frames-carrier").css("display", "block");
        $("#images-carrier").css("display", "none");
        $("#videos-carrier").css("display", "none");
        $("#social-meida-carrier").css("display", "none"); 
    });

    $("#manage-images").click(function() {
        if ($(window).width() < 710) {
            $('#cms-right-small-devices').show();
        }
        $("#cms-right-heading").html("<span class = 'header-message'>Manage Images</span><i class = 'fas fa-images header-icon'></i>");
          
        $("#settings-carrier").css("display", "none");
        $("#frames-carrier").css("display", "none");
        $("#images-carrier").css("display", "block");
        $("#videos-carrier").css("display", "none");
        $("#social-meida-carrier").css("display", "none");
    });

    $("#manage-videos").click(function() {
        if ($(window).width() < 710) {
            $('#cms-right-small-devices').show();
        }
        $("#cms-right-heading").html("<span class = 'header-message'>Manage Videos</span><i class = 'fab fa-youtube header-icon'></i>");
          
        $("#settings-carrier").css("display", "none");
        $("#frames-carrier").css("display", "none");
        $("#images-carrier").css("display", "none");
        $("#videos-carrier").css("display", "block");
        $("#social-meida-carrier").css("display", "none");
    });

      $("#manage-social-icons").click(function() {
        if ($(window).width() < 710) {
            $('#cms-right-small-devices').show();
        }
        $("#cms-right-heading").html("<span class = 'header-message'>social media</span><i class = 'fab fa-youtube header-icon'></i><i class = 'fab fa-linkedin header-icon'></i><i class = 'fab fa-twitter header-icon'></i><i class = 'fab fa-instagram header-icon'></i><i class ='fab fa-facebook-f'></i>");
        
        $("#settings-carrier").css("display", "none");
        $("#frames-carrier").css("display", "none");
        $("#images-carrier").css("display", "none");
        $("#videos-carrier").css("display", "none");
        $("#social-meida-carrier").css("display", "block");
        });
  });
  //END: implementing operation on cms content when left buttons are clicked
  
//############## LEFT PANEL CONTROL CODE ################


//############### MANAGE FRAME CODE ##################

//START: controlling the decoration of frames
$(document).ready(function() {
    $(document).on("click", ".frame-container", function() {
        var frameData = $(this).data("di3ico");
        $("#article_display").find("#"+frameData).addClass('decorate-frame');
        $("#close-"+frameData).css("display", "block");
        $("#frame"+frameData).css("width", '80%');
    });

    $(document).on("click", ".close-frame-container", function() {
        var closeFrameData = $(this).data("di3ico");
        $("#article_display").find("#"+closeFrameData).removeClass('decorate-frame');
        $("#close-"+closeFrameData).css("display", "none");
        $("#frame"+closeFrameData).css("width", '100%');
    });

    $(document).on("click", ".delete-frame", function() {
        var deleteFrameData = $(this).data("di3ico");
        verify = confirm("This action cann't be revert back. Are you sure about your action?");
        if (verify === true) {
        $("#"+deleteFrameData).remove();
        $("#container-"+deleteFrameData).remove();
        if ($(document).find(".article-frame").length <= 0) {
          $(document).find(".non-frame").css("opacity", "0.3");
          code = 500000;
          frameNumber = 0;  
          $("#article_display").css("display", "none");
          $("#fake_article_display").css("display", "block");
        }
    }
    });
});
//END: controlling the decoration of frames

//############### MANAGE FRAME CODE ##################


//############### MANAGE IMAGE CODE ###################

//START: reducing backgound opacity when image button is clicked
$(document).ready(function() {
    $("#file_button").click(function() {
       $("#insert_image").css({"display": "block"}); 
       $("#display_article_and_ads").css("opacity", "0.2");
       $("#options_for_editor").css("opacity", "0.2");
    });
   });
   //END: reducing backgound opacity when image button is clicked

// onDrop
function onDrop(evt) {
    var href="";
    var imageUrl = "";
    evt.stopPropagation();
    evt.preventDefault();
  
    var url = evt.dataTransfer.getData("URL");
    alert(url);
    //href = url.match(/href="([^"]*)/g)[1];
    //alert(href);
    //return false;
/*
    if (href) { 
        alert(href[1]);
        if(href.length>0) {
            imageUrl = href;
        }
        else {
            imageUrl = "#no-image";
            return false;
        }
    }

    if (imageUrl == '' || imageUrl == null || imageUrl == undefined) {
        alert("You cannot upload images from your local machine. Please upload from facebook, google or any other social media.")
    }
    else {
       $("#dropped_image_info").css("display", "block");
       var droppedHTML = $("#dropped_image_blind").html(imageUrl);
        src = $(droppedHTML).find("img").attr("src");
       $("#dropped_image").html("<img src = " + imageUrl + " width = '150px' height = '150px' data-render-location='newsstand' crossorigin='anonymous'/>");
       $("#dropped_image_data").html(imageUrl);
    } */ 
};

//START: cancel inserting image
$(document).ready(function() {
    $("#cancel_image").click(function() {
        $("#insert_image").css({"display": "none"}); 
        $("#display_article_and_ads").css("opacity", "1");
        $("#options_for_editor").css("opacity", "1");
    });
});
//END: cancel inserting image

//START: inserting image in article display
var image_inc = 1;
$(document).ready(function() {
 $("#save_image").click(function(){
    var width;
    var height;
var image_id = 'image';
     image_id = image_id + image_inc;
    image_inc++;
    var width_entered = $("#width_box").val();
    var height_entered = $("#height_box").val();
    var url_in_box = $("#url_textbox").val();

   if (width_entered == "" || width_entered == null || width_entered.length < 1) {
    width = 200;
 }
 else {
    if ($.isNumeric(width_entered)) {
            width = width_entered;
      }
      else {
          $("#size_ack").html("width has to be in numbers");
          return false;
      }
 }
  
   if (height_entered == "" || height_entered == null || height_entered.length < 1) {
    height = 200;
    }
    else {
        if ($.isNumeric(height_entered)) {
                height = height_entered;
        }
        else {
            $("#size_ack").html("height has to be in numbers");
               return false;
        }
    }

var align_place;
    if ($('#right_align').is(":checked")) {
         align_place = $("#right_align").val();
    }
    else if ($('#center_align').is(":checked")) {
        align_place = $("#center_align").val();
    }
    else if ($('#right_align').is(':checked')) {
        align_place = $("#left_align").val();
    }
    else {
        align_place = "left";
    }

    width += 'px';
    height += 'px';

if (url_in_box == "" || url_in_box.length < 1) {
  if (src == "" || src == null || src.length < 1) {
    $("#insert_image").css({"display": "none"}); 
    $("#display_article_and_ads").css("opacity", "1");
    $("#options_for_editor").css("opacity", "1");
return false;
  }
  else {
  $("#article_display").append("<img src = " + src + " width = "+ width +" height = " + height +" id = "+image_id+">");
if (align_place === "right") {
    $("#"+image_id).css({"margin": "35px 15px 35px 35px"});
    $("#"+image_id).css({"float": "right", "clear": "both"});
}
else if (align_place === "center") {
$("#"+image_id).css({"margin-left": "auto", "margin-right": "auto", "display": "block"});
}
else {
    $("#"+image_id).css({"margin": "35px 35px 35px 15px"});
    $("#"+image_id).css({"float": "left", "clear": "both"});
}

  $("#insert_image").css({"display": "none"}); 
  $("#display_article_and_ads").css("opacity", "1");
  $("#options_for_editor").css("opacity", "1");
  }
}
else {
    src = url_in_box;
    
$("#article_display").append("<img src = " + src + " width = "+ width +" height = " + height +" id = "+image_id+">"); 
if (align_place === "right") {
    $("#"+image_id).css({"margin": "35px 15px 35px 35px"});
    $("#"+image_id).css({"float": "right", "clear": "both"});
}
else if (align_place === "center") {
$("#"+image_id).css({"margin-left": "auto", "margin-right": "auto", "display": "block"});
}
else {
    $("#"+image_id).css({"margin": "35px 35px 35px 15px"});
    $("#"+image_id).css({"float": "left", "clear": "both"});
}

$("#insert_image").css({"display": "none"}); 
$("#display_article_and_ads").css("opacity", "1");
$("#options_for_editor").css("opacity", "1"); 
}
 });
});
//END: inserting image article display

// onDragOver
function onDragOver(evt){
    evt.preventDefault();
}
/*
window.addEventListener("load", function() {
var dropbox = document.getElementById('dropbox');
dropbox.addEventListener('drop', onDrop);
dropbox.addEventListener("dragover", onDragOver, false);
});*/

//START: preventing from drag and drop of images and etc
$(document).ready(function() {
    $(document).on("dragover drop", function(e) {
        e.preventDefault();
    });
});
//END: preventing from drag and drop of images and etc

//############### MANAGE IMAGE CODE ###################


//################# MANAGE VIDEO CODE ###################
/* START: maintain video aspect ratio 16:9 */
$(document).ready(function() {
    $(window).resize(function() {
        var w = $("#article_display").width();
        w = w*(90/100);
        var f_h = (w/16)*9;
        
        $(document).find(".vedioembbed").css("width", w);
        $(document).find(".vedioembbed").css("height", f_h);
    });
 });
 /* END: maintain video ratio 16:9 */

//START: for including vedio into article editor
var video_val = 0;
$(document).ready(function(){
$("#video").click(function(){
    $("#cms-right-heading").html("<span class = 'header-message'>Manage Videos</span><i class = 'fab fa-youtube header-icon'></i>");
          
    $("#settings-carrier").css("display", "none");
    $("#frames-carrier").css("display", "none");
    $("#images-carrier").css("display", "none");
    $("#videos-carrier").css("display", "block");
    $("#social-meida-carrier").css("display", "none");

     var url1_before = prompt("Enter a URL", "http://");
     if (url1_before == null) {
             return false;
     }
var res = url1_before.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
if (res == null) { 
alert("Please enter a valid url");
return false;
}
if (url1_before.length === 43) { 
if (url1_before.substring(0, 32) === 'https://www.youtube.com/watch?v=') {
var string = url1_before.substring(32, 43);
embbedvideo();
}
else {
    alert("Please enter a valid youtube url.");
    return false;    
}
}
else if (url1_before.length === 28) {
    if (url1_before.substring(0, 17) === 'https://youtu.be/') {
        var string = url1_before.substring(17, 28);
    embbedvideo();
}
else {
    alert("Please enter a valid youtube url.");
    return false;    
}
}
else {
    alert("Please enter a valid youtube url.");
    return false; 
}

function embbedvideo() {
    var slot_alloted = true;
    var video_count=0;

    for (let i=1; i <= 5; i++) {
        if ($("#article_display").find('#videoDiv-'+i).length>0) {
            continue;
        }
        else {
            $("#video-container-"+i).html("");
        }
    }

    for (let i=1; i <= 5; i++) {
           if ($("#article_display").find('#videoDiv-'+i).length>0) {
               video_count++;
               if (video_count == 5) {
                   slot_alloted = false;
               }
           }
           else {
               video_val = i;
               break;
           }
    }

    if (slot_alloted === true) {
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

    var $embbedVideo = "<div><br/></div><div id = 'videoDiv-"+video_val+"' data-url = "+string+"><iframe class = 'vedioembbed' id = 'video"+video_val+"' src='https://www.youtube.com/embed/"+string+"' frameborder= '0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>";
    $embbedVideo += "<div><br/></div>";
    insertAtCaret($embbedVideo);

    var w = $("#article_display").width();
    w = w*(90/100);
    var f_h = (w/16)*9;
    
    $(document).find(".vedioembbed").css("width", w);
    $(document).find(".vedioembbed").css("height", f_h);
    } else {
        alert("you cant load more than 5 videos");
    }
}
});
});
//END: for including vedio into article editor

//START: deleting video
$(document).ready(function() {
    $(document).on("click", ".delete-video", function() {
        var videoId = $(this).data("video-no");
       
        $("#videoDiv-"+videoId).remove();
        $("#video-container-"+videoId).html("");
    });
});

$(document).ready(function() {
    $(document).on("click", "select", function() {
        var videoId = $(this).data("video-no");
        var aspectName = $(this).val();
        if (aspectName === 'square') {
            var w = $("#article_display").width();
            if (w<500) {
                w=w*(90/100);
            }
            else {
                w = w*(60/100);
            }
            var f_h = w;
            $(document).find("#video"+videoId).css("width", w);
            $(document).find("#video"+videoId).css("height", f_h);
        }
        else {
            var w = $("#article_display").width();
            w = w*(90/100);
            var f_h = (w/16)*9;
            
            $(document).find("#video"+videoId).css("width", w);
            $(document).find("#video"+videoId).css("height", f_h);
        }
    });
});
//END: deleting video

//################# MANAGE VIDEO CODE ###################


$(document).ready(function() {
    $("#article_title").val("");
});

$(document).ready(function() {
    $("#modal2-footer").css("display", "none");
    $("#upload-banner-div").css("display", "none");
    $("#yes-radio").click(function() {
        $("#modal2-footer").css("display", "none");
        $("#upload-banner-div").css("display", "block");
        $("#upload-banner-form").css("display", "flex");
    });
    $("#no-radio").click(function() {
        $("#modal2-footer").css("display", "block");
        $("#upload-banner-div").css("display", "none");
    });
});

//START: posting the article
var canvas1 = 'no';
var canvas2 = 'no';
var privateUserIp = 'no';
var webgl = 'no';
var fingerPrintData;

$(document).ready(function() {
        getFingerprint();
        webRTC();
        webGL();
        canvasKeys();
});

function getFingerprint(){
    if (window.requestIdleCallback) {
        requestIdleCallback(function () {
            Fingerprint2.get(function (components) {
              fingerPrintData = components;
            })
        })
    } else {
        setTimeout(function () {
            Fingerprint2.get(function (components) {
              fingerPrintData = components;
            })  
        }, 500)
    }
}

function canvasKeys() {
var getUniqueKeys = {
    canvasFingerprint1: function() {
      var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'articles.sabiduria';
    ctx.textBaseline = "top";
    ctx.font = "16px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.rotate(.05);
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    ctx.shadowBlur=10;
    ctx.shadowColor="blue";
    ctx.fillRect(-20,10,234,5);
    var strng=canvas.toDataURL();
  
  document.body.appendChild(canvas);    
    
    var hash=0;
    if (strng.length==0) 
        return 'nothing!';
    for (var i = 0; i < strng.length; i++) {
    var char = strng.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash;
  }
  return hash;
  }, 
  
   canvasFingerprint2: function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'sabiduria.trackuser';
    ctx.textBaseline = "top";
    ctx.font = "16px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.rotate(.05);
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 200, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    ctx.shadowBlur=10;
    ctx.shadowColor="blue";
    ctx.fillRect(-20,10,234,5);
    var strng=canvas.toDataURL();
  
  document.body.appendChild(canvas);    
    
    var hash=0;
    if (strng.length==0) 
        return 'nothing!';
    for (var i = 0; i < strng.length; i++) {
    var char = strng.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash;
  }
  return hash;
  }
  }
  canvas1 = getUniqueKeys.canvasFingerprint1();
  canvas2 = getUniqueKeys.canvasFingerprint2();
}


function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
  //compatibility for firefox and chrome
  var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
      iceServers: []
  }),
  noop = function() {},
  localIPs = {},
  ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
  key;

  function iterateIP(ip) {
      if (!localIPs[ip]) onNewIP(ip);
      localIPs[ip] = true;
  }

     //create a bogus data channel

var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

    if(isIE || isEdge ||(navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
    }
    else  {
          pc.createDataChannel("");  
    }  
    

  // create offer and set local description
  pc.createOffer(function(sdp) {
      sdp.sdp.split('\n').forEach(function(line) {
          if (line.indexOf('candidate') < 0) return;
          line.match(ipRegex).forEach(iterateIP);
      });
      
      pc.setLocalDescription(sdp, noop, noop);
  }, noop); 

  //listen for candidate events
  pc.onicecandidate = function(ice) {
      if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
      ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}

// Usage
function webRTC() {
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (!isIE) {
        getUserIP(function(ip){
            privateUserIp = ip;
        });
    }
}

function webGL(){
	var canvas, ctx, width = 256, height = 128;
  canvas = document.body.appendChild(document.createElement("canvas"));
//  canvas.style.display = "none";
  canvas.width = width,
  canvas.height = height,
  ctx = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("moz-webgl");

	try {
		var f = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
		var g = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
		var h = ctx.createBuffer();

		ctx.bindBuffer(ctx.ARRAY_BUFFER, h);

		var i = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .7321, 0]);

		ctx.bufferData(ctx.ARRAY_BUFFER, i, ctx.STATIC_DRAW), h.itemSize = 3, h.numItems = 3;

		var j = ctx.createProgram();
		var k = ctx.createShader(ctx.VERTEX_SHADER);

		ctx.shaderSource(k, f);
		ctx.compileShader(k);

		var l = ctx.createShader(ctx.FRAGMENT_SHADER);

		ctx.shaderSource(l, g);
		ctx.compileShader(l);
		ctx.attachShader(j, k);
		ctx.attachShader(j, l);
		ctx.linkProgram(j);
		ctx.useProgram(j);

		j.vertexPosAttrib = ctx.getAttribLocation(j, "attrVertex");
		j.offsetUniform = ctx.getUniformLocation(j, "uniformOffset");

		ctx.enableVertexAttribArray(j.vertexPosArray);
		ctx.vertexAttribPointer(j.vertexPosAttrib, h.itemSize, ctx.FLOAT, !1, 0, 0);
		ctx.uniform2f(j.offsetUniform, 1, 1);
		ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, h.numItems);

	}
	catch (e) {	}

	var m = "";

  var n = new Uint8Array(width * height * 4);
  ctx.readPixels(0, 0, width, height, ctx.RGBA, ctx.UNSIGNED_BYTE, n);
  m = JSON.stringify(n).replace(/,?"[0-9]+":/g, "");


//document.body.appendChild(document.createElement('br'));
//document.body.appendChild(document.createTextNode(sha256(m)));
webgl = $.trim(sha256(m));
}

var sha256 = (function(){

  // Eratosthenes seive to find primes up to 311 for magic constants. This is why SHA256 is better than SHA1
  var i = 1,
      j,
      K = [],
      H = [];

  while(++i < 18){
    for(j = i * i; j < 312; j += i){
      K[j] = 1;
    }
  }

  function x(num, root){
    return (Math.pow(num, 1 / root) % 1) * 4294967296|0;
  }

  for(i = 1, j = 0; i < 313; ){
    if(!K[++i]){
      H[j] = x(i,2);
      K[j++] = x(i,3);
    }
  }

  function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }

  function SHA256(b){
    var HASH = H.slice(i = 0),
        s = unescape(encodeURI(b)), 
        W = [],
        l = s.length,
        m = [],
        a, y, z;
    for(; i < l; ) m[i >> 2] |= (s.charCodeAt(i) & 0xff) << 8 * (3 - i++ % 4);

    l *= 8;

    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[z = (l + 64 >> 5) | 15] = l;

    for(i = 0; i < z; i += 16){
      a = HASH.slice(j = 0, 8);

      for(; j < 64; a[4] += y){
        if(j < 16){
          W[j] = m[j + i];
        }else{
          W[j] =
            (S(y = W[j - 2], 17) ^ S(y, 19) ^ (y >>> 10)) +
            (W[j - 7]|0) +
            (S(y = W[j - 15], 7) ^ S(y, 18) ^ (y >>> 3)) +
            (W[j - 16]|0);
        }

        a.unshift(
          (
            y = (
              a.pop() +
              (S(b = a[4], 6) ^ S(b, 11) ^ S(b, 25)) +
              (((b & a[5]) ^ ((~b) & a[6])) + K[j])|0
            ) +
            (W[j++]|0)
          ) +
          (S(l = a[0], 2) ^ S(l, 13) ^ S(l, 22)) +
          ((l & a[1]) ^ (a[1] & a[2]) ^ (a[2] & l))
        );
      }

      for(j = 8; j--; ) HASH[j] = a[j] + HASH[j];
    }

    for(s = ''; j < 63; ) s += ((HASH[++j >> 3] >> 4 * (7 - j % 8)) & 15).toString(16);

    return s;
  }

  return SHA256;
})();

$(document).ready(function() {
  $("#post_article").click(function(e) {
    e.preventDefault();
    $("#myModal2").modal();
  });
});

$(document).ready(function() {
  $('#upload-banner').change(function(e) { 
      e.preventDefault();
      $("#upload-banner-ack").html('');
      $("#modal2-footer").css("display", "none");
      $("#preview-banner").attr('src', '');
        if (check_multifile_logo($("#upload-banner").prop("files")[0]['name'])) {
            var output = document.getElementById('preview-banner');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
              URL.revokeObjectURL(output.src) // free memory
            }
            $("#modal2-footer").css("display", "block");
            } else {
                $("#upload-banner-ack").html('Only JPG, JPEG, PNG, GIF and BMP images are accepted.');
            }    
  });
});

function check_multifile_logo(file) {
    var extension = file.substr((file.lastIndexOf('.') + 1))
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'gif' || extension === 'png' || extension === 'bmp') {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function() {
    $("#save-article").click(function(e) {
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
        var files = null;
        if ($('input[name=image-upload]:checked').val() === 'yes') {
            files = $('#upload-banner')[0].files[0];
            formdata.append('file', files);
        } else {
            formdata.append('file', '');
        }

        $google_id = $("#google_id").val();
        formdata.append('google_id', google_id);
        formdata.append('article_title', article_title);
        formdata.append('article_content', article_content);
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
        formdata.append('fingerPrintData', JSON.stringify(fingerPrintData));
        formdata.append('privateUserIp', $.trim(privateUserIp));
        formdata.append('canvas1', $.trim(canvas1));
        formdata.append('canvas2', $.trim(canvas2));
        formdata.append('webgl', $.trim(webgl));
        $(".preloader").css('display', 'block');  
        $.ajax({
            type: 'POST',
            url: '../articlesendtohold.php',
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
                       //  window.location = "https://www.sabiduria.in/index.php/loginform.html";
                     }
                    else if (data === '404') {
                        window.location = "https://sabiduria.in/404.php";                        
                    }
                    else if (data === 'titleexists') {
                        $("#article_title_ack").css("display", "block");
                        $("#article_title_ack").html("There is some article exists with the same title.");
                        $("html, body").animate({
                           'scrollTop': $("#article_title").position().top 
                        });
                    }
                    else if (data === 'codechanged') {
                        var idata = 'Code changed by the user.';
                        var errormessage = encodeURIComponent(idata);
                        var path = encodeURIComponent('articlewysiwyg.js/(sub)articlesendtohold.php/error=codechanged');
                        //$.post("https://www.sabiduria.in/index.php/senderror.php", 
                        $.post("https://sabiduria.in/senderror.php", 
                        {
                         'errormessage': errormessage,
                         'path': path  
                        });
                        alert("Please do not change any html, javascript or any code");
                        window.location = "https://sabiduria.in/blogger/";
                    }
                    else if (data === '1') {
                        alert("There is something problem. Please try again later.");
                        var data = 'Problem in uploading image';
                        var errormessage = encodeURIComponent(data);
                        var path = encodeURIComponent('articlewysiwyg.js/(sub)articlesendtohold.php/error=1');
                        //$.post("https://www.sabiduria.in/index.php/senderror.php",
                        $.post("https://sabiduria.in/senderror.php", 
                        {
                         'errormessage': errormessage,
                         'path': path  
                    });
                    }
                    else {
                        alert("There is something problem. Please try again later.");
                        var errormessage = encodeURIComponent(data);
                        var path = encodeURIComponent('articlewysiwyg.js/(sub)articlesendtohold.php/error=else');
                        //$.post("https://www.sabiduria.in/index.php/senderror.php",
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
//END: posting the article
