/*Botones*/
let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let btnCopiar = document.querySelector(".copiar")
let mensaje = document.querySelector("#mensaje");
let texto = document.querySelector(".texto");

/*Validador de texto*/

function textCorrrect(texto){
	return  texto.value.toLowerCase().replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[íìî]/g, 'i').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u');
}

texto.addEventListener("keyup", ()=>{
	texto.value = textCorrrect(texto);
})
/*Funcion encriptar*/

const encriptar = (texto) => {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                encriptado += 'enter';
                break;
            case 'i':
                encriptado += 'imes';
                break;
            case 'a':
                encriptado += 'ai';
                break;
            case 'o':
                encriptado += 'ober';
                break;
            case 'u':
                encriptado += 'ufat';
                break;
            default:
                encriptado += texto[i];
                break;
        }
    }
	return encriptado;
}

/*Muestra el texto encriptado en pantalla*/

btnEncriptar.addEventListener("click", (e)=>{
	e.preventDefault();

	let texto = document.querySelector(".texto").value;
	mensaje.innerHTML = encriptar(texto);
})

/*Funcion Desencriptar*/

const desencriptar = (texto) =>{
	texto = texto.replace(/enter/g, "e");
	texto = texto.replace(/imes/g, "i");
	texto = texto.replace(/ai/g, "a");
	texto = texto.replace(/ober/g, "o");
	texto = texto.replace(/ufat/g, "u");

	return texto;
}

/*Muestra el texto desencriptado en pantalla*/

btnDesencriptar.addEventListener("click", (e)=>{
	e.preventDefault();

	texto = document.querySelector(".texto").value;
	mensaje.innerHTML = desencriptar(texto);
})

/*Copiar al portapapeles*/

btnCopiar.addEventListener('click', (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(mensaje.innerHTML);

	alert("mensaje copiado");
})
