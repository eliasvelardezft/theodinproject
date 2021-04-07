let palindromes = function(str) {
    let lowerStr = str.toLowerCase();
    let reverseArr = [...lowerStr].reverse();
    let onlyChars = reverseArr.filter(char => (char >= 'a' && char <= 'z' && char !== " "));
    let joined = onlyChars.join('');
    console.log(joined);
    return joined === str;
}

module.exports = palindromes
