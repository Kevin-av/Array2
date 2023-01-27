let num = [12,14,5,7];
let i = 0;
let sum = 0;

do {
    if(num[i]%7!=0){
        sum += num[i];
    }
    i++;

} while (num[i]!=null);
console.log("suma de los no multiplos de siete", sum);