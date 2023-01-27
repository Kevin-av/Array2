let num = [3,5,6,4];
let i = 0;
let sum = 0;

do {
    if(num[i]%3==0){
        sum += num[i];
    }
    i++;

} while (num[i]!=null);
console.log("suma de multiplos de tres", sum);