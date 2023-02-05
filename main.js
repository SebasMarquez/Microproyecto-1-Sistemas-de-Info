
let imagenes = ['GIMNASIO (1).jpeg','UNIMET (1).jpeg','MESSI.jpg'];
let cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
        let contenedor = document.querySelector(".contenedor");
        carrusel(contenedor);
});

const ButtonElement = document.getElementById("SendButton");
const InputNombreElement = document.getElementById("NombreInput");
const InputEmailElement = document.getElementById("EmailInput");
const InputMensajeElement = document.getElementById("Mensaje");
ButtonElement.addEventListener('click', () => {
    const Nombre = InputNombreElement.value;
    const Email = InputEmailElement.value;
    const Mensaje = InputMensajeElement.value;
    if(Nombre.length == 0 || Email.length == 0 || Mensaje.length == 0){
        alert("Error: No puede dejar ningun campo vacio")
    }else if(Email.includes('@')){
        alert(`
        Nombre: ${Nombre}
        Email: ${Email}
        Mensaje: ${Mensaje}
        Su solicitud ha sido enviada
        `)
    }else{
        alert("Error: Los datos no son correctos")
    }
})

const tecnologias = {
    Python : 2.8,
    Java : 3.5,
    HTML: 2.5,
    CSS: 2,
    JavaScript:1.5,
    Algoritmos:3.5,
  };

const EstrellasTotal = 5;
for(const tecnologia in tecnologias) {  
  const EstrellaPorcentaje = (tecnologias[tecnologia] / EstrellasTotal) * 100;
  const EstrellaPorcentajeRedondeado = `${(Math.round(EstrellaPorcentaje / 10) * 10)}%`;
  document.querySelector(`.${tecnologia} .stars-inner`).style.width = EstrellaPorcentajeRedondeado; 
}

