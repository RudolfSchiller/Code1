/*console.log("Ausgabe");

let y: number = 1;

{
    console.log("Wusel-Dusel  \n   \n  ")
}
console.log("consolemaths")
{
    let v: number = 0;
    {
        let v: number = 1;
        v = v;
        console.log(v);
    }
    console.log(v + " \n   \n  ");

}

console.log("IfSchleife");

{

    if (y == 1) {
        console.log("HiHi \n   \n ")
    }
    else {
        console.log("NoTHiHi \n   \n  ")
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
}*/

// const randomInt = (min: number , max: number) =>
//  Math.floor(Math.random() * (max - min +1)+ min);

/*let e = prompt("What number u wanna change");

if (e == "a") {

    let EsubtA: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
    a = a - EsubtA;

}
else if (e == "b") {
        let EsubtB: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
    b = b - EsubtB;
}
else if(e == "c") {
        let EsubtC: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
    c = c - EsubtC;
}
else if(e == "d") {
        let EsubtD: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
    d = d - EsubtD;
}else{console.log("input was not a number")};

if (a == 0 && b == 0 && c == 0 && d == 0){

    console.log("won");
};
*/

let playerstate = prompt("Enter Name Player 1");
let playerstate2 = prompt("Enter Name Player 2");
let activePlayer = playerstate;

console.log(activePlayer);

let r1: number = 1; let r2: number = 1; let r3: number = 1; let r4: number = 1;


r1 = parseInt(prompt("Set a number for row = a") || "1", 10)
r2 = parseInt(prompt("Set a number for row = b") || "1", 10)
r3 = parseInt(prompt("Set a number for row = c") || "1", 10)
r4 = parseInt(prompt("Set a number for row = d") || "1", 10)

let a: number[] = [r1, r2, r3, r4];

console.log("r1, r2, r3, r4");
console.log(a);


while ((r1 + r2 + r3 + r4) != 0) {

    let choosenrow = prompt("What number u wanna change");

    if (choosenrow == "1") {

        let EsubtA: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        a[0] = a[0] - EsubtA;

    }
    else if (choosenrow == "2") {
        let EsubtB: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        a[1] = a[1] - EsubtB;
    }
    else if (choosenrow == "3") {
        let EsubtC: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        a[2] = a[2] - EsubtC;
    }
    else if (choosenrow == "4") {
        let EsubtD: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        a[3] = a[3] - EsubtD;
    }


    if ((r1 + r2 + r3 + r4) == 0) {

        console.log(activePlayer + "won the game");
        break
    }
    console.log("r1, r2, r3, r4");
    console.log(a);

    switch (activePlayer) {
        case playerstate:
            activePlayer = playerstate2;
            console.log(playerstate2 + "turn")
            break;

        case playerstate2:
            activePlayer = playerstate;
            console.log(playerstate + "turn");
            break;
    }

}



