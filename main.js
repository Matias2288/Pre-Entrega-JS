/*
Calcular edad promedio de las personas registradas

1- Pedir cuantos usuarios hay.
2- Pedir la edad de cada usuario.
3- Decir si es menor, adulto o anciano.
4- Devolver por prompt y por consola las edades con su mensaje.
5- Validar nombre y edad.
*/

let usuario;
let edad;
let estado;
let totalUsuarios;

//Estado
function verificacionEdad(edad){
    if(edad < 18){
        return 'Es menor de edad 🧒';
    } else if((edad >= 18) && (edad < 60)){
        return 'Esta en la edad adulta 👨‍🦰' ;
    } else if((edad > 60) && (edad < 100)){
        return 'Esta en la vejez 👴';
    } else if (edad == 100){
        return 'No se como sigue con vida 😂'
    }
}

//Validar nombre
function validarNombre(nombre){
if(  nombre == '' || (nombre.length < 3) ){
   return false;
} else {
   return true;
}
}

//Validar edad
function validarEdad(edad){
    if((edad > 0) && (edad <= 100) &&!isNaN(edad)){
        return true;
    }else{
        return false;
    }
}

totalUsuarios = parseInt(  prompt('¿Cuantos usuarios hay?')  )

//Bucle principal

for( let i=1; i <= totalUsuarios; i++ ){

    do{ //pide el nombre hasta que sea valido
        usuario = prompt('Ingrese el nombre del usuario');

        if ( ! validarNombre(usuario)){
            alert('Nombre invalido');
        }

    }while(! validarNombre(usuario))

    do{
        edad = parseInt(prompt('Ingrese la edad del usuario'));

        if( !validarEdad(edad)){
            alert('Edad invalida');
        }
    }while(! validarEdad(edad))

    estado = verificacionEdad(edad);

    let mensaje =  usuario + ' tiene ' + edad + ' años. ' + estado; 
    
    console.log(mensaje);
    alert(mensaje);
}