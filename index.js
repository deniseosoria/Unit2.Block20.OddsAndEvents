// When the user clicks the "Add Number" button, the number they entered into the input field should be added to the number bank.
// The number bank is not changed if the user enters a non-numeric value.
// The number bank should display all the numbers the user has entered.
// When the "Sort 1" button is clicked, the first number in the number bank should be removed and placed into either the odd or even category.
// When the "Sort All" button is clicked, all the numbers in the number bank should be moved into either the odd or even category.
// The numbers are placed into the correct bucket based on whether they are odd or even.
//______________________________________________________________________

//Create an numbersBank array
const numberBankArray = [];

// Create a sortedNumbers object with arrays for odd and even number
const sortedNumbers = {
  odd: [],
  even: [],
};

// Function to render the number bank
function renderNumberBank() {
  const output = document.querySelector("#numberBank output");
  output.textContent = numberBankArray.join(", ");
}

// Sort function
function sort() {
  const sortOneButton = document.querySelector("#sortOne");
  const sortAllButton = document.querySelector("#sortAll");

  // Sort 1: Move the first number from numberBankArray
  sortOneButton.addEventListener("click", () => {
    if (numberBankArray.length > 0) {
      const num = Number(numberBankArray.shift());
      if (num % 2 === 0) {
        sortedNumbers.even.push(num);
      } else {
        sortedNumbers.odd.push(num);
      }
      render();
    }
  });

  // Sort All: Move all numbers from numberBankArray
  if (sortAllButton) {
    sortAllButton.addEventListener("click", () => {
      while (numberBankArray.length > 0) {
        const num = Number(numberBankArray.shift());
        if (num % 2 === 0) {
          sortedNumbers.even.push(num);
        } else {
          sortedNumbers.odd.push(num);
        }
      }
      render();
    });
  }
}

// Function to render odd numbers
function renderOdd() {
  const output = document.querySelector("#odds output");
  output.textContent = sortedNumbers.odd.join(", ");
}

// Function to render even numbers
function renderEven() {
  const output = document.querySelector("#evens output");
  output.textContent = sortedNumbers.even.join(", ");
}

// Main render function
function render() {
  renderNumberBank();
  sort();
  renderOdd();
  renderEven();
}

// When user clicks "Add Number" button, add numbers to numbersBank array
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("number");
  const num = input.value.trim();
  if (!isNaN(num) && num !== "") {
    numberBankArray.push(Number(num));
    input.value = ""; // Clear the input field
  }
  render();
});
