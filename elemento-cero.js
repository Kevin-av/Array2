let num = [1,0,1,0];
let i = 0;
let sum = 0;

do {
    if(num[i] == 0){
        sum += i;
    }
    i++;

} while (num[i]!=null);
console.log("suma de indece ceros", sum);