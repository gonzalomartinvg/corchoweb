//OBJETO

const comentarios = {
    
    "comentario0":[
        {

            "numero": "0",

            "nombre": "Micaela Odriozola",

            "imagen": "images/micaela-comentario.png",

            "comentario": "Cada vez que voy me atienden genial y me recomiendan vinazos!!",

            "estrellas": "images/estrellas-5.png"  
        }
        
    ],

    "comentario1":[
        {
            "numero": "1",

            "nombre": "Antonio Artacho",

            "imagen": "images/antonio-comentario.png",

            "comentario": "MUY BUENA ATENCION LAS PERSONAS TE EXPLICAN CON LUJO DE DETALLES LOS PRODUCTOS QUE VENDEN GRACIAS",

            "estrellas": "images/estrellas-5.png"  
        }
        
    ],

    "comentario2":[
        {
            "numero": "2",

            "nombre": "Sabrina Diaz",

            "imagen": "images/sabrina-comentario.png",

            "comentario": "Excelente atención de manera Personal y vía redes!!  Surtido y buenos precios.",

            "estrellas": "images/estrellas-5.png" 
        }
        
    ],

    "comentario3":[
        {
            "numero": "3",

            "nombre": "Giuliana Paladino",

            "imagen": "images/giuliana-comentario.png",

            "comentario": "Excelente atención y muy buenos precios.",

            "estrellas": "images/estrellas-5.png"  
        }
        
    ],

    "comentario4":[
        {
            "numero": "4",

            "nombre": "Marco Gonzalez",

            "imagen": "images/marco-comentario.png",

            "comentario": "Una opción muy buena para comprar bebidas alcohólicas a un precio razonable.",

            "estrellas": "images/estrellas-5.png" 
        }
        
    ],

}

//SELECTORES

let anterior = document.querySelector(".anterior");
let proximo = document.querySelector(".proximo");

let contador = 0; //Indica que comentario se debe mostrar en la página

//FUNCIÓN MOSTRA DATOS

function mostrarDatos(a){
    
    function chequearDatos (b){

    let contenedorAutogeneradorDeComentarios = document.querySelector(".contenedor-autogenerador-de-comentarios"); //Seleccionamos el div donde vamos a introducir

    contenedorAutogeneradorDeComentarios.innerHTML = "" //Borramos el div ya existente dentro del contenedor

    const divCreadoComentario = document.createElement("div"); //Creamos el div nuevo a introducir en el contenedor
                
    const contenidoAutoGeneradoComentario = //Generamos el contenido del div. Las `` siguientes se utilizan para hacer un html literal- El parametro "a" corresponde a la clase que india si el div con el comentario ingresa o sale, es decir, da la animación.
                    `
                    
                    <div class="contenedor-comentario-micro ${a}">
                        <div class="contenedor-foto-y-nombre">
                            <img class="imagen-profile" src="${b[0].imagen}" alt="estrellas de puntuación">
                            <h2 class="nombre">${b[0].nombre}</h2>
                        </div>
                        <img class="estrellas" src="${b[0].estrellas}" alt="estrellas de puntuación">
                        <p class="comentario">${b[0].comentario}</p>
                    </div>
                
                
                    `; 

    divCreadoComentario.innerHTML = contenidoAutoGeneradoComentario; //Le atribuimos el html al div.

    contenedorAutogeneradorDeComentarios.append(divCreadoComentario); //Se lo adjudicamos a la sección autogenerada

    }

    //Con los siguientes condicionales indicamos que información de comentario tiene que tomar
    
    if (contador == 0){
        chequearDatos(comentarios.comentario0)
    }
    
    if (contador == 1){
        chequearDatos(comentarios.comentario1);
    }
    
    if (contador == 2){
        chequearDatos(comentarios.comentario2);
    }
    
    if (contador == 3){
        chequearDatos(comentarios.comentario3);
    }
    
    if (contador == 4){
        chequearDatos(comentarios.comentario4);
    }
}

mostrarDatos(); //La ejecutamos para que apenas abrimos la página funcione con el 0

//FUNCIONES ANTERIOR Y PRÓXIMO

proximo.addEventListener ("click", suma1);

function suma1(){

    if (contador == 4){
        contador = 0;
    }

    else{
        contador += 1;
    }

    mostrarDatos("contenedor-comentario-micro-ingresa");
}

anterior.addEventListener ("click", resta1);

function resta1(){

    if (contador == 0){
        contador = 4;
    }

    else{
        contador -= 1;
    }

    mostrarDatos("contenedor-comentario-micro-sale");
}






