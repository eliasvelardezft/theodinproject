const repeatString = function(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str;
    };
    if (n < 0) {
        return "ERROR";
    }
    return result;
}

module.exports = repeatString
