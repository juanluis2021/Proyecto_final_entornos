async function send() {
  /*var http = new XMLHttpRequest();   //seria la respuesta
     http.open("POST","http://localhost:3000/web/Login",true);
     http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var params = "email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password);
     http.send(params);
 
  
    let http = new XMLHttpRequest();
    const url = 'http://localhost:3000/web/Login'
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "aplication/json");
    http.setRequestHeader('Access-Control-Allow-Origin', '*');
  
    let parametros = {  //CREO EL OBJETO PARA ENVIAR AL JAVA 
      email: email,
      password: password
    }

// Construir la URL con los parámetros codificados
let urlConParametros = url + '?email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);

http.open("GET", urlConParametros, true);
http.setRequestHeader("Content-type", "application/json");
http.setRequestHeader('Access-Control-Allow-Origin', '*');

http.onreadystatechange = function() {
  if (http.readyState === XMLHttpRequest.DONE) {
    if (http.status === 200) {
      // Se recibió una respuesta exitosa
      console.log(http.responseText);
    } else {
      // Hubo un error en la solicitud
      console.error('Error en la solicitud:', http.status);
    }
  }
};

http.send();
 
    let jsonData = JSON.stringify(parametros);//LO QUE ENVIO AL JAVA CON JSON LE PASO EL OBJETO PARAMETROS

    http.onreadystatechange = function() {
       if (http.readyState === 4 && http.status === 200) {
        console.log('Success') //IMPRIMO SI ES EXITO 
        console.log(http.responseText)//IMPRIMO LO QUE LLEGA DEL RESPONSE 
        
        let response = JSON.parse(http.responseText); //es una función en JavaScript que analiza una cadena de texto JSON y la convierte en un objeto JavaScript.
        console.log('res', response)
         if (Object.keys(response).length === 0 ) {  //SI LA CADENA ES O ES NULA Y DOY FALLO LOGIN
           document.getElementById('error').textContent = "El login no ha sido correcto."
         } else {
            document.getElementById('error').textContent = ""
             let codiSessio = response.codiSessio; //DECLARO LAS VARIABLES QUE LLEGAN DEL JSON RESPONSE 
             let email = response.email;
             //Almacenar datos en sessionStorage
             sessionStorage.setItem("session",codiSessio );
             sessionStorage.setItem("mail", email);
             //recojo informacion de la sessionStorage si hubiese mas variables cojemos la que queramos con getItem
             //sessionStorage.getItem("session");
             //sessionStorage.getItem("mail");
             window.location.href = "GESTION.html"; //no dirijimos a html gestion 
         }
       } else {
         console.log('error' + this.status)
       }
     }
 
     http.send(jsonData); //enviamos el modelo JSON 
    }


    /*
    COSAS PROPIAS 
    Obtener datos de sessionStorage
    var nombre = sessionStorage.getItem("nombre");
    var edad = sessionStorage.getItem("edad");

    Eliminar un dato de sessionStorage
    sessionStorage.removeItem("edad");

    Borrar todos los datos de sessionStorage
    sessionStorage.clear();
   */
    let http = new XMLHttpRequest();
    const url = 'http://localhost:3000/web/Login';
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Construir la URL con los parámetros codificados
    let urlConParametros = url + '?email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);
    http.open("GET", urlConParametros, true);
    http.setRequestHeader("Content-type", "application/json");
    http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.onreadystatechange = function() {
      if (http.readyState === XMLHttpRequest.DONE) {
        if (http.status === 200) {
          
          if (http.responseText) {
            let response = JSON?.parse(http?.responseText); //es una función en JavaScript que analiza una cadena de texto JSON y la convierte en un objeto JavaScript.
            if (Object?.keys(response)?.length === 0 ) {  //SI LA CADENA ES O ES NULA Y DOY FALLO LOGIN
              document.getElementById('error').textContent = "El login no ha sido correcto."
            } else {
              document.getElementById('error').textContent = ""
              let codiSessio = response.codiSessio; //DECLARO LAS VARIABLES QUE LLEGAN DEL JSON RESPONSE 
              let email = response.email;
              //Almacenar datos en sessionStorage
              sessionStorage.setItem("session",codiSessio );
              sessionStorage.setItem("mail", email);
              //recojo informacion de la sessionStorage si hubiese mas variables cojemos la que queramos con getItem
              //sessionStorage.getItem("session");
              //sessionStorage.getItem("mail");
              window.location.href = "GESTION.html"; //no dirijimos a html gestion 
              // Se recibió una respuesta exitosa
              console.log(http.responseText);
              console.log('bien');
          }
        }
        } else {
          console.error('Error en la solicitud:', http.status);
        }
      } else {
        document.getElementById('error').textContent = "El login no ha sido correcto."
      }
    };
    
    http.send();
  }
