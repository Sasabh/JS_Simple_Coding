// Swap two Number with and without using third no

function swapWithTemp() {
    let x = 9;
    let y = 7;
    console.log("Start: ", x, y);
    let z = x;
    x = y;
    y = z;
    console.log("End: ", x, y, "\n");
}

function swapWithoutTemp() {
    let x = 19;
    let y = 17;
    console.log("Start: ", x, y);
    x = x + y;
    y = x - y;
    x = x - y;
    console.log("End: ", x, y, "\n");
}

swapWithTemp();
swapWithoutTemp();
