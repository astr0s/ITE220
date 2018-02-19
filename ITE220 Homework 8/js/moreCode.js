$(document).ready(function() {
    $("#signup").click(function() {
        var name = $("#username").val();
        var email = $("#email").val();
        var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        var password = $("#passwrd").val();
        var cpassword = $("#passwrdCon").val();
         if ((name.length) < 8) {
            $('#feedback').html("Should be greater than 8 charaters");
        }  if ((password.length) < 8) {
           $('#passwrd').html("Should be greater than 8 charaters");
        }  if (!(password).match(cpassword)) {
            $('#passwrdVal').html("Password and Confirm Password do not match");
        }  if (!(email).match(regex)) {
            $('#valid').html("Invalid email");
        } 
    });
});      