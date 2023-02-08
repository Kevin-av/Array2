let doc = document.getElementById("img01");

let url = prompt ('ingresar la imagen');
//https://drive.google.com/file/d/1RO97Yu3oMIvcM4M5Lq-AAs_Iem1Mo0cR/view

for(let i=0; i<url.length; i++){

    console.log(url.substring(i, i+2));

}

for(let i=0; i<url.length; i++){

let result = url.substring(30,65);

}

doc.src=`https://drive.google.com/uc?export=view&id=${url}`;
