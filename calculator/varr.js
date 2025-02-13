// Function to append a value to the display
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to calculate and display the result
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Function to remove the last character (Backspace)
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Add keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
