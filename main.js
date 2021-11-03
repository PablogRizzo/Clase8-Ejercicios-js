//-------1------//
const log = console.log;

var num = 10;
var str = "Hola mundo";
var array = [];
var frutas = ["manzana","pera","tomate"];
var obj = new Object();

var arr = ["10",true,"foo"];

log(num,"",arr,{})

//-------2------//

var nombre = "pablo";

log(nombre);

//-------3------//

var num1 = 5;
var num2 = 2;

var suma = num1 + num2;

log(suma);

//-------4------//


function mostrarNombre(){
    var nombre = "Pablo R";
    log(nombre);
}

mostrarNombre();

//-------5------//

var miNombre = "Ricardo";

function mostrarrNombre(nombre){
    log(nombre);
}

mostrarrNombre(miNombre);

//-------6------//

var datos = "foo";

log(datos.toUpperCase());

//-------7------//

var datos = "FOO";

log(datos.toLowerCase());

//-------8------//

var info = "lorem ipsum scammer";

log(info.split(" "));

//-------9------//

var arrInfo = ["lorem","ipsum","scammer"];

log(arrInfo.toString());

//-------10------//

log(arrInfo[0]);

//-------11------//

arrInfo.push("simply");
log(arrInfo);

//-------12------//

arrInfo.shift();
log(arrInfo);

//-------13------//

var nuevoArray = ["lorem", "ipsum", "scammer", "simply", "sit", "amet", "laboris", "nisi"];

log(nuevoArray.length);

//-------14------//

var otroArray = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"];

for(let i = 0;i<otroArray.length;i++){
    if(otroArray[i] === "laboris"){
        otroArray[i] = otroArray[i].toUpperCase();
    }
    log(otroArray);
}

// array.forEach((element,index) => {
    
//     if(element=="laboris"){
//         array[index]= array[index].toLocaleUpperCase()
//     }
// });

// log(array)

//-------15------//

var foo = "qux";
var cantidad = 0;

for(let i=0;i<foo.length;i++){
    cantidad++;
}

if(cantidad%2 == 0){
    log("Es par");
}else{
    log("Es impar");
}

//-------16------//

var a = 100;
var b = 200;

if(a > b)
{
    log(true);
}else{
    log(false);
}

//-------17------//

log("ejercico 17");

var edad = 30;

switch (true) {
    case (edad>=21):
        log(true);
        break;
    case 2 (edad<21):
        log(false);
        break
}

//-------18------//

log("ejercico 18");

let data = [1,2,6,1,2,5,9,'33','33'];

const dataArr = new Set(data);

let result = [...dataArr];

console.log(result);

//-------19------//

log("Ejercicio 19");

let arreglito = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet"];
let arrayNumeros =[];

arreglito.forEach(element=>{

    separacion = element.split("");

    //toma el primer elemento que es "lorem", y lo divide en
    //["l","o","r","e","m"]

    arrayNumeros.push(separacion.length);
});

log(arrayNumeros);

//-------20------//

log("Ejercicio 20");

let reporte = "lorem ipsum scammer simply laboris sit amet";
    
reporte = reporte.replace(/a/g, "x")
                 .replace(/e/g, "E")
                 .replace(/i/g, "I")
                 .replace(/o/g, "O")
                 .replace(/u/g, "U");

reporte = reporte.charAt(0).toUpperCase() + reporte.slice(1, -1) + "@";

var voc = reporte.match(/[aeiou]/gi).length;
    
log(reporte);
log(voc);