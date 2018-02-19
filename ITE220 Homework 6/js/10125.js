document.getElementById("Currentlocation").innerHTML = "Current location: " + window.location.href, "<br />";

	 document.getElementById('reload').onclick = function(event) {
    window.location.reload(true);
  }
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("sizeXD").innerHTML = "Width: " + w + "<br>Height: " + h;

    document.getElementById('P3Color').onclick = function(event) {
  document.getElementById('chingchong').style.backgroundColor = "#FFFF00";
}

$(function() {
    $( "#showhide" ).click(function() {
        $( "#lizard" ).toggle();
    });


 

    $('#greeting').click(function() {
      $('#sayHello').html("Hello Everyone!");
    });
});