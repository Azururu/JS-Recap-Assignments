const totalSum = document.querySelector("#totalSum");

const posInt = prompt("Enter positive integer:");
let sum = 0;
for (let i = 1; i <= posInt; i++) {
  sum += i;
}
totalSum.innerText = sum;