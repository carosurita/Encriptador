
/*funcion para carácteres válidos*/ 
/** 
function NumText(string){//solo letras y numeros
    var out = '';
    
    var filtro = 'abcdefghijklmnñopqrstuvwxyz1234567890';
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}
*/

/* --Variables generales-- */

let texto = document.getElementById("texto");
let salida = document.getElementById("salida");
let textoEncriptado = document.querySelector(".cripto");
let encriptar = document.getElementById("encript");
let desEncript =document.getElementById("desencript");
let copiar = document.getElementById("copy");
let salida2 = document.querySelector(".sin_texto");
let copiExitoso= document.getElementById("leyenda")
salida.style.display="none";


/*--Funcion Encriptar--*/


function encriptarTexto (){
    let text = texto.value;

    let texto1 = text.replace(/e/g, "enter") ;
    let texto2= texto1.replace(/i/g, "imes") ;
    let texto3= texto2.replace(/a/g, "ai");
    let texto4= texto3.replace(/o/g, "ober");
    let texto5= texto4.replace (/u/g, "ufat")
    let texto6= texto5.replace(/[^a-z-Z\s]/g, " ");
    

    salida.value=texto6;
    
    salida.style.display= 'flex';
    salida2.style.display='none';
    copiExitoso.style.display='none';
    textoEncriptado.value= salida.value

}


function desencriptarTexto (){
    let text = texto.value;
   
    let texto1= text.replace(/enter/g,"e") ;
    let texto2 = texto1.replace(/imes/g,"i") ;
    let texto3= texto2.replace (/ai/g, "a");
    let texto4= texto3.replace (/ober/g,"o");
    let texto5= texto4.replace (/ufat/g, "u");
    let texto6= texto5.replace(/[^a-z-Z\s]/g, " ");

    salida.value=texto6;
    copiExitoso.style.display='none';
    textoEncriptado.value = salida.value
}


function copiTexto (){
    let copi = salida.value;
    navigator.clipboard.writeText(copi);
    copiExitoso.style.display='block';
}

encriptar.onclick= encriptarTexto;
desEncript.onclick = desencriptarTexto;
copiar.onclick = copiTexto




/* */



