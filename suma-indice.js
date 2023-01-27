let num = [0,1,2];
let i =0;
let sum = 0;

//ahora se aplica la condicion dowhile, en donde el do pondremos la condicion para que sume solo si el
//elemento y el indice son
do {
    if(num[i]==i){
        sum+=num[i];
    }

    i++;

} while (num[i]!=null);
console.log("suma de elementos e indices pares", sum);