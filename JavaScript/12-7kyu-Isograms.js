function isIsogram(str) {

    const lowerStr = str.toLowerCase();
    const letterSet = new Set();
    for (let letter of lowerStr) {
        if (letterSet.has(letter)) {
            return false;
        }
        letterSet.add(letter);
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
