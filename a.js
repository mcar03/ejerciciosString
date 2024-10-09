/*const cadena = "Macarrones " + "con queso"
console.log(cadena)*/

/*const cadena = "\t macarrones" + "\t" + "con queso"
console.log(cadena)*/

/*const edad = 21
const sexo = "helicoptero"

const cadena = `Hola, mi edad es ${edad} y mi sexo es ${sexo}`
console.log(cadena)*/

/*let arrayCadenas = ["Tony" , "Manuel" , "Jesus" , "Gregorio"]

for (let i = 0; i < arrayCadenas.length; i++) {
    const element = arrayCadenas[i];

    console.log("Hola " + element)
    
}*/

/*const cadena = "meada"
console.log(cadena.toUpperCase())*/

/*const cadena = "MEADA"
console.log(cadena.toLowerCase())*/

/*const cadena = "Macarrones"
for (let i = 0; i < cadena.length; i++) {
    const element = cadena.charAt(i)
    console.log(element)
    
}*/

/*const cadena = "Macarrones con queso"

console.log(cadena.substring(3,cadena.length))*/

/*const cadena = "Macarrones con queso"

console.log(cadena.substring(3, cadena.indexOf("q")))*/

/*const cadena = "Macarrones con queso"
console.log(cadena.replaceAll(" ", "-"))*/

/*const cadena = "Macarrones con queso"

console.log(cadena.replace(" ", "-"))*/

/*const cadena = "Macarrones"
const cadena2 = "queso"

 console.log (cadena + " " + cadena2)*/

 /*const cadena = "Me gustan los macarrones"
 console.log(cadena.split("").reverse().join())*/

 /*const cadena = "Me giuta macarrones 1 ";
 let regex = /[1-9]/; // Expresión regular para buscar cualquier dígito del 1 al 9
 
 let bol = false; // Definir bol fuera del bucle
 
 for (let i = 0; i < cadena.length; i++) {
     const element = cadena[i];
     if (regex.test(element)) { // Usar .test() para comprobar coincidencia
         bol = true;
         break; // Salir del bucle si encontramos un número
     }
 }
 
 if (bol)
     console.log("La cadena tiene números");
 else
     console.log("La cadena no tiene números");*/


     /*const cadena = "Me gustan los macarrones con queso."

     if(cadena.endsWith("."))
        console.log("Termina en punto")
     else
        console.log("No termina en punto")*/

        /*const cadena = "Me gustan los macarrones con queso."
        let regex = /^[A-Z]/;

        if(regex.test(cadena))
           console.log("Empieza en mayúscula")
        else
           console.log("No empieza en mayúscula")*/

          /* const cadena = "Me gustan los +12 macarrones con queso."

           let regex = /\+[1-9]{2}/

           if(regex.test(cadena))
             console.log("Si")
            else
             console.log("No")*/

             const cadena = "Me gustan los macarrones +45678 con queso +4572"
             let regex = /\+[1-9]+/g

             if(regex.test(cadena))
                console.log(cadena.replaceAll(regex, "SECRETO"))
            else
                console.log("Eres un mierdas")
