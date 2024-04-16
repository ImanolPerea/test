// CONDICIONES
// let edad = 17

// if(edad>=18){
//     console.log("puedes pasar")
// }else if(edad >=13){
//     console.log("acompanado de padres")
//  } 
// else{
//     console.log("no puedes pasar")

// }
// /////////////////////////////////////////////////////////////////
// BUCLES

// for(let i = 0; i<10; i++)
// {   
//   console.log(i)
// }

// console.log('los numeros impares del 0 al 100 son:')
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
//CREAR UNA FUNCION EN DONDE CALCULEMOS TOTAL DE UN PRODUCTO EL CUAL SU PRECIO ES DE $19.99 Y SU IVA ES DE %0.15

// function precioTotal(precioU, Iva){
//     return precioU * Iva + precioU;
// }
//     let resultado = precioTotal(19.99, 0.15)
//         console.log('el precio total del producto es de $' + resultado)


// // ARRAYS
// let carros = ['pointer', 'sentra', 'camaro']
// carros[3] = 'chevy' 
// console.log(carros);
// console.log(carros.length);

// //CUAL NUMERO ES MAYOR
// function cualesMayor(a,b){  
//    return (a>b) ? a : b; // ? en caso de  : y si no
// }

// mayor = cualesMayor(10,15)
// console.log(mayor);

// //PARA VER SI UN NUMERO ES PAR O IMPAR
// function parOimpar(numero){
//     if(numero % 2 ===0){
//         return ' par'
//     } else{
//         return ' impapar'
//     }
// }
//     var num1 = 8;
//     var num2 = 15;
//     var num3 = 98;
// console.log(num3 +' es'+ parOimpar(num3));
// console.log(num2 +' es'+ parOimpar(num2));

// function createUser(nombre, edad, correo){
//     return {
//         nombre,
//         edad,
//         correo,       
//     }
// }
// let user1 = createUser('nico', 19, 'correoo');
// let user2 = createUser('jose', 29, 'correooo');

// console.log(user1, user2)
// const user = ({
//    )
// user.id = 1;
// user.guardar = function(){
//     console.log('Guardando', user.nombre) ;
// }
// user.guardar()
// console.log(user)

// function Usuario(){
//     this.id = 1;
//     this.recuperarClave = function(){
//         console.log('recuperando clave...');
//     }
// }
//  let usuario = new Usuario();
//  console.log(usuario);
//       return Usuario();