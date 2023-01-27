let contraseña = 456;
let monto = 45;
let saldo = 540;
let retiro = false;
let respuesta;

do {
    contraseña = prompt ("Favor de ingresar la contraseña");

    if(contraseña != "456"){
        alert("Contraseña incorrecta");
    }else{
        alert("Saldo actual"+saldo);
        monto = prompt ("Ingresar el monto a retirar");
        saldo = saldo - parseInt(monto);

        alert("Saldo Actual" + saldo);

        if(respuesta = prompt("¿Desea retirar nuevamente?")== "si"){
            retiro = true;
        }else{
            retiro = false;
        }
    }
} while (contraseña != "456" || retiro == true);