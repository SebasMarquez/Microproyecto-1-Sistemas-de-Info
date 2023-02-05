let tecnologias = {};
tecnologias.python = 3;
tecnologias.java = 3;
tecnologias.estructura_de_datos= 3.5;
tecnologias.html = 2.5;
tecnologias.ccs = 2;
tecnologias.javascript = 1.5;
tecnologias.algoritmos = 3.5;

let JSON = JSON.stringify(tecnologias);

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