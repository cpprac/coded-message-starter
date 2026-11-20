function translateNumbers(message) {
    let result = "";
    for (let i=0; i < message.length; i++) {
        if (message[i] === '3') {
            result += 'w';
        } else if (message[i] === '7') {
            result += 'l';
        } else {
            result += message[i];
        }
    }
    return result;
};

function reverseMessage(message) {
    // split message into an array of words
    let word_array = message.split(" ");

    // reverse the order of elements in an array
    let reversed_word_arr = word_array.toReversed();

    // join elements back together in a single string
    return reversed_word_arr.join(" ");
};

function shiftCharacters(message) {
    let final_arr = [];

    // turn message into an array of words
    let message_arr = message.split(" ");

    for (const word of message_arr) {
        let new_word = "";

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (char >= 'a' && char <= 'z') {
                // shift lowercase letters 3 positions backward
                let new_char = String.fromCharCode(
                    ((char.charCodeAt(0) - 97 - 3 + 26) % 26) + 97
                );
                new_word += new_char;

            } else if (char >= 'A' && char <= 'Z') {
                // shift uppercase letters 3 positions backward
                let new_char = String.fromCharCode(
                    ((char.charCodeAt(0) - 65 - 3 + 26) % 26) + 65
                );
                new_word += new_char;

            } else {
                // preserve spaces, punctuation, and numbers
                new_word += char;
            }
        }

        final_arr.push(new_word);
    }

    return final_arr.join(" ");
}

// declare the things we need as variables
// call the event listener with a function
// in that function, call the translateNumbers function and return its output

const encodedInput = document.getElementById("encodedInput");
const decodeButton = document.getElementById("decodeButton");
const decodedOutput = document.getElementById("decodedOutput");

decodeButton.addEventListener("click", () => {
    const currMessage = encodedInput.value;
    const newInput = translateNumbers(currMessage);
    const reversedInput = reverseMessage(newInput);
    const finalInput = shiftCharacters(reversedInput);
    decodedOutput.textContent = finalInput;
});