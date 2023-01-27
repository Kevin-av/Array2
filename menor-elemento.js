let num = [0,2,1,1];
let i = 0;
let sum = 0;

do {
    if(num[i] > i){
        sum += num[i];
    }
    i++;

} while (num[i]!=null);
console.log("El indice es mayor al elmento", sum);