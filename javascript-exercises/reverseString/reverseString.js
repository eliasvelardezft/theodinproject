const reverseString = function(str) {
    let ar = str.split("");
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += ar[ar.length-1];
        ar.pop();
    }
    return result;
}

module.exports = reverseString
