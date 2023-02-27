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

let imagen = document.querySelector(".imagen-profile");
let nombre = document.querySelector(".nombre");
let estrellas = document.querySelector(".estrellas");
let comentario = document.querySelector(".comentario");

let contador = 0;

//FUNCIONES

function mostrarDatos(){
    
    function chequearDatos (a){
        imagen.src = a[0].imagen;
        nombre.textContent = a[0].nombre;
        estrellas.src = a[0].estrellas;
        comentario.textContent = a[0].comentario;
    }
    
    if (contador == 0){
        chequearDatos(comentarios.comentario0);
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

proximo.addEventListener ("click", suma1);

function suma1(){

    if (contador == 4){
        contador = 0;
    }

    else{
        contador += 1;
    }

    mostrarDatos();
}

anterior.addEventListener ("click", resta1);

function resta1(){

    if (contador == 0){
        contador = 4;
    }

    else{
        contador -= 1;
    }

    mostrarDatos();
}






