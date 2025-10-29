const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Fruits:", fruits);

const lengthOfFruits = fruits.length;
console.log(lengthOfFruits);

const fruitsAtTwo = fruits[2];
console.log(fruitsAtTwo);

const lastOfFruits = fruits[fruits.length - 1];
console.log(lastOfFruits);

let vegetables = [];
for (let i = 1; i <= 3; i++) {
  let vegetable = prompt("Enter a vegetable");
  vegetables.push(vegetable);
}
console.log("Vegetables:", vegetables);
const lengthOfVegetables = vegetables.length;
console.log(lengthOfVegetables);
