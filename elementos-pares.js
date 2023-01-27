let num = [10,50,8,4];
let i = 0;
let sum = 0;

do {
    if(num[i]%2==0){
        sum += num[i];
    }
    i++;

} while (num[i]!=null);
console.log("suma de elementos pares", sum);