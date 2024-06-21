localStorage.clear();
localStorage.setItem("user","admin");
localStorage.setItem("pass","1234");
let a = localStorage.getItem('user')
console.log(a)
if("admin" == localStorage.getItem('user')) console.log("pepe")

function validarLogin(){
    let userAttempt = document.getElementById('user').value;
    let passAttempt = document.getElementById('pass').value;
console.log(userAttempt)
if(userAttempt === localStorage.getItem('user') && passAttempt === localStorage.getItem('pass')){
    window.location.href = 'cartas.html';
    limpiarInput();
} else {
    alert('Usuario incorrecto, vuelva a intentar o desista.')
    limpiarInput();
}
}

function limpiarInput(){
    document.getElementById('user').value = ""; 
    document.getElementById('pass').value = ""; 
}
