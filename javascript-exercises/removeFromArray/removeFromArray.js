const removeFromArray = function(arr, ...extra) {
    console.log(`array: ${arr}`)
    console.log(`to remove: ${extra}`);
    extra.sort(function(a, b) {return a-b});
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < extra.length; j++) {
            if (arr[i] === extra[j]) {
                console.log(`removed ${arr[i]}`)
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

module.exports = removeFromArray
