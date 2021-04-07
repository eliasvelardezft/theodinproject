const sumAll = function(a, b) {
    if ((a < 0 || b < 0) ||
         (typeof a !== "number" || typeof b !== "number")) {
        return "ERROR";
    };
    let sum = 0;
    let diff = (a > b) ? a - b : b - a;
    let counter = (a > b) ? b : a;
    for (let i = 0; i <= diff; i++) {
        sum += counter;
        counter++;
        console.log(`sum: ${sum}`);
        console.log(`item increased: ${a}`);
        console.log("---------------")
    }
    return sum;
}

module.exports = sumAll
