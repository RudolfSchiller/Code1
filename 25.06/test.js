"use strict";
console.log("Ausgabe");
let y = 1;
{
    console.log("Wusel-Dusel  \n   \n  ");
}
console.log("consolemaths");
{
    let v = 0;
    {
        let v = 1;
        v = v;
        console.log(v);
    }
    console.log(v + " \n   \n  ");
}
console.log("IfSchleife");
{
    if (y == 1) {
        console.log("HiHi \n   \n ");
    }
    else {
        console.log("NoTHiHi \n   \n  ");
    }
}
console.log("SwitchSchleife");
{
    switch (y) {
        case 1:
            console.log("HiHi \n   \n ");
            break;
        case 2:
            console.log("BNotHiHi \n   \n ");
            break;
        default:
            console.log("Smug \n   \n ");
            break;
    }
}
