let img = document.getElementById("img01");

let url = prompt ('ingresar la imagen');
//https://drive.google.com/file/d/1RO97Yu3oMIvcM4M5Lq-AAs_Iem1Mo0cR/view

let contador = 0;
let id = "";

for(let i=0; i<url.length; i++){
    console.log(url.substring(i, i+2));
    if(url[i] == "/"){
        contador++;
        console.log(contador);
    }

    if(contador == 5){
        id+=url[i];

    }
}

console.log("id"+id);

img.src=`https://drive.google.com/uc?export=view&id=${id.substring(1,id.length)}`;
