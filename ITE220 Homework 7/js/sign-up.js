

function Username() {
    var username = document.getElementById('username').value;
var regex = /^[A-Za-z0-9._-]{8,}$/;
var uname = document.getElementById("feedback");

    if(!regex.test(username)){
               
               uname.innerHTML= "Should be greater than 8 charaters";
                } else {
                uname.innerHTML = '';
                }
        }       




function Password() {
     var password = document.getElementById('password').value;
var regex = /^[A-Za-z0-9._-]{8,}$/;
var psw = document.getElementById("psw");

    if(!regex.test(password)){
               
               psw.innerHTML= "Should be greater than 8 charaters";
                } else {
                psw.innerHTML = '';
                }
        }       


function PasswordC() {
    var password = document.getElementById("password").value;
    var passwordC = document.getElementById("passwordC").value;
    var pconfirm = document.getElementById("passwordV");

    if (password != passwordC) {
        
        pconfirm.innerHTML = "Password and Confirm Password do not match";
    } else {
        
        pconfirm.innerHTML = '';
    }
}

function Email(){
            var email = document.getElementById('email').value;
            var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
            var error = document.getElementById("valid");
            if(!regex.test(email)){
               
               error.innerHTML= "Invalid email";
                } else {
                error.innerHTML = '';
                }
        }       