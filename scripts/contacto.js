
//creacion de la clase ocupacion


class Ocupacion {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

const ocupaciones = [
  new Ocupacion(1, "Estudiante"),
  new Ocupacion(2, "Empleado"),
  new Ocupacion(3, "Ama de casa"),
  
];


let listaOcupaciones = document.getElementById("ocupacion");



ocupaciones.forEach((unaOcupacion) => {
  let item = document.createElement("option");
  item.value = unaOcupacion.id.toString();
  item.innerText = unaOcupacion.nombre;
  listaOcupaciones.append(item);
});

//vinculacion del formulario
const formulario = document.getElementById("formulario");

//creacion de la clase paciente
class Paciente {
  constructor(id, nombreApellido, ocupacion, correo, consulta) {
    this.id = id;
    this.nombreApellido = nombreApellido;
    this.ocupacion = ocupacion;
    this.correo = correo;
    this.consulta = consulta;
  }
}
//Array pacientes
let pacientes = [];

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  validarFormulario(event.target);
});


//funcion validar formulario

function validarFormulario(data) {
  
  const hijos = data.children;

  for (let index = 0; index < 4; index++) {
    const unHijo = hijos[index];
    const valor = unHijo.children[1].value
    console.log("el valor de " + unHijo.children[0].value + " es " , {valor});
     }

  // asigno los valores que ingreso el usuario por los inputs

  const nombreApellidos = document.getElementById("nombreApellido").value;
  const ocupacion = document.getElementById("ocupacion").value;
  const correo = document.getElementById("email").value;
  const consultaPaciente = document.getElementById("consulta").value;


  // creacion de un paciente
  const unaOcupacion = ocupaciones.find((e) => e.id.toString() === ocupacion);
  const unPaciente = new Paciente(
    pacientes.length + 1,
    nombreApellidos,
    unaOcupacion,
    correo,
    consultaPaciente
  );

 



  // añadimos  un array de pacientes
  pacientes.push(unPaciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  console.log(unPaciente);

  swal.fire({
    title: "Muchas gracias " + nombreApellidos + " por tu consulta, en breve nos comunicaremos con usted al e-mail " + correo 
  });
formulario.reset();
 }
 

