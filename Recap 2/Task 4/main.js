function sortArray(numbers) {
  const newArray = [...numbers];
  return newArray.sort((a, b) => a - b);
}

const numbers = [5, 7, 3, 6, 10, 9, 2, 8];
const sortedArray = sortArray(numbers);

console.log("Original array: ", numbers);
console.log("Sorted array: ", sortedArray);
