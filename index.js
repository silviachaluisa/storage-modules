import { usuarioCorrecto, contraseñaCorrecta } from './datosUsuario.js';

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let username = document.getElementsByName("usuario")[0].value;
  let password = document.getElementsByName("contrasena")[0].value;

  if (username === usuarioCorrecto && password === contraseñaCorrecta) {
    alert("¡Inicio de sesión exitoso!");
    console.log("Sesión Exitosa")
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }
});