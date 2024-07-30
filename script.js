// Get the input box element where the result is displayed
let input = document.getElementById('inputBox');

// Get all button elements on the page
let buttons = document.querySelectorAll('button');

// Initialize an empty string to build the expression
let string = "";

// Convert the NodeList of buttons to an array for easy iteration
let arr = Array.from(buttons);

// Iterate over each button and add an event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the clicked button is the equals sign
        if (e.target.innerHTML == '=') {
            // Evaluate the expression in the string and update the input value
            string = eval(string);
            input.value = string;
        }
        // Check if the clicked button is 'AC' (All Clear)
        else if (e.target.innerHTML == 'AC') {
            // Clear the expression and input value
            string = "";
            input.value = string;
        }
        // Check if the clicked button is 'DEL' (Delete)
        else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the expression and update the input value
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // For all other buttons (numbers and operators)
        else {
            // Append the button's inner HTML to the expression string and update the input value
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

