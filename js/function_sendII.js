
function logOut() {
    sessionStorage.removeItem("session");
    sessionStorage.removeItem("mail");
    window.location.href = "login.html";
  }
  
  function goToAlta() {
    window.location.href = "ALTA.html";
  }

  function goToGestio() {
    window.location.href = "GESTION.html";
  }
  
  function getTable() {
    console.log('has entrado funcion getTable')
    var session = sessionStorage.getItem("session");
    var mail = sessionStorage.getItem("mail");
    console.log('este es el usuario con  email para devolver la tabla xip : ', mail)
    var xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/web/ServXips" 
    let urlConParametros = url + '?email=' + encodeURIComponent(mail);
    xhr.open("GET", urlConParametros, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // Crear una instancia de XMLHttpRequest
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Obtener la respuesta del backend (HTML de la tabla de Xips)
        var response = xhr.responseText;
  
        // Insertar el HTML de la tabla en el elemento con id "altaTable"
        document.getElementById("altaTable").innerHTML = response;
      }
    };

    xhr.send();
  }
  


  function getPatients() {
    const url = 'http://localhost:3000/web/ServePatients';
    //var session = sessionStorage.getItem("session");
    var mail = sessionStorage.getItem("mail");
    let urlConParametros = url + '?email=' + encodeURIComponent(mail);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
       
        var response = xhr.responseText;
        var patients = JSON.parse(response);
      
        var select = document.getElementById("pacient");
        let newListPacientes = patients.listaPaciente.substring(1, patients.listaPaciente.length - 1).split(",")
      
        for (let i = 0; i < newListPacientes.length; i++) {
          console.log('Paciente', newListPacientes[i])
          var option = document.createElement("option");
          option.value = newListPacientes[i];
          option.text = newListPacientes[i];
          select.appendChild(option);
        }
        
        console.log(select)
        // Agregar opciones al select de pacientes
        //patients.forEach(function(patient) {
         // var option = document.createElement("option");
         //option.value = patient.mailP;
          //option.text = patient.nomP;
        // select.appendChild(option);
        //});
      }
    };
  
    xhr.open("GET", urlConParametros, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
  }
  


  function getMedicines() {
    const url = 'http://localhost:3000/web/ServeMedicines';
    //var session = sessionStorage.getItem("session");
    var mail = sessionStorage.getItem("mail");
    let urlConParametros = url + '?email=' + encodeURIComponent(mail);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
       
        var response = xhr.responseText;
        var medicament = JSON.parse(response);
        console.log(medicament);
      
        var select = document.getElementById("medicament");
        //let newlistaMedicamentos = medicament.listaMedicamentos.substring(1, medicament.listaMedicamentos.length - 1).split(",")
      
        for (let i = 0; i < medicament.length; i++) {
          //console.log('Medicamento', newlistaMedicamentos[i])
          var option = document.createElement("option");
          option.value=medicament[i].id;
          option.text=medicament[i].name;
          /* option.value = newlistaMedicamentos[i];
          option.text = newlistaMedicamentos[i]; */
          select.appendChild(option);
        }
        
        console.log(select)
        // Agregar opciones al select de pacientes
        //patients.forEach(function(patient) {
        //  var option = document.createElement("option");
        //  //option.value = patient.mailP;
        //  option.text = patient.nomP;
        //  select.appendChild(option);
        //});
      }
    };
  
    xhr.open("GET", urlConParametros, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
  }
  

    // Obtener el último valor almacenado en localStorage (si existe)
    var idXip = localStorage.getItem('idXip');
    // Si no hay valor almacenado, establecer el valor inicial como 2
    if (idXip === null) {
      idXip = 2;
    } else {
      // Convertir el valor recuperado de localStorage a un número entero
      idXip = parseInt(idXip);
    } 
  

  function generateIdXip() {
   idXip++;
   document.getElementById("idXip").value = idXip;
   console.log(idXip);
    // Almacenar el valor actualizado en localStorage
    localStorage.setItem('idXip', idXip);
    return idXip;
  }

  function enviar() {
  
    // Llamada a la función AUTOINCREMENTABLE ID 
    idXip = generateIdXip();
    var idXip = parseInt(document.getElementById("idXip").value);
    var mail = sessionStorage.getItem('mail');
    var medicament = document.getElementById("medicament").value;
    var pacient = document.getElementById("pacient").value;
    var dataLimit = document.getElementById("dataLimit").value;
 
    // Construir el objeto de datos para enviar en la solicitud
    var data = {
      id: idXip,
      mail: mail,
      medicine:medicament,
      patient :pacient,
      date : dataLimit
    };
    console.log(data);
    // Realizar la solicitud POST al backend
    fetch('http://localhost:3000/web/ServeRelease', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        // Manejar la respuesta del backend
        if (response.ok) {
            document.getElementById('error').textContent = "ALTA REALIZADA";
        } else {
          throw new Error('Error en la solicitud al backend');
        }
      })

      //.then(function(result) {
        // Manejar el resultado de la operación de alta recibido del backend
        //console.log(result);
      //})
      //.catch(function(error) {
        // Manejar errores de la solicitud al backend
        //console.error(error);
      //});
  }
 