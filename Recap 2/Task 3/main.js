let numbers = [];

while (true) {
  let input = prompt("Enter a number (or press Enter to finish):")
  if (input === "") {
    break;
  } else {
    numbers.push(input);
  }
}

const evenNumbers = document.querySelector("#even-numbers");

let filteredArray = []

for (let number of numbers) {
  if (number % 2 === 0) {
    filteredArray.push(number);
  }
}

let isEven = false;

if (filteredArray.length > 0) {
  isEven = true;
}

if (isEven) {
  evenNumbers.innerText = "Even numbers: " + filteredArray.join(", ");
} else {
  evenNumbers.innerText = "Even numbers: none";
}


