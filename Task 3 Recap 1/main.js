const type = document.querySelector("#type")

const a = parseFloat(prompt("Side a length"))
const b = parseFloat(prompt("Side b length"))
const c = parseFloat(prompt("Side c length"))

let triangleType;

if (a === b && b === c) {
  triangleType = "equilateral";
}
else if (a === b || a === c || b === c) {
  triangleType = "isosceles"
}
else if (a !== b && b !== c) {
  triangleType = "scalene";
}

type.innerText = triangleType;