function rot13(message) {
    return message.split('').map(char => {
        if (/[A-Za-z]/.test(char)) {
            const baseCharCode = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            return String.fromCharCode((char.charCodeAt(0) - baseCharCode + 13) % 26 + baseCharCode);
        }
        return char;
    }).join('');
}

// Contoh penggunaan:
console.log(rot13("test"));  // Output: grfg
console.log(rot13("Test"));  // Output: Grfg
