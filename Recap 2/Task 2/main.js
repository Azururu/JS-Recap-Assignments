let numbers = [];

for (let i = 0; i < 5; i++) {
  let promptedNum = prompt("Enter a number");
  numbers.push(promptedNum);
}
console.log("Numbers:", numbers);

const checkNum = prompt("Enter a number");
if (numbers.includes(checkNum)) {
  console.log(checkNum + " is found in numbers.");
} else {
  console.log(checkNum + " is not in numbers.");
}

numbers.pop();
console.log("Updated Numbers:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers);


