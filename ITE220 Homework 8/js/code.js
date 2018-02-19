//Assignment 6 redone
$(document).ready(function() {
    var resolution = " ";
    resolution += "Width: " + $(window).width() + "</br> ";
    resolution += "Height: " + $(window).height() + "</br> ";
    resolution += "Current location: " + location;

    $("#resolution").html(resolution);
     
 
    $("#reload").click(function() {
        location.reload();
    }); 


    $("#P3Color").click(function(){
        $("#p3").css('background-color', 'yellow');
    });

    $( "#showhide" ).click(function() {
        $( "#p2" ).toggle();
    });

    $('#hello').click(function() {
      $('#sayHello').html("Hello Everyone!");
    });
     $("#mice").on({
        mouseenter: function() {
            $("#mice").text("Mouse Over");
        },
        mouseleave: function() {
            $("#mice").text("Mouse Out");
        },
        mousedown: function() {
            $("#mice").text("Mouse down");
        },
        mouseup: function() {
            $("#mice").text("Mouse up");
        },
        dblclick: function() {
            $("#mice").text("Double click");
        }
    });
});