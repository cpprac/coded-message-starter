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


// declare the things we need as variables
// call the event listener with a function
// in that function, call the translateNumbers function and return its output

const encodedInput = document.getElementById("encodedInput");
const decodeButton = document.getElementById("decodeButton");
const decodedOutput = document.getElementById("decodedOutput");

decodeButton.addEventListener("click", () => {
    const currMessage = encodedInput.value;
    const newInput = translateNumbers(currMessage);
    decodedOutput.textContent = newInput;
});