let num = [3,5,8,4];
let i = 0;
let sum = 0;

do {
    if(num[i]%2==1){
        sum += num[i];
    }
    i++;

} while (num[i]!=null);
console.log("suma de elementos impares", sum);