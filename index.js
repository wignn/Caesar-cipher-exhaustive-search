function decryptCaesarCipher(text, shift) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[A-Z]/)) {
            let code = text.charCodeAt(i);
            let shiftedCode = code - shift;
            if (shiftedCode < 65) {
                shiftedCode += 26;
            }
            decryptedText += String.fromCharCode(shiftedCode);
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}

const encryptedMessage = "BSUOFODSBUVOGWZAWBMOY";
for (let shift = 1; shift < 26; shift++) {
    let decryptedMessage = decryptCaesarCipher(encryptedMessage, shift);
    console.log(`Shift ${shift}: ${decryptedMessage}`);
}
