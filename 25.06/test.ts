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

let a: number = parseInt(prompt("Enter a", "1") || "1", 10);
let b: number = parseInt(prompt("Enter b", "1") || "1", 10);
let c: number = parseInt(prompt("Enter c", "1") || "1", 10);
let d: number = parseInt(prompt("Enter d", "1") || "1", 10);


console.log("a b c d");
console.log(a, b, c, d);


while ((a != 0 || b != 0 || c != 0 || d != 0) == true) {
    
    let e = prompt("What number u wanna change");

    if (e == "a") {

        let EsubtA: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        a = a - EsubtA;

    }
    else if (e == "b") {
        let EsubtB: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        b = b - EsubtB;
    }
    else if (e == "c") {
        let EsubtC: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        c = c - EsubtC;
    }
    else if (e == "d") {
        let EsubtD: number = parseInt(prompt("how much u wanna subtract") || "1", 10);
        d = d - EsubtD;
    }

console.log("a b c d");
console.log(a, b, c, d);

    if (a == 0 && b == 0 && c == 0 && d == 0) {

       console.log(activePlayer + "won the game");
break
    }

    switch (activePlayer) {
        case playerstate:
            activePlayer = playerstate2;
            console.log(playerstate2 +"turn")
            break;

        case playerstate2:
            activePlayer = playerstate;
            console.log(playerstate + "turn");
            break;
    }

}



    