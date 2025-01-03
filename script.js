const inputField = document.getElementById("inputField");
const displayResult = document.getElementById("display");

// Add an event listener for when the user inputs data
inputField.addEventListener("input", function() {
    // Get the value from the input field and ensure it's only digits (remove any non-digit characters)
    const cardNumber = inputField.value.replace(/\D/g, '');
    
    // Check if the length of the card number is exactly 16 digits
    if (cardNumber.length === 16) {
        // Convert the string of numbers into an array of digits
        const digits = cardNumber.split('').map(Number);

        // Process every second digit, doubling it, and sum digits if > 9
        const processedDigits = digits.map((digit, index) => {
            if ((16 - index) % 2 === 0) { // Every second digit from the right
                let doubled = digit * 2;
                if (doubled > 9) {
                    // If doubled value is greater than 9, add the digits of the number
                    return (doubled % 10) + Math.floor(doubled / 10);
                }
                return doubled;
            }
            return digit;
        });

        // Sum up all the values using reduce
        const totalSum = processedDigits.reduce((acc, currentValue) => acc + currentValue, 0);

        // Check if the sum ends in zero (valid credit card number)
        if (totalSum % 10 === 0) {
            displayResult.innerHTML = `<i class="fa-regular fa-circle-check"></i> <b class="text-[12px]"> Valid Card</b>`
            // console.log("Card number is valid");
            // alert("Card number is valid");
        } else {
            displayResult.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> <b class="text-[12px]"> Not Valid </b>`
            // console.log("Card number is not valid");
            // alert("Card number is not valid");
        }
    } else {
         displayResult.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> <b class="text-[12px]"> number must be 16 digits </b>`
        // console.log("Card number must be exactly 16 digits.");
        // alert("Card number must be exactly 16 digits.");
    }
});
