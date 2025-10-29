
const newTable = document.querySelector("#multiplication-table");

const posInt = prompt("Enter positive integer");

for (let i = 1; i <= posInt; i++) {
  let row = newTable.insertRow();
  for (let j = 1; j <= posInt; j++) {
    let calculatedNum = i * j;
    let strNum = calculatedNum.toString();
    let cell = row.insertCell();
    cell.textContent = strNum;
  }
}