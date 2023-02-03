let local = "001-001-000000123";
let parte = local.substring();
console.log(local.substring(4,7));

for(let i=0; i<local.length; i++){
    let local = local[i];
    for(let j=0; j<local.length; j++){
        if(local[j] === "-"){
            save.push(j);
            console.log(j);
        }
    }
}
